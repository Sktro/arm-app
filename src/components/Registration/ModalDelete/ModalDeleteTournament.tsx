import React from "react";
import styleMD from './ModalDeleteTournament.module.css'
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {AthletesType} from "../../../App";

type ModalDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
    modalDelete: boolean
    setModalActive: (value: boolean) => void
    setMainReferee: (value: string) => void
    setMainSecretary: (value: string) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setLocation: (value: string) => void
    setTournament: (value: string) => void
    setAthletes:(value: AthletesType[])=> void
}


export const ModalDeleteTournament = (props: ModalDeleteTournamentPropsType) => {

    const modalDeleteActive = props.modalDelete ? `${styleMD.modalDeleteContain} ${styleMD.active}` : styleMD.modalDeleteContain

    const deleteTournament = () => {
        props.setAthletes([])
        props.setTournament('')
        props.setLocation('')
        props.setMainReferee('')
        props.setMainSecretary('')
        props.setWeightNewCategory([])
        props.setModalActive(true)
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