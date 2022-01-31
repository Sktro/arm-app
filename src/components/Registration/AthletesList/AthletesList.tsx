import React from "react";
import styleR from "../Registration.module.css";
import {AthletesType, RankType} from "../../../App";
import {EditableSpanText} from "../../../common/EditableCopmponents/EditableSpanText";
import {EditableSpanNumber} from "../../../common/EditableCopmponents/EditableSpanNumber";
import {EditableSpanSelect} from "../../../common/EditableCopmponents/EditableSpanSelect";

type AthletesListPropsType = {
    athletes: AthletesType[]
    changeFullNameAndTeamAthlete: (fullNameAndTeam: string, AthleteID: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    ranks: RankType[]
    removeAthlete: (AthleteID: string) => void
}

export const AthletesList = (props: AthletesListPropsType) => {

    const athletesJSX = props.athletes
        .sort((a, b) => a.fullName < b.fullName ? -1 : 0)
        .map(atl => {
            const changeDataAthlete = (fullNameAndTeam: string) => {
                props.changeFullNameAndTeamAthlete(atl.id, fullNameAndTeam)
            }
            const changeWeightAthlete = (weightAthlete: number) => {
                props.changeWeightAthlete(atl.id, weightAthlete)
            }
            const changeRankAthlete = (rankAthlete: RankType) => {
                props.changeRankAthlete(atl.id, rankAthlete)
            }

            return (
                <div key={atl.id} className={styleR.athletes}>
                    <div className={styleR.fullName}><EditableSpanText fullNameAndTeam={atl.fullName} changeFullNameAndTeam={changeDataAthlete}/></div>
                    <div className={styleR.team}><EditableSpanText fullNameAndTeam={atl.team}
                                                                   changeFullNameAndTeam={changeDataAthlete}/></div>
                    <div className={styleR.weight}><EditableSpanNumber weightAthlete={atl.weight}
                                                                       changeWeightAthlete={changeWeightAthlete}/></div>
                    <div className={styleR.rank}><EditableSpanSelect ranks={props.ranks} rankAthlete={atl.rank}
                                                                     changeRankAthlete={changeRankAthlete}/></div>
                    <button className={styleR.removeButton} onClick={() => props.removeAthlete(atl.id)}>X</button>
                </div>
            )})

    return (
        <div className={styleR.registeredAthletes}>
                <span className={styleR.registrationDescription}>
                    Список зарегестрированных спортсменов({props.athletes.length}):
                </span>
            {athletesJSX}
        </div>
    )
}