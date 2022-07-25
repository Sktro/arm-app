import React from "react";
import {AgeType, CategoryAthleteType, CategoryType, GenderType} from "../../../../App";
import styleLOF from './ListOfCategories.module.css'
import {Option} from "../../../../common/WeightsSelect/WeightsSelect";


type ListOfCategoriesType = {
    listOfCategories: CategoryType[]
    deleteCategories: (id: string) => void
    setGender: (value: GenderType) => void
    setAge: (value: AgeType) => void
    setCategoryAthletes: (value: CategoryAthleteType) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setErrorCategory: (value: boolean) => void
    sortCategory: (value: CategoryType) => Option[]
}

export const ListOfCategories = (props: ListOfCategoriesType) => {

    const listOfCategoriesJSX = props.listOfCategories.map(cat => {
        const generalStyle = cat.gender === 'муж' ? styleLOF.gender : `${styleLOF.gender} ${styleLOF.genderF}`
        const editCategory = (cat: CategoryType) => {
            props.setGender(cat.gender)
            props.setAge(cat.age)
            props.setCategoryAthletes(cat.categoryAthlete)
            props.setWeightNewCategory(props.sortCategory(cat))
            props.deleteCategories(cat.id)
            props.setErrorCategory(false)
    }
        return <div key={cat.id} className={styleLOF.containCategory}>
            <div title={"Редактировать категорию"} className={styleLOF.deleteCategories} onClick={()=>editCategory(cat)}> </div>
            <span className={generalStyle}>{cat.gender} </span>
            <span className={generalStyle}>{cat.categoryAthlete} </span>
            <span className={generalStyle}>({cat.age}): </span>
            <span className={cat.gender === 'муж' ? styleLOF.weights
                : `${styleLOF.weights} ${styleLOF.weightsF}`}>{props.sortCategory(cat).map((w, index) => (index ? '; ': '') + w.value)}</span>
        </div>
    })

    return (
        <div className={styleLOF.contain}>{listOfCategoriesJSX}</div>
    )
}