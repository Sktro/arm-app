import React, {ChangeEvent, useState} from "react";
import styleR from "../Registration.module.css";
import {InputAnimationForRegistration} from "../../../common/InputAnimation/InputAnimationForRegistration";
import {SelectAnimationForRegAthl} from "../../../common/SelectAnimation/SelectAnimationForRegAthl";
import {RankType} from "../../../App";


type RegistrationAthletePropsType = {
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType) => void
    ranks: RankType[]
}

export const RegistrationAthlete = (props: RegistrationAthletePropsType) => {

    const [fullName, setFullName] = useState('')
    const [weight, setWeight] = useState(Number(toString()))
    const [rank, setRank] = useState<RankType>(props.ranks[0])
    const [team, setTeam] = useState('')
    const [error, setError] = useState(false)

    const setFullNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
        setError(false)
    }
    const setWeightCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setWeight(e.currentTarget.valueAsNumber)
        setError(false)
    }
    const setRankCallback = (value: string) => {
        setRank(value as RankType)
    }
    const setTeamCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setTeam(e.currentTarget.value)
    }

    const addAthlete = () => {
        const trimmedFullName = fullName.trim()
        const trimmedTeam = team.trim()
        if (trimmedFullName && weight > 10) {
            props.addAthleteCallback(trimmedFullName, weight, trimmedTeam === '' ? '----' : trimmedTeam, rank)
            setFullName('')
            setWeight(Number(toString()))
            setRank(props.ranks[0])
            setTeam('')
        } else {
            setError(true)
        }
    }

    return (
        <div className={styleR.registration}>
            <span className={styleR.registrationDescription}>Новый участник: </span>
            <InputAnimationForRegistration type={"text"}
                                           obligatoryField={true}
                                           placeholder={"Участник"}
                                           autofocus={true}
                                           onChange={setFullNameCallback}
                                           value={fullName}/>
            <InputAnimationForRegistration type={"number"}
                                           obligatoryField={true}
                                           placeholder={"Вес"}
                                           onChange={setWeightCallback}
                                           value={weight}/>
            <InputAnimationForRegistration type={"text"}

                                           placeholder={"Команда"}
                                           onChange={setTeamCallback}
                                           value={team}/>
            <SelectAnimationForRegAthl placeholder={"Квалификация"}
                                       options={props.ranks}
                                       value={rank}
                                       onChangeOption={setRankCallback}/>
            {error && <span className={styleR.error}>ERROR</span>}
            <button className={styleR.addAthleteButton} onClick={addAthlete}>Добавить</button>
        </div>
    )
}