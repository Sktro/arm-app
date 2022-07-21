import React, {ChangeEvent, useState} from "react";
import styleM from "./Modal.module.css"
import {InputAnimationForModal} from "../../common/InputAnimation/InputAnimationForModal";
import WeightsSelect, {Option} from "../../common/WeightsSelect/WeightsSelect";
import {AgeType, CategoryAthleteType, CategoryType, GenderType} from "../../App";
import {SelectForModalAge} from "../../common/Select/SelectForModalAge";
import {SelectForModalCategoryAthl} from "../../common/Select/SelectForModalCategoryAthl";
import {SelectForModalGender} from "../../common/Select/SelectForModalGender";
import {ListOfCategories} from "./ListOfCategories/ListOfCategories";

type ModalPropsType = {
    arrCategory: CategoryType[]
    addNewCategoryAthletes: (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => void
    setModalActive: (value: boolean) => void
    modalActive: boolean
    setTournament: (value: string) => void
    tournament: string
    setLocation: (value: string) => void
    location: string
    weightNewCategory: readonly Option[]
    setWeightNewCategory: (value: readonly Option[]) => void
    startTournamentDate: string
    endTournamentDate: string
    setMainSecretary: (value: string) => void
    mainReferee: string
    setMainReferee: (value: string) => void
    mainSecretary: string
    setStartTournamentDate: (separator: string) => void
    setEndTournamentDate: (separator: string) => void
    gender: GenderType[]
    ageAthletes: AgeType[]
    categoryAthlete: CategoryAthleteType[]
}

export const Modal = (props: ModalPropsType) => {
    const [error, setError] = useState(false)
    const [inputValueNewCategory, setInputValueNewCategory] = useState('')

    const [gender, setGender] = useState<GenderType>(props.gender[0])
    const [age, setAge] = useState<AgeType>(props.ageAthletes[0])
    const [categoryAthletes, setCategoryAthletes] = useState<CategoryAthleteType>(props.categoryAthlete[0])

    const onChangeNewCategory = (inputValue: string, value: readonly Option[]) => {
        setInputValueNewCategory(inputValue)
        props.setWeightNewCategory(value)
        setError(false)
    }

    const onChangeGender = (value: string) => {
        setGender(value as GenderType)
    }
    const onChangeAge = (value: string) => {
        setAge(value as AgeType)
    }
    const onChangeCategoryAthletes = (value: string) => {
        setCategoryAthletes(value as CategoryAthleteType)
    }

    const addTitleTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTournament(e.currentTarget.value)
        setError(false)
    }
    const addLocationTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setLocation(e.currentTarget.value)
        setError(false)
    }
    const addDateStartTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartTournamentDate(e.currentTarget.value)
    }
    const addDateEndTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEndTournamentDate(e.currentTarget.value)
    }

    /*    const addMainReferee = (e: ChangeEvent<HTMLInputElement>) => {
            props.setMainReferee(e.currentTarget.value)
        }
        const addMainSecretary = (e: ChangeEvent<HTMLInputElement>) => {
            props.setMainSecretary(e.currentTarget.value)
        }*/

    const addCategories = () => {
        if(props.weightNewCategory.length > 0) {
            props.addNewCategoryAthletes(gender, age, categoryAthletes, props.weightNewCategory)
            setGender(props.gender[0])
            setAge(props.ageAthletes[0])
            setCategoryAthletes(props.categoryAthlete[0])
            props.setWeightNewCategory([])
        } else {
            setError(true)
        }
    }
    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.arrCategory.length > 0
            && props.location !== '') {
            props.setModalActive(false)
        } else {
            setError(true)
        }
    }

    const trimmedTournament = () => {
        const textTrim = props.tournament.replace(/ +/g, ' ').trim()
        props.setTournament(textTrim)
    }
    const trimmedLocation = () => {
        const textTrim = props.location.replace(/ +/g, ' ').trim()
        props.setLocation(textTrim)
    }
    /*    const trimmedReferee = () => {
            const textTrim = props.mainReferee.replace(/ +/g, ' ').trim()
            props.setMainReferee(textTrim)
        }
        const trimmedSecretary = () => {
            const textTrim = props.mainSecretary.replace(/ +/g, ' ').trim()
            props.setMainSecretary(textTrim)
        }*/



    return (
        <div className={props.modalActive ?
            `${styleM.modal} ${styleM.active}` : `${styleM.modal}`}>
            <div className={styleM.modalContent}>
                <span className={styleM.settingTournament}>Информация о турнире:</span>
                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedTournament}
                                        placeholder={"Название"}
                                        onChange={addTitleTournament}
                                        obligatoryField={true}
                                        value={props.tournament}/>
                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedLocation}
                                        value={props.location}
                                        obligatoryField={true}
                                        placeholder={"Место проведения"}
                                        onChange={addLocationTournament}/>
                <InputAnimationForModal type={'date'}
                                        placeholder={"Дата начала"}
                                        onChange={addDateStartTournament}
                                        value={props.startTournamentDate}/>
                <InputAnimationForModal type={'date'}
                                        minDate={props.startTournamentDate}
                                        placeholder={"Дата окончания"}
                                        onChange={addDateEndTournament}
                                        value={props.endTournamentDate}/>
                {/*                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedReferee}
                                        value={props.mainReferee}
                                        onChange={addMainReferee}
                                        placeholder={"Главный судья"}/>
                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedSecretary}
                                        value={props.mainSecretary}
                                        onChange={addMainSecretary}
                                        placeholder={"Главный секретарь"}/>*/}
                <span className={styleM.settingTournament}>Категории:</span>

                {/*<div className={styleM.s}>*</div>*/}

                <div className={styleM.selects}>
                    <div><SelectForModalGender options={props.gender}
                                               onChangeOption={onChangeGender}
                                               value={gender}
                                               placeholder={"Пол"}/></div>
                    <div><SelectForModalAge options={props.ageAthletes}
                                            onChangeOption={onChangeAge}
                                            value={age}
                                            placeholder={"Возраст"}/></div>
                    <div>
                        <SelectForModalCategoryAthl options={props.categoryAthlete}
                                                    onChangeOption={onChangeCategoryAthletes}
                                                    value={categoryAthletes}
                                                    placeholder={"Категория спортсменов"}/></div>
                    <div><WeightsSelect inputValue={inputValueNewCategory}
                                        value={props.weightNewCategory}
                                        onChange={onChangeNewCategory}/></div>
                </div>

                <div className={styleM.addCategoryClose}
                     onClick={addCategories}>
                    добавить категории
                </div>
                {props.arrCategory.length > 0 && <ListOfCategories listOfCategories={props.arrCategory}/>}

                {error && <span className={styleM.error}>заполните обязательные поля( * )</span>}

                <button className={styleM.creatableTournamentButton} onClick={addTournament}>Создать турнир</button>
            </div>
        </div>
    )
}