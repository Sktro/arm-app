import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'
import ReactTooltip from "react-tooltip";

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
        const newClassContain = props.id === 'fullName' ? style.fullNameContain : props.id === 'team'
            ? style.teamContain : props.id === 'region' ? style.regionContain : ''
        const newClassContent = props.id === 'fullName' ? style.fullNameContent : props.id === 'team'
            ? style.teamContent : props.id === 'region' ? style.regionContent : ''
        const titleFullName = props.id === 'fullName' && value.length > 20 ? props.value : ''
        const titleTeam = props.id === 'team' && value.length > 12 ? value : ''
        return (
            editModeST
                ? <input
                    className={style.editableSpanText}
                    onKeyPress={onKeyPressAddItem}
                    value={value}
                    autoFocus={true}
                    onBlur={offEditMode}
                    onChange={changeTitle}/>
                : <div className={newClassContain} onDoubleClick={onEditMode}>
                    <div data-tip={titleFullName || titleTeam} data-event-off='dblclick' className={newClassContent}>{value}</div>
                    <ReactTooltip place="top" type="dark" effect="float" />
                </div>

        );
    }
;