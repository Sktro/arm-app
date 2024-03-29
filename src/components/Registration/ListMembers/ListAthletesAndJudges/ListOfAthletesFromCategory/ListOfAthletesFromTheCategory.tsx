import React from "react";
import styleListAthletes from "../ListAthletesAndJudges.module.css";
import styleListOfAthletesFromTheCategory from './ListOfAthletesFromCategory.module.css'
import styleListMembers from "../../ListMembers.module.css";
import {ToolTip} from "../../../common/Tooltip";
import {AthletesType} from "../../../../../App";


type ListOfAthletesFromTheCategoryType = {
    athletes: AthletesType[]
    activeCategory: { value: string, label: string, gender: string } | null
    setModalDeleteAthlete: (value: boolean) => void
    setMember: (value: string) => void
    setIdMember: (value: string) => void
    setNumberOfCategoriesForAthlete: (value: number) => void
    setNameMember: (value: string) => void
    modalDeleteAthlete: boolean
}

export const ListOfAthletesFromTheCategory = (props: ListOfAthletesFromTheCategoryType) => {
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
            const deleteAthleteFromCategory = (fullNameAthlete: string, athleteID: string, numberOfCategories: number) => {
                props.setModalDeleteAthlete(true)
                props.setMember('athleteInCategory')
                props.setNameMember(fullNameAthlete)
                props.setIdMember(athleteID)
                props.setNumberOfCategoriesForAthlete(numberOfCategories)
            }
            return (
                <div key={atl.id}>
                    {!props.modalDeleteAthlete && <div className={atl.gender === 'жен'
                        ? `${styleListAthletes.athletesM} ${styleListAthletes.athletesF}` : styleListAthletes.athletesM}>
                        <div className={styleListAthletes.fullName}><ToolTip id={'fullName'} value={atl.fullName}/></div>
                        <div className={styleListAthletes.team}><ToolTip id={'team'} value={atl.team}/></div>
                        <div className={styleListAthletes.regionJudge}>{atl.weight} кг</div>
                        <div className={styleListAthletes.regionJudge}>{atl.rank}</div>
                        <button className={styleListAthletes.removeButton}
                                onClick={() => deleteAthleteFromCategory(atl.fullName, atl.id, atl.categoryMember!.length)}>
                        </button>
                    </div>}
                </div>
            )
        })
    return (
        <>
            {filteredAthletesJSX.length >= 1 ? <div className={styleListOfAthletesFromTheCategory.nameOfCategory}>
                    <div>Категория спортсменов: {props.activeCategory?.value}кг</div>
                    <div>Зарегистрированно спортсменов: {filteredAthletesJSX.length}</div>
                </div>
                : <div className={styleListOfAthletesFromTheCategory.emptyOfCategory}>В категории: "{props.activeCategory?.value}кг" нет
                    зарегестрированных участников</div>}
            <div className={styleListMembers.membersContain}>{filteredAthletesJSX}</div>
        </>
    )
}