import React from "react";
import styleModalError from "./ModalError.module.css";

type ErrorType = {
    error: boolean
    tournament: string
    location: string
}

export const ModalError = (props: ErrorType) => {
    return (
        <>
            {props.error && (props.tournament === "" || props.location === ''
                ? <span className={styleModalError.error}>заполните обязательные поля( * )</span>
                : <span className={styleModalError.error}>Не добалено ни одной весовой категории</span>)}
    </>

    )
}