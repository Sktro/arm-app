import React, {useEffect, useState} from "react";
import styleButtonForTheWinner from "./ButtonForTheWinner.module.css";
import {biathlonType, GSType, SettingsType} from "../../../../../../App";


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
    category: biathlonType
    flag: boolean
    setFlag: (value: boolean) => void
    win: number[][]
    los: number[][]
    seq: number[][]
    settings: SettingsType
}

export const ButtonForTheWinner = (props: ButtonForTheWinnerType) => {
    const [disable, setDisable] = useState<boolean>(false)

    useEffect(() => {
        if (!props.flag) {
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [props.hand]: {
                    ...ob[props.hand],
                    underlineStyle: ob[props.hand].underlineStyle.map((e, i) => {
                        if (ob[props.hand].numberForUnderline === 0) {
                            return e
                        } else if (i === ob[props.hand].numberForUnderline) {
                            return 'underline'
                        } else if (e !== 'underline') {
                            return ''
                        } else if (e === 'underline') {
                            return 'underline'
                        } else {
                            return e
                        }
                    })
                }
            } : ob))
        }

        if (props.flag) {
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [props.hand]: {
                    ...ob[props.hand],
                    underlineStyle: ob[props.hand].underlineStyle.map((e, i) => {
                        if (i === ob[props.hand].numberForUnderline) {
                            return ''
                        }
                        if (i === ob[props.hand].numberForUnderline + 1) {
                            return ''
                        }
                        if (e === '') {
                            return ''
                        }
                        if (e === 'underline') {
                            return 'underline'
                        } else {
                            return e
                        }
                    })
                }
            } : ob))

        }
        if (props.ourObj?.N === 1) {
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [props.hand]: {
                    ...ob[props.hand],
                    underlineStyle: ob[props.hand].underlineStyle.map(() => ''),
                    numberForUnderline: 0
                }
            } : ob))
            props.setFlag(false)
        }

    }, [props.ourObj?.numberForUnderline, props.flag])

    const superFinalEnd = props.settings.place5_6 ? (props.count + 2 < 6 && props.N === 2 * (props.count + 2) - 1) || (props.count + 2 >= 6 && props.N === 2 * (props.count + 2))
        : props.N === 2 * (props.count + 2) - 1

    const fightNotEnd2btn = props.settings.place5_6 ? (props.count + 2 < 6 && props.N < 2 * (props.count + 2) - 1) || (props.count + 2 >= 6 && props.N < 2 * (props.count + 2))
        : props.N < 2 * (props.count + 2) - 1

    const fightNotEnd1btn = props.settings.place5_6 ? (props.count + 2 < 6 && props.N < 2 * (props.count + 2) - 2) || (props.count + 2 >= 6 && props.N < 2 * (props.count + 2) - 1)
        : props.N < 2 * (props.count + 2) - 2

    const finalEnd1btn = props.settings.place5_6 ? (props.count + 2 < 6 && props.N === 2 * (props.count + 2) - 2) || (props.count + 2 >= 6 && props.N === 2 * (props.count + 2) - 1)
        : props.N === 2 * (props.count + 2) - 2

    const foo1 = (hand: 'leftHand' | 'rightHand') => {
        if (fightNotEnd1btn) { // ограничение
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === props.los[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
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
                    numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 1][props.count] - 1,
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
            props.setFlag(false)
            setDisable(true)
            setTimeout(() => setDisable(false), 800)

        } else if (finalEnd1btn) { // борьба окончена

            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                categoryClosed: hand === 'rightHand',
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === props.los[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
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
                    numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 1][props.count] - 1,
                    theWrestlingIsOver: true
                }
            } : ob))
            props.setFlag(false)
        } else if (superFinalEnd) { // В Суперфинале победил первый

            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                categoryClosed: hand === 'rightHand',
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2]
                        : index === props.los[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1] : gs),
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
                    numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 1][props.count] - 1,
                    theWrestlingIsOver: true,
                    superFinal: 1
                }

            } : ob))
            props.setFlag(false)
        }
    }

    const foo2 = (hand: 'leftHand' | 'rightHand') => {
        if (fightNotEnd2btn) { // ограничение
            console.log('YO2')
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1]
                        : index === props.los[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2] : gs), // победа в поединке
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
                    numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 1][props.count],
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
            props.setFlag(false)
            setDisable(true)
            setTimeout(() => setDisable(false), 800)

        } else if (superFinalEnd) { // борьба окончена
            console.log('YO')
            props.setGS(props.GS!.map(ob => ob.id === props.id ? {
                ...ob,
                categoryClosed: hand === 'rightHand',
                [hand]: {
                    ...ob[hand],
                    gs: ob[hand].gs.map((gs, index) => index === props.win[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 1]
                        : index === props.los[ob[hand].N - 1][props.count] - 1 ? ob[hand].gs[2 * ob[hand].N - 2] : gs), // победа в поединке
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
                    numberForUnderline: ob[hand].numberForUnderline = 2 * props.seq[ob[hand].N - 1][props.count],
                    N: ob[hand].N + 1,
                    theWrestlingIsOver: true,
                    superFinal: 2
                }
            } : ob))
            props.setFlag(false)
        }
    }

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
            </div>
        </div>
    )
}