import React, {ChangeEvent, useEffect} from "react";
import styleSettingsTournament from './SettingsTournament.module.css'
import {SettingsType, TableForArmType} from "../../../App";
import {SelectNumberTable} from "../../../common/Select/SelectNumberTable";

type SettingsTournamentType = {
    tableForArm: TableForArmType[]
    settings: SettingsType
    setError: (value: boolean) => void
    setSettings: (value: SettingsType) => void
}

export const SettingsTournament = (props: SettingsTournamentType) => {

    useEffect(()=> {
        if (!props.settings.wrestlingSeparately) {
            props.setSettings({...props.settings, leftHand: false, rightHand: false})
        } else {
            props.setSettings({...props.settings, leftHand: true, rightHand: true})
        }
    },[props.settings.wrestlingSeparately])

    useEffect(()=> {
        if (!props.settings.semifinalAndFinal) {
            props.setSettings({...props.settings, final: false, semifinal: false})
        } else {
            props.setSettings({...props.settings, final: true})
        }
    },[props.settings.semifinalAndFinal])

    const onChangeTable = (value: string) => {
        props.setSettings({...props.settings, tableNumb: value as TableForArmType})
    }

    const onChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, place5_6: e.currentTarget.checked})
    }

    const onChangeDoubleEvent = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, doubleEvent: e.currentTarget.checked})
        props.setError(false)
    }

    const onChangeWrestlingSeparately = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, wrestlingSeparately: e.currentTarget.checked})
        props.setError(false)
    }

    const onChangeSemifinalFinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, semifinalAndFinal: e.currentTarget.checked})
    }

    const onChangeLeftHand = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.settings.rightHand) {
            props.setSettings({...props.settings, leftHand: e.currentTarget.checked})
        }
    }

    const onChangeRightHand = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.settings.leftHand) {
            props.setSettings({...props.settings, rightHand: e.currentTarget.checked})
        }
    }

    const onChangeSemifinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, semifinal: e.currentTarget.checked})
    }

    const onChangeFinal = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettings({...props.settings, final: true})
    }

    return (
        <div className={styleSettingsTournament.containSettings}>
            <div className={styleSettingsTournament.settingsOn}>Кол-во столов:<SelectNumberTable
                options={props.tableForArm}
                placeholder={''}
                value={props.settings.tableNumb}
                onChangeOption={onChangeTable}/></div>
            <div
                className={props.settings.doubleEvent ? styleSettingsTournament.settingsOn : styleSettingsTournament.settingsOff}>Двоеборье<input
                type={"checkbox"}
                disabled={props.settings.wrestlingSeparately}
                checked={props.settings.doubleEvent}
                onChange={onChangeDoubleEvent}/></div>
            <div className={props.settings.place5_6 ? styleSettingsTournament.settingsOn : styleSettingsTournament.settingsOff}>Поединок
                за 5-6 место <input type={"checkbox"}
                                    checked={props.settings.place5_6}
                                    onChange={onChangePlace}/></div>
            <div
                className={props.settings.wrestlingSeparately ? styleSettingsTournament.settingsOn : styleSettingsTournament.settingsOff}>Борьба
                на каждую руку отдельно<input type={"checkbox"}
                                              disabled={props.settings.doubleEvent}
                                              onChange={onChangeWrestlingSeparately}
                                              checked={props.settings.wrestlingSeparately}/></div>
            {props.settings.wrestlingSeparately && <div className={styleSettingsTournament.settingsOn}>
                <div
                    className={props.settings.leftHand ? styleSettingsTournament.additionalSettingsOn : styleSettingsTournament.additionalSettingsOff}>Левая
                    рука: <input type="checkbox"
                                 onChange={onChangeLeftHand}
                                 checked={props.settings.leftHand}/></div>
                |
                <div
                    className={props.settings.rightHand ? styleSettingsTournament.additionalSettingsOn : styleSettingsTournament.additionalSettingsOff}>Правая
                    рука: <input type="checkbox"
                                 onChange={onChangeRightHand}
                                 checked={props.settings.rightHand}/></div>
            </div>}

            <div
                className={props.settings.semifinalAndFinal ? styleSettingsTournament.settingsOn : styleSettingsTournament.settingsOff}>Проводятся
                отдельно(полуфиналы, финалы): <input type={"checkbox"}
                                                     checked={props.settings.semifinalAndFinal}
                                                     onChange={onChangeSemifinalFinal}/>
            </div>
            {props.settings.semifinalAndFinal && <div className={styleSettingsTournament.settingsOn}>
                <div
                    className={props.settings.semifinal ? styleSettingsTournament.additionalSettingsOn : styleSettingsTournament.additionalSettingsOff}>Полуфиналы: <input
                    type="checkbox"
                    onChange={onChangeSemifinal}
                    checked={props.settings.semifinal}/></div>
                |
                <div
                    className={props.settings.final ? styleSettingsTournament.additionalSettingsOn : styleSettingsTournament.additionalSettingsOff}>Финалы: <input
                    type="checkbox"
                    onChange={onChangeFinal}
                    checked={props.settings.final}/></div>
            </div>}
        </div>
    )
}