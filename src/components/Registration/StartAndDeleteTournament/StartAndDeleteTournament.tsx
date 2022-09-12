import React from "react";
import styleStartAndDeleteTournament from "./StartAndDeleteTournament.module.css";

type StartAndDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
}

export const StartAndDeleteTournament = (props: StartAndDeleteTournamentPropsType) => {
    return (
        <div className={styleStartAndDeleteTournament.startAndDeleteTournamentButton}>
            <button className={styleStartAndDeleteTournament.startTournamentButton}>СТАРТ СОРЕВНОВАНИЯ</button>
            <button className={styleStartAndDeleteTournament.deleteTournamentButton}
                    onClick={()=>props.setModalDelete(true)}>УДАЛИТЬ ТУРНИР</button>
        </div>
    )
}