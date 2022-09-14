import React from "react";
import styleStartAndDeleteTournament from "./StartAndDeleteTournament.module.css";
import {Link} from "react-router-dom";

type StartAndDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
}

export const StartAndDeleteTournament = (props: StartAndDeleteTournamentPropsType) => {
    return (
        <div className={styleStartAndDeleteTournament.startAndDeleteTournamentButton}>
            <Link to={'/Leaderboard'}  className={styleStartAndDeleteTournament.startTournamentButton}>СТАРТ СОРЕВНОВАНИЯ</Link>
            <button className={styleStartAndDeleteTournament.deleteTournamentButton}
                    onClick={()=>props.setModalDelete(true)}>УДАЛИТЬ ТУРНИР</button>
        </div>
    )
}