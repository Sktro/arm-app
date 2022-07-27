import React, {ChangeEvent, useState} from "react";
import styleMS from './SettingsTournament.module.css'
import {SettingsType, TableForArm} from "../../../App";
import {SelectNumberTable} from "../../../common/Select/SelectNumberTable";

type SettingsTournamentType = {
    tableForArm: TableForArm[]
    settings: SettingsType
}

export const SettingsTournament = (props: SettingsTournamentType) => {

    const [table, setTable] = useState<TableForArm>(props.settings.tableNumb)
    const [place, setPlace] = useState<boolean>(props.settings.place5_6)
    const [wrestlingSeparately, setWrestlingSeparately] = useState<boolean>(props.settings.wrestlingSeparately)
    const [semifinalFinal, setSemifinalFinal] = useState<boolean>(props.settings.semifinalAndFinal)
    const [leftHand, setLeftHand] = useState<boolean>(props.settings.leftHand)
    const [rightHand, setRightHand] = useState<boolean>(props.settings.rightHand)
    const [semifinal, setSemifinal] = useState<boolean>(props.settings.semifinal)
    const [final, setFinal] = useState<boolean>(props.settings.final)

    const onChangeTable = (value: string) => {
        setTable(value as TableForArm)
        props.settings.tableNumb = value as TableForArm
    }

    const onChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
        props.settings.place5_6 = e.currentTarget.checked
        setPlace(props.settings.place5_6)
    }

    const onChangeWrestlingSeparately = (e: ChangeEvent<HTMLInputElement>) => {
        props.settings.wrestlingSeparately = e.currentTarget.checked
        setWrestlingSeparately(props.settings.wrestlingSeparately)
        if(wrestlingSeparately) {
            setLeftHand(props.settings.leftHand = false)
            setRightHand(props.settings.rightHand = false)
        } else {
            setLeftHand(props.settings.leftHand = true)
            setRightHand(props.settings.rightHand = true)
        }
    }

    const onChangeSemifinalFinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.settings.semifinalAndFinal = e.currentTarget.checked
        setSemifinalFinal(props.settings.semifinalAndFinal)
        if(semifinalFinal) {
            setFinal(props.settings.final = false)
            setSemifinal(props.settings.semifinal = false)
        } else {
            setFinal(props.settings.final = true)
        }
    }

    const onChangeLeftHand = (e: ChangeEvent<HTMLInputElement>) => {
        if(props.settings.rightHand){
            props.settings.leftHand = e.currentTarget.checked
            setLeftHand(props.settings.leftHand)
        }
    }

    const onChangeRightHand = (e: ChangeEvent<HTMLInputElement>) => {
        if(props.settings.leftHand){
            props.settings.rightHand = e.currentTarget.checked
            setRightHand(props.settings.rightHand)
        }
    }

    const onChangeSemifinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.settings.semifinal = e.currentTarget.checked
        setSemifinal(props.settings.semifinal)
    }

    const onChangeFinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.settings.final = e.currentTarget.checked
        setFinal(props.settings.final = true)
    }

    return (
        <div className={styleMS.containSettings}>
            <div className={styleMS.settingsOn}>Кол-во столов:<SelectNumberTable options={props.tableForArm}
                                                                               placeholder={''}
                                                                               value={table}
                                                                               onChangeOption={onChangeTable}/></div>
            <div className={place ? styleMS.settingsOn : styleMS.settingsOff}>Поединок за 5-6 место: <input type={"checkbox"}
                                                                            checked={place}
                                                                            onChange={onChangePlace}/></div>
            <div className={wrestlingSeparately ? styleMS.settingsOn : styleMS.settingsOff}>Двоеборье не проводится <input type={"checkbox"}
                                                                             onChange={onChangeWrestlingSeparately}
                                                                             checked={wrestlingSeparately}/></div>
            {wrestlingSeparately && <div className={styleMS.settingsOn}>
                <div className={leftHand ? styleMS.additionalSettingsOn : styleMS.additionalSettingsOff}>Левая рука: <input type="checkbox"
                                                                 onChange={onChangeLeftHand}
                                                                 checked={leftHand}/></div>
                |
                <div className={rightHand ? styleMS.additionalSettingsOn : styleMS.additionalSettingsOff}>Правая рука: <input type="checkbox"
                                                                  onChange={onChangeRightHand}
                                                                  checked={rightHand}/></div>
            </div>}

            <div className={semifinalFinal ? styleMS.settingsOn : styleMS.settingsOff}>Проводятся отдельно(полуфиналы, финалы): <input type={"checkbox"}
                                                                                              checked={semifinalFinal}
                                                                                              onChange={onChangeSemifinalFinal}/>
            </div>
            {semifinalFinal && <div className={styleMS.settingsOn}>
                <div className={semifinal ? styleMS.additionalSettingsOn : styleMS.additionalSettingsOff}>Полуфиналы: <input type="checkbox"
                                                                 onChange={onChangeSemifinal}
                                                                 checked={semifinal}/></div>
                |
                <div className={final ? styleMS.additionalSettingsOn : styleMS.additionalSettingsOff}>Финалы: <input type="checkbox"
                                                             onChange={onChangeFinal}
                                                             checked={final}/></div>
            </div>}
        </div>
    )
}