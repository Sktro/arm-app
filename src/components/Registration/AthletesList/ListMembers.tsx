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
import {ModalDeleteMember} from "./ModalDeleteMember";
import {ListAthletes} from "./ListAthletes";
import {ListJudges} from "./ListJudges";
import {ListOfAthletesFromTheCategory} from "./ListOfAthletesFromTheCategory";
import {FilterMembers} from "./FilterMembers";

type AthletesListPropsType = {
    athletes: AthletesType[]
    changeFullNameAthlete: (athleteID: string, fullName: string) => void
    changeWeightAthlete: (AthleteID: string, weightAthlete: number) => void
    changeRankAthlete: (AthleteID: string, rankAthlete: RankType) => void
    changeTeamAthlete: (teamAthlete: string, AthleteID: string) => void
    ranks: RankType[]
    removeJudge: (judgeID: string) => void
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
    const [nameMember, setNameMember] = useState('')
    const [idMember, setIdMember] = useState('')
    const [numberOfCategoriesForAthlete, setNumberOfCategoriesForAthlete] = useState(0)
    const [active, setActive] = useState('4');
    const [member, setMember] = useState('')
    const [gender, setGender] = useState('')

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

            {!props.modalDeleteAthlete &&
                <div>{openFilter() && !props.categoryVisibility &&
                    <FilterMembers setFilter={props.setFilter}
                                   setModalDeleteAthlete={props.setModalDeleteAthlete}
                                   judge={props.judge}
                                   active={active}
                                   setActive={setActive}
                                   arrCategory={props.arrCategory}
                                   setCategoryVisibility={props.setCategoryVisibility}
                                   setVisibilityJudges={setVisibilityJudges}
                                   athletes={props.athletes}/>}

                    {!props.categoryVisibility && <>
                        <ListAthletes setModalDeleteAthlete={props.setModalDeleteAthlete}
                                      setGender={setGender}
                                      ranks={props.ranks}
                                      changeFullNameAthlete={props.changeFullNameAthlete}
                                      changeWeightAthlete={props.changeWeightAthlete}
                                      changeTeamAthlete={props.changeTeamAthlete}
                                      changeRankAthlete={props.changeRankAthlete}
                                      filteredAthletes={props.filteredAthletes}
                                      setIdMember={setIdMember}
                                      setMember={setMember}
                                      setNameMember={setNameMember}/>
                        {(visibilityJudges || props.athletes.length === 0 || props.filter === 'all') &&
                            <ListJudges setMember={setMember}
                                        setModalDeleteAthlete={props.setModalDeleteAthlete}
                                        judge={props.judge}
                                        statusJudge={props.statusJudge}
                                        changeStatusJudge={props.changeStatusJudge}
                                        categoryJudge={props.categoryJudge}
                                        changeCategoryJudge={props.changeCategoryJudge}
                                        changeRegionJudge={props.changeRegionJudge}
                                        changeFullNameJudge={props.changeFullNameAthlete}
                                        setIdMember={setIdMember}
                                        setNameMember={setNameMember}/>}
                    </>}
                    {props.categoryVisibility &&
                        <ListOfAthletesFromTheCategory setIdMember={setIdMember}
                                                       setMember={setMember}
                                                       setModalDeleteAthlete={props.setModalDeleteAthlete}
                                                       activeCategory={props.activeCategory}
                                                       athletes={props.athletes}
                                                       modalDeleteAthlete={props.modalDeleteAthlete}
                                                       setNumberOfCategoriesForAthlete={setNumberOfCategoriesForAthlete}
                                                       setNameMember={setNameMember}/>}
                </div>}

            {props.modalDeleteAthlete &&
                <ModalDeleteMember numberOfCategoriesForAthlete={numberOfCategoriesForAthlete}
                                   removeJudge={props.removeJudge}
                                   gender={gender}
                                   judge={props.judge}
                                   athletes={props.athletes}
                                   setFilter={props.setFilter}
                                   member={member}
                                   setActive={setActive}
                                   activeCategory={props.activeCategory}
                                   removeRegisteredCategoryAtAthlete={props.removeRegisteredCategoryAtAthlete}
                                   removeAthlete={props.removeAthlete}
                                   idAthlete={idMember}
                                   setModalDeleteAthlete={props.setModalDeleteAthlete}
                                   modalDeleteAthlete={props.modalDeleteAthlete}
                                   nameMember={nameMember}/>}
        </div>
    )
}