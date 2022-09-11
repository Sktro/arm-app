import React from "react";
import {CategoryJudgeType, JudgeType, StatusJudgeType} from "../../../App";
import styleR from "../Registration.module.css";
import {EditableSpanText} from "../../../common/EditableCopmponents/EditableSpanText";
import {EditableSpanSelect} from "../../../common/EditableCopmponents/EditableSpanSelect";

type ListJudgesType = {
    judge: JudgeType[]
    changeFullNameJudge: (judgeID: string, fullName: string) => void
    changeRegionJudge: (judgeID: string, region: string) => void
    changeCategoryJudge: (judgeID: string, category: CategoryJudgeType) => void
    categoryJudge: CategoryJudgeType[]
    changeStatusJudge: (judgeID: string, category: StatusJudgeType) => void
    statusJudge: StatusJudgeType[]
    setModalDeleteAthlete: (value: boolean) => void
    setMember: (value: string) => void
    setIdMember: (value: string) => void
    setNameMember: (value: string) => void
}

export const ListJudges = (props: ListJudgesType) => {

    const judgesJSX = props.judge
        .sort((a, b) => a.fullName < b.fullName ? -1 : 0)
        .map(jud => {
            const changeFullNameJudge = (fullName: string) => {
                props.changeFullNameJudge(jud.id, fullName)
            }
            const changeRegionJudge = (region: string) => {
                props.changeRegionJudge(jud.id, region)
            }
            const changeCategoryJudge = (category: string) => {
                props.changeCategoryJudge(jud.id, category as CategoryJudgeType)
            }
            const changeStatusJudge = (status: string) => {
                props.changeStatusJudge(jud.id, status as StatusJudgeType)
            }

            const removeJudge = (judgeID: string, fullName: string) => {
                props.setModalDeleteAthlete(true)
                props.setMember('judge')
                props.setIdMember(judgeID)
                props.setNameMember(fullName)
            }

            return (
                <div key={jud.id} className={styleR.judges}>
                    <div className={styleR.fullName}><EditableSpanText value={jud.fullName}
                                                                       id={'fullName'}
                                                                       changeValue={changeFullNameJudge}/></div>
                    <div className={styleR.statusJudge}><EditableSpanSelect value={jud.status}
                                                                            changeOptions={changeStatusJudge}
                                                                            options={props.statusJudge}/></div>
                    <div className={styleR.regionJudge}><EditableSpanText value={jud.region}
                                                                          id={'region'}
                                                                          changeValue={changeRegionJudge}/></div>
                    <div className={styleR.categoryJudge}><EditableSpanSelect options={props.categoryJudge}
                                                                              value={jud.category}
                                                                              changeOptions={changeCategoryJudge}/>
                    </div>
                    <button className={styleR.removeButton} onClick={() => removeJudge(jud.id, jud.fullName)}>Удалить
                    </button>
                </div>
            )
        })
    return (
        <>
            {judgesJSX}
        </>
    )
}