import React, {ChangeEvent, useRef, useState} from "react";
import styleRegistrationAthlete from "./RegistrationAthlete.module.css";
import styleRegistrationOfMembers from "../RegistrationOfMembers.module.css"
import {InputAnimationForRegistration} from "../../common/InputAnimationForRegistration/InputAnimationForRegistration";
import {SelectForRegAthl} from "../../common/SelectForRefAthl/SelectForRegAthl";
import {CategoryType, GenderType, RankType} from "../../../../App";
import {InputWeight} from "../../common/InputWeight/InputWeight";
import {SelectForModalGender} from "../../../../common/Select/SelectForModalGender";
import {MultiSelect} from "../../../../common/MultiSelect/MultiSelect";
import {Option} from "../../../../common/WeightsSelect/WeightsSelect";
import {MultiValue} from "react-select";


type RegistrationAthletePropsType = {
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType, categoryMember: MultiValue<{value: string, label: string}>) => void
    ranks: RankType[]
    gender: GenderType[]
    error: boolean
    setError: (value: boolean) => void
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
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

    const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

    const [availableCategories, setAvailableCategories] = useState<MultiValue<{ value: string, label: string }>>([])
    const [fullName, setFullName] = useState('')
    const [weight, setWeight] = useState('')
    const [rank, setRank] = useState<RankType>(props.ranks[0])
    const [team, setTeam] = useState('')
    const [genderAthlete, setGenderAthlete] = useState(findQty('муж') === 0 ? props.gender[1] : props.gender[0])

    const disableGender = findQty('муж') === 0 || findQty('жен') === 0


    const handleClick = () => {
        inputRef.current && inputRef.current.focus()
    }

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
        setAvailableCategories([])
    }

    const addNewAthlete = () => {
        const trimmedFullName = fullName.replace(/ +/g, ' ').trim()
        const trimmedTeam = team.replace(/ +/g, ' ').trim()
        if (trimmedFullName && Number(weight) > 10 && availableCategories.length >= 1) {
            props.addAthleteCallback(trimmedFullName, Number(weight), trimmedTeam === '' ? '----' : trimmedTeam, rank, genderAthlete, availableCategories)
            setFullName('')
            setAvailableCategories([])
            setWeight('')
            setRank(props.ranks[0])
            setTeam('')
            handleClick()
            props.setError(false)
        } else {
            props.setError(true)
        }
    }

    const sortArrayGender = (arr: CategoryType[], str: string) => {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (props.arrCategory[i].gender === str) {
                newArr.push(props.arrCategory[i])
            }
        }
        return newArr
    }


    const arrWeightMale = sortArrayGender(props.arrCategory, 'муж').map(w => props.sortCategory(w).map(v => v.value))
    const arrWeightFemale = sortArrayGender(props.arrCategory, 'жен').map(w => props.sortCategory(w).map(v => v.value))

    const newArrayCategoryMale = (arr: string[][]) => {
        let newArr = []
        let arrMale = sortArrayGender(props.arrCategory, 'муж')
        for (let i = 0; i < arrMale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j]) >= Number(weight)) {
                    newArr.push(arrMale[i].categoryAthlete + ` (${arrMale[i].age}): ${arr[i][j]}`)
                }
                if (arr[i][j].includes('+')) {
                    newArr.push(arrMale[i].categoryAthlete + ` (${arrMale[i].age}): ${arr[i][j]}`)
                }
            }
        }
        return newArr
    }

    const newArrayCategoryFemale = (arr: string[][]) => {
        let newArr = []
        let arrFemale = sortArrayGender(props.arrCategory, 'жен')
        for (let i = 0; i < arrFemale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j]) >= Number(weight)) {
                    newArr.push(arrFemale[i].categoryAthlete + ` (${arrFemale[i].age}): ${arr[i][j]}`)
                }
                if (arr[i][j].includes('+')) {
                    newArr.push(arrFemale[i].categoryAthlete + ` (${arrFemale[i].age}): ${arr[i][j]}`)
                }
            }
        }
        return newArr
    }

    const optionsMale = newArrayCategoryMale(arrWeightMale).map(options => ({value: options, label: options}))
    const optionsFemale = newArrayCategoryFemale(arrWeightFemale).map(options => ({value: options, label: options}))
    //const numberOfCategories = optionsMale.length + optionsFemale.length


    return (
        <div className={styleRegistrationOfMembers.registration}>
            <div className={styleRegistrationAthlete.centerContain}>
                <InputAnimationForRegistration type={"text"}
                                               obligatoryField={true}
                                               placeholder={"Участник"}
                                               autofocus={true}
                                               inputRef={inputRef}
                                               onChange={onChangeFullName}
                                               value={fullName}/>
                <InputWeight type={"text"}
                             obligatoryField={true}
                             placeholder={"Вес"}
                             onChange={onChangeWeight}
                             value={weight}/>
            </div>
            <MultiSelect setAvailableCategories={setAvailableCategories}
                         options={genderAthlete === 'муж' ? optionsMale : optionsFemale}
                         value={availableCategories}
                         disable={weight === ''}/>
            <div className={styleRegistrationAthlete.sectionTeam}>
                <InputAnimationForRegistration type={"text"}
                                               style={{width: '19.4rem'}}
                                               placeholder={"Команда"}
                                               onChange={onChangeTeam}
                                               value={team}/>
            </div>
            <div className={styleRegistrationAthlete.sectionWeightAndSelect}>
                <SelectForModalGender options={props.gender}
                                      value={genderAthlete}
                                      disabled={disableGender}
                                      onChangeOption={onChangeGender}
                                      placeholder={'Пол'}/>
                <SelectForRegAthl placeholder={"Квалификация"}
                                  style={{width: '135px'}}
                                  options={props.ranks}
                                  value={rank}
                                  onChangeOption={onChangeRank}/>
            </div>


            {props.error && <span className={styleRegistrationOfMembers.error}>Заполните обязательные поля ( * )</span>}
            <button className={styleRegistrationOfMembers.addMemberButton} onClick={addNewAthlete}>Добавить</button>
        </div>
    )
}