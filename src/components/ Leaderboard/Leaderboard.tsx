import React, {useState} from "react";
import styleLeaderboard from './Leaderboard.module.css'
import {AthletesType, CategoryType, SettingsType} from "../../App";
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
    settings: SettingsType
}


export const Leaderboard = (props: LeaderboardType) => {

    const [athleteInCategory, setAthleteInCategory] = useState<AthletesType[]>([])

    const sortArrayGender = (arr: CategoryType[], str: string) => {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (props.arrCategory[i].gender === str) {
                newArr.push(props.arrCategory[i])
            }
        }
        return newArr
    }

    const arrAthletesMale: AthletesType[] = []

    const newArrAthletes = (str: string) => {
        let newArr = []
        let arrAthletes = props.athletes
        for (let i = 0; i < arrAthletes.length; i++) {
            for (let j = 0; j < arrAthletes[i].categoryMember!.length; j++) {
                if (arrAthletes[i].categoryMember![j].value === str && arrAthletes[i].gender === 'муж') {
                    newArr.push(arrAthletes[i])
                }
            }
        }
        return setAthleteInCategory(newArr)
    }
    const sortAthletes = athleteInCategory.sort(() => Math.random() - 0.5)
    const randomAthletes = sortAthletes.map(a => <div key={a.id}>{a.fullName}</div>)

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

    const click = (str: string) => {
        newArrAthletes(str)
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
                        <div>{newArrayCategoryMale(arrWeightMale).map((c, index) => <button
                            onClick={()=>click(c)}
                            key={index}>{c}</button>)}</div>
                    </div>
                    <div>Женские категории:</div>
                    <div>{newArrayCategoryFemale(arrWeightFemale).map((c, index) => <div key={index}>{c}</div>)}</div>
                </div>


                <div className={styleLeaderboard.leaderboardContain}>
                    <div className={styleLeaderboard.firstRoundContain}>
                        <div className={styleLeaderboard.RoundName}>1-й тур</div>
                        <div className={styleLeaderboard.firstRound}>
                            <div id={'1'}></div>
                            <div id={'2'}></div>
                            <div id={'3'}></div>
                            <div id={'4'}></div>
                            <div id={'5'}></div>
                            <div id={'6'}></div>
                            <div id={'7'}></div>
                            <div id={'8'}></div>
                            <div id={'9'}></div>
                            <div id={'10'}></div>
                            <div id={'11'}></div>
                            <div id={'12'}></div>
                            <div id={'13'}></div>
                            <div id={'14'}></div>
                            <div id={'15'}></div>
                            <div id={'16'}></div>
                            <div id={'17'}></div>
                            <div id={'18'}></div>
                            <div id={'19'}></div>
                            <div id={'20'}></div>
                            <div id={'21'}></div>
                            <div id={'22'}></div>
                            <div id={'23'}></div>
                            <div id={'24'}></div>
                            <div id={'25'}></div>
                            <div id={'26'}></div>
                            <div id={'27'}></div>
                            <div id={'28'}></div>
                            <div id={'29'}></div>
                            <div id={'30'}></div>
                            <div id={'31'}></div>
                            <div id={'32'}></div>
                        </div>
                    </div>

                    <div className={styleLeaderboard.groupAAndBContainer}>
                        <div className={styleLeaderboard.groupAContainer}>
                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>2-й тур | Группа А</div>
                                <div className={styleLeaderboard.secondRoundGroupA}>
                                    <div id={'33'}></div>
                                    <div id={'34'}></div>
                                    <div id={'35'}></div>
                                    <div id={'36'}></div>
                                    <div id={'37'}></div>
                                    <div id={'38'}></div>
                                    <div id={'39'}></div>
                                    <div id={'40'}></div>
                                    <div id={'41'}></div>
                                    <div id={'42'}></div>
                                    <div id={'43'}></div>
                                    <div id={'44'}></div>
                                    <div id={'45'}></div>
                                    <div id={'46'}></div>
                                    <div id={'47'}></div>
                                    <div id={'48'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>3-й тур | Группа А</div>
                                <div className={styleLeaderboard.thirdRoundGroupA}>
                                    <div id={'65'}></div>
                                    <div id={'66'}></div>
                                    <div id={'67'}></div>
                                    <div id={'68'}></div>
                                    <div id={'69'}></div>
                                    <div id={'70'}></div>
                                    <div id={'71'}></div>
                                    <div id={'72'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>4-й тур | Группа А</div>
                                <div className={styleLeaderboard.fourthRoundGroupA}>
                                    <div id={'89'}></div>
                                    <div id={'90'}></div>
                                    <div id={'91'}></div>
                                    <div id={'92'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>5-й тур | Группа А</div>
                                <div className={styleLeaderboard.fifthRoundGroupA}>
                                    <div id={'117'}></div>
                                    <div id={'118'}></div>
                                </div>
                            </div>

                            {props.settings.place5_6 && <div className={styleLeaderboard.groupContainPlace5_6}>
                                <div className={styleLeaderboard.RoundName}>5-6место</div>
                                <div className={styleLeaderboard.place5_6}>
                                    <div id={'121'}></div>
                                    <div id={'122'}></div>
                                </div>
                            </div>}

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>Полуфинал</div>
                                <div className={styleLeaderboard.semiFinalRound}>
                                    <div id={'123'}></div>
                                    <div id={'124'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>Финал</div>
                                <div className={styleLeaderboard.finalFightsContain}>
                                    <div className={styleLeaderboard.firstFightContain}>
                                        <div className={styleLeaderboard.RoundName}>1-й Поединок</div>
                                        <div className={styleLeaderboard.finalRound}>
                                            <div id={'125'}></div>
                                            <div id={'126'}></div>
                                        </div>
                                    </div>
                                    <div className={styleLeaderboard.secondFightContain}>
                                        <div className={styleLeaderboard.RoundName}>2-й Поединок</div>
                                        <div className={styleLeaderboard.finalRound}>
                                            <div id={'127'}></div>
                                            <div id={'128'}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styleLeaderboard.groupBContainer}>
                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>2-й тур | Группа Б</div>
                                <div className={styleLeaderboard.secondRoundGroupB}>
                                    <div id={'49'}></div>
                                    <div id={'50'}></div>
                                    <div id={'51'}></div>
                                    <div id={'52'}></div>
                                    <div id={'53'}></div>
                                    <div id={'54'}></div>
                                    <div id={'55'}></div>
                                    <div id={'56'}></div>
                                    <div id={'57'}></div>
                                    <div id={'58'}></div>
                                    <div id={'59'}></div>
                                    <div id={'60'}></div>
                                    <div id={'61'}></div>
                                    <div id={'62'}></div>
                                    <div id={'63'}></div>
                                    <div id={'64'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>3-й тур | Группа Б</div>
                                <div className={styleLeaderboard.thirdRoundGroupB}>
                                    <div id={'73'}></div>
                                    <div id={'74'}></div>
                                    <div id={'75'}></div>
                                    <div id={'76'}></div>
                                    <div id={'77'}></div>
                                    <div id={'78'}></div>
                                    <div id={'79'}></div>
                                    <div id={'80'}></div>
                                    <div id={'81'}></div>
                                    <div id={'82'}></div>
                                    <div id={'83'}></div>
                                    <div id={'84'}></div>
                                    <div id={'85'}></div>
                                    <div id={'86'}></div>
                                    <div id={'87'}></div>
                                    <div id={'88'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>4-й тур | Группа Б</div>
                                <div className={styleLeaderboard.fourthRoundGroupB}>
                                    <div id={'93'}></div>
                                    <div id={'94'}></div>
                                    <div id={'95'}></div>
                                    <div id={'96'}></div>
                                    <div id={'97'}></div>
                                    <div id={'98'}></div>
                                    <div id={'99'}></div>
                                    <div id={'100'}></div>
                                    <div id={'101'}></div>
                                    <div id={'102'}></div>
                                    <div id={'103'}></div>
                                    <div id={'104'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>5-й тур | Группа Б</div>
                                <div className={styleLeaderboard.fifthRoundGroupB}>
                                    <div id={'105'}></div>
                                    <div id={'106'}></div>
                                    <div id={'107'}></div>
                                    <div id={'108'}></div>
                                    <div id={'109'}></div>
                                    <div id={'110'}></div>
                                    <div id={'111'}></div>
                                    <div id={'112'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>6-й тур | Группа Б</div>
                                <div className={styleLeaderboard.sixthRoundGroupB}>
                                    <div id={'113'}></div>
                                    <div id={'114'}></div>
                                    <div id={'115'}></div>
                                    <div id={'116'}></div>
                                </div>
                            </div>

                            <div className={styleLeaderboard.groupContain}>
                                <div className={styleLeaderboard.RoundName}>7-й тур | Группа Б</div>
                                <div className={styleLeaderboard.seventhRoundGroupB}>
                                    <div id={'119'}></div>
                                    <div id={'120'}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}