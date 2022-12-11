import React from "react";
import {Ready} from "./Ready/Ready";
import {biathlonType, GSType, SettingsType} from "../../../../../App";
import {GridTo32} from "./GridTo32/GridTo32";
import {ButtonForTheWinner} from "../ButtonForTheWinner/ButtonForTheWinner";

type GridsType = {
    ourObj: GSType | null | undefined
    countAthletes: number
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
    count: number
    GSAthletes: (number | null)[]
    setGS: (value: biathlonType[]) => void
    GS: biathlonType[] | null
    settings: SettingsType
    id: string | undefined
}

export const GridForTheRightHand = (props: GridsType) => {

    const right = 'rightHand'

    return (
        <>
            <GridTo32 GSAthletes={props.GSAthletes}
                      count={props.count}
                      ourObj={props.ourObj}
                      id={props.id}
                      GS={props.GS}
                      setGS={props.setGS}
                      countAthletes={props.countAthletes}
                      arrAthletes={props.arrAthletes}
                      settings={props.settings}/>
            {props.arrAthletes.length > 1 && <>
                <ButtonForTheWinner id={props.id}
                                    hand={right}
                                    N={props.ourObj!.N}
                                    count={props.count}
                                    countAthletes={props.countAthletes}
                                    ourObj={props.ourObj}
                                    setGS={props.setGS}
                                    GS={props.GS}
                                    GSAthletes={props.GSAthletes}
                                    arrAthletes={props.arrAthletes}/>
                <Ready ourObj={props.ourObj} arrAthletes={props.arrAthletes} GSAthletes={props.GSAthletes}/>
            </>}
        </>

    )
}