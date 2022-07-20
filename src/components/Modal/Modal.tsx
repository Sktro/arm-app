import React, {ChangeEvent, useState} from "react";
import styleM from "./Modal.module.css"
import {InputAnimationForModal} from "../../common/InputAnimation/InputAnimationForModal";
import WeightsSelect, {Option} from "../../common/WeightsSelect/WeightsSelect";
import {AgeType, CategoryAthlete, GenderType} from "../../App";
import {SelectForModalGenderAndAge} from "../../common/SelectAnimation/SelectForModalGenderAndAge";
import {SelectForModalCategoryAthl} from "../../common/SelectAnimation/SelectForModalCategoryAthl";

type ModalPropsType = {
    setModalActive: (value: boolean) => void
    modalActive: boolean
    setTournament: (value: string) => void
    tournament: string
    setLocation: (value: string) => void
    location: string
    weightMale: readonly Option[]
    weightFemale: readonly Option[]
    setWeightMale: (value: readonly Option[]) => void
    setWeightFemale: (value: readonly Option[]) => void
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
    categoryAthlete: CategoryAthlete[]
}

export const Modal = (props: ModalPropsType) => {
    const [error, setError] = useState(false)
    const [genderActive, setGenderActive] = useState(true)
    const [inputValueMale, setInputValueMale] = useState('')
    const [inputValueFemale, setInputValueFemale] = useState('')
    const [addCategory, setAddCategory] = useState(true)

    const onChangeMale = (inputValue: string, value: readonly Option[]) => {
        setInputValueMale(inputValue)
        props.setWeightMale(value)
        setError(false)
    }
    const onChangeFemale = (inputValue: string, value: readonly Option[]) => {
        setInputValueFemale(inputValue)
        props.setWeightFemale(value)
        setError(false)
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

    const addMainReferee = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMainReferee(e.currentTarget.value)
    }
    const addMainSecretary = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMainSecretary(e.currentTarget.value)
    }

    const sumWeight = props.weightFemale.length > 0 || props.weightMale.length > 0


    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.location !== ''
            && sumWeight) {
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
    const trimmedReferee = () => {
        const textTrim = props.mainReferee.replace(/ +/g, ' ').trim()
        props.setMainReferee(textTrim)
    }
    const trimmedSecretary = () => {
        const textTrim = props.mainSecretary.replace(/ +/g, ' ').trim()
        props.setMainSecretary(textTrim)
    }

    const activeGenderMale = genderActive ? `${styleM.gender} ${styleM.genderMale}` : styleM.gender
    const activeGenderFemale = !genderActive ? `${styleM.gender} ${styleM.genderFemale}` : styleM.gender

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
                                        placeholder={"Дата начала турнира"}
                                        onChange={addDateStartTournament}
                                        value={props.startTournamentDate}/>
                <InputAnimationForModal type={'date'}
                                        minDate={props.startTournamentDate}
                                        placeholder={"Дата окончания турнира"}
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
                <span className={styleM.settingTournament}>Настройка турнира:</span>
                <div className={styleM.genderContainer}>
                    <button className={activeGenderMale}
                            onClick={() => setGenderActive(true)}>Мужчины
                    </button>
                    <button className={activeGenderFemale}
                            onClick={() => setGenderActive(false)}>Женщины
                    </button>
                </div>
                <div className={styleM.s}>*</div>
                <div className={genderActive ? styleM.weightsMalesOn : styleM.weightsMalesOff}>
                    <WeightsSelect value={props.weightMale} inputValue={inputValueMale} onChange={onChangeMale}/>
                </div>
                <div className={!genderActive ? styleM.weightsFemalesOn : styleM.weightsFemalesOff}>
                    <WeightsSelect value={props.weightFemale} inputValue={inputValueFemale} onChange={onChangeFemale}/>
                </div>

                <div
                    className={addCategory ? styleM.addCategoryClose : `${styleM.addCategoryClose} ${styleM.addCategoryOpen}`}
                    onClick={() => setAddCategory(!addCategory)}>

                    добавить категории

                </div>

                <div
                    className={addCategory ? styleM.settingAddCategory : `${styleM.settingAddCategoryClose} ${styleM.settingAddCategoryOpen}`}>

                    {!addCategory &&
                        <div className={styleM.selects}>
                            <div><SelectForModalGenderAndAge options={props.gender}
                                                             placeholder={"Пол"}/></div>
                            <div><SelectForModalGenderAndAge options={props.ageAthletes}
                                                             placeholder={"Возраст"}/></div>
                            <div className={styleM.selectCategoryAthl}>
                                <SelectForModalCategoryAthl options={props.categoryAthlete}
                                                            placeholder={"Категория спортсменов"}/></div>
                            <div className={styleM.addNewCategory}>Добавить</div>
                        </div>

                    }

                </div>

                {error && <span className={styleM.error}>заполните обязательные поля( * )</span>}
                <button className={styleM.creatableTournamentButton} onClick={addTournament}>Создать турнир</button>
            </div>
        </div>
    )
}