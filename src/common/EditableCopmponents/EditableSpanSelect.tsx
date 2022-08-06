import React, {KeyboardEvent, useState} from 'react';
import {SuperSelect} from "./SuperSelect";

type EditableSpanSelectPropsType = {
    value: string
    changeOptions: (rankAthlete: string) => void
    options: string[]
}


export const EditableSpanSelect = (props: EditableSpanSelectPropsType) => {
    const [rankAthlete, setRankAthlete] = useState(props.value)
    const [editModeSS, setEditModeSS] = useState<boolean>(false)

    const changeTitle = (value: string) => setRankAthlete(value)
    const onEditMode = () => setEditModeSS(true)
    const offEditMode = () => {
        setEditModeSS(false)
            props.changeOptions(rankAthlete)
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
                           value={rankAthlete}
                           onBlur={offEditMode}
            />
            : <span onDoubleClick={onEditMode} >{rankAthlete}</span>
    );
};