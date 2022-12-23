import React from "react";
import styleHoldingATournament from './HoldingATournament.module.css'
import {AthletesType, biathlonType, CategoryType, SettingsType} from "../../App";
import {Header} from "../Header/Header";
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {TournamentsGrids} from "./TournamentsGrids/TournamentGridTo32/TournamentGridTo32";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {Navigate, Route, Routes} from "react-router-dom";

type LeaderboardType = {
    athletes: AthletesType[]
    tournament: string
    startTournamentDate: string
    endTournamentDate: string
    location: string
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
    settings: SettingsType
    GS: biathlonType[] | null
    setGS: (value: biathlonType[]) => void
}


export const HoldingATournament = (props: LeaderboardType) => {

    if (props.GS === null) {
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <Header tournament={props.tournament}
                    startTournamentDate={props.startTournamentDate}
                    endTournamentDate={props.endTournamentDate}
                    location={props.location}/>
            <div className={styleHoldingATournament.contain}>
                <ControlPanel athletes={props.athletes}
                              GS={props.GS}/>
                <Routes>
                    <Route path={`table/:id/*`} element={<TournamentsGrids settings={props.settings}
                                                                           GS={props.GS}
                                                                           setGS={props.setGS}
                                                                           athletes={props.athletes}/>}/>
                </Routes>
            </div>
        </>

    )
}