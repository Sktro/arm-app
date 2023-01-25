import React from "react";
import styleStartAndDeleteTournament from "./StartAndDeleteTournament.module.css";
import {Link} from "react-router-dom";
import {AthletesType, biathlonType, CategoryType, CreatedCategoryType} from "../../../App";

type StartAndDeleteTournamentPropsType = {
    setModalDelete: (value: boolean) => void
    athletes: AthletesType[]
    setGS: (value: biathlonType[]) => void
    GS: biathlonType[] | null
    arrCategory: CategoryType[]
    copyCategory: CreatedCategoryType[]
}

export const StartAndDeleteTournament = (props: StartAndDeleteTournamentPropsType) => {
    const startTournament = () => {
        if (props.GS) {
                        props.setGS(props.GS
                            .map((a, index) => ({
                                id: props.copyCategory[index]?.id,
                                leftHand: {
                                    hand: 'leftHand',
                                    gender: props.copyCategory[index].gender,
                                    title: props.copyCategory[index].title,
                                    id: props.copyCategory[index]?.id,
                                    gs: new Array(130).fill(null),
                                    LLos: new Array(64).fill(null),
                                    lLosS: new Array(256).fill(null).map(() => Array(64).fill(null)),
                                    app: new Array(256).fill(null),
                                    winCount: new Array(64).fill(0),
                                    N: 1,
                                    numberForUnderline: 0,
                                    underlineStyle: new Array(130).fill(''),
                                    theWrestlingIsOver: false,
                                    superFinal: 0,
                                    jer: false
                                },
                                rightHand: {
                                    hand: 'rightHand',
                                    gender: props.copyCategory[index].gender,
                                    title: props.copyCategory[index].title,
                                    id: props.copyCategory[index]?.id,
                                    gs: new Array(130).fill(null),
                                    LLos: new Array(64).fill(null),
                                    lLosS: new Array(256).fill(null).map(() => Array(64).fill(null)),
                                    app: new Array(256).fill(null),
                                    winCount: new Array(64).fill(0),
                                    N: 1,
                                    numberForUnderline: 0,
                                    underlineStyle: new Array(130).fill(''),
                                    theWrestlingIsOver: false,
                                    superFinal: 0,
                                    jer: false
                                },
                                categoryClosed: false
                            })))
        }
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