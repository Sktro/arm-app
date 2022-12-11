import React, {useEffect} from "react";
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

    const ourObj = props.GS ? props.GS.find(ob => ob.id === id) : null

    const fooForAthletesInCategory = (title: string, gender: string) => {
        let newArr: {
            idAthletes: string,
            athlete: AthletesType,
            athleteWeight: number,
            placeOnTheLeftHand: null | number,
            placeOnTheRightHand: null | number,
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
                leftHand: {...ob.leftHand, gs: GSAthletesForTheLeftHand, lLosS: lLosSForTheLeftHand},
                rightHand: {...ob.rightHand, gs: GSAthletesForTheRightHand, lLosS: lLosSForTheRightHand}
            } : ob))
        }
        console.log('useEffect')
    }, [id])


    if (!ourObj || !props.GS) {
        return <div>no GS</div>
    }

    const GSAthletesForTheLeftHand = ourObj.leftHand.gs.map((a, index) => {
            for (let i = 0; i < countAthletes; i++) {
                if (index === i) {
                    a = i
                }
            }
            return a
        }
    )

    const GSAthletesForTheRightHand = ourObj.rightHand.gs.map((a, index) => {
            for (let i = 0; i < countAthletes; i++) {
                if (index === i) {
                    a = i
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
                                                                      countAthletes={countAthletes}
                                                                      arrAthletes={arrAthletes}
                                                                      count={count}
                                                                      GSAthletes={GSAthletesForTheLeftHand}
                                                                      setGS={props.setGS}
                                                                      GS={props.GS}
                                                                      settings={props.settings}
                                                                      id={id}/>}/>
                <Route path={'rightHand'} element={<GridForTheRightHand ourObj={ourObj.rightHand}
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