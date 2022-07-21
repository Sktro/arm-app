import React from "react";
import {CategoryType} from "../../../App";
import styleLOF from './ListOfCategories.module.css'


type ListOfCategoriesType = {
    listOfCategories: CategoryType[]
}

export const ListOfCategories = (props: ListOfCategoriesType) => {

    const listOfCategoriesJSX = props.listOfCategories.map(cat => {
        const generalStyle = cat.gender === 'муж' ? styleLOF.gender : `${styleLOF.gender} ${styleLOF.genderF}`
        return <div className={styleLOF.containCategory}>
            <span className={generalStyle}>{cat.gender} </span>
            <span className={generalStyle}>{cat.categoryAthlete} </span>
            <span className={generalStyle}>({cat.age}): </span>
            <span className={cat.gender === 'муж' ? styleLOF.weights
                : `${styleLOF.weights} ${styleLOF.weightsF}`}>{cat.weightsCategory.map(w => w.value+' ')} </span>
        </div>
    })

    return (
        <div className={styleLOF.contain}>{listOfCategoriesJSX}</div>
    )
}