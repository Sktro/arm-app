import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'

type EditableSpanNumberPropsType = {
    value: number
    changeValue: (weightAthlete: number) => void
}


export const EditableSpanNumber = (props: EditableSpanNumberPropsType) => {
    const [value, setValue] = useState<number>(props.value)
    const [editModeSN, setEditModeSN] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.valueAsNumber)
    const onEditMode = () => setEditModeSN(true)
    const offEditMode = () => {
        if (value > 1){
            setEditModeSN(false)
            props.changeValue(value)
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
                type={'number'}
                value={value}
                autoFocus={true}
                onBlur={offEditMode}
                onChange={changeTitle}/>
            : <span onDoubleClick={onEditMode}>{value.toFixed(2) + " кг"}</span>
    );
};