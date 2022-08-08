import React, {KeyboardEvent, useState} from 'react';
import {SuperSelect} from "./SuperSelect";
import styleES from "./EditableSpanSelect.module.css"
import ReactTooltip from "react-tooltip";

type EditableSpanSelectPropsType = {
    value: string
    changeOptions: (value: string) => void
    options: string[]
}


export const EditableSpanSelect = (props: EditableSpanSelectPropsType) => {
    const [value, setValue] = useState(props.value)
    const [editModeSS, setEditModeSS] = useState<boolean>(false)

    const changeTitle = (value: string) => setValue(value)
    const onEditMode = () => setEditModeSS(true)
    const offEditMode = () => {
        setEditModeSS(false)
        props.changeOptions(value)
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLSelectElement>) => {
        if (e.key === "Enter") {
            offEditMode();
        }
    }

    return (
        editModeSS
            ? <SuperSelect options={props.options}
                           onKeyPress={onKeyPressAddItem}
                           onChangeOption={changeTitle}
                           autoFocus={true}
                           value={value}
                           onBlur={offEditMode}
            />
            : <div className={styleES.editableDivSelectContain} onDoubleClick={onEditMode}>
                <div data-tip={value.length > 12 ? value : ''} className={styleES.editableDivSelectContent}>{value}</div>
                <ReactTooltip place="top" type="dark" effect="float" />
            </div>
    );
};