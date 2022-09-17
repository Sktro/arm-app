import React, {useState} from "react";
import styleRegistration from './Registration.module.css'
import {
    AthletesType,
    CategoryJudgeType,
    CategoryType, FilterType,
    GenderType, JudgeType,
    RankType,
    SettingsType,
    StatusJudgeType
} from "../../App";
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {ListMembers} from "./ListMembers/ListMembers";
import {CategoriesList} from "./CategoriesList/CategoriesList";
import {ModalDeleteTournament} from "./ModalDelete/ModalDeleteTournament";
import {StartAndDeleteTournament} from "./StartAndDeleteTournament/StartAndDeleteTournament";
import {RegistrationOfMembers} from "./RegistrationOfMember/RegistrationOfMembers";
import {MultiValue} from "react-select";
import {Header} from "../Header/Header";
import {Navigate} from "react-router-dom";

type RegistrationPropsType = {
    addJudges: (fullName: string, gender: GenderType, status: StatusJudgeType, category: CategoryJudgeType, region: string) => void
    removeJudge: (JudgeID: string) => void
    categoryJudge: CategoryJudgeType[]
    statusJudge: StatusJudgeType[]
    judge: JudgeType[]
    SetSettings: (value: SettingsType) => void
    arrCategory: CategoryType[]
    setArrCategory: (value: CategoryType[]) => void
    sortCategory: (value: CategoryType) => Option[]
    ranks: RankType[]
    changeTeamAthlete: (AthleteID: string, teamAthlete: string) => void
    weightNewCategory: readonly Option[]
    athletes: AthletesType[]
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType, categoryMember: MultiValue<{value: string, label: string}>) => void
    changeFullNameAthlete: (fullName: string, AthleteID: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    removeAthlete: (AthleteID: string) => void
    setTournament: (value: string) => void
    setLocation: (value: string) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setMainSecretary: (value: string) => void
    setMainReferee: (value: string) => void
    setAthletes: (value: AthletesType[]) => void
    gender: GenderType[]
    changeFullNameJudge: (judgeID: string, fullName: string) => void
    changeRegionJudge: (judgeID: string, region: string) => void
    changeCategoryJudge: (judgeID: string, category: CategoryJudgeType) => void
    changeStatusJudge:  (judgeID: string, category: StatusJudgeType) => void
    filteredAthletes: AthletesType[]
    setFilter: (filter: FilterType) => void
    setJudge:(value: JudgeType[]) => void
    filter: FilterType
    setFilterAthletes: (value: AthletesType[]) => void
    filterAthletes: AthletesType[]
    setCategoryVisibility: (value: boolean) => void
    categoryVisibility: boolean
    changeFilter: (allAthlete: AthletesType[], filter: FilterType) => void
    removeRegisteredCategoryAtAthlete: (athleteID: string, category: {value: string, label: string}) => void
    setActiveCategory: (value: {value: string, label: string, gender: string}) => void
    activeCategory: {value: string, label: string, gender: string} | undefined
    tournament: string
    endTournamentDate: string
    startTournamentDate: string
    location:string
}

export const Registration = (props: RegistrationPropsType) => {

    const [modalDelete, setModalDelete] = useState<boolean>(false)
    const [modalDeleteAthlete, setModalDeleteAthlete] = useState(false)

    if(props.location === '' && props.arrCategory.length === 0 && props.tournament === '') {
        return <Navigate to={'/arm-app'}/>
    }

    return (
        <div>
            {!modalDelete && <div>
                <Header tournament={props.tournament}
                        endTournamentDate={props.endTournamentDate}
                        startTournamentDate={props.startTournamentDate}
                        location={props.location}/>
                <div className={styleRegistration.containRegistration}>
                    <RegistrationOfMembers arrCategory={props.arrCategory}
                                           addJudges={props.addJudges}
                                           statusJudge={props.statusJudge}
                                           gender={props.gender}
                                           ranks={props.ranks}
                                           categoryJudge={props.categoryJudge}
                                           sortCategory={props.sortCategory}
                                           addAthleteCallback={props.addAthleteCallback}/>
                    <ListMembers athletes={props.athletes}
                                 modalDeleteAthlete={modalDeleteAthlete}
                                 setModalDeleteAthlete={setModalDeleteAthlete}
                                 activeCategory={props.activeCategory}
                                 removeRegisteredCategoryAtAthlete={props.removeRegisteredCategoryAtAthlete}
                                 setCategoryVisibility={props.setCategoryVisibility}
                                 categoryVisibility={props.categoryVisibility}
                                 filterAthletes={props.filterAthletes}
                                 filter={props.filter}
                                 arrCategory={props.arrCategory}
                                 setFilter={props.setFilter}
                                 filteredAthletes={props.filteredAthletes}
                                 statusJudge={props.statusJudge}
                                 changeStatusJudge={props.changeStatusJudge}
                                 categoryJudge={props.categoryJudge}
                                 changeCategoryJudge={props.changeCategoryJudge}
                                 changeRegionJudge={props.changeRegionJudge}
                                 changeFullNameJudge={props.changeFullNameJudge}
                                 removeJudge={props.removeJudge}
                                 judge={props.judge}
                                 setActiveCategory={props.setActiveCategory}
                                 changeFullNameAthlete={props.changeFullNameAthlete}
                                 changeWeightAthlete={props.changeWeightAthlete}
                                 changeTeamAthlete={props.changeTeamAthlete}
                                 changeRankAthlete={props.changeRankAthlete}
                                 ranks={props.ranks}
                                 removeAthlete={props.removeAthlete}/>
                    <CategoriesList arrCategory={props.arrCategory}
                                    activeCategory={props.activeCategory}
                                    setModalDeleteAthlete={setModalDeleteAthlete}
                                    setActiveCategory={props.setActiveCategory}
                                    changeFilter={props.changeFilter}
                                    setCategoryVisibility={props.setCategoryVisibility}
                                    setFilterAthletes={props.setFilterAthletes}
                                    setFilter={props.setFilter}
                                    athletes={props.athletes}
                                    sortCategory={props.sortCategory}/>
                </div>
                <StartAndDeleteTournament setModalDelete={setModalDelete}/>
                <button onClick={()=>console.log('')}>LOG</button>
            </div>}
            <ModalDeleteTournament setJudge={props.setJudge}
                                   SetSettings={props.SetSettings}
                                   setArrCategory={props.setArrCategory}
                                   setAthletes={props.setAthletes}
                                   setModalDelete={setModalDelete}
                                   setTournament={props.setTournament}
                                   setLocation={props.setLocation}
                                   setMainReferee={props.setMainReferee}
                                   setMainSecretary={props.setMainSecretary}
                                   setWeightNewCategory={props.setWeightNewCategory}
                                   modalDelete={modalDelete}/>
        </div>
    )
}