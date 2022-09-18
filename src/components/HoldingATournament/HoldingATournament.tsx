import React from "react";
import styleHoldingATournament from './HoldingATournament.module.css'
import {AthletesType, CategoryType, SettingsType} from "../../App";
import {Header} from "../Header/Header";
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {TournamentGridTo32} from "./TournamentGrids/TournamentGridTo32/TournamentGridTo32";
import {ControlPanel} from "./ControlPanel/ControlPanel";

type LeaderboardType = {
    athletes: AthletesType[]
    tournament: string
    startTournamentDate: string
    endTournamentDate: string
    location: string
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
    settings: SettingsType
}


export const HoldingATournament = (props: LeaderboardType) => {
    return (
        <>
            <Header tournament={props.tournament}
                    startTournamentDate={props.startTournamentDate}
                    endTournamentDate={props.endTournamentDate}
                    location={props.location}/>
            <div className={styleHoldingATournament.contain}>
                <ControlPanel athletes={props.athletes}
                              arrCategory={props.arrCategory}
                              sortCategory={props.sortCategory}/>
                <TournamentGridTo32 settings={props.settings}/>
            </div>
        </>

    )
}