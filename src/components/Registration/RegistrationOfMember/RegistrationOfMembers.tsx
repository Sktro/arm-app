import React, {useState} from "react";
import {RegistrationAthlete} from "./RegistrationAthlete/RegistrationAthlete";
import {CategoryJudgeType, CategoryType, GenderType, RankType, StatusJudgeType} from "../../../App";
import {RegistrationOfJudges} from "./RegistrationOfJudges/RegistrationOfJudges";
import styleROM from "./RegistrationOfMembers.module.css"

type RegistrationOfMembersType = {
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType) => void
    addJudges: (fullName: string, gender: GenderType, status: StatusJudgeType, category: CategoryJudgeType, region: string) => void
    arrCategory: CategoryType[]
    gender: GenderType[]
    ranks: RankType[]
    categoryJudge: CategoryJudgeType[]
    statusJudge: StatusJudgeType[]
}

export const RegistrationOfMembers = (props: RegistrationOfMembersType) => {
    const [button, setButton] = useState<boolean>(true)
    const [error, setError] = useState(false)
    const buttonEffect = (value1: boolean, value2: boolean) => {
        setButton(value1)
        setError(value2)
    }
    return (
        <div>
            <div className={styleROM.buttonsContain}>
                <button onClick={()=> buttonEffect(true, false)} className={button ? styleROM.buttonOn : styleROM.button}>Участник</button>
                <button onClick={()=> buttonEffect(false, false)} className={!button ? styleROM.buttonOn : styleROM.button}>Судья</button>
            </div>
            <div className={styleROM.formContain}>
                {button && <RegistrationAthlete addAthleteCallback={props.addAthleteCallback}
                                                error={error}
                                                setError={setError}
                                                arrCategory={props.arrCategory}
                                                gender={props.gender}
                                                ranks={props.ranks}/>}
                {!button && <RegistrationOfJudges addJudges={props.addJudges}
                                                  statusJudge={props.statusJudge}
                                                  setError={setError}
                                                  error={error}
                                                  gender={props.gender}
                                                  categoryJudge={props.categoryJudge}/>}
            </div>
        </div>

)
}