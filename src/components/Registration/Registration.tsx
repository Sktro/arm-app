import React, {useState} from "react";
import styleR from './Registration.module.css'
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
import {ListMembers} from "./AthletesList/ListMembers";
import {CategoriesList} from "./CategoriesList/CategoriesList";
import {ModalDeleteTournament} from "./ModalDelete/ModalDeleteTournament";
import {StartAndDeleteTournament} from "./StartAndDeleteTournament/StartAndDeleteTournament";
import {RegistrationOfMembers} from "./RegistrationOfMember/RegistrationOfMembers";

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
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType) => void
    changeFullNameAthlete: (fullName: string, AthleteID: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    removeAthlete: (AthleteID: string) => void
    setModalActive: (value: boolean) => void
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
}

export const Registration = (props: RegistrationPropsType) => {

    const [modalDelete, setModalDelete] = useState<boolean>(false)

    return (
        <div>
            {!modalDelete && <div>
                <div className={styleR.containRegistration}>
                    <RegistrationOfMembers arrCategory={props.arrCategory}
                                           addJudges={props.addJudges}
                                           statusJudge={props.statusJudge}
                                           gender={props.gender}
                                           ranks={props.ranks}
                                           categoryJudge={props.categoryJudge}
                                           addAthleteCallback={props.addAthleteCallback}/>
                    <ListMembers athletes={props.athletes}
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
                                 changeFullNameAthlete={props.changeFullNameAthlete}
                                 changeWeightAthlete={props.changeWeightAthlete}
                                 changeTeamAthlete={props.changeTeamAthlete}
                                 changeRankAthlete={props.changeRankAthlete}
                                 ranks={props.ranks}
                                 removeAthlete={props.removeAthlete}/>
                    <CategoriesList arrCategory={props.arrCategory}
                                    athletes={props.athletes}
                                    sortCategory={props.sortCategory}/>
                    {/*<button onClick={()=> console.log(props.athletes)}>LOG</button>*/}
                </div>
                <StartAndDeleteTournament setModalDelete={setModalDelete}/>
            </div>}
            <ModalDeleteTournament setModalActive={props.setModalActive}
                                   setJudge={props.setJudge}
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