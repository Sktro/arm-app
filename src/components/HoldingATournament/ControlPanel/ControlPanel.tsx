import React from "react";
import styleControlPanel from "./ControlPanel.module.css";
import {AthletesType, GSType} from "../../../App";
import {NavLink} from "react-router-dom";

type ControlPanelType = {
    athletes: AthletesType[]
    GS: GSType[] | null
}

export const ControlPanel = (props: ControlPanelType) => {

    const arrCategory = (gender: string) => {
        let newArr = []
        let arrCategories = props.GS
        for (let i = 0; i < arrCategories!.length; i++ ) {
            if(arrCategories![i].gender === gender) {
                newArr.push(arrCategories![i])
            }
        }
        return newArr
    }

    const activeClass = (navData: any) => navData.isActive ? styleControlPanel.buttonCategoryOn : styleControlPanel.buttonCategory

    const categoryMale = arrCategory('муж').map(c => <NavLink className={activeClass} to={`table/${c.id}`} key={c.id}>{c.title}</NavLink>)
    const categoryFemale = arrCategory('жен').map(c => <NavLink className={activeClass} to={`table/${c.id}`} key={c.id}>{c.title}</NavLink>)

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