import React, {useState} from "react";
import styleButtonForTheWinner from "./ButtonForTheWinner.module.css";
import {GSType} from "../../../../../App";
import {winner} from "../../../../../twoDimensionalArray/winner";
import {loser} from "../../../../../twoDimensionalArray/loser";
import {Rollback} from "./Rollback/Rollback";


type ButtonForTheWinnerType = {
    ourObj: GSType | null | undefined
    GSAthletes: (number | null)[]
    arrAthletes: { idAthletes: string, athlete: string }[]
    setGS: (value: GSType[]) => void
    GS: GSType[] | null
    id: string | undefined
    count: number
    N: number
}

export const ButtonForTheWinner = (props: ButtonForTheWinnerType) => {

    const [disable, setDisable] = useState<boolean>(false)

    const foo1 = () => {
        // if ((StringGrid1.RowCount-1 < 6) and (N < 2*(StringGrid1.RowCount-1)-2)) or ((StringGrid1.RowCount-1 >= 6) and (N < 2*(StringGrid1.RowCount-1)-1)) // Ограничение
        props.setGS(props.GS!.map(ob => ob.id === props.id ? {
            ...ob,
            gs: ob.gs.map((gs, index) => index === winner[ob.N - 1][props.count] - 1 ? ob.gs[2 * ob.N - 2]
                : index === loser[ob.N - 1][props.count] - 1 ? ob.gs[2 * ob.N - 1] : gs),
            LLos: ob.LLos.map((o, index) => index === ob.gs[2 * ob.N - 1] ? ob.gs[2 * ob.N - 2]! : o),
            lLosS: ob.lLosS.map((o, index) => {
                if (index === ob.N - 1) {
                    for (let i = 0; i < ob.LLos.length; i++) {
                        o[i] = ob.LLos[i]
                    }
                }
                return o
            }),
            winCount: ob.winCount.map((count, index) => index === ob.gs[2 * ob.N - 2] ? count + 1 : count),
            N: ob.N + 1,
            app: ob.app.map((o, index) => {
                debugger
                if (index + 1 === ob.N) {
                    o = 1
                }
                if (index < ob.N) {
                    if (ob.gs[2 * index] === ob.gs[2 * ob.N] || ob.gs[2 * index] === ob.gs[2 * ob.N + 1] || ob.gs[2 * index + 1] === ob.gs[2 * ob.N] || ob.gs[2 * index + 1] === ob.gs[2 * ob.N + 1]) {
                        o = 0
                    }
                }
                return o
            })
        } : ob))
        setDisable(true)
        setTimeout(()=> setDisable(false), 800)
        // else if ((StringGrid1.RowCount-1 < 6) && (N = 2*(StringGrid1.RowCount-1)-2)) || ((StringGrid1.RowCount-1 >= 6) && (N = 2*(StringGrid1.RowCount-1)-1)) then begin // Борьба в категории закончена
    }

    const foo2 = () => {
        //if ((StringGrid1.RowCount-1 < 6) && (N < 2*(StringGrid1.RowCount-1)-1)) || ((StringGrid1.RowCount-1 >= 6) && (N < 2*(StringGrid1.RowCount-1))) then begin  // Ограничение
        props.setGS(props.GS!.map(ob => ob.id === props.id ? {
            ...ob,
            gs: ob.gs.map((gs, index) => index === winner[ob.N - 1][props.count] - 1 ? ob.gs[2 * ob.N - 1]
                : index === loser[ob.N - 1][props.count] - 1 ? ob.gs[2 * ob.N - 2] : gs), // победа в поединке
            LLos: ob.LLos.map((o, index) => index === ob.gs[2 * ob.N - 2] ? ob.gs[2 * ob.N - 1]! : o),
            lLosS: ob.lLosS.map((o, index) => {
                if (index === ob.N - 1) {
                    for (let i = 0; i < ob.LLos.length; i++) {
                        o[i] = ob.LLos[i]
                    }
                }
                return o
            }),
            winCount: ob.winCount.map((count, index) => index === ob.gs[2 * ob.N - 1] ? count + 1 : count),
            N: ob.N + 1,
            app: ob.app.map((o, index) => {
                if (index + 1 === ob.N) {
                    o = 1
                }
                if (index < ob.N) {
                    if (ob.gs[2 * index] === ob.gs[2 * ob.N] || ob.gs[2 * index] === ob.gs[2 * ob.N + 1] || ob.gs[2 * index + 1] === ob.gs[2 * ob.N] || ob.gs[2 * index + 1] === ob.gs[2 * ob.N + 1]) {
                        o = 0
                    }
                }

                return o
            })
        } : ob))
        setDisable(true)
        setTimeout(()=> setDisable(false), 800)

        // if(N < 2*(StringGrid1.RowCount-1)) // Ограничение


        // else if ((StringGrid1.RowCount-1 < 6) && (N = 2*(StringGrid1.RowCount-1)-1)) or ((StringGrid1.RowCount-1 >= 6) && (N = 2*(StringGrid1.RowCount-1)))
        // В Суперфинале победил второй (борьба окончена)
    }

    return (
        <div className={styleButtonForTheWinner.contain}>
            <div className={styleButtonForTheWinner.buttonContain}>
                <div className={styleButtonForTheWinner.text}>Борются:</div>
                <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                    <button onClick={foo1} disabled={disable}>
                        <div className={styleButtonForTheWinner.circleRed}></div>
                        {props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N - 2]!]?.athlete}
                    </button>
                </div>
                <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                    <button onClick={foo2} disabled={disable}>
                        <div className={styleButtonForTheWinner.circleBlue}></div>
                        {props.arrAthletes[props.GSAthletes[2 * props.ourObj!.N - 1]!]?.athlete}</button>
                </div>
                <Rollback N={props.N} id={props.id} GS={props.GS} setGS={props.setGS} count={props.count}/>
                <div className={styleButtonForTheWinner.buttonAthleteWinner}>
                    <button onClick={() => console.log(props.ourObj)} onDoubleClick={() => console.log('double')}>LOG</button>
                </div>

            </div>
        </div>
    )
}