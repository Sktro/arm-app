import React from "react";
import styleLeaderboard from './Leaderboard.module.css'
import {AthletesType, CategoryType} from "../../App";
import {Header} from "../Header/Header";
import {Option} from "../../common/WeightsSelect/WeightsSelect";

type LeaderboardType = {
    athletes: AthletesType[]
    tournament: string
    startTournamentDate: string
    endTournamentDate: string
    location: string
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
}


export const Leaderboard = (props: LeaderboardType) => {

    const sortAthletes = props.athletes.sort(() => Math.random() - 0.5)
    const randomAthletes = sortAthletes.map(a => <div key={a.id}>{a.fullName}</div>)

    const sortArrayGender = (arr: CategoryType[], str: string) => {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (props.arrCategory[i].gender === str) {
                newArr.push(props.arrCategory[i])
            }
        }
        return newArr
    }

    const arrWeightMale = sortArrayGender(props.arrCategory, 'муж').map(w => props.sortCategory(w).map(v => v.value))
    const arrWeightFemale = sortArrayGender(props.arrCategory, 'жен').map(w => props.sortCategory(w).map(v => v.value))

    const newArrayCategoryMale = (arr: string[][]) => {
        let newArr = []
        let arrMale = sortArrayGender(props.arrCategory, 'муж')
        for (let i = 0; i < arrMale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j])) {
                    newArr.push(arrMale[i].categoryAthlete + `(${arrMale[i].age}): ${arr[i][j]}`)
                }
                if (arr[i][j].includes('+')) {
                    newArr.push(arrMale[i].categoryAthlete + `(${arrMale[i].age}): ${arr[i][j]}`)
                }
            }
        }
        return newArr
    }

    const newArrayCategoryFemale = (arr: string[][]) => {
        let newArr = []
        let arrFemale = sortArrayGender(props.arrCategory, 'жен')
        for (let i = 0; i < arrFemale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j])) {
                    newArr.push(arrFemale[i].categoryAthlete + `(${arrFemale[i].age}): ${arr[i][j]}`)
                }
                if (arr[i][j].includes('+')) {
                    newArr.push(arrFemale[i].categoryAthlete + `(${arrFemale[i].age}): ${arr[i][j]}`)
                }
            }
        }
        return newArr
    }


    return (
        <>
            <Header tournament={props.tournament}
                    startTournamentDate={props.startTournamentDate}
                    endTournamentDate={props.endTournamentDate}
                    location={props.location}/>


            <div className={styleLeaderboard.contain}>
                <div className={styleLeaderboard.controlPanelContain}>
                    <div className={styleLeaderboard.nameControlPanel}>Управление турниром</div>
                    <div>
                        <div>Мужские категории:</div>
                        <div>{newArrayCategoryMale(arrWeightMale).map((c, index)=> <div key={index}>{c}</div>)}</div>
                    </div>
                    <div>Женские категории:</div>
                    <div>{newArrayCategoryFemale(arrWeightFemale).map((c, index)=> <div key={index}>{c}</div>)}</div>
                </div>


                <div className={styleLeaderboard.leaderboardContain}>
                    <div className={styleLeaderboard.firstRoundContain}>
                        <div className={styleLeaderboard.RoundName}>1-й тур</div>
                        <div className={styleLeaderboard.firstRound}>{randomAthletes}</div>
                    </div>

                    <div className={styleLeaderboard.groupAAndBContainer}>

                        <div className={styleLeaderboard.groupAContainer}>
                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>2-й тур | Группа А</div>
                                <div className={styleLeaderboard.secondRoundGroupA}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>3-й тур | Группа А</div>
                                <div className={styleLeaderboard.thirdRoundGroupA}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>4-й тур | Группа А</div>
                                <div className={styleLeaderboard.fourthRoundGroupA}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>5-й тур | Группа А</div>
                                <div className={styleLeaderboard.fifthRoundGroupA}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>Полуфинал</div>
                                <div className={styleLeaderboard.semiFinalRound}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>Финал</div>
                                <div className={styleLeaderboard.finalFightsContain}>
                                    <div className={styleLeaderboard.firstFightContain}>
                                        <div className={styleLeaderboard.RoundName}>1-й Поединок</div>
                                        <div className={styleLeaderboard.finalRound}></div>
                                    </div>
                                    <div className={styleLeaderboard.secondFightContain}>
                                        <div className={styleLeaderboard.RoundName}>2-й Поединок</div>
                                        <div className={styleLeaderboard.finalRound}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styleLeaderboard.groupBContainer}>
                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>2-й тур | Группа Б</div>
                                <div className={styleLeaderboard.secondRoundGroupB}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>3-й тур | Группа Б</div>
                                <div className={styleLeaderboard.thirdRoundGroupB}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>4-й тур | Группа Б</div>
                                <div className={styleLeaderboard.fourthRoundGroupB}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>5-й тур | Группа Б</div>
                                <div className={styleLeaderboard.fifthRoundGroupB}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>6-й тур | Группа Б</div>
                                <div className={styleLeaderboard.sixthRoundGroupB}></div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>7-й тур | Группа Б</div>
                                <div className={styleLeaderboard.seventhRoundGroupB}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}