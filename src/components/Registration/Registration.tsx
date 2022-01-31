import React, {useState} from "react";
import styleR from './Registration.module.css'
import {AthletesType, RankType} from "../../App";
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {RegistrationAthlete} from "./RegistrationAthlete/RegistrationAthlete";
import {AthletesList} from "./AthletesList/AthletesList";
import {CategoriesList} from "./CategoriesList/CategoriesList";
import {ModalDeleteTournament} from "./ModalDelete/ModalDeleteTournament";
import {StartAndDeleteTournament} from "./StartAndDeleteTournament/StartAndDeleteTournament";

type RegistrationPropsType = {
    ranks: RankType[]
    weightMale: readonly Option[]
    weightFemale: readonly Option[]
    athletes: AthletesType[]
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType) => void
    changeFullNameAndTeamAthlete: (fullNameAndTeam: string, AthleteID: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    removeAthlete: (AthleteID: string) => void
    setModalActive: (value: boolean) => void
    setTournament: (value: string) => void
    setLocation: (value: string) => void
    setWeightMale: (value: readonly Option[]) => void
    setMainSecretary: (value: string) => void
    setMainReferee: (value: string) => void
    setWeightFemale: (value: readonly Option[]) => void
    setAthletes:(value: AthletesType[])=> void
}

export const Registration = (props: RegistrationPropsType) => {

    const [modalDelete, setModalDelete] = useState<boolean>(false)

    return (
        <div>
            {!modalDelete && <div>
                <div className={styleR.containRegistration}>
                    <RegistrationAthlete addAthleteCallback={props.addAthleteCallback}
                                         ranks={props.ranks}/>
                    <AthletesList athletes={props.athletes}
                                  changeFullNameAndTeamAthlete={props.changeFullNameAndTeamAthlete}
                                  changeWeightAthlete={props.changeWeightAthlete}
                                  changeRankAthlete={props.changeRankAthlete}
                                  ranks={props.ranks}
                                  removeAthlete={props.removeAthlete}/>
                    <CategoriesList weightMale={props.weightMale}
                                    weightFemale={props.weightFemale}/>

                </div>
                <StartAndDeleteTournament setModalDelete={setModalDelete}/>
            </div>}
            <ModalDeleteTournament setModalActive={props.setModalActive}
                                   setAthletes={props.setAthletes}
                                   setModalDelete={setModalDelete}
                                   setTournament={props.setTournament}
                                   setLocation={props.setLocation}
                                   setMainReferee={props.setMainReferee}
                                   setMainSecretary={props.setMainSecretary}
                                   setWeightFemale={props.setWeightFemale}
                                   setWeightMale={props.setWeightMale}
                                   modalDelete={modalDelete}/>
        </div>
    )
}