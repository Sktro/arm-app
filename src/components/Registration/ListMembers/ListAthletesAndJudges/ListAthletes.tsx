import React from "react";
import {AthletesType, RankType} from "../../../../App";
import styleListAthletesAndJudges from "./ListAthletesAndJudges.module.css";
import {EditableSpanText} from "../../../../common/EditableCopmponents/EditableSpanText";
import {EditableSpanNumber} from "../../../../common/EditableCopmponents/EditableSpanNumber";
import {EditableSpanSelect} from "../../../../common/EditableCopmponents/EditableSpanSelect";

type ListAthletesType = {
    filteredAthletes: AthletesType[]
    changeFullNameAthlete: (athleteID: string, fullName: string) => void
    changeTeamAthlete: (teamAthlete: string, AthleteID: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    setModalDeleteAthlete: (value: boolean) => void
    setMember: (value: string) => void
    setIdMember: (value: string) => void
    setGender: (value: string) => void
    setNameMember: (value: string) => void
    ranks: RankType[]
}

export const ListAthletes = (props: ListAthletesType) => {

    const athletesJSX = props.filteredAthletes
        .sort((a, b) => a.fullName < b.fullName ? -1 : 0)
        .map(atl => {
            const changeFullNameAthlete = (fullName: string) => {
                props.changeFullNameAthlete(atl.id, fullName)
            }
            const changeTeamAthlete = (team: string) => {
                props.changeTeamAthlete(atl.id, team)
            }
            const changeWeightAthlete = (weightAthlete: number) => {
                props.changeWeightAthlete(atl.id, weightAthlete)
            }
            const changeRankAthlete = (rankAthlete: string) => {
                props.changeRankAthlete(atl.id, rankAthlete as RankType)
            }

            const removeAthlete = (athleteID: string, gender: string, fullName: string) => {
                props.setModalDeleteAthlete(true)
                props.setMember('athlete')
                props.setIdMember(athleteID)
                props.setGender(gender)
                props.setNameMember(fullName)
            }

            return (
                <div key={atl.id} className={atl.gender === 'жен'
                    ? `${styleListAthletesAndJudges.athletesM} ${styleListAthletesAndJudges.athletesF}` : styleListAthletesAndJudges.athletesM}>
                    <div className={styleListAthletesAndJudges.fullName}><EditableSpanText value={atl.fullName}
                                                                                           id={'fullName'}
                                                                                           changeValue={changeFullNameAthlete}/>
                    </div>
                    <div className={styleListAthletesAndJudges.team}><EditableSpanText value={atl.team}
                                                                                       id={'team'}
                                                                                       changeValue={changeTeamAthlete}/></div>
                    <div className={styleListAthletesAndJudges.weight}><EditableSpanNumber value={atl.weight}
                                                                                           changeValue={changeWeightAthlete}/></div>
                    <div className={styleListAthletesAndJudges.rank}><EditableSpanSelect options={props.ranks}
                                                                                         value={atl.rank}
                                                                                         changeOptions={changeRankAthlete}/></div>
                    <button className={styleListAthletesAndJudges.removeButton}
                            onClick={()=> removeAthlete(atl.id, atl.gender, atl.fullName)}>
                    </button>
                </div>
            )
        })
    return (
        <>
            {athletesJSX}
        </>
    )
}