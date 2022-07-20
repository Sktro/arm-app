import React from "react";
import style from "./Header.module.css"

type HeaderPropsType = {
    tournament: string
    startTournamentDate: string
    endTournamentDate:string
    location: string
}


export const Header = (props: HeaderPropsType) => {

    return (
        <div className={style.header}>{props.tournament}({props.location},
            {(props.startTournamentDate === props.endTournamentDate) && <span> {props.startTournamentDate}</span> }
            {(props.startTournamentDate !== props.endTournamentDate) && <span> {props.startTournamentDate} / {props.endTournamentDate}</span>})</div>
    )
}