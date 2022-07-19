import React from "react";
import styleR from "../Registration.module.css";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type CategoriesListPropsType = {
    weightMale: readonly Option[]
    weightFemale: readonly Option[]
}


export const CategoriesList = (props: CategoriesListPropsType) => {

    const foundValuePlus = props.weightMale.find(el => el.value.slice(-1) === '+')
    const arrForSort = props.weightMale.filter(el => el.value.slice(-1) !== '+')
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
                    Список весовых категорий({props.weightMale.length > 0 && <span>М:{props.weightMale.length}</span>}
                    {(props.weightMale.length > 0 && props.weightFemale.length > 0) && <span>; </span>}
                    {props.weightFemale.length > 0 && <span>Ж:{props.weightFemale.length}</span>})
                </span>
            {props.weightMale.length > 0 && <div>Мужчины({props.weightMale.length}):</div>}
            <div>
                {result.map(wm => <button className={styleR.weightMale}>{wm.value}</button>).sort((a,b)=> a.props.value - b.props.value)}
            </div>
            {props.weightFemale.length > 0 && <div>Женщины({props.weightFemale.length}):</div>}
            <div>
                {props.weightFemale.map(wm => <button className={styleR.weightFemale}>{wm.value}</button>)}
            </div>
        </div>
        )

}