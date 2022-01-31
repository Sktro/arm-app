import React from "react";
import styleR from "../Registration.module.css";

type StartAndDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
}

export const StartAndDeleteTournament = (props: StartAndDeleteTournamentPropsType) => {
    return (
        <div className={styleR.startAndDeleteTournamentButton}>
            <button className={styleR.startTournamentButton}>СТАРТ СОРЕВНОВАНИЯ</button>
            <button className={styleR.deleteTournamentButton}
                    onClick={()=>props.setModalDelete(true)}>УДАЛИТЬ ТУРНИР</button>
        </div>
    )
}