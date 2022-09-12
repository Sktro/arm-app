import React, {useState} from "react";
import {RegistrationAthlete} from "./RegistrationAthlete/RegistrationAthlete";
import {CategoryJudgeType, CategoryType, GenderType, RankType, StatusJudgeType} from "../../../App";
import {RegistrationOfJudges} from "./RegistrationOfJudges/RegistrationOfJudges";
import styleRegistrationOfMembers from "./RegistrationOfMembers.module.css"
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {MultiValue} from "react-select";

type RegistrationOfMembersType = {
    addAthleteCallback: (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType, categoryMember: MultiValue<{value: string, label: string}>) => void
    addJudges: (fullName: string, gender: GenderType, status: StatusJudgeType, category: CategoryJudgeType, region: string) => void
    arrCategory: CategoryType[]
    gender: GenderType[]
    ranks: RankType[]
    categoryJudge: CategoryJudgeType[]
    statusJudge: StatusJudgeType[]
    sortCategory: (value: CategoryType) => Option[]
}

export const RegistrationOfMembers = (props: RegistrationOfMembersType) => {
    const [button, setButton] = useState<boolean>(true)
    const [error, setError] = useState(false)
    const buttonEffect = (value1: boolean, value2: boolean) => {
        setButton(value1)
        setError(value2)
    }
    return (
        <div className={styleRegistrationOfMembers.regContain}>
            <div className={styleRegistrationOfMembers.buttonsContain}>
                <button onClick={()=> buttonEffect(true, false)} className={button ? styleRegistrationOfMembers.buttonOn
                    : styleRegistrationOfMembers.button}>Участник</button>
                <button onClick={()=> buttonEffect(false, false)} className={!button ? styleRegistrationOfMembers.buttonOn
                    : styleRegistrationOfMembers.button}>Судья</button>
            </div>
            <div className={styleRegistrationOfMembers.formContain}>
                {button && <RegistrationAthlete addAthleteCallback={props.addAthleteCallback}
                                                error={error}
                                                sortCategory={props.sortCategory}
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