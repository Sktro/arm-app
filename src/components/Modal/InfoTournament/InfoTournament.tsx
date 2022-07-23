import React, {ChangeEvent} from "react";
import styleM from "../Modal.module.css";
import {InputAnimationForModal} from "../../../common/InputAnimation/InputAnimationForModal";

type InfoTournamentType = {
    setTournament: (value: string) => void
    tournament: string
    setError: (value: boolean) => void
    location: string
    setLocation: (value: string) => void
    setStartTournamentDate: (separator: string) => void
    startTournamentDate: string
    endTournamentDate: string
    setEndTournamentDate: (separator: string) => void
}

export const InfoTournament = (props: InfoTournamentType) => {

    const trimmedTournament = () => {
        const textTrim = props.tournament.replace(/ +/g, ' ').trim()
        props.setTournament(textTrim)
    }

    const addTitleTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTournament(e.currentTarget.value)
        props.setError(false)
    }

    const trimmedLocation = () => {
        const textTrim = props.location.replace(/ +/g, ' ').trim()
        props.setLocation(textTrim)
    }

    const addLocationTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setLocation(e.currentTarget.value)
        props.setError(false)
    }

    const addDateStartTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartTournamentDate(e.currentTarget.value)
    }
    const addDateEndTournament = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEndTournamentDate(e.currentTarget.value)
    }

    return (
        <div>
            <span className={styleM.infoText}>Информация о турнире:</span>
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
        </div>
    )
}