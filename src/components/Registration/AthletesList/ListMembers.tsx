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
import {ToolTip} from "../common/Tooltip";

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
    filterAthletes: AthletesType[]
    categoryVisibility: boolean
    setCategoryVisibility: (value: boolean) => void
    removeRegisteredCategoryAtAthlete: (athleteID: string, category: { value: string, label: string }) => void
    activeCategory: { value: string, label: string, gender: string } | undefined
    modalDeleteAthlete: boolean
    setModalDeleteAthlete: (value: boolean) => void
}

export const ListMembers = (props: AthletesListPropsType) => {
    const [visibilityJudges, setVisibilityJudges] = useState(true)
    const [nameAthlete, setNameAthlete] = useState('')
    const [idAthlete, setIdAthlete] = useState('')
    const [numberOfCategoriesForAthlete, setNumberOfCategoriesForAthlete] = useState(0)

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
                if (findQtyAthletes('муж') <= 1) {
                    props.setFilter('all')
                }
            }
            const removeAthleteFemale = () => {
                props.removeAthlete(atl.id)
                if (findQtyAthletes('жен') <= 1) {
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
                    <button className={styleR.removeButton}
                            onClick={atl.gender === 'муж' ? removeAthleteMale : removeAthleteFemale}>X
                    </button>
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
                if (props.judge.length <= 1) {
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

    const filteredAthletesJSX = props.athletes
        .filter(at => {
            for (let j = 0; j < at.categoryMember!.length; j++) {
                if (at.categoryMember![j].value === props.activeCategory?.value && at.gender === props.activeCategory.gender) {
                    return true
                }
            }
            return false
        })
        .sort((a, b) => a.fullName < b.fullName ? -1 : 0)
        .map(atl => {
            const modalDelete = (fullNameAthlete:string, athleteID: string, numberOfCategories: number) => {
                props.setModalDeleteAthlete(true)
                setNameAthlete(fullNameAthlete)
                setIdAthlete(athleteID)
                setNumberOfCategoriesForAthlete(numberOfCategories)
            }
            return (
                <div key={atl.id}>
                    {!props.modalDeleteAthlete && <div className={atl.gender === 'жен'
                        ? `${styleR.athletesM} ${styleR.athletesF}` : styleR.athletesM}>
                        <div className={styleR.fullName}><ToolTip id={'fullName'} value={atl.fullName}/></div>
                        <div className={styleR.team}><ToolTip id={'team'} value={atl.team}/></div>
                        <div className={styleR.regionJudge}>{atl.weight}</div>
                        <div className={styleR.regionJudge}>{atl.rank}</div>
                        <button className={styleR.deleteFromCategory}
                                onClick={()=>modalDelete(atl.fullName, atl.id, atl.categoryMember!.length)}>Удалить
                        </button>
                    </div>}
                </div>

            )
        })

    const filterAll = () => {
        props.setFilter('all')
        setVisibilityJudges(true)
        props.setCategoryVisibility(false)
    }
    const filterMale = () => {
        props.setFilter('муж')
        setVisibilityJudges(false)
        props.setCategoryVisibility(false)
    }
    const filterFemale = () => {
        props.setFilter('жен')
        setVisibilityJudges(false)
        props.setCategoryVisibility(false)
    }
    const filterJudges = () => {
        props.setFilter('judges')
        setVisibilityJudges(true)
        props.setCategoryVisibility(false)
    }

    const openFilter = () => {
        if (props.athletes.length > 0 && props.judge.length > 0) {
            return true
        }
        if (props.athletes.find(g => g.gender === 'муж') && props.athletes.find(g => g.gender === 'жен')) {
            return true
        }
    }

    const deleteAthlete = (athleteId: string, modal: boolean, count: number) => {
        if (count === 1) {
            props.removeAthlete(athleteId)
            props.setModalDeleteAthlete(modal)
        } else {
            props.removeRegisteredCategoryAtAthlete(athleteId, props.activeCategory!)
            props.setModalDeleteAthlete(modal)
        }
    }

    return (
        <div className={styleR.registeredAthletes}>
            {props.categoryVisibility &&
                <button className={styleR.backToMembers} onClick={() => {
                    props.setCategoryVisibility(false)
                    props.setModalDeleteAthlete(false)
                    props.setFilter('all')
                }}>Вернуться к
                    общему списку участников</button>}
            {!props.categoryVisibility && <span className={styleR.registrationDescription}>
                    Список зарегестрированных спортсменов({props.athletes.length}), судей({props.judge.length}):
                </span>}
            {openFilter() && !props.categoryVisibility && <div className={styleR.containButtons}>
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
            {!props.categoryVisibility && <div>
                {athletesJSX}
                {(visibilityJudges || props.athletes.length === 0 || props.filter === 'all') && judgesJSX}
            </div>}
            {props.categoryVisibility && <div>
                {filteredAthletesJSX.length >= 1 ? <div className={styleR.nameOfCategory}>
                        <div>Категория спортсменов: {props.activeCategory?.value}кг</div>
                        <div>Зарегистрированно спортсменов: {filteredAthletesJSX.length}</div>
                    </div>
                    : <div className={styleR.emptyOfCategory}>В категории: "{props.activeCategory?.value}кг" нет
                        зарегестрированных участников</div>}
                <div>{filteredAthletesJSX}</div>
            </div>
            }
            {props.modalDeleteAthlete &&
                <div className={styleR.removalOfAthlete}>
                    {numberOfCategoriesForAthlete > 1 && <div >
                        Вы действительно хотите удалить спортсмена: {nameAthlete} из данной категории?</div>}
                    {numberOfCategoriesForAthlete === 1 && <div>
                        Вы действительно хотите удалить спортсмена: {nameAthlete} ?
                        </div>}
                    <div className={styleR.buttonsModalDelete}>
                        <button className={styleR.delete} onClick={()=> deleteAthlete(idAthlete, false, numberOfCategoriesForAthlete)}>удалить</button>
                        <button className={styleR.cancel} onClick={()=> props.setModalDeleteAthlete(false)}>отмена</button>
                    </div>
                    </div>}
        </div>
    )
}