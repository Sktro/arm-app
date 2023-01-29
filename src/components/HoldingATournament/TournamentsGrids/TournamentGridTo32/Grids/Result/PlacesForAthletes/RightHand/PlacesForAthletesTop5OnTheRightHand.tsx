import React from "react";
import {GSType, SettingsType} from "../../../../../../../../App";
import styleResult from "../../result.module.css";

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
    settings: SettingsType
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

    const placesForAthletes3To4Top5onRightHandWithout5_6 = () => {
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
                props.arrAthletes[props.GSAthletes[(8 + 4 * (props.count)) - 1]!].pointsOnTheRightHand
        }
    }

    if (!props.settings.place5_6) {
        if (props.countAthletes < 6) {
            console.log('TYT')
            placesForAthletes3To5Top5onRightHand()
            if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
                placesForAthletes1To2Top5onTheRightHand()
            }
            if (props.ourObj?.superFinal === 2) {
                placesForAthletesAtTheSuperFinal1To2Top5OnTheRightHand()
            }
        } else {
            console.log('TAM')
            placesForAthletes3To4Top5onRightHandWithout5_6()
            if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
                console.log('1-2', props.ourObj.hand, props.ourObj.superFinal)
                placesForAthletes1To2Top5onTheRightHand()
            }
            if (props.ourObj?.superFinal === 2) {
                placesForAthletesAtTheSuperFinal1To2Top5OnTheRightHand()
            }
        }
    } else {
        console.log('TRUE 5-6')
        placesForAthletes3To5Top5onRightHand()
        if (props.ourObj?.superFinal === 0 || props.ourObj?.superFinal === 1) {
            placesForAthletes1To2Top5onTheRightHand()
        }
        if (props.ourObj?.superFinal === 2) {
            placesForAthletesAtTheSuperFinal1To2Top5OnTheRightHand()
        }
    }

    if (!props.settings.place5_6 && props.countAthletes >= 6) {
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
            An.map(() => 0)
            Bn.map(() => 0)
            p = 4 + Num + 1
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
                    props.arrAthletes[Bn[i]].placeOnTheRightHand = 4 + Num + i
                    props.arrAthletes[Bn[i]].pointsSum =
                        props.arrAthletes[Bn[i]].pointsOnTheLeftHand +
                        props.arrAthletes[Bn[i]].pointsOnTheRightHand
                }
            }
            Num = Num + WC
        }
        props.arrAthletes.map(el => {
            if (el.placeOnTheRightHand === 5) {
                el.pointsOnTheRightHand = 3
                el.pointsSum = el.pointsOnTheLeftHand + el.pointsOnTheRightHand
            }
            if (el.placeOnTheRightHand === 6) {
                el.pointsOnTheRightHand = 2
                el.pointsSum = el.pointsOnTheLeftHand + el.pointsOnTheRightHand
            }
            return el
        })

    }


    const sortArrayAthletes = props.arrAthletes.map(a => a).sort((a, b) => a.placeOnTheRightHand! - b.placeOnTheRightHand!)

    return (
        <div className={styleResult.result}>
            <div className={styleResult.resultSpecific}>Правая рука</div>
            <ul className={styleResult.chapters}>
                <li>Место</li>
                <li>Спортсмен</li>
                <li>Очки</li>
            </ul>
            {sortArrayAthletes.map((a, index) => <ul key={Number(a.idAthletes)}
                                                     className={styleResult.placeAthleteContain}>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.placeOnTheRightHand}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.athlete}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.pointsOnTheRightHand}</li>
            </ul>)}
        </div>
    )
}