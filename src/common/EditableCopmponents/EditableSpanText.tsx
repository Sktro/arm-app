import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'

type EditableSpanTextPropsType = {
    fullNameAndTeam: string
    changeFullNameAndTeam: (fullNameAndTeam: string) => void
}


export const EditableSpanText = (props: EditableSpanTextPropsType) => {
    const [fullNameAndTeam, setTitleFullNameAndTeam] = useState<string>(props.fullNameAndTeam)
    const [editModeST, setEditModeST] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitleFullNameAndTeam(e.currentTarget.value)
    const onEditMode = () => setEditModeST(true)
    const offEditMode = () => {
        if (fullNameAndTeam.length > 1){
            setEditModeST(false)
            props.changeFullNameAndTeam(props.fullNameAndTeam)
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
                value={fullNameAndTeam}
                autoFocus={true}
                onBlur={offEditMode}
                onChange={changeTitle}/>
            : <div onDoubleClick={onEditMode} >{fullNameAndTeam}</div>
    );
};