import React from "react";
import {GSType} from "../../../../../../../../App";

export type PlacesForAthletesType = {
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
    GSAthletes: (number | null)[]
    count: number
    countAthletes: number
    ourObj: GSType | null | undefined
}

export const PlacesForAthletesTop5OnTheLeftHand = (props: PlacesForAthletesType) => {
    console.log('RESULT LEFT')
    const placesForAthletes3To5Top5 = () => {
        if (props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].placeOnTheLeftHand = 3
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsOnTheLeftHand = 9
        }
        if (props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].placeOnTheLeftHand = 4
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsOnTheLeftHand = 5
        }
        if (props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!]!.placeOnTheLeftHand = 5
            props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!]!.pointsOnTheLeftHand = 3
        }
    }

    const placesForAthletes1To2Top5 = () => {
        if (props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].placeOnTheLeftHand = 1
            props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand = 25
        }
        if (props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!]!.placeOnTheLeftHand = 2
            props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!]!.pointsOnTheLeftHand = 17
        }
    }

    const placesForAthletesAtTheSuperFinal1To2Top5 = () => {
        if (props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!]!.placeOnTheLeftHand = 1
            props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!]!.pointsOnTheLeftHand = 25
        }
        if (props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!]!.placeOnTheLeftHand = 2
            props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!]!.pointsOnTheLeftHand = 17
        }
    }

    placesForAthletes3To5Top5()
    if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
        placesForAthletes1To2Top5()
    }
    if (props.ourObj?.superFinal === 2) {
        placesForAthletesAtTheSuperFinal1To2Top5()
    }

    const sortArrayAthletes = props.arrAthletes.map(a => a).sort((a, b) => a.placeOnTheLeftHand! - b.placeOnTheLeftHand!)


    return (
        <div>
            <div>Левая рука:</div>
            {sortArrayAthletes.map(a => <div key={Number(a.idAthletes)}>{a.placeOnTheLeftHand} место - {a.athlete} очки ({a.pointsOnTheLeftHand})</div>)}
        </div>
    )
}