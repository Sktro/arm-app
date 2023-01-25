import React, {useEffect, useState} from "react";
import styleTournamentGridTo32 from "./TournamentGridTo32.module.css";
import {AthletesType, biathlonType, SettingsType} from "../../../../App";
import {NavLink, Route, Routes, useParams} from "react-router-dom";
import {Result} from "./Grids/Result/Result";
import {GridForTheLeftHand} from "./Grids/GridForTheLeftHand";
import {GridForTheRightHand} from "./Grids/GridForTheRightHand";


type TournamentGridTo32Type = {
    settings: SettingsType
    athletes: AthletesType[]
    setGS: (value: biathlonType[]) => void
    GS: biathlonType[] | null
}


export const TournamentsGrids = (props: TournamentGridTo32Type) => {

    const {id} = useParams<{ id: string }>()

    const [flag, setFlag] = useState<boolean>(false)

    const ourObj = props.GS ? props.GS.find(ob => ob.id === id) : null

    const fooForAthletesInCategory = (title: string, gender: string) => {
        let newArr: {
            idAthletes: string,
            athlete: AthletesType,
            athleteWeight: number,
            placeOnTheLeftHand: null | number,
            placeOnTheRightHand: null | number,
            placeForDoubleEvent: number,
            pointsOnTheLeftHand: number,
            pointsOnTheRightHand: number,
            pointsSum: number
        }[] = []
        let arrAthletes = props.athletes
        for (let i = 0; i < arrAthletes.length; i++) {
            for (let j = 0; j < arrAthletes[i].categoryMember!.length; j++) {
                if (arrAthletes[i].categoryMember![j].value === title && arrAthletes[i].gender === gender) {
                    newArr.push({
                        idAthletes: '',
                        athlete: arrAthletes[i],
                        athleteWeight: arrAthletes[i].weight,
                        placeOnTheLeftHand: null,
                        placeOnTheRightHand: null,
                        placeForDoubleEvent: 0,
                        pointsOnTheLeftHand: 0,
                        pointsOnTheRightHand: 0,
                        pointsSum: 0
                    })
                }
            }
        }
        return newArr
    }

    const arrAthletes = fooForAthletesInCategory(ourObj!.leftHand.title, ourObj!.leftHand.gender)
        .map((a, index) => ({
            idAthletes: a.idAthletes = (index + 1).toString(),
            athlete: a.athlete.fullName,
            athleteWeight: a.athleteWeight,
            placeOnTheLeftHand: null,
            placeOnTheRightHand: null,
            placeForDoubleEvent: 0,
            pointsOnTheLeftHand: 0,
            pointsOnTheRightHand: 0,
            pointsSum: 0
        }))
    const countAthletes = arrAthletes.length
    const count = arrAthletes.length - 2

    useEffect(() => {
        if (props.GS && GSAthletesForTheLeftHand && GSAthletesForTheRightHand) {
            props.setGS(props.GS.map(ob => ob.id === id ? {
                ...ob,
                leftHand: {
                    ...ob.leftHand,
                    gs: GSAthletesForTheLeftHand,
                    lLosS: lLosSForTheLeftHand,
                    jer: true,
                    numberForUnderline: 0
                },
                rightHand: {
                    ...ob.rightHand,
                    gs: GSAthletesForTheRightHand,
                    lLosS: lLosSForTheRightHand,
                    jer: true,
                    numberForUnderline: 0
                }
            } : ob))
        }
    }, [id])


    if (!ourObj || !props.GS) {
        return <div>no GS</div>
    }

    const shuffle = (arr: number[]) => {
        let j: number, temp: number
        for (let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
        return arr
    }

    const newArrGSForLeftHand = shuffle(Array.from({length: countAthletes}, (_, index) => index))
    const newArrGSForRightHand = shuffle(Array.from({length: countAthletes}, (_, index) => index))


    const GSAthletesForTheLeftHand = ourObj.leftHand.gs.map((a, index) => {
            if (!ourObj.leftHand.jer) {
                for (let i = 0; i < newArrGSForLeftHand.length; i++) {
                    if (index === i) {
                        a = newArrGSForLeftHand[i]
                    }
                }
            }
            return a
        }
    )

    const GSAthletesForTheRightHand = ourObj.rightHand.gs.map((a, index) => {
            if (!ourObj.rightHand.jer) {
                for (let i = 0; i < newArrGSForRightHand.length; i++) {
                    if (index === i) {
                        a = newArrGSForRightHand[i]
                    }
                }
            }
            return a
        }
    )

    const lLosSForTheLeftHand = ourObj.leftHand.lLosS.map((o, index) => {
        if (index === ourObj.leftHand.N - 1) {
            for (let i = 0; i < ourObj.leftHand.LLos.length; i++) {
                o[i] = ourObj.leftHand.LLos[i]
            }
        }
        return o
    })

    const lLosSForTheRightHand = ourObj.rightHand.lLosS.map((o, index) => {
        if (index === ourObj.leftHand.N - 1) {
            for (let i = 0; i < ourObj.leftHand.LLos.length; i++) {
                o[i] = ourObj.leftHand.LLos[i]
            }
        }
        return o
    })

    const activeClass = (navData: any) => navData.isActive ? styleTournamentGridTo32.controlPanelActive
        : `${styleTournamentGridTo32.controlPanelActive} ${styleTournamentGridTo32.controlPanelNotActive}`

    const initialStyles = {
        pointerEvents: 'none' as 'none',
        backgroundColor: 'gray',
        userSelect: 'none' as 'none'
    }


    return (
        <div className={styleTournamentGridTo32.contain}>

            <div className={styleTournamentGridTo32.controlPanel}>
                <NavLink className={activeClass}
                         to={`leftHand`}>Левая рука</NavLink>
                <NavLink style={!ourObj.leftHand.theWrestlingIsOver ? initialStyles : undefined}
                         className={activeClass}
                         to={'rightHand'}>Правая рука</NavLink>
                <NavLink style={!ourObj.leftHand.theWrestlingIsOver ? initialStyles : undefined}
                         className={activeClass}
                         to={`result`}>Результаты</NavLink>
            </div>

            <Routes>
                <Route path={'leftHand'} element={<GridForTheLeftHand ourObj={ourObj.leftHand}
                                                                      flag={flag}
                                                                      setFlag={setFlag}
                                                                      countAthletes={countAthletes}
                                                                      arrAthletes={arrAthletes}
                                                                      count={count}
                                                                      GSAthletes={GSAthletesForTheLeftHand}
                                                                      setGS={props.setGS}
                                                                      category={ourObj}
                                                                      GS={props.GS}
                                                                      settings={props.settings}
                                                                      id={id}/>}/>
                <Route path={'rightHand'} element={<GridForTheRightHand ourObj={ourObj.rightHand}
                                                                        category={ourObj}
                                                                        flag={flag}
                                                                        setFlag={setFlag}
                                                                        countAthletes={countAthletes}
                                                                        arrAthletes={arrAthletes}
                                                                        count={count}
                                                                        GSAthletes={GSAthletesForTheRightHand}
                                                                        setGS={props.setGS}
                                                                        GS={props.GS}
                                                                        settings={props.settings}
                                                                        id={id}/>}/>
                <Route path={'result'} element={<Result ourObj={ourObj}
                                                        countAthletes={countAthletes}
                                                        GSAthletesForRightHand={GSAthletesForTheRightHand}
                                                        GSAthletesForLeftHand={GSAthletesForTheLeftHand}
                                                        arrAthletes={arrAthletes}
                                                        count={count}/>}/>

            </Routes>
        </div>
    )
}