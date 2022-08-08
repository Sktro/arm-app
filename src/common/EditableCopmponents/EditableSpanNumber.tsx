import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'

type EditableSpanNumberPropsType = {
    value: number
    changeValue: (weightAthlete: number) => void
}


export const EditableSpanNumber = (props: EditableSpanNumberPropsType) => {
    const [value, setValue] = useState<number | string>(props.value)
    const [editModeSN, setEditModeSN] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 250
            || Number(e.currentTarget.value) === undefined)
        setValue(e.currentTarget.value)
    }
    const onEditMode = () => setEditModeSN(true)
    const offEditMode = () => {
        if (value > 1) {
            setEditModeSN(false)
            props.changeValue(Number(value))
        } else {
            setEditModeSN(true)
        }
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            offEditMode();
        }
    }

    return (
        editModeSN
            ? <input
                className={style.editableSpanNumber}
                onKeyPress={onKeyPressAddItem}
                type={'text'}
                value={value}
                autoFocus={true}
                onBlur={offEditMode}
                onChange={changeTitle}/>
            : <span onDoubleClick={onEditMode}>{Number(value).toFixed(2) + " кг"}</span>
    );
};