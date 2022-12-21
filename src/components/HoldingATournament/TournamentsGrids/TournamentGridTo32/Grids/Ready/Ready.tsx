import React from "react";
import {GSType} from "../../../../../../App";
import styleReady from './Rady.module.css'

type ReadyType = {
    arrAthletes: { idAthletes: string, athlete: string }[]
    GSAthletes: (number | null)[]
    ourObj: GSType | null | undefined
    countAthletes: number
}

export const Ready = (props: ReadyType) => {

    const visibilityText = props.countAthletes < 6 ? (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 1) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2 || props.ourObj?.N! === 2 * (props.countAthletes - 1)
        : (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 3 || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 1

    return (
        <>
            {!visibilityText && <div className={styleReady.readyContain}>
                <div className={styleReady.text}>Готовятся:</div>
                <div
                    className={styleReady.readyAthlete}>{props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N]!]?.athlete.length > 0 ? props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N]!]?.athlete : '???'}</div>
                <div className={styleReady.readyAthlete}>&</div>
                <div
                    className={styleReady.readyAthlete}>{props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N + 1]!]?.athlete.length > 0 ? props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N + 1]!]?.athlete : '???'}</div>
            </div>}
        </>

    )
}