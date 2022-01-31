import React, {ChangeEvent, useState} from "react";
import styleM from "./Modal.module.css"
import {InputAnimationForModal} from "../../common/InputAnimation/InputAnimationForModal";
import WeightsSelect, {Option} from "../../common/WeightsSelect/WeightsSelect";

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
    date: string
    setMainSecretary: (value: string) => void
    mainReferee: string
    setMainReferee: (value: string) => void
    mainSecretary: string
    setDate: (separator: string)=> void

}

export const Modal = (props: ModalPropsType) => {
    const [error, setError] = useState(false)
    const [genderActive, setGenderActive] = useState(true)
    const [inputValueMale, setInputValueMale] = useState('')
    const [inputValueFemale, setInputValueFemale] = useState('')

    const onChangeMale = (inputValue: string, value: readonly Option[]) => {
        setInputValueMale(inputValue)
        props.setWeightMale(value)
    }
    const onChangeFemale = (inputValue: string, value: readonly Option[]) => {
        setInputValueFemale(inputValue)
        props.setWeightFemale(value)
    }

    const addTitleTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTournament(e.currentTarget.value)
        setError(false)
    }
    const addLocationTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setLocation(e.currentTarget.value)
        setError(false)
    }
    const addDateTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setDate(e.currentTarget.value)
    }
    const addMainReferee = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMainReferee(e.currentTarget.value)
    }
    const addMainSecretary = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMainSecretary(e.currentTarget.value)
    }


    const addTournament = () => {
        if (props.tournament !== ''
            && props.date !== ''
            && props.location !== ''
            && props.weightMale.length !== 0) {
            props.setModalActive(false)
            props.setWeightMale(props.weightMale)
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
                                        placeholder={"Дата проведения"}
                                        onChange={addDateTournament}
                                        value={props.date}/>
                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedReferee}
                                        value={props.mainReferee}
                                        onChange={addMainReferee}
                                        placeholder={"Главный судья"}/>
                <InputAnimationForModal type={'text'}
                                        handleFocusEvent={trimmedSecretary}
                                        value={props.mainSecretary}
                                        onChange={addMainSecretary}
                                        placeholder={"Главный секретарь"}/>
                <span className={styleM.settingTournament}>Настройка турнира:</span>
                <div className={styleM.genderContainer}>
                    <button className={activeGenderMale}
                            onClick={() => setGenderActive(true)}>Мужчины
                    </button>
                    <button className={activeGenderFemale}
                            onClick={() => setGenderActive(false)}>Женщины
                    </button>
                </div>
                <div className={genderActive ? styleM.weightsMalesOn : styleM.weightsMalesOff}>
                    <WeightsSelect value={props.weightMale} inputValue={inputValueMale} onChange={onChangeMale}/>
                </div>
                <div className={!genderActive ? styleM.weightsFemalesOn : styleM.weightsFemalesOff}>
                    <WeightsSelect value={props.weightFemale} inputValue={inputValueFemale} onChange={onChangeFemale}/>
                </div>
                {error && <span className={styleM.error}>заполните обязательные поля( * )</span>}
                <button className={styleM.creatableTournamentButton} onClick={addTournament}>Создать турнир</button>
            </div>
        </div>
    )
}