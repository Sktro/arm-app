import React from "react";
import styleTournamentGridTo32 from "./TournamentGridTo32.module.css";
import {CreatedCategoryType, SettingsType} from "../../../../App";
import {useParams} from "react-router-dom";

type TournamentGridTo32Type = {
    settings: SettingsType
    createdCategories: CreatedCategoryType[]
}


export const TournamentGridTo32 = (props: TournamentGridTo32Type) => {
    const {id} = useParams<{id: string}>()

    const tournamentGridTo32JSX = props.createdCategories
        .filter(t => `:${t.id}` === id)
        .map(t => {
        return (
            <div key={t.id} className={styleTournamentGridTo32.leaderboardContain}>
                <div className={styleTournamentGridTo32.firstRoundContain}>
                    <div className={styleTournamentGridTo32.RoundName}>1-й тур</div>
                    <div className={styleTournamentGridTo32.firstRound}>
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

                <div className={styleTournamentGridTo32.groupAAndBContainer}>
                    <div className={styleTournamentGridTo32.groupAContainer}>
                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>2-й тур | Группа А</div>
                            <div className={styleTournamentGridTo32.secondRoundGroupA}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>3-й тур | Группа А</div>
                            <div className={styleTournamentGridTo32.thirdRoundGroupA}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>4-й тур | Группа А</div>
                            <div className={styleTournamentGridTo32.fourthRoundGroupA}>
                                <div id={'89'}></div>
                                <div id={'90'}></div>
                                <div id={'91'}></div>
                                <div id={'92'}></div>
                            </div>
                        </div>

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>5-й тур | Группа А</div>
                            <div className={styleTournamentGridTo32.fifthRoundGroupA}>
                                <div id={'117'}></div>
                                <div id={'118'}></div>
                            </div>
                        </div>

                        {props.settings.place5_6 && <div className={styleTournamentGridTo32.groupContainPlace5_6}>
                            <div className={styleTournamentGridTo32.RoundName}>5-6 место</div>
                            <div className={styleTournamentGridTo32.place5_6}>
                                <div id={'121'}></div>
                                <div id={'122'}></div>
                            </div>
                        </div>}

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>Полуфинал</div>
                            <div className={styleTournamentGridTo32.semiFinalRound}>
                                <div id={'123'}></div>
                                <div id={'124'}></div>
                            </div>
                        </div>

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>Финал</div>
                            <div className={styleTournamentGridTo32.finalFightsContain}>
                                <div className={styleTournamentGridTo32.firstFightContain}>
                                    <div className={styleTournamentGridTo32.RoundName}>1-й Поединок</div>
                                    <div className={styleTournamentGridTo32.finalRound}>
                                        <div id={'125'}></div>
                                        <div id={'126'}></div>
                                    </div>
                                </div>
                                <div className={styleTournamentGridTo32.secondFightContain}>
                                    <div className={styleTournamentGridTo32.RoundName}>2-й Поединок</div>
                                    <div className={styleTournamentGridTo32.finalRound}>
                                        <div id={'127'}></div>
                                        <div id={'128'}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styleTournamentGridTo32.groupBContainer}>
                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>2-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.secondRoundGroupB}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>3-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.thirdRoundGroupB}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>4-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.fourthRoundGroupB}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>5-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.fifthRoundGroupB}>
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

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>6-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.sixthRoundGroupB}>
                                <div id={'113'}></div>
                                <div id={'114'}></div>
                                <div id={'115'}></div>
                                <div id={'116'}></div>
                            </div>
                        </div>

                        <div className={styleTournamentGridTo32.groupContain}>
                            <div className={styleTournamentGridTo32.RoundName}>7-й тур | Группа Б</div>
                            <div className={styleTournamentGridTo32.seventhRoundGroupB}>
                                <div id={'119'}></div>
                                <div id={'120'}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {tournamentGridTo32JSX}
        </>
    )
}