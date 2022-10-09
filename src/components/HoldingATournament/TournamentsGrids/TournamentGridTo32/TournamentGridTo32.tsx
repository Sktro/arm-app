import React, {useEffect} from "react";
import styleTournamentGridTo32 from "./TournamentGridTo32.module.css";
import {AthletesType, GSType, SettingsType} from "../../../../App";
import {useParams} from "react-router-dom";
import {ButtonForTheWinner} from "./ButtonForTheWinner/ButtonForTheWinner";
import {GridTo32} from "./GridTo32/GridTo32";
import {Ready} from "./Ready/Ready";


type TournamentGridTo32Type = {
    settings: SettingsType
    athletes: AthletesType[]
    setGS: (value: GSType[]) => void
    GS: GSType[] | null
}


export const TournamentsGrids = (props: TournamentGridTo32Type) => {
    const {id} = useParams<{ id: string }>()

    const ourObj = props.GS ? props.GS.find(ob => ob.id === id) : null

    const fooForAthletesInCategory = (title: string, gender: string) => {
        let newArr: { idAthletes: string, athletes: AthletesType }[] = []
        let arrAthletes = props.athletes
        for (let i = 0; i < arrAthletes.length; i++) {
            for (let j = 0; j < arrAthletes[i].categoryMember!.length; j++) {
                if (arrAthletes[i].categoryMember![j].value === title && arrAthletes[i].gender === gender) {
                    newArr.push({idAthletes: '', athletes: arrAthletes[i]})
                }
            }
        }
        return newArr
    }

    const arrAthletes = fooForAthletesInCategory(ourObj!.title, ourObj!.gender)
        .map((a, index) => ({idAthletes: a.idAthletes = (index + 1).toString(), athlete: a.athletes.fullName}))

    const countAthletes = arrAthletes.length
    const count = arrAthletes.length - 2

    useEffect(() => {
        if (props.GS && GSAthletes) {
            props.setGS(props.GS.map(ob => ob.id === id ? {
                ...ob,
                gs: GSAthletes,
                //lLosS: a
            } : ob))
        }
    }, [id])

    if (!ourObj || !props.GS) {
        return <div>no GS</div>
    }

    const GSAthletes = ourObj.gs.map((a, index) => {
            for (let i = 0; i < countAthletes; i++) {
                if (index === i) {
                    a = i
                }
            }
            return a
        }
    )

    return (
        <div className={styleTournamentGridTo32.contain}>
            <GridTo32 GSAthletes={GSAthletes}
                      count={count}
                      arrAthletes={arrAthletes}
                      settings={props.settings}/>
            {arrAthletes.length > 1 && <>
                <ButtonForTheWinner id={id}
                                    N={ourObj.N}
                                    count={count}
                                    ourObj={ourObj}
                                    setGS={props.setGS}
                                    GS={props.GS}
                                    GSAthletes={GSAthletes}
                                    arrAthletes={arrAthletes}/>
                <Ready ourObj={ourObj} arrAthletes={arrAthletes} GSAthletes={GSAthletes}/>
            </>}

        </div>
    )
}