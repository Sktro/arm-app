import React from "react";
import styleResult from "../../result.module.css";

type PlaceSumType = {
    countAthletes: number
    arrAthletes: {
        idAthletes: string,
        athlete: string,
        athleteWeight: number,
        placeOnTheLeftHand: null | number,
        placeOnTheRightHand: null | number,
        placeForDoubleEvent: number,
        pointsOnTheLeftHand: number,
        pointsOnTheRightHand: number,
        pointsSum: number
    }[]
}


export const PlaceSum = (props: PlaceSumType) => {
// добавить условие, если один из спортсменов не боролся на одной руке
    // добавить условие, преимущество отдается тому, кто занял на одной из рук более высокое место
    const athletesArrayCopy = props.arrAthletes.map(a => a)
    let flagEqualWeights: boolean = false

    for (let j = 0; j < props.countAthletes; j++) {
        for (let i = 0; i < props.countAthletes - 1; i++) {
            if (athletesArrayCopy[i].pointsSum < athletesArrayCopy[i + 1].pointsSum) {
                let rt = athletesArrayCopy[i]
                athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                athletesArrayCopy[i + 1] = rt
                athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
            }
            if (athletesArrayCopy[i].pointsSum !== 0 && athletesArrayCopy[i + 1].pointsSum !== 0 && athletesArrayCopy[i].pointsSum === athletesArrayCopy[i + 1].pointsSum
                && (athletesArrayCopy[i].placeOnTheLeftHand === athletesArrayCopy[i + 1].placeOnTheRightHand && athletesArrayCopy[i].placeOnTheRightHand === athletesArrayCopy[i + 1].placeOnTheLeftHand) &&
                athletesArrayCopy[i].athleteWeight > athletesArrayCopy[i + 1].athleteWeight) {
                console.log('1')
                let rt = athletesArrayCopy[i]
                athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                athletesArrayCopy[i + 1] = rt
                athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
            }
            if (athletesArrayCopy[i].pointsSum !== 0 && athletesArrayCopy[i + 1].pointsSum !== 0 && athletesArrayCopy[i].pointsSum === athletesArrayCopy[i + 1].pointsSum
                && (athletesArrayCopy[i].placeOnTheLeftHand === athletesArrayCopy[i + 1].placeOnTheRightHand && athletesArrayCopy[i].placeOnTheRightHand === athletesArrayCopy[i + 1].placeOnTheLeftHand) &&
                athletesArrayCopy[i].athleteWeight === athletesArrayCopy[i + 1].athleteWeight) {
                console.log('2')
                flagEqualWeights = true
            }
            if (athletesArrayCopy[i].pointsSum !== 0 && athletesArrayCopy[i + 1].pointsSum !== 0 && athletesArrayCopy[i].pointsSum === athletesArrayCopy[i + 1].pointsSum
                && ((athletesArrayCopy[i].placeOnTheLeftHand === athletesArrayCopy[i + 1].placeOnTheRightHand && athletesArrayCopy[i].placeOnTheRightHand !== athletesArrayCopy[i + 1].placeOnTheLeftHand)
                    || (athletesArrayCopy[i + 1].placeOnTheLeftHand === athletesArrayCopy[i].placeOnTheRightHand && athletesArrayCopy[i + 1].placeOnTheRightHand !== athletesArrayCopy[i].placeOnTheLeftHand))
                && ((athletesArrayCopy[i].placeOnTheLeftHand! + athletesArrayCopy[i].placeOnTheRightHand!) > (athletesArrayCopy[i + 1].placeOnTheLeftHand! + athletesArrayCopy[i + 1].placeOnTheRightHand!))) {
                console.log('3')
                let rt = athletesArrayCopy[i]
                athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                athletesArrayCopy[i + 1] = rt
                athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
            }
            if (athletesArrayCopy[i].pointsSum !== 0 && athletesArrayCopy[i + 1].pointsSum !== 0 && athletesArrayCopy[i].pointsSum === athletesArrayCopy[i + 1].pointsSum
                && (((athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheRightHand!))
                    || ((athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheRightHand!)))) {
                console.log('4')
                let rt = athletesArrayCopy[i]
                athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                athletesArrayCopy[i + 1] = rt
                athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
            }
            if (athletesArrayCopy[i].pointsSum === 0 && athletesArrayCopy[i + 1].pointsSum === 0) {
                if ((athletesArrayCopy[i].placeOnTheLeftHand! + athletesArrayCopy[i].placeOnTheRightHand!) === (athletesArrayCopy[i + 1].placeOnTheLeftHand! + athletesArrayCopy[i + 1].placeOnTheRightHand!)) {
                    if ((athletesArrayCopy[i].placeOnTheLeftHand === athletesArrayCopy[i + 1].placeOnTheRightHand && athletesArrayCopy[i].placeOnTheRightHand === athletesArrayCopy[i + 1].placeOnTheLeftHand) &&
                        athletesArrayCopy[i].athleteWeight > athletesArrayCopy[i + 1].athleteWeight) {
                        console.log('5')
                        let rt = athletesArrayCopy[i]
                        athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                        athletesArrayCopy[i + 1] = rt
                        athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
                    }
                    if ((((athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheRightHand!))
                        || ((athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheRightHand!)))) {
                        console.log('6')
                        let rt = athletesArrayCopy[i]
                        athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                        athletesArrayCopy[i + 1] = rt
                        athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
                    }
                } else {
                    if (((athletesArrayCopy[i].placeOnTheLeftHand === athletesArrayCopy[i + 1].placeOnTheRightHand && athletesArrayCopy[i].placeOnTheRightHand !== athletesArrayCopy[i + 1].placeOnTheLeftHand)
                            || (athletesArrayCopy[i + 1].placeOnTheLeftHand === athletesArrayCopy[i].placeOnTheRightHand && athletesArrayCopy[i + 1].placeOnTheRightHand !== athletesArrayCopy[i].placeOnTheLeftHand))
                        && ((athletesArrayCopy[i].placeOnTheLeftHand! + athletesArrayCopy[i].placeOnTheRightHand!) > (athletesArrayCopy[i + 1].placeOnTheLeftHand! + athletesArrayCopy[i + 1].placeOnTheRightHand!))) {
                        console.log('7')
                        let rt = athletesArrayCopy[i]
                        athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                        athletesArrayCopy[i + 1] = rt
                        athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
                    }
                    if ((((athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheLeftHand! < athletesArrayCopy[i].placeOnTheRightHand!))
                        || ((athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheLeftHand!) && (athletesArrayCopy[i + 1].placeOnTheRightHand! < athletesArrayCopy[i].placeOnTheRightHand!)))) {
                        console.log('8')
                        let rt = athletesArrayCopy[i]
                        athletesArrayCopy[i] = athletesArrayCopy[i + 1]
                        athletesArrayCopy[i + 1] = rt
                        athletesArrayCopy.map((a, index) => a.placeForDoubleEvent = index + 1)
                    }
                }
                // if() // Ноль очков у обоих, каждый не участвовал на одной из рук, (места по "сумме" мест)
                // if() // Ноль очков у обоих, каждый не участвовал на одной из рук (места по весу)
            }
        }
    }

    for (let i = 0; i < athletesArrayCopy.length; i++) {
        if (athletesArrayCopy[i].placeOnTheLeftHand === 3
            && athletesArrayCopy[i].placeOnTheRightHand === 3
            && (athletesArrayCopy[i].placeForDoubleEvent === 4
                || athletesArrayCopy[i].placeForDoubleEvent === 5)) {
            if (athletesArrayCopy[i].placeForDoubleEvent === 4) {
                athletesArrayCopy.map((a, index) => {
                    console.log('занял 4')
                    if (index > 2) {
                        a.placeForDoubleEvent = index
                    }
                    return a
                })
            } else if (athletesArrayCopy[i].placeForDoubleEvent === 5) {
                console.log('занял 5')
                let rt = athletesArrayCopy[i]
                athletesArrayCopy[i] = athletesArrayCopy[i - 1]
                athletesArrayCopy[i - 1] = rt
                athletesArrayCopy.map((a, index) => {
                    if (index > 2) {
                        a.placeForDoubleEvent = index
                    }
                    return a
                })
            }
        }
    }


    return (
        <div className={styleResult.result}>
            <div className={styleResult.resultSpecific}>Места по двоеборью</div>
            <ul className={styleResult.chapters}>
                <li>Место</li>
                <li>Спортсмен</li>
                <li>Очки</li>
            </ul>
            {athletesArrayCopy.map((a, index) => <ul key={a.idAthletes} className={styleResult.placeAthleteContain}>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.placeForDoubleEvent}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.athlete}</li>
                <li className={index % 2 === 0 ? styleResult.styleGray : ''}>{a.pointsSum}</li>
            </ul>)}
        </div>
    )
}