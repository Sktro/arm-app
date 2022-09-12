import React from "react";
import styleFilterMembers from "./FilterMembers.module.css";
import {AthletesType, CategoryType, FilterType, JudgeType} from "../../../../App";

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
            className={props.active === '1' ? `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonMale} ${styleFilterMembers.activeMale}`
                : `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonMale}`}
            onClick={() => filterMale('1')}>мужчины</button>

    const buttonFemale = findQtyCategory('жен') > 0 && props.athletes.find(g => g.gender === 'жен') &&
        <button
            className={props.active === '2' ? `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonFemale} ${styleFilterMembers.activeFemale}`
                : `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonFemale}`}
            onClick={() => filterFemale('2')}>женщины</button>

    const buttonJudges = props.judge.length > 0 &&
        <button
            className={props.active === '3' ? `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonJudges} ${styleFilterMembers.activeJudges}`
                : `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonJudges}`}
            onClick={() => filterJudges('3')}>судьи</button>

    const buttonAll = <button
        className={props.active === '4' ? `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonAll} ${styleFilterMembers.activeAll}`
            : `${styleFilterMembers.filterButton} ${styleFilterMembers.filterButtonAll}`}
        onClick={() => filterAll('4')}>все</button>

    return (
        <div className={styleFilterMembers.containButtons}>
            фильтр участников:
            {buttonMale}{buttonFemale}{buttonJudges}{buttonAll}
        </div>
    )
}