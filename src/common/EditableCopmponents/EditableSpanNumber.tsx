import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'

type EditableSpanNumberPropsType = {
    weightAthlete: number
    changeWeightAthlete: (weightAthlete: number) => void
}


export const EditableSpanNumber = (props: EditableSpanNumberPropsType) => {
    const [weight, setWeight] = useState<number>(props.weightAthlete)
    const [editModeSN, setEditModeSN] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setWeight(e.currentTarget.valueAsNumber)
    const onEditMode = () => setEditModeSN(true)
    const offEditMode = () => {
        if (weight > 1){
            setEditModeSN(false)
            props.changeWeightAthlete(props.weightAthlete)
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
                value={weight}
                autoFocus={true}
                onBlur={offEditMode}
                onChange={changeTitle}/>
            : <span onDoubleClick={onEditMode}>{weight.toFixed(2) + " кг"}</span>
    );
};