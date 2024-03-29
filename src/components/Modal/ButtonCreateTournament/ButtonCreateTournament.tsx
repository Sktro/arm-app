import React from "react";
import styleButtonCreateTournament from "./ButtonCreateTournament.module.css";
import {CategoryType, SettingsType} from "../../../App";

type ButtonCreateTournamentType = {
    settings: SettingsType
    tournament: string
    startTournamentDate: string
    arrCategory: CategoryType[]
    location: string
    setCreateNewTournament: (value: boolean) => void
    setActiveCategory: (value: { value: string, label: string, gender: string }) => void
    setError: (value: boolean) => void
    setErrorCategory: (value: boolean) => void
}

export const ButtonCreateTournament = (props: ButtonCreateTournamentType) => {
    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.arrCategory.length > 0
            && props.location !== ''
            && (props.settings.doubleEvent || props.settings.wrestlingSeparately)
        ) {
            props.setCreateNewTournament(true)
            props.setActiveCategory({value: '', label: '', gender: ''})
        } else {
            props.setError(true)
            props.setErrorCategory(false)
        }
    }
    //change!
    const newClassButton = props.tournament !== '' && props.location !== '' && props.arrCategory.length > 0 && (props.settings.doubleEvent || props.settings.wrestlingSeparately)
        ? `${styleButtonCreateTournament.creatableTournamentButton} ${styleButtonCreateTournament.creatableTournamentButtonActive}`
        : styleButtonCreateTournament.creatableTournamentButton

    return (
        <button className={newClassButton} onClick={addTournament}>Создать турнир</button>
    )
}