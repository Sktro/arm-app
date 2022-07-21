import React from "react";
import styleR from "../Registration.module.css";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type CategoriesListPropsType = {
    weightNewCategory: readonly Option[]
}


export const CategoriesList = (props: CategoriesListPropsType) => {

    const foundValuePlus = props.weightNewCategory.find(el => el.value.slice(-1) === '+')
    const arrForSort = props.weightNewCategory.filter(el => el.value.slice(-1) !== '+')
    const temp = arrForSort.map(v => v).sort((a, b) => Number(a.value) - Number(b.value))
    let result;
    if (foundValuePlus) {
        result = [...temp, foundValuePlus]
    } else {
        result = [...temp]
    }


    return (
        <div className={styleR.weightsCategories}>
                <span className={styleR.registrationDescription}>
                    Список весовых категорий()
                </span>
        </div>
        )

}