import React, {KeyboardEvent, useState} from 'react';
import {SuperSelect} from "./SuperSelect";
import {RankType} from "../../App";

type EditableSpanSelectPropsType = {
    rankAthlete: RankType
    changeRankAthlete: (rankAthlete: RankType) => void
    ranks: RankType[]
}


export const EditableSpanSelect = (props: EditableSpanSelectPropsType) => {
    const [rankAthlete, setRankAthlete] = useState<RankType>(props.rankAthlete)
    const [editModeSS, setEditModeSS] = useState<boolean>(false)

    const changeTitle = (value: string) => setRankAthlete(value as RankType)
    const onEditMode = () => setEditModeSS(true)
    const offEditMode = () => {
        setEditModeSS(false)
            props.changeRankAthlete(props.rankAthlete)
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLSelectElement>) => {
        if (e.key === "Enter") {
            offEditMode();
        }
    }

    return (
        editModeSS
            ? <SuperSelect options={props.ranks}
                           onKeyPress={onKeyPressAddItem}
                           onChangeOption={changeTitle}
                           autoFocus={true}
                           value={rankAthlete}
                           onBlur={offEditMode}
            />
            : <span onDoubleClick={onEditMode} >{rankAthlete}</span>
    );
};