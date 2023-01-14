import React from "react";
import styleHoldingATournament from './HoldingATournament.module.css'
import {AthletesType, biathlonType, CategoryType, CreatedCategoryType, JudgeType, SettingsType} from "../../App";
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
    setGS: (value: biathlonType[] | null) => void
    setSettings: (value: SettingsType) => void
    setArrCategory: (value: CategoryType[]) => void
    createdCategories: CreatedCategoryType[]
    setJudge:(value: JudgeType[]) => void
    setAthletes: (value: AthletesType[]) => void
    setTournament: (value: string) => void
    setLocation: (value: string) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setCopyCategory: (value: CreatedCategoryType[]) => void
    setActiveCategory: (value: {value: string, label: string, gender: string} | null) => void
    setCategoryVisibility: (value: boolean) => void
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
                              setSettings={props.setSettings}
                              setArrCategory={props.setArrCategory}
                              createdCategories={props.createdCategories}
                              setJudge={props.setJudge}
                              setAthletes={props.setAthletes}
                              setTournament={props.setTournament}
                              setLocation={props.setLocation}
                              setWeightNewCategory={props.setWeightNewCategory}
                              setCopyCategory={props.setCopyCategory}
                              setActiveCategory={props.setActiveCategory}
                              setCategoryVisibility={props.setCategoryVisibility}
                              setGS={props.setGS}
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