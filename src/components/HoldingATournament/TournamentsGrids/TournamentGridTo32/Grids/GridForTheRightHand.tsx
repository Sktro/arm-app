import React from "react";
import {Ready} from "./Ready/Ready";
import {biathlonType, GSType, SettingsType} from "../../../../../App";
import {GridTo32} from "./GridTo32/GridTo32";
import {ButtonForTheWinner} from "./ButtonForTheWinner/ButtonForTheWinner";
import {Rollback} from "./Rollback/Rollback";
import styleGrids from "./grids.module.css"

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
    category: biathlonType
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
                <div className={styleGrids.buttonContain}>
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
                    <Rollback N={props.ourObj!.N}
                              hand={right}
                              id={props.id}
                              arrAthletes={props.arrAthletes}
                              GS={props.GS}
                              ourObj={props.ourObj}
                              setGS={props.setGS}
                              count={props.count}/>
                </div>
                {!props.ourObj?.theWrestlingIsOver &&
                    <Ready ourObj={props.ourObj}
                           countAthletes={props.countAthletes}
                           arrAthletes={props.arrAthletes}
                           GSAthletes={props.GSAthletes}/>}
            </>}
        </>

    )
}