import React, {useState} from "react";
import styleR from './Registration.module.css'
import {AthletesType, CategoryType, GenderType, RankType, SettingsType} from "../../App";
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {RegistrationAthlete} from "./RegistrationAthlete/RegistrationAthlete";
import {AthletesList} from "./AthletesList/AthletesList";
import {CategoriesList} from "./CategoriesList/CategoriesList";
import {ModalDeleteTournament} from "./ModalDelete/ModalDeleteTournament";
import {StartAndDeleteTournament} from "./StartAndDeleteTournament/StartAndDeleteTournament";

type RegistrationPropsType = {
    SetSettings:(value: SettingsType) => void
    arrCategory: CategoryType[]
    setArrCategory:(value: CategoryType[]) => void
    sortCategory: (value: CategoryType) => Option[]
    ranks: RankType[]
    weightNewCategory: readonly Option[]
    athletes: AthletesType[]
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType) => void
    changeFullNameAndTeamAthlete: (fullNameAndTeam: string, AthleteID: string) => void
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
}

export const Registration = (props: RegistrationPropsType) => {

    const [modalDelete, setModalDelete] = useState<boolean>(false)

    return (
        <div>
            {!modalDelete && <div>
                <div className={styleR.containRegistration}>
                    <RegistrationAthlete addAthleteCallback={props.addAthleteCallback}
                                         gender={props.gender}
                                         ranks={props.ranks}/>
                    <AthletesList athletes={props.athletes}
                                  changeFullNameAndTeamAthlete={props.changeFullNameAndTeamAthlete}
                                  changeWeightAthlete={props.changeWeightAthlete}
                                  changeRankAthlete={props.changeRankAthlete}
                                  ranks={props.ranks}
                                  removeAthlete={props.removeAthlete}/>
                    <CategoriesList arrCategory={props.arrCategory}
                                    sortCategory={props.sortCategory}/>

                </div>
                <StartAndDeleteTournament setModalDelete={setModalDelete}/>
            </div>}
            <ModalDeleteTournament setModalActive={props.setModalActive}
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