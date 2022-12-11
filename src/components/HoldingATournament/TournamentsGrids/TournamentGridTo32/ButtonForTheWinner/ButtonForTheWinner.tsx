import React, {useState} from "react";
import styleButtonForTheWinner from "./ButtonForTheWinner.module.css";
import {biathlonType, GSType} from "../../../../../App";
import {winner} from "../../../../../twoDimensionalArray/winner";
import {loser} from "../../../../../twoDimensionalArray/loser";
import {Rollback} from "./Rollback/Rollback";


type ButtonForTheWinnerType = {
    ourObj: GSType | null | undefined
    GSAthletes: (number | null)[]
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
    setGS: (value: biathlonType[]) => void
    GS: biathlonType[] | null
    id: string | undefined
    count: number
    N: number
    countAthletes: number
    hand: 'leftHand' | 'rightHand'
}

export const ButtonForTheWinner = (props: ButtonForTheWinnerType) => {
    const [disable, setDisable] = useState<boolean>(false)

    const foo1 = (hand: 'leftHand' | 'rightHand') => {
        if ((props.count + 2 < 6 && props.N < 2 * (props.count + 2) - 2) || (props.count + 2 >= 6 && props.N < 2 * (props.count + 2) - 1)) { // ограничение
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === winner[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === loser[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
                    LLos: ob[hand].LLos.map((o, index) => index === ob[hand].gs[2 * ob[hand].N - 1] ? ob[hand].gs[2 * ob[hand].N - 2]! : o),
                    lLosS: ob[hand].lLosS.map((o, index) => {
                        if (index === ob[hand].N - 1) {
                            for (let i = 0; i < ob[hand].LLos.length; i++) {
                                o[i] = ob[hand].LLos[i]
                            }
                        }
                        return o
                    }),
                    winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[2 * ob[hand].N - 2] ? count + 1 : count),
                    N: ob[hand].N + 1,
                    app: ob[hand].app.map((o, index) => {
                        if (index + 1 === ob[hand].N) {
                            o = 1
                        }
                        if (index < ob[hand].N) {
                            if (ob[hand].gs[2 * index] === ob[hand].gs[2 * ob[hand].N] || ob[hand].gs[2 * index] === ob[hand].gs[2 * ob[hand].N + 1] || ob[hand].gs[2 * index + 1] === ob[hand].gs[2 * ob[hand].N] || ob[hand].gs[2 * index + 1] === ob[hand].gs[2 * ob[hand].N + 1]) {
                                o = 0
                            }
                        }
                        return o
                    })
                },

            } : ob))
            setDisable(true)
            setTimeout(() => setDisable(false), 800)

        } else if ((props.count + 2 < 6 && props.N === 2 * (props.count + 2) - 2) || (props.count + 2 >= 6 && props.N === 2 * (props.count + 2) - 1)) { // борьба окончена

            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === winner[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === loser[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
                    winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[2 * ob[hand].N - 2] ? count + 1 : count),
                    N: ob[hand].N + 1,
                    LLos: ob[hand].LLos.map((o, index) => index === ob[hand].gs[2 * ob[hand].N - 1] ? ob[hand].gs[2 * ob[hand].N - 2]! : o),
                    lLosS: ob[hand].lLosS.map((o, index) => {
                        if (index === ob[hand].N - 1) {
                            for (let i = 0; i < ob[hand].LLos.length; i++) {
                                o[i] = ob[hand].LLos[i]
                            }
                        }
                        return o
                    }),
                    theWrestlingIsOver: true
                }
            } : ob))

        } else if ((props.count + 2 < 6 && props.N === 2 * (props.count + 2) - 1) || (props.count + 2 >= 6 && props.N === 2 * (props.count + 2))) { // В Суперфинале победил первый

            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === winner[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === loser[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
                    winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[2 * ob[hand].N - 2] ? count + 1 : count),
                    N: ob[hand].N + 1,
                    LLos: ob[hand].LLos.map((o, index) => index === ob[hand].gs[2 * ob[hand].N - 1] ? ob[hand].gs[2 * ob[hand].N - 2]! : o),
                    lLosS: ob[hand].lLosS.map((o, index) => {
                        if (index === ob[hand].N - 1) {
                            for (let i = 0; i < ob[hand].LLos.length; i++) {
                                o[i] = ob[hand].LLos[i]
                            }
                        }
                        return o
                    }),
                    theWrestlingIsOver: true,
                    superFinal: 1
                }

            } : ob))
        }
    }

    const foo2 = (hand: 'leftHand' | 'rightHand') => {
        if ((props.count + 2 < 6 && props.N < 2 * (props.count + 2) - 1) || (props.count + 2 >= 6 && props.N < 2 * (props.count + 2))) { // ограничение
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === winner[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1]
                        : index === loser[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2] : gs), // победа в поединке
                    LLos: ob[hand].LLos.map((o, index) => index === ob[hand].gs[2 * ob[hand].N - 2] ? ob[hand].gs[2 * ob[hand].N - 1]! : o),
                    lLosS: ob[hand].lLosS.map((o, index) => {
                        if (index === ob[hand].N - 1) {
                            for (let i = 0; i < ob[hand].LLos.length; i++) {
                                o[i] = ob[hand].LLos[i]
                            }
                        }
                        return o
                    }),
                    winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[2 * ob[hand].N - 1] ? count + 1 : count),
                    N: ob[hand].N + 1,
                    app: ob[hand].app.map((o, index) => {
                        if (index + 1 === ob[hand].N) {
                            o = 1
                        }
                        if (index < ob[hand].N) {
                            if (ob[hand].gs[2 * index] === ob[hand].gs[2 * ob[hand].N] || ob[hand].gs[2 * index] === ob[hand].gs[2 * ob[hand].N + 1] || ob[hand].gs[2 * index + 1] === ob[hand].gs[2 * ob[hand].N] || ob[hand].gs[2 * index + 1] === ob[hand].gs[2 * ob[hand].N + 1]) {
                                o = 0
                            }
                        }
                        return o
                    })
                }

            } : ob))

            setDisable(true)
            setTimeout(() => setDisable(false), 800)

        } else if ((props.count + 2 < 6 && props.N === 2 * (props.count + 2) - 1) || (props.count + 2 >= 6 && props.N === 2 * (props.count + 2))) { // борьба окончена

            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === winner[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1]
                        : index === loser[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2] : gs), // победа в поединке
                    winCount: ob[hand].winCount.map((count, index) => index === ob[hand].gs[2 * ob[hand].N - 1] ? count + 1 : count),
                    LLos: ob[hand].LLos.map((o, index) => index === ob[hand].gs[2 * ob[hand].N - 2] ? ob[hand].gs[2 * ob[hand].N - 1]! : o),
                    lLosS: ob[hand].lLosS.map((o, index) => {
                        if (index === ob[hand].N - 1) {
                            for (let i = 0; i < ob[hand].LLos.length; i++) {
                                o[i] = ob[hand].LLos[i]
                            }
                        }
                        return o
                    }),
                    N: ob[hand].N + 1,
                    theWrestlingIsOver: true,
                    superFinal: 2
                }
            } : ob))

        }
    }
    console.log(props.hand, 'HAND')

    return (
        <div className={styleButtonForTheWinner.contain}>
            <div className={styleButtonForTheWinner.buttonContain}>
                {!props.ourObj?.theWrestlingIsOver && <>
                    <div className={styleButtonForTheWinner.text}>Борются:</div>
                    <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                        <button onClick={() => foo1(props.hand)} disabled={disable}>
                            <div className={styleButtonForTheWinner.circleRed}></div>
                            {props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N - 2]!]?.athlete}
                        </button>
                    </div>
                    <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                        <button onClick={() => foo2(props.hand)} disabled={disable}>
                            <div className={styleButtonForTheWinner.circleBlue}></div>
                            {props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N - 1]!]?.athlete}</button>
                    </div>
                </>}
                <Rollback N={props.N}
                          hand={props.hand}
                          id={props.id}
                          arrAthletes={props.arrAthletes}
                          GS={props.GS}
                          ourObj={props.ourObj}
                          setGS={props.setGS}
                          count={props.count}/>
                <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                    <button onClick={() => console.log(props.ourObj)}>LOG</button>
                </div>
            </div>
        </div>
    )
}