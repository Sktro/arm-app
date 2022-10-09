import React, {useState} from "react";
import {GSType} from "../../../../../../App";
import {winner} from "../../../../../../twoDimensionalArray/winner";
import {loser} from "../../../../../../twoDimensionalArray/loser";
import styleRollback from "./Rollback.module.css";
import ReactTooltip from "react-tooltip";

type RollbackType = {
    N: number
    id: string | undefined
    setGS: (value: GSType[]) => void
    GS: GSType[] | null
    count: number
}


export const Rollback = (props: RollbackType) => {

    const [disable, setDisable] = useState(false)

    const previousMatch = () => {
        props.setGS(props.GS!.map(ob => ob.id === props.id ? {
            ...ob,
            N: ob.N - 1,
            gs: ob.gs.map((gs, index) => index === winner[ob.N - 2][props.count] - 1 ? null
                : index === loser[ob.N - 2][props.count] - 1 ? null : gs),
            winCount: ob.winCount.map((count, index) => index === ob.gs[winner[ob.N - 2][props.count] - 1]! ? count - 1 : count),

            app: ob.app.map((o, index) => index === ob.N-2 ? null : o)

        } : ob))
        setDisable(true)
        setTimeout(()=> setDisable(false), 800)
    }

    return (
        <div className={styleRollback.buttonRollback}>
            <button data-tip="Вернуться к предыдущему к поединку" disabled={props.N === 1 || disable} onClick={previousMatch}>&#8249;&#8249;&#8249;</button>
            <ReactTooltip place="top" type="dark" effect="solid"/>
        </div>
    )
}