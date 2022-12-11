import React from "react";
import {PlacesForAthletesTop5OnTheLeftHand} from "./PlacesForAthletes/LeftHand/PlacesForAthletesTop5OnTheLeftHand";
import {PlacesForAthletesOver5OnTheLeftHand} from "./PlacesForAthletes/LeftHand/PlacesForAthletesOver5OnTheLeftHand";
import {biathlonType} from "../../../../../../App";
import styleResult from "./result.module.css"
import {PlacesForAthletesTop5OnTheRightHand} from "./PlacesForAthletes/RightHand/PlacesForAthletesTop5OnTheRightHand";
import {PlacesForAthletesOver5OnTheRightHand} from "./PlacesForAthletes/RightHand/PlacesForAthletesOver5OnTheRightHand";

type ResultType = {
    ourObj: biathlonType
    countAthletes: number
    GSAthletesForLeftHand: (number | null)[]
    GSAthletesForRightHand: (number | null)[]
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
}

export const Result = (props: ResultType) => {
    console.log('result')
    return (
        <>
            <div className={styleResult.containResult}>
                
                {props.ourObj?.leftHand.theWrestlingIsOver && props.countAthletes < 6 &&
                    <PlacesForAthletesTop5OnTheLeftHand GSAthletes={props.GSAthletesForLeftHand}
                                                        ourObj={props.ourObj.leftHand}
                                                        countAthletes={props.countAthletes}
                                                        arrAthletes={props.arrAthletes}
                                                        count={props.count}/>
                }
                {props.ourObj?.leftHand.theWrestlingIsOver && props.countAthletes >= 6 &&
                    <PlacesForAthletesOver5OnTheLeftHand GSAthletes={props.GSAthletesForLeftHand}
                                                         ourObj={props.ourObj.leftHand}
                                                         countAthletes={props.countAthletes}
                                                         arrAthletes={props.arrAthletes}
                                                         count={props.count}/>
                }
                {props.ourObj?.rightHand.theWrestlingIsOver && props.countAthletes < 6 &&
                    <PlacesForAthletesTop5OnTheRightHand GSAthletes={props.GSAthletesForRightHand}
                                                         ourObj={props.ourObj.rightHand}
                                                         countAthletes={props.countAthletes}
                                                         arrAthletes={props.arrAthletes}
                                                         count={props.count}/>
                }
                {props.ourObj?.rightHand.theWrestlingIsOver && props.countAthletes >= 6 &&
                    <PlacesForAthletesOver5OnTheRightHand GSAthletes={props.GSAthletesForRightHand}
                                                         ourObj={props.ourObj.rightHand}
                                                         countAthletes={props.countAthletes}
                                                         arrAthletes={props.arrAthletes}
                                                         count={props.count}/>
                }
            </div>
        </>
    )
}