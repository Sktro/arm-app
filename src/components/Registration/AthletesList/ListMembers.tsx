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
import {ModalDeleteMember} from "./ModalDeleteMember";

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
    setActiveCategory: (value: { value: string, label: string, gender: string }) => void
}

export const ListMembers = (props: AthletesListPropsType) => {

    const [visibilityJudges, setVisibilityJudges] = useState(true)
    const [nameAthlete, setNameAthlete] = useState('')
    const [idAthlete, setIdAthlete] = useState('')
    const [numberOfCategoriesForAthlete, setNumberOfCategoriesForAthlete] = useState(0)
    const [active, setActive] = useState('4');

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
                    setActive('4')
                }
            }
            const removeAthleteFemale = () => {
                props.removeAthlete(atl.id)
                if (findQtyAthletes('жен') <= 1) {
                    props.setFilter('all')
                    setActive('4')
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
                            onClick={atl.gender === 'муж' ? removeAthleteMale : removeAthleteFemale}>Удалить
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
                    setActive('4')
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
            const modalDeleteFromCategory = (fullNameAthlete: string, athleteID: string, numberOfCategories: number) => {
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
                                onClick={() => modalDeleteFromCategory(atl.fullName, atl.id, atl.categoryMember!.length)}>Удалить
                        </button>
                    </div>}
                </div>

            )
        })

    const filterAll = (id: string) => {
        props.setFilter('all')
        setVisibilityJudges(true)
        props.setCategoryVisibility(false)
        setActive(id)
    }
    const filterMale = (id: string) => {
        props.setFilter('муж')
        setVisibilityJudges(false)
        props.setCategoryVisibility(false)
        setActive(id)
    }
    const filterFemale = (id: string) => {
        props.setFilter('жен')
        setVisibilityJudges(false)
        props.setCategoryVisibility(false)
        setActive(id)
    }
    const filterJudges = (id: string) => {
        props.setFilter('judges')
        setVisibilityJudges(true)
        props.setCategoryVisibility(false)
        setActive(id)
    }

    const openFilter = () => {
        if (props.athletes.length > 0 && props.judge.length > 0) {
            return true
        }
        if (props.athletes.find(g => g.gender === 'муж') && props.athletes.find(g => g.gender === 'жен')) {
            return true
        }
    }

    const buttonMale = findQtyCategory('муж') > 0 && props.athletes.find(g => g.gender === 'муж') &&
        <button
            className={active === '1' ? `${styleR.filterButton} ${styleR.filterButtonMale} ${styleR.activeMale}` : `${styleR.filterButton} ${styleR.filterButtonMale}`}
            onClick={() => filterMale('1')}>мужчины</button>
    const buttonFemale = findQtyCategory('жен') > 0 && props.athletes.find(g => g.gender === 'жен') &&
        <button
            className={active === '2' ? `${styleR.filterButton} ${styleR.filterButtonFemale} ${styleR.activeFemale}` : `${styleR.filterButton} ${styleR.filterButtonFemale}`}
            onClick={() => filterFemale('2')}>женщины</button>
    const buttonJudges = props.judge.length > 0 &&
        <button
            className={active === '3' ? `${styleR.filterButton} ${styleR.filterButtonJudges} ${styleR.activeJudges}` : `${styleR.filterButton} ${styleR.filterButtonJudges}`}
            onClick={() => filterJudges('3')}>судьи</button>
    const buttonAll = <button
        className={active === '4' ? `${styleR.filterButton} ${styleR.filterButtonAll} ${styleR.activeAll}` : `${styleR.filterButton} ${styleR.filterButtonAll}`}
        onClick={() => filterAll('4')}>все</button>

    return (
        <div className={styleR.registeredAthletes}>
            {props.categoryVisibility &&
                <button className={styleR.backToMembers} onClick={() => {
                    props.setCategoryVisibility(false)
                    props.setModalDeleteAthlete(false)
                    props.setFilter('all')
                    props.setActiveCategory({value: '', label: '', gender: ''})
                    setActive('4')
                }}>Вернуться к общему списку участников</button>}
            {!props.categoryVisibility && <span className={styleR.registrationDescription}>
                    Список зарегестрированных спортсменов({props.athletes.length}), судей({props.judge.length}):
                </span>}
            {openFilter() && !props.categoryVisibility && <div className={styleR.containButtons}>
                фильтр участников:
                {buttonMale}{buttonFemale}{buttonJudges}{buttonAll}
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
            </div>}
            {props.modalDeleteAthlete && <ModalDeleteMember numberOfCategoriesForAthlete={numberOfCategoriesForAthlete}
                                                            activeCategory={props.activeCategory}
                                                            removeRegisteredCategoryAtAthlete={props.removeRegisteredCategoryAtAthlete}
                                                            removeAthlete={props.removeAthlete}
                                                            idAthlete={idAthlete}
                                                            setModalDeleteAthlete={props.setModalDeleteAthlete}
                                                            modalDeleteAthlete={props.modalDeleteAthlete}
                                                            nameAthlete={nameAthlete}/>}
        </div>
    )
}