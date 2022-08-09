import React, {useState} from "react";
import styleR from "../Registration.module.css";
import {
    AthletesType,
    CategoryJudgeType,
    CategoryType,
    FilterType,
    JudgeType,
    RankType,
    StatusJudgeType
} from "../../../App";
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
    changeStatusJudge: (judgeID: string, category: StatusJudgeType) => void
    statusJudge: StatusJudgeType[]
    filteredAthletes: AthletesType[]
    setFilter: (filter: FilterType) => void
    arrCategory: CategoryType[]
    filter: FilterType
}

export const ListMembers = (props: AthletesListPropsType) => {
    const [visibilityJudges, setVisibilityJudges] = useState(true)

    const findQtyCategory = (str: string) => {
        let count = 0
        for (let i = 0; i < props.arrCategory.length; i++) {
            if (props.arrCategory[i].gender === str) {
                count++
            }
        }
        return count
    }

    const findQtyAthletes = (str: string) => {
        let count = 0
        for (let i = 0; i < props.athletes.length; i++) {
            if (props.athletes[i].gender === str) {
                count++
            }
        }
        return count
    }

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
            const removeAthleteMale = () => {
                props.removeAthlete(atl.id)
                if(findQtyAthletes('муж') <= 1){
                    props.setFilter('all')
                }
            }
            const removeAthleteFemale = () => {
                props.removeAthlete(atl.id)
                if(findQtyAthletes('жен') <= 1){
                    props.setFilter('all')
                }
            }


            return (
                <div key={atl.id} className={atl.gender === 'жен'
                    ? `${styleR.athletesM} ${styleR.athletesF}` : styleR.athletesM}>
                    <div className={styleR.fullName}><EditableSpanText value={atl.fullName}
                                                                       id={'fullName'}
                                                                       changeValue={changeFullNameAthlete}/>
                    </div>
                    <div className={styleR.team}><EditableSpanText value={atl.team}
                                                                   id={'team'}
                                                                   changeValue={changeTeamAthlete}/></div>
                    <div className={styleR.weight}><EditableSpanNumber value={atl.weight}
                                                                       changeValue={changeWeightAthlete}/></div>
                    <div className={styleR.rank}><EditableSpanSelect options={props.ranks}
                                                                     value={atl.rank}
                                                                     changeOptions={changeRankAthlete}/></div>
                    <button className={styleR.removeButton} onClick={atl.gender === 'муж' ? removeAthleteMale : removeAthleteFemale}>X</button>
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
            const changeStatusJudge = (status: string) => {
                props.changeStatusJudge(jud.id, status as StatusJudgeType)
            }
            const removeJudge = () => {
                props.removeJudge(jud.id)
                if(props.judge.length <= 1){
                    props.setFilter('all')
                }
            }
            return (

                <div key={jud.id} className={styleR.judges}>
                    <div className={styleR.fullName}><EditableSpanText value={jud.fullName}
                                                                       id={'fullName'}
                                                                       changeValue={changeFullNameJudge}/></div>
                    <div className={styleR.statusJudge}><EditableSpanSelect value={jud.status}
                                                                            changeOptions={changeStatusJudge}
                                                                            options={props.statusJudge}/></div>
                    <div className={styleR.regionJudge}><EditableSpanText value={jud.region}
                                                                          id={'region'}
                                                                          changeValue={changeRegionJudge}/></div>
                    <div className={styleR.categoryJudge}><EditableSpanSelect options={props.categoryJudge}
                                                                              value={jud.category}
                                                                              changeOptions={changeCategoryJudge}/>
                    </div>
                    <button className={styleR.removeButton} onClick={removeJudge}>X</button>
                </div>
            )
        })

    const filterAll = () => {
        props.setFilter('all')
        setVisibilityJudges(true)
    }
    const filterMale = () => {
        props.setFilter('муж')
        setVisibilityJudges(false)
    }
    const filterFemale = () => {
        props.setFilter('жен')
        setVisibilityJudges(false)
    }
    const filterJudges = () => {
        props.setFilter('judges')
        setVisibilityJudges(true)
    }

    const openFilter = () => {
        if (props.athletes.length > 0 && props.judge.length > 0) {
            return true
        }
        if (props.athletes.find(g => g.gender === 'муж') && props.athletes.find(g => g.gender === 'жен')) {
            return true
        }
    }

    return (
        <div className={styleR.registeredAthletes}>
                <span className={styleR.registrationDescription}>
                    Список зарегестрированных спортсменов({props.athletes.length}), судей({props.judge.length}):
                </span>
            {openFilter() && <div className={styleR.containButtons}>
                фильтр участников:
                {findQtyCategory('муж') > 0 && props.athletes.find(g => g.gender === 'муж') &&
                    <button className={`${styleR.filterButton} ${styleR.filterButtonMale}`}
                            onClick={filterMale}>мужчины</button>}
                {findQtyCategory('жен') > 0 && props.athletes.find(g => g.gender === 'жен') &&
                    <button className={`${styleR.filterButton} ${styleR.filterButtonFemale}`}
                            onClick={filterFemale}>женщины</button>}
                {props.judge.length > 0 && <button className={`${styleR.filterButton} ${styleR.filterButtonJudges}`}
                                                   onClick={filterJudges}>судьи</button>}
                <button className={`${styleR.filterButton} ${styleR.filterButtonAll}`}
                        onClick={filterAll}>все
                </button>
            </div>}
            {athletesJSX}
            {(visibilityJudges || props.athletes.length === 0 || props.filter === 'all') && judgesJSX}
        </div>
    )
}