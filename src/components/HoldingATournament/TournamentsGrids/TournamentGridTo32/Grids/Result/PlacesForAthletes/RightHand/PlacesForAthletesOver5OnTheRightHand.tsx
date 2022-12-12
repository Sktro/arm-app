import React from "react";
import {GSType} from "../../../../../../../../App";

type PlacesForAthletesOver5TypeRightHand = {
    arrAthletes: { idAthletes: string,
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


export const PlacesForAthletesOver5OnTheRightHand = (props: PlacesForAthletesOver5TypeRightHand) => {

    const placesForAthletesOver5At1_2OnTheRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].placeOnTheRightHand = 1
            props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 25
            props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].placeOnTheRightHand = 2
            props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 17
            props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
    }

    const placesForAthletesOver5At1_2inSuperFinalOnTheRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].placeOnTheRightHand = 1
            props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 25
            props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].placeOnTheRightHand = 2
            props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 17
            props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
    }

    const placesForAthletesOver5At3_6OnTheRightHand = () => {
        if (props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].placeOnTheRightHand = 3
            props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 9
            props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].placeOnTheRightHand = 4
            props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 5
            props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].placeOnTheRightHand = 5
            props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 3
            props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
        if (props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].placeOnTheRightHand = 6
            props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand = 2
            props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].pointsSum =
                props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand +
                props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].pointsOnTheRightHand
        }
    }
    if (props.ourObj?.theWrestlingIsOver){
        placesForAthletesOver5At3_6OnTheRightHand()
        if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
            placesForAthletesOver5At1_2OnTheRightHand()
        }
        if (props.ourObj?.superFinal === 2) {
            placesForAthletesOver5At1_2inSuperFinalOnTheRightHand()
        }
    }

    let maxW: number = 0

    for (let i = 0; i < props.countAthletes; i++) {
        if (props.arrAthletes[i].placeOnTheRightHand === null && props.ourObj?.winCount[i]! > maxW) {
            maxW = props.ourObj?.winCount[i]!
        }
    }

    let Num: number = 0
    let p: number
    let k: number
    let WC: number
    let pb: number

    const An = new Array(32).fill(0)
    const Bn = new Array(32).fill(0)

    for (let l = 1; l < maxW + 2; l++) {
        An.map(n => n = 0)
        Bn.map(n => n = 0)
        p = 6 + Num + 1
        k = 1
        for (let i = 0; i < props.countAthletes; i++) {
            if (props.ourObj?.winCount[i]! === maxW + 1 - l && props.arrAthletes[i].placeOnTheRightHand === null) {
                if (props.arrAthletes[props.ourObj?.LLos[i]!].placeOnTheRightHand === null) {
                    An[k] = p
                    p = p + 1
                } else {
                    An[k] = props.arrAthletes[props.ourObj?.LLos[i]!].placeOnTheRightHand
                }
                Bn[k] = i
                k = k + 1
            }
        }
        WC = k - 1
        for (let i = 1; i < WC + 1; i++) {
            for (let j = 1; j < WC; j++) {
                if (An[j] > An[j + 1]) {
                    p = An[j]
                    An[j] = An[j + 1]
                    An[j + 1] = p
                    pb = Bn[j]
                    Bn[j] = Bn[j + 1]
                    Bn[j + 1] = pb
                }
            }
        }
        for (let i = 1; i < WC + 1; i++) {
            if (props.arrAthletes[Bn[i]].placeOnTheRightHand !== undefined) {
                props.arrAthletes[Bn[i]].placeOnTheRightHand = 6 + Num + i
                props.arrAthletes[Bn[i]].pointsSum =
                    props.arrAthletes[Bn[i]].pointsOnTheLeftHand +
                    props.arrAthletes[Bn[i]].pointsOnTheRightHand
            }
        }
        Num = Num + WC
    }

    const sortArrayAthletes = props.arrAthletes.map(a => a).sort((a, b) => a.placeOnTheRightHand! - b.placeOnTheRightHand!)

    return (
        <div>
            <div>Правая рука:</div>
            {sortArrayAthletes.map(a => <div key={Number(a.idAthletes)}>{a.placeOnTheRightHand} место - {a.athlete} очки({a.pointsOnTheRightHand}) итого({a.pointsSum})</div>)}
        </div>
    )
}