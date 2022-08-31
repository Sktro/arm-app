import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'
import 'tippy.js/dist/tippy.css';
import {ToolTip} from "../../components/Registration/common/Tooltip";

type EditableSpanTextPropsType = {
    value: string
    changeValue: (value: string) => void
    id: string
}

export const EditableSpanText = (props: EditableSpanTextPropsType) => {

        const [value, setValue] = useState<string>(props.value)
        const [editModeST, setEditModeST] = useState<boolean>(false)
        const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }
        const onEditMode = () => setEditModeST(true)
        const offEditMode = () => {
            if (value.length > 1) {
                setEditModeST(false)
                props.changeValue(value.replace(/ +/g, ' ').trim())
            } else {
                setEditModeST(true)
            }
        }

        const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                offEditMode();
            }
        }

        return (
            editModeST
                ? <input
                    className={style.editableSpanText}
                    onKeyPress={onKeyPressAddItem}
                    value={value}
                    autoFocus={true}
                    onBlur={offEditMode}
                    onChange={changeTitle}/>
                : <ToolTip id={props.id} value={value} onEditMode={onEditMode}/>
        );
    }
;