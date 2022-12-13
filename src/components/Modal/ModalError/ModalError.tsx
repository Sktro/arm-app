import React from "react";
import styleModalError from "./ModalError.module.css";
import {CategoryType, SettingsType} from "../../../App";

type ErrorType = {
    error: boolean
    tournament: string
    location: string
    arrCategory: CategoryType[]
    settings: SettingsType
}

export const ModalError = (props: ErrorType) => {

    const errorInfo = props.tournament === "" || props.location === '' ?
        <span className={styleModalError.error}>заполните обязательные поля( * )</span> : ''
    const errorCategory = props.arrCategory.length === 0
        ? <span className={styleModalError.error}>Не добалено ни одной весовой категории</span> : ''
    const errorSettings = !props.settings.doubleEvent && !props.settings.wrestlingSeparately
        ? <span className={styleModalError.error}>Выберите одну из систем проведения турнира</span> : ''

    return (
        <>
            {props.error && (errorInfo || errorCategory || errorSettings)}
    </>

    )
}