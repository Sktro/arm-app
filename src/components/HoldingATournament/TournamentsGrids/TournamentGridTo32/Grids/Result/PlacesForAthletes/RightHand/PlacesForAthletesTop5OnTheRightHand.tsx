import React from "react";
import {GSType} from "../../../../../../../../App";

type PlacesForAthletesForRightHandType = {
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

export const PlacesForAthletesTop5OnTheRightHand = (props: PlacesForAthletesForRightHandType) => {
    console.log('RESULT RIGHT')
    const placesForAthletes3To5Top5onRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].placeOnTheRightHand = 3
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsOnTheRightHand = 9
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].placeOnTheRightHand = 4
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsOnTheRightHand = 5
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!].placeOnTheRightHand = 5
            props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!].pointsOnTheRightHand = 3
            props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(21 + 5 * (props.count - 3)) - 1]!].pointsOnTheRightHand
        }
    }

    const placesForAthletes1To2Top5onTheRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].placeOnTheRightHand = 1
            props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsOnTheRightHand = 25
            props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!].placeOnTheRightHand = 2
            props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!].pointsOnTheRightHand = 17
            props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!].pointsOnTheRightHand
        }
    }

    const placesForAthletesAtTheSuperFinal1To2Top5OnTheRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!].placeOnTheRightHand = 1
            props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!].pointsOnTheRightHand = 25
            props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].placeOnTheRightHand = 2
            props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].pointsOnTheRightHand = 17
            props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand
        }
    }

    placesForAthletes3To5Top5onRightHand()
    if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
        placesForAthletes1To2Top5onTheRightHand()
    }
    if (props.ourObj?.superFinal === 2) {
        placesForAthletesAtTheSuperFinal1To2Top5OnTheRightHand()
    }

    const sortArrayAthletes = props.arrAthletes.map(a => a).sort((a, b) => a.placeOnTheRightHand! - b.placeOnTheRightHand!)

    return (
        <div>
            <div>Правая рука:</div>
            {sortArrayAthletes.map(a => <div key={Number(a.idAthletes)}>{a.placeOnTheRightHand} место
                - {a.athlete} очки({a.pointsOnTheRightHand})</div>)}
        </div>
    )
}