import React, {useState} from "react";
import {biathlonType, GSType} from "../../../../../../App";
import styleRollback from "./Rollback.module.css";
import ReactTooltip from "react-tooltip";

type RollbackType = {
    N: number
    id: string | undefined
    setGS: (value: biathlonType[]) => void
    GS: biathlonType[] | null
    count: number
    ourObj: GSType | null | undefined
    arrAthletes: {
        idAthletes: string,
        athlete: string,
        athleteWeight: number,
        placeOnTheLeftHand: null | number,
        placeOnTheRightHand: null | number,
        pointsOnTheLeftHand: number,
        pointsOnTheRightHand: number,
        pointsSum: number
    }[]
    hand: 'leftHand' | 'rightHand'
    setFlag: (value: boolean) => void
    win: number[][]
    los: number[][]
    seq: number[][]
}


export const Rollback = (props: RollbackType) => {

    const [disable, setDisable] = useState(false)

    const previousMatch = (hand: 'leftHand' | 'rightHand') => {
        if (props.ourObj?.theWrestlingIsOver) {
            for (let i = 0; i < props.arrAthletes.length; i++) {
                props.arrAthletes[i].placeOnTheLeftHand = null          //CHANGE!
                props.arrAthletes[i].pointsOnTheLeftHand = 0
            }
        }
        props.setGS(props.GS!.map(ob => ob.id === props.id ? {
            ...ob,
            categoryClosed: false,
            [hand]: {
                ...ob[hand], N: ob[hand].N - 1,
                gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 2][props.count] - 1 ? null
                    : index === props.los[ob[hand].N - 2][props.count] - 1 ? null : gs),
                winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[props.win[ob[hand].N - 2][props.count] - 1]! ? count - 1 : count),
                LLos: ob[hand].LLos.map((o, index) => ob[hand].lLosS[ob[hand].N - 2][index]),
                app: ob[hand].app.map((o, index) => {
                    if (index === ob[hand].N - 2) {
                        o = null
                    }
                    if (index < ob[hand].N - 2) {
                        o = 1
                        for (let i = 0; i < ob[hand].N - 1; i++) {
                            if (i !== index) {
                                if (ob[hand].gs[2 * i] === ob[hand].gs[2 * index] || ob[hand].gs[2 * i] === ob[hand].gs[2 * index + 1] || ob[hand].gs[2 * i + 1] === ob[hand].gs[2 * index] || ob[hand].gs[2 * i + 1] === ob[hand].gs[2 * index + 1]) {
                                    if (index < i) {
                                        o = 0
                                    }
                                }
                            }
                        }
                    }
                    return o
                }),
                numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 2][props.count] - 1,
                theWrestlingIsOver: false,
                superFinal: 0
            }

        } : ob))
        props.setFlag(true)
        setDisable(true)
        setTimeout(() => setDisable(false), 800)
    }

    return (
        <div className={styleRollback.buttonRollback}>
            <button data-tip="Вернуться к предыдущему к поединку" disabled={props.N === 1 || disable}
                    onClick={() => previousMatch(props.hand)}>&#8249;&#8249;&#8249;</button>
            <ReactTooltip place="top" type="dark" effect="solid"/>
        </div>
    )
}