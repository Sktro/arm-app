import React from "react";
import styleR from "../Registration.module.css";
import {AthletesType, FilterType, JudgeType} from "../../../App";

type ModalDeleteMemberType = {
    numberOfCategoriesForAthlete: number
    nameMember: string
    idAthlete: string
    modalDeleteAthlete: boolean
    removeAthlete: (AthleteID: string) => void
    setModalDeleteAthlete: (value: boolean) => void
    removeRegisteredCategoryAtAthlete: (athleteID: string, category: { value: string, label: string }) => void
    activeCategory: { value: string, label: string, gender: string } | undefined
    member: string
    setFilter: (filter: FilterType) => void
    setActive: (value: string) => void
    gender: string
    removeJudge: (judgeID: string) => void
    judge: JudgeType[]
    athletes: AthletesType[]
}

export const ModalDeleteMember = (props: ModalDeleteMemberType) => {

    const findQtyAthletes = (str: string) => {
        let count = 0
        for (let i = 0; i < props.athletes.length; i++) {
            if (props.athletes[i].gender === str) {
                count++
            }
        }
        return count
    }

    const deleteAthlete = (memberId: string, modal: boolean, count: number, gender: string, categoryMember: string) => {
        if (categoryMember === 'athlete' && gender === 'муж') {
            props.removeAthlete(memberId)
            props.setModalDeleteAthlete(modal)
            if (findQtyAthletes('муж') <= 1) {
                props.setFilter('all')
                props.setActive('4')
            }
        }
        if (categoryMember === 'athlete' && gender === 'жен') {
            props.removeAthlete(memberId)
            props.setModalDeleteAthlete(modal)
            if (findQtyAthletes('жен') <= 1) {
                props.setFilter('all')
                props.setActive('4')
            }
        }
        if(categoryMember === 'judge') {
            props.removeJudge(memberId)
            props.setModalDeleteAthlete(modal)
            if (props.judge.length <= 1) {
                props.setFilter('all')
                props.setActive('4')
            }
        }
        if(categoryMember === 'athleteInCategory') {
            if (count === 1) {
                props.removeAthlete(memberId)
                props.setModalDeleteAthlete(modal)
            } else {
                props.removeRegisteredCategoryAtAthlete(memberId, props.activeCategory!)
                props.setModalDeleteAthlete(modal)
            }
        }
    }

    const deleteAthleteFromTournament = <div>Вы действительно хотите удалить из турнира спортсмена: {props.nameMember} ?</div>
    const deleteJudgeFromTournament = <div>Вы действительно хотите удалить из турнира судью: {props.nameMember} ?</div>
    const deleteAthleteFromCategory = <div>Вы действительно хотите удалить спортсмена: {props.nameMember} из данной
        категории?</div>

    return <>
            <div className={styleR.removalOfAthlete}>
                {props.member === 'athleteInCategory' && props.numberOfCategoriesForAthlete > 1 && deleteAthleteFromCategory}
                {props.member === 'athleteInCategory' && props.numberOfCategoriesForAthlete === 1 && deleteAthleteFromTournament}
                {props.member === 'athlete' && deleteAthleteFromTournament}
                {props.member === 'judge' && deleteJudgeFromTournament}
                <div className={styleR.buttonsModalDelete}>
                    <button className={styleR.delete}

                            onClick={() => deleteAthlete(props.idAthlete, false, props.numberOfCategoriesForAthlete, props.gender, props.member)}>удалить
                    </button>
                    <button className={styleR.cancel}
                            onClick={() => props.setModalDeleteAthlete(false)}>отмена
                    </button>
                </div>
            </div>
    </>
}
