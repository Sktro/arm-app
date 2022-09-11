import React from "react";
import styleR from "../Registration.module.css";
import {AthletesType, CategoryType, FilterType, JudgeType} from "../../../App";

type MemberFilterType = {
    setFilter: (filter: FilterType) => void
    setVisibilityJudges: (value: boolean) => void
    setModalDeleteAthlete: (value: boolean) => void
    setCategoryVisibility: (value: boolean) => void
    setActive: (value: string) => void
    arrCategory: CategoryType[]
    athletes: AthletesType[]
    active: string
    judge: JudgeType[]
}

export const FilterMembers = (props: MemberFilterType) => {

    const filterAll = (id: string) => {
        props.setFilter('all')
        props.setVisibilityJudges(true)
        props.setModalDeleteAthlete(false)
        props.setCategoryVisibility(false)
        props.setActive(id)
    }
    const filterMale = (id: string) => {
        props.setFilter('муж')
        props.setVisibilityJudges(false)
        props.setCategoryVisibility(false)
        props.setActive(id)
    }
    const filterFemale = (id: string) => {
        props.setFilter('жен')
        props.setVisibilityJudges(false)
        props.setCategoryVisibility(false)
        props.setActive(id)
    }
    const filterJudges = (id: string) => {
        props.setFilter('judges')
        props.setVisibilityJudges(true)
        props.setCategoryVisibility(false)
        props.setActive(id)
    }

    const findQtyCategory = (str: string) => {
        let count = 0
        for (let i = 0; i < props.arrCategory.length; i++) {
            if (props.arrCategory[i].gender === str) {
                count++
            }
        }
        return count
    }

    const buttonMale = findQtyCategory('муж') > 0 && props.athletes.find(g => g.gender === 'муж') &&
        <button
            className={props.active === '1' ? `${styleR.filterButton} ${styleR.filterButtonMale} ${styleR.activeMale}`
                : `${styleR.filterButton} ${styleR.filterButtonMale}`}
            onClick={() => filterMale('1')}>мужчины</button>

    const buttonFemale = findQtyCategory('жен') > 0 && props.athletes.find(g => g.gender === 'жен') &&
        <button
            className={props.active === '2' ? `${styleR.filterButton} ${styleR.filterButtonFemale} ${styleR.activeFemale}`
                : `${styleR.filterButton} ${styleR.filterButtonFemale}`}
            onClick={() => filterFemale('2')}>женщины</button>

    const buttonJudges = props.judge.length > 0 &&
        <button
            className={props.active === '3' ? `${styleR.filterButton} ${styleR.filterButtonJudges} ${styleR.activeJudges}`
                : `${styleR.filterButton} ${styleR.filterButtonJudges}`}
            onClick={() => filterJudges('3')}>судьи</button>

    const buttonAll = <button
        className={props.active === '4' ? `${styleR.filterButton} ${styleR.filterButtonAll} ${styleR.activeAll}`
            : `${styleR.filterButton} ${styleR.filterButtonAll}`}
        onClick={() => filterAll('4')}>все</button>

    return (
        <div className={styleR.containButtons}>
            фильтр участников:
            {buttonMale}{buttonFemale}{buttonJudges}{buttonAll}
        </div>
    )
}