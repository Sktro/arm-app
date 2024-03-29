import React from "react";
import styleMD from './ModalDeleteTournament.module.css'
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {AthletesType, biathlonType, CategoryType, CreatedCategoryType, JudgeType, SettingsType} from "../../../App";
import {useNavigate} from "react-router-dom";

type ModalDeleteTournamentPropsType = {
    setArrCategory:(value: CategoryType[]) => void
    setModalDelete: (value: boolean) => void
    modalDelete: boolean
    setWeightNewCategory: (value: readonly Option[]) => void
    setLocation: (value: string) => void
    setTournament: (value: string) => void
    setAthletes: (value: AthletesType[])=> void
    SetSettings: (value: SettingsType) => void
    setJudge: (value: JudgeType[]) => void
    createdCategories: CreatedCategoryType[]
    setGS: (value: biathlonType[] | null) => void
    setCopyCategory: (value: CreatedCategoryType[]) => void
    setActiveCategory: (value: {value: string, label: string, gender: string} | null) => void
    setCategoryVisibility: (value: boolean) => void
}


export const ModalDeleteTournament = (props: ModalDeleteTournamentPropsType) => {

    const navigate = useNavigate()
    const modalDeleteActive = props.modalDelete ? `${styleMD.modalDeleteContain} ${styleMD.active}` : styleMD.modalDeleteContain

    const deleteTournament = () => {
        props.SetSettings({tableNumb: '1', place5_6: false, semifinalAndFinal:false, semifinal: false, final: false, leftHand: false, rightHand: false, doubleEvent: false, wrestlingSeparately: false})
        props.setArrCategory([])
        props.createdCategories.length = 0
        props.setJudge([])
        props.setAthletes([])
        props.setTournament('')
        props.setLocation('')
        props.setWeightNewCategory([])
        props.setGS(null)
        props.setCopyCategory([])
        props.setActiveCategory(null)
        props.setCategoryVisibility(false)
        localStorage.clear()
        navigate('/', {replace: true})
    }

    return (
        <div className={modalDeleteActive}>
            <div className={styleMD.modalDeleteContent}>
                <span className={styleMD.text1}>Вы уверены, что хотите удалить текущий турнир?</span>
                <span className={styleMD.text2}>все введенные данные будут потеряны.</span>
                <button className={styleMD.modalCancelButton}
                        onClick={() => props.setModalDelete(false)}>ОТМЕНА
                </button>
                <button className={styleMD.modalDeleteButton}
                        onClick={deleteTournament}>УДАЛИТЬ
                </button>
            </div>
        </div>
    )
}