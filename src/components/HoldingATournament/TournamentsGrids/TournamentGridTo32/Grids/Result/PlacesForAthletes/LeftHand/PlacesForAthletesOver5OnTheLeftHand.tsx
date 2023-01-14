import React from "react";
import {GSType} from "../../../../../../../../App";
import styleResult from "../../result.module.css";

type PlacesForAthletesOver5Type = {
    arrAthletes: { idAthletes: string,
        athlete: string,
        athleteWeight: number,
        placeOnTheLeftHand: null | number,
        pointsOnTheLeftHand: number,
        pointsOnTheRightHand: number,
        pointsSum: number
    }[]
    GSAthletes: (number | null)[]
    count: number
    countAthletes: number
    ourObj: GSType | null | undefined
}

export const PlacesForAthletesOver5OnTheLeftHand = (props: PlacesForAthletesOver5Type) => {


    const placesForAthletesOver5At1_2 = () => {
        if (props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 1
            props.arrAthletes[props.GSAthletes[(23 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 25
        }
        if (props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 2
            props.arrAthletes[props.GSAthletes[(24 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 17
        }
    }

    const placesForAthletesOver5At1_2inSuperFinal = () => {
        if (props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 1
            props.arrAthletes[props.GSAthletes[(25 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 25
        }
        if (props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 2
            props.arrAthletes[props.GSAthletes[(26 + 4 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 17
        }
    }

    const placesForAthletesOver5At3_6 = () => {
        if (props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 3
            props.arrAthletes[props.GSAthletes[(30 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 9
        }
        if (props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 4
            props.arrAthletes[props.GSAthletes[(27 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 5
        }
        if (props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 5
            props.arrAthletes[props.GSAthletes[(28 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 3
        }
        if (props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].placeOnTheLeftHand = 6
            props.arrAthletes[props.GSAthletes[(29 + 5 * (props.count - 4)) - 1]!].pointsOnTheLeftHand = 2
        }
    }
    if (props.ourObj?.theWrestlingIsOver){
        placesForAthletesOver5At3_6()
        if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
            placesForAthletesOver5At1_2()
        }
        if (props.ourObj?.superFinal === 2) {
            placesForAthletesOver5At1_2inSuperFinal()
        }
    }

    let maxW: number = 0

    for (let i = 0; i < props.countAthletes; i++) {
        if (props.arrAthletes[i].placeOnTheLeftHand === null && props.ourObj?.winCount[i]! > maxW) {
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
        An.map(()=> 0)
        Bn.map(()=> 0)
        p = 6 + Num + 1
        k = 1
        for (let i = 0; i < props.countAthletes; i++) {
            if (props.ourObj?.winCount[i]! === maxW + 1 - l && props.arrAthletes[i].placeOnTheLeftHand === null) {
                if (props.arrAthletes[props.ourObj?.LLos[i]!].placeOnTheLeftHand === null) {
                    An[k] = p
                    p = p + 1
                } else {
                    An[k] = props.arrAthletes[props.ourObj?.LLos[i]!].placeOnTheLeftHand
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
            if (props.arrAthletes[Bn[i]].placeOnTheLeftHand !== undefined) {
                props.arrAthletes[Bn[i]].placeOnTheLeftHand = 6 + Num + i
            }
        }
        Num = Num + WC
    }

    const sortArrayAthletes = props.arrAthletes.map(a => a).sort((a, b) => a.placeOnTheLeftHand! - b.placeOnTheLeftHand!)

    return (
        <div className={styleResult.result}>
            <div className={styleResult.resultSpecific}>Левая рука</div>
            <ul className={styleResult.chapters}>
                <li>Место</li>
                <li>Спортсмен</li>
                <li>Очки</li>
            </ul>
            {sortArrayAthletes.map((a, index) => <ul className={styleResult.placeAthleteContain}
                                                     key={Number(a.idAthletes)}>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.placeOnTheLeftHand}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.athlete}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.pointsOnTheLeftHand}</li>
            </ul>)}
        </div>
    )
}
