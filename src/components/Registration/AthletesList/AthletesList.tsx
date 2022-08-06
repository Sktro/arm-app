import React from "react";
import styleR from "../Registration.module.css";
import {AthletesType, CategoryJudgeType, JudgeType, RankType} from "../../../App";
import {EditableSpanText} from "../../../common/EditableCopmponents/EditableSpanText";
import {EditableSpanNumber} from "../../../common/EditableCopmponents/EditableSpanNumber";
import {EditableSpanSelect} from "../../../common/EditableCopmponents/EditableSpanSelect";

type AthletesListPropsType = {
    athletes: AthletesType[]
    changeFullNameAthlete: (athleteID: string, fullName: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    changeTeamAthlete: (teamAthlete: string, AthleteID: string) => void
    ranks: RankType[]
    removeJudge: (JudgeID: string) => void
    judge: JudgeType[]
    removeAthlete: (AthleteID: string) => void
    changeFullNameJudge: (judgeID: string, fullName: string) => void
    changeRegionJudge: (judgeID: string, region: string) => void
    changeCategoryJudge: (judgeID: string, category: CategoryJudgeType) => void
    categoryJudge: CategoryJudgeType[]
}

export const AthletesList = (props: AthletesListPropsType) => {

    const athletesJSX = props.athletes
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

            return (
                <div key={atl.id} className={atl.gender === 'жен'
                    ? `${styleR.athletesM} ${styleR.athletesF}` : styleR.athletesM}>
                    <div className={styleR.fullName}><EditableSpanText value={atl.fullName}
                                                                       changeValue={changeFullNameAthlete}/></div>
                    <div className={styleR.team}><EditableSpanText value={atl.team}
                                                                   changeValue={changeTeamAthlete}/></div>
                    <div className={styleR.weight}><EditableSpanNumber value={atl.weight}
                                                                       changeValue={changeWeightAthlete}/></div>
                    <div className={styleR.rank}><EditableSpanSelect options={props.ranks}
                                                                     value={atl.rank}
                                                                     changeOptions={changeRankAthlete}/></div>
                    <button className={styleR.removeButton} onClick={() => props.removeAthlete(atl.id)}>X</button>
                </div>
            )
        })
    const judgesJSX = props.judge

        .sort((a, b) => a.fullName < b.fullName ? -1 : 0)
        .map(jud => {
            const changeFullNameJudge = (fullName: string) => {
                props.changeFullNameJudge(jud.id, fullName)
            }
            const changeRegionJudge = (region: string) => {
                props.changeRegionJudge(jud.id, region)
            }
            const changeCategoryJudge = (category: string) => {
                props.changeCategoryJudge(jud.id, category as CategoryJudgeType)
            }
            return (
                <div key={jud.id} className={styleR.judges}>
                    <div className={styleR.fullName}><EditableSpanText value={jud.fullName}
                                                                       changeValue={changeFullNameJudge}/></div>
                    <div><EditableSpanSelect options={props.categoryJudge}
                                             value={jud.category}
                                             changeOptions={changeCategoryJudge}/></div>
                    <div><EditableSpanText value={jud.region}
                                           changeValue={changeRegionJudge}/></div>
                    <button className={styleR.removeButton} onClick={() => props.removeJudge(jud.id)}>X</button>
                </div>
            )
        })

    return (
        <div className={styleR.registeredAthletes}>
                <span className={styleR.registrationDescription}>
                    Список зарегестрированных спортсменов({props.athletes.length}), судей({props.judge.length}):
                </span>
            {athletesJSX}
            {judgesJSX}
        </div>
    )
}