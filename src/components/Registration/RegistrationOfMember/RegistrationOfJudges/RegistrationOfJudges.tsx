import React, {ChangeEvent, useRef, useState} from "react";
import {InputAnimationForRegistration} from "../../common/InputAnimationForRegistration/InputAnimationForRegistration";
import {SelectForRegAthl} from "../../common/SelectForRefAthl/SelectForRegAthl";
import {CategoryJudgeType, GenderType, StatusJudgeType} from "../../../../App";
import styleRegistrationOfJudges from "./RegistrationOfJudges.module.css";
import styleRegistrationOfMembers from "../RegistrationOfMembers.module.css"
import {SelectForModalGender} from "../../../../common/Select/SelectForModalGender";
import {SelectForCategoryJudge} from "../../common/SelectForCategoryJudge/SelectForCategoryJudge";

type RegistrationOfJudgesType = {
    categoryJudge: CategoryJudgeType[]
    addJudges: (fullName: string, gender: GenderType, status: StatusJudgeType, category: CategoryJudgeType, region: string) => void
    gender: GenderType[]
    setError: (value: boolean) => void
    error: boolean
    statusJudge: StatusJudgeType[]
}


export const RegistrationOfJudges = (props: RegistrationOfJudgesType) => {
    const [fullNameJudges, setFullNameJudges] = useState('')
    const [region, setRegion] = useState('')
    const [judgesCategory, setJudgesCategory] = useState(props.categoryJudge[0])
    const [gender, setGender] = useState(props.gender[0])
    const [status, setStatus] = useState(props.statusJudge[4])

    const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

    const handleClick = () => {
        inputRef.current && inputRef.current.focus()
    }

    const onChangeFullNameJudges = (e: ChangeEvent<HTMLInputElement>) => {
        setFullNameJudges(e.currentTarget.value)
        props.setError(false)
    }

    const onChangeRegion = (e: ChangeEvent<HTMLInputElement>) => {
        setRegion(e.currentTarget.value)
        props.setError(false)
    }

    const onChangeCategory = (value: string) => {
        setJudgesCategory(value as CategoryJudgeType)
    }

    const OnChangeGender = (value: string) => {
        setGender(value as GenderType)
    }

    const onChangeStatusJudge = (value: string) => {
        setStatus(value as StatusJudgeType)
    }


    const addNewJudge = () => {
        if (fullNameJudges !== '' && region !== '') {
            props.addJudges(fullNameJudges, gender, status, judgesCategory, region)
            setFullNameJudges('')
            setRegion('')
            setJudgesCategory(props.categoryJudge[0])
            setGender(props.gender[0])
            setStatus(props.statusJudge[4])
            handleClick()
        } else {
            props.setError(true)
        }
    }


    return (
        <div className={styleRegistrationOfMembers.registration}>
            <div className={styleRegistrationOfJudges.judgeAndRegionContain}>
                <InputAnimationForRegistration type={"text"}
                                               obligatoryField={true}
                                               placeholder={"Судья"}
                                               autofocus={true}
                                               onChange={onChangeFullNameJudges}
                                               inputRef={inputRef}
                                               value={fullNameJudges}/>
                <InputAnimationForRegistration type={"text"}
                                               placeholder={"Регион"}
                                               obligatoryField={true}
                                               onChange={onChangeRegion}
                                               value={region}/>
            </div>
            <div className={styleRegistrationOfJudges.regionAndCategoryContain}>
                <SelectForModalGender options={props.gender}
                                      value={gender}
                                      onChangeOption={OnChangeGender}
                                      placeholder={'Пол'}/>
                <SelectForRegAthl placeholder={"Категория"}
                                  options={props.categoryJudge}
                                  value={judgesCategory}
                                  onChangeOption={onChangeCategory}/>
            </div>
            <div className={styleRegistrationOfJudges.regionContain}>
                <SelectForCategoryJudge placeholder={"Должность"}
                                        options={props.statusJudge}
                                        value={status}
                                        onChangeOption={onChangeStatusJudge}/>
            </div>
            {props.error && <span className={styleRegistrationOfMembers.error}>Заполните обязательные поля ( * )</span>}
            <button onClick={addNewJudge} className={styleRegistrationOfMembers.addMemberButton}>Добавить</button>
        </div>
    )
}