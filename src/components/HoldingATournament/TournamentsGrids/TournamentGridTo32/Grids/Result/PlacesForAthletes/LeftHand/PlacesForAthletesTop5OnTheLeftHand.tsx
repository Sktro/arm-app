import React from "react";
import {GSType, SettingsType} from "../../../../../../../../App";
import styleResult from "../../result.module.css"

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
    settings: SettingsType
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

    /*    const placesForAthletes3To5Top5Without5_6 = () => {
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
        }*/

    const placesForAthletes3To4Top5Without5_6 = () => {
        if (props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].placeOnTheLeftHand = 3
            props.arrAthletes[props.GSAthletes[(13 + 5 * (props.count - 1)) - 1]!].pointsOnTheLeftHand = 9
        }
        if (props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!] !== undefined) {
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].placeOnTheLeftHand = 4
            props.arrAthletes[props.GSAthletes[(17 + 5 * (props.count - 2)) - 1]!].pointsOnTheLeftHand = 5
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
    /*    const placesForAthletes1To2Top5Without5_6 = () => {
            if (props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!] !== undefined) {
                props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].placeOnTheLeftHand = 1
                props.arrAthletes[props.GSAthletes[(5 + 4 * (props.count)) - 1]!].pointsOnTheLeftHand = 25
            }
            if (props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!] !== undefined) {
                props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!]!.placeOnTheLeftHand = 2
                props.arrAthletes[props.GSAthletes[(6 + 4 * (props.count)) - 1]!]!.pointsOnTheLeftHand = 17
            }
        }*/

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

    /*    const placesForAthletesAtTheSuperFinal1To2Top5Without5_6 = () => {
            if (props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count))]!] !== undefined) {
                props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count))]!]!.placeOnTheLeftHand = 1
                props.arrAthletes[props.GSAthletes[(7 + 4 * (props.count))]!]!.pointsOnTheLeftHand = 25
            }
            if (props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count))]!] !== undefined) {
                props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count))]!]!.placeOnTheLeftHand = 2
                props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count))]!]!.pointsOnTheLeftHand = 17
            }
        }*/

    if (!props.settings.place5_6) {
        if (props.countAthletes < 6) {
            placesForAthletes3To5Top5()
            if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
                placesForAthletes1To2Top5()
            }
            if (props.ourObj?.superFinal === 2) {
                placesForAthletesAtTheSuperFinal1To2Top5()
            }
        } else {
            placesForAthletes3To4Top5Without5_6()
            if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
                placesForAthletes1To2Top5()
            }
            if (props.ourObj?.superFinal === 2) {
                placesForAthletesAtTheSuperFinal1To2Top5()
            }
        }
    } else {
        placesForAthletes3To5Top5()
        if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
            placesForAthletes1To2Top5()
        }
        if (props.ourObj?.superFinal === 2) {
            placesForAthletesAtTheSuperFinal1To2Top5()
        }
    }

    if (!props.settings.place5_6 && props.countAthletes >= 6) {
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
            An.map(() => 0)
            Bn.map(() => 0)
            p = 4 + Num + 1
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
                    props.arrAthletes[Bn[i]].placeOnTheLeftHand = 4 + Num + i
                }
            }
            Num = Num + WC
        }
        props.arrAthletes.map(el => {
            if (el.placeOnTheLeftHand === 5) {
                el.pointsOnTheLeftHand = 3
            }
            if (el.placeOnTheLeftHand === 6) {
                el.pointsOnTheLeftHand = 2
            }
            return el
        })

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