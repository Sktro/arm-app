import React from "react";
import style from "./Header.module.css"

type HeaderPropsType = {
    tournament: string
    date: string
    location: string
}


export const Header = (props: HeaderPropsType) => {

    return (
        <div className={style.header}>{props.tournament}({props.location}, {props.date})</div>
    )
}