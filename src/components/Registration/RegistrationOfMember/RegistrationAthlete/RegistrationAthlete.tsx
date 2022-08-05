import React, {ChangeEvent, useState} from "react";
import styleR from "../../Registration.module.css";
import {InputAnimationForRegistration} from "../../common/InputAnimationForRegistration";
import {SelectForRegAthl} from "../../common/SelectForRegAthl";
import {CategoryType, GenderType, RankType} from "../../../../App";
import {InputWeight} from "../../common/InputWeight";
import {SelectForModalGender} from "../../../../common/Select/SelectForModalGender";


type RegistrationAthletePropsType = {
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType) => void
    ranks: RankType[]
    gender: GenderType[]
    error: boolean
    setError: (value: boolean) => void
    arrCategory: CategoryType[]
}

export const RegistrationAthlete = (props: RegistrationAthletePropsType) => {



    const findQty = (str: string) => {
        let count = 0
        for (let i = 0; i < props.arrCategory.length; i++) {
            if (props.arrCategory[i].gender === str) {
                count++
            }
        }
        return count
    }

    const [fullName, setFullName] = useState('')
    const [weight, setWeight] = useState('')
    const [rank, setRank] = useState<RankType>(props.ranks[0])
    const [team, setTeam] = useState('')
    const [genderAthlete, setGenderAthlete] = useState(findQty('муж') === 0 ? props.gender[1] : props.gender[0])

    const disableGender = findQty('муж') === 0 || findQty('жен') === 0

    const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value)
        props.setError(false)
    }
    const onChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 250
            || Number(e.currentTarget.value) === undefined)
            setWeight(e.currentTarget.value.replace(/\s/g, ''))
        props.setError(false)
    }
    const onChangeRank = (value: string) => {
        setRank(value as RankType)
    }
    const onChangeTeam = (e: ChangeEvent<HTMLInputElement>) => {
        setTeam(e.currentTarget.value)
    }

    const onChangeGender = (value: string) => {
        setGenderAthlete(value as GenderType)
    }

    const addNewAthlete = () => {
        const trimmedFullName = fullName.trim()
        const trimmedTeam = team.trim()
        if (trimmedFullName && Number(weight) > 10) {
            props.addAthleteCallback(trimmedFullName, Number(weight), trimmedTeam === '' ? '----' : trimmedTeam, rank, genderAthlete)
            setFullName('')
            setWeight('')
            setRank(props.ranks[0])
            setTeam('')
        } else {
            props.setError(true)
        }
    }

    return (
        <div className={styleR.registration}>
            <InputAnimationForRegistration type={"text"}
                                           obligatoryField={true}
                                           placeholder={"Участник"}
                                           autofocus={true}
                                           onChange={onChangeFullName}
                                           value={fullName}/>
            <div className={styleR.sectionWeightAndSelect}>
                <InputWeight type={"text"}
                             obligatoryField={true}
                             placeholder={"Вес"}
                             onChange={onChangeWeight}
                             value={weight}/>
                <SelectForRegAthl placeholder={"Квалификация"}
                                  options={props.ranks}
                                  value={rank}
                                  onChangeOption={onChangeRank}/>
            </div>
            <SelectForModalGender options={props.gender}
                                  value={genderAthlete}
                                  disabled={disableGender}
                                  onChangeOption={onChangeGender}
                                  placeholder={'Пол'}/>
            <InputAnimationForRegistration type={"text"}
                                           placeholder={"Команда"}
                                           onChange={onChangeTeam}
                                           value={team}/>
            {props.error && <span className={styleR.error}>Заполните обязательные поля ( * )</span>}
            <button className={styleR.addAthleteButton} onClick={addNewAthlete}>Добавить</button>
        </div>
    )
}