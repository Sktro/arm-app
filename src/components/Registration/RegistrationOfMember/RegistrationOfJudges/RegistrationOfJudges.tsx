import React, {ChangeEvent, useState} from "react";
import {InputAnimationForRegistration} from "../../common/InputAnimationForRegistration";
import {SelectForRegAthl} from "../../common/SelectForRegAthl";
import {CategoryJudgeType, GenderType} from "../../../../App";
import styleR from "../../Registration.module.css";
import {SelectForModalGender} from "../../../../common/Select/SelectForModalGender";
import styleRJ from "./RegistrationOfJudges.module.css"

type RegistrationOfJudgesType = {
    categoryJudge: CategoryJudgeType[]
    addJudges: (fullName: string, gender: GenderType, category: CategoryJudgeType, region: string) => void
    gender: GenderType[]
    setError: (value: boolean) => void
    error: boolean
}


export const RegistrationOfJudges = (props: RegistrationOfJudgesType) => {
    const [fullNameJudges, setFullNameJudges] = useState('')
    const [region, setRegion] = useState('')
    const [judgesCategory, setJudgesCategory] = useState(props.categoryJudge[0])
    const [gender, setGender] = useState(props.gender[0])

    const onChangeFullNameJudges = (e: ChangeEvent<HTMLInputElement>) => {
        setFullNameJudges(e.currentTarget.value)
    }

    const onChangeRegion = (e: ChangeEvent<HTMLInputElement>) => {
        setRegion(e.currentTarget.value)
    }

    const onChangeCategory = (value: string) => {
        setJudgesCategory(value as CategoryJudgeType)
    }

    const OnChangeGender = (value: string) => {
        setGender(value as GenderType)
    }


    const addNewJudge = () => {
        if (fullNameJudges !== '' && region !== '') {
            props.addJudges(fullNameJudges, gender, judgesCategory, region)
            setFullNameJudges('')
            setRegion('')
            setJudgesCategory(props.categoryJudge[0])
            setGender(props.gender[0])
        } else {
            props.setError(true)
        }
    }


    return (
        <div className={styleR.registration}>
            <InputAnimationForRegistration type={"text"}
                                           obligatoryField={true}
                                           placeholder={"Судья"}
                                           autofocus={true}
                                           onChange={onChangeFullNameJudges}
                                           value={fullNameJudges}/>
            <InputAnimationForRegistration type={"text"}
                                           placeholder={"Регион"}
                                           obligatoryField={true}
                                           onChange={onChangeRegion}
                                           value={region}/>
            <div className={styleRJ.containCategoryAndGender}>
                <SelectForRegAthl placeholder={"Категория"}
                                  options={props.categoryJudge}
                                  value={judgesCategory}
                                  onChangeOption={onChangeCategory}/>
                <SelectForModalGender options={props.gender}
                                      value={gender}
                                      onChangeOption={OnChangeGender}
                                      placeholder={'Пол'}/>
            </div>
            {props.error && <span className={styleR.error}>Заполните обязательные поля ( * )</span>}
            <button onClick={addNewJudge} className={styleR.addAthleteButton}>Добавить</button>
        </div>
    )
}