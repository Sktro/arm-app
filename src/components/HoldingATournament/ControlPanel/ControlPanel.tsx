import React from "react";
import styleControlPanel from "./ControlPanel.module.css";
import {AthletesType, CategoryType, CreatedCategoryType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {NavLink} from "react-router-dom";

type ControlPanelType = {
    athletes: AthletesType[]
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
    createdCategories: CreatedCategoryType[]
}

export const ControlPanel = (props: ControlPanelType) => {

    const arrCategory = (gender: string) => {
        let newArr = []
        let arrCategories = props.createdCategories
        for (let i = 0; i < arrCategories.length; i++ ) {
            if(arrCategories[i].gender === gender) {
                newArr.push(arrCategories[i])
            }
        }
        return newArr
    }

    const activeClass = (navData: any) => navData.isActive ? styleControlPanel.buttonCategoryOn : styleControlPanel.buttonCategory

    const categoryMale = arrCategory('муж').map(c => <NavLink className={activeClass} to={`table/:${c.id}`} key={c.id}>{c.title}</NavLink>)
    const categoryFemale = arrCategory('жен').map(c => <NavLink className={activeClass} to={`table/:${c.id}`} key={c.id}>{c.title}</NavLink>)

    return (
        <div className={styleControlPanel.controlPanelContain}>
            <div className={styleControlPanel.nameControlPanel}>Управление турниром</div>
            <div>
                <div>Мужские категории:</div>
                <div>{categoryMale}</div>
            </div>
            <div>Женские категории:</div>
            <div>{categoryFemale}</div>
        </div>
        )

}