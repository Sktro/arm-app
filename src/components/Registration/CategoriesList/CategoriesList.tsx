import React from "react";
import styleR from "../Registration.module.css";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type CategoriesListPropsType = {
    weightMale: readonly Option[]
    weightFemale: readonly Option[]
}


export const CategoriesList = (props: CategoriesListPropsType) => {

    return (
        <div className={styleR.weightsCategories}>
                <span className={styleR.registrationDescription}>
                    Список весовых категорий({props.weightMale.length + props.weightFemale.length}):
                </span>
            <div>Мужчины({props.weightMale.length}):</div>
            <div>
                {props.weightMale.map(wm => <button className={styleR.weightMale}>{wm.value}</button>)}
            </div>
            <div>Женщины({props.weightFemale.length}):</div>
            <div>
                {props.weightFemale.map(wm => <button className={styleR.weightFemale}>{wm.value}</button>)}
            </div>
        </div>
        )

}