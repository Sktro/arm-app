import React from "react";
import styleStartAndDeleteTournament from "./StartAndDeleteTournament.module.css";
import {Link} from "react-router-dom";
import {AthletesType, CategoryType, GSType} from "../../../App";
import {createdCategories} from "../../../App";

type StartAndDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
    athletes: AthletesType[]
    setGS: (value: GSType[]) => void
    GS: GSType[] | null
    arrCategory: CategoryType[]
}

export const StartAndDeleteTournament = (props: StartAndDeleteTournamentPropsType) => {

    const startTournament = () => {
        if (props.GS) {
            props.setGS(props.GS
                .map((a, index) => ({
                    gender: createdCategories[index].gender,
                    title: createdCategories[index].title,
                    id: createdCategories[index]?.id,
                    gs: new Array(130).fill(null),
                    LLos: new Array(64).fill(null),
                    lLosS: new Array(256).fill(null).map(() => Array(64).fill(null)),
                    app: new Array(256).fill(null),
                    winCount: new Array(64).fill(null),
                    N: 1
                })))
        }
        props.athletes.sort(() => Math.random() - 0.5)
    }
    return (
        <div className={styleStartAndDeleteTournament.startAndDeleteTournamentButton}>
            <Link to={'/holdingATournament'}
                  onClick={startTournament}
                  className={styleStartAndDeleteTournament.startTournamentButton}>СТАРТ СОРЕВНОВАНИЯ
            </Link>
            <button className={styleStartAndDeleteTournament.deleteTournamentButton}
                    onClick={() => props.setModalDelete(true)}>УДАЛИТЬ ТУРНИР
            </button>
        </div>
    )
}