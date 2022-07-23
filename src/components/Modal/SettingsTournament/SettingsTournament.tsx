import React from "react";
import styleMS from './SettingsTournament.module.css'
import {TableForArm} from "../../../App";
import {SelectNumberTable} from "../../../common/Select/SelectNumberTable";

type SettingsTournamentType = {
    tableForArm: TableForArm[]
}

export const SettingsTournament = (props: SettingsTournamentType) =>  {
    return (
        <div className={styleMS.containSettings}>
            <div className={styleMS.settings}>Кол-во столов:<SelectNumberTable options={props.tableForArm} placeholder={''}/> </div>
            <div className={styleMS.settings}>Поединок за 5-6 место: <input type={"checkbox"}/></div>
            <div className={styleMS.settings}>Двоеборье не проводится <input type={"checkbox"}/></div>
            <div className={styleMS.settings}>Проводятся отдельно(полуфиналы, финалы): <input type={"checkbox"}/></div>
        </div>
    )
}