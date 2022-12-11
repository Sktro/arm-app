import React from "react";
import styleGridTo32 from "./GridTo32.module.css";
import {visibility32} from "../../../../../../twoDimensionalArray/visibility32";
import {biathlonType, GSType, SettingsType} from "../../../../../../App";

type GridTo32Type = {
    GSAthletes: (number | null)[]
    count: number
    arrAthletes: { idAthletes: string, athlete: string }[]
    settings: SettingsType
    ourObj: GSType | null | undefined
    countAthletes: number
    GS: biathlonType[] | null
    id: string | undefined
    setGS: (value: biathlonType[]) => void
}

export const GridTo32 = (props: GridTo32Type) => {
    const athlete = (num: number) => {
        if (!props.GSAthletes) return
        let name = <div></div>
        if (visibility32[num - 1][props.count] >= 0 && props.GSAthletes[visibility32[num - 1][props.count]]! >= 0) {
            name = <div
                id={num.toString()}>{props.arrAthletes[(props.GSAthletes[visibility32[num - 1][props.count]- 1]!)]?.athlete}</div>
        }
        if (visibility32[num - 1][props.count] === -1) {
            name = <div id={num.toString()}> ---- </div>
        }
        return name
    }

   const superFinal = props.countAthletes < 6 ? (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 1 && !props.ourObj?.theWrestlingIsOver) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2
       : (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2 && !props.ourObj?.theWrestlingIsOver) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 3

    return (
        <>
            <div className={styleGridTo32.leaderboardContain}>
                <div className={styleGridTo32.firstRoundContain}>
                    <div className={styleGridTo32.RoundName}>1-й тур</div>
                    <div className={styleGridTo32.firstRound}>
                        {athlete(1)}
                        {athlete(2)}
                        {athlete(3)}
                        {athlete(4)}
                        {athlete(5)}
                        {athlete(6)}
                        {athlete(7)}
                        {athlete(8)}
                        {athlete(9)}
                        {athlete(10)}
                        {athlete(11)}
                        {athlete(12)}
                        {athlete(13)}
                        {athlete(14)}
                        {athlete(15)}
                        {athlete(16)}
                        {athlete(17)}
                        {athlete(18)}
                        {athlete(19)}
                        {athlete(20)}
                        {athlete(21)}
                        {athlete(22)}
                        {athlete(23)}
                        {athlete(24)}
                        {athlete(25)}
                        {athlete(26)}
                        {athlete(27)}
                        {athlete(28)}
                        {athlete(29)}
                        {athlete(30)}
                        {athlete(31)}
                        {athlete(32)}
                    </div>
                </div>

                <div className={styleGridTo32.groupAAndBContainer}>
                    <div className={styleGridTo32.groupAContainer}>
                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>2-й тур | Группа А</div>
                            <div className={styleGridTo32.secondRoundGroupA}>
                                {athlete(33)}
                                {athlete(34)}
                                {athlete(35)}
                                {athlete(36)}
                                {athlete(37)}
                                {athlete(38)}
                                {athlete(39)}
                                {athlete(40)}
                                {athlete(41)}
                                {athlete(42)}
                                {athlete(43)}
                                {athlete(44)}
                                {athlete(45)}
                                {athlete(46)}
                                {athlete(47)}
                                {athlete(48)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>3-й тур | Группа А</div>
                            <div className={styleGridTo32.thirdRoundGroupA}>
                                {athlete(65)}
                                {athlete(66)}
                                {athlete(67)}
                                {athlete(68)}
                                {athlete(69)}
                                {athlete(70)}
                                {athlete(71)}
                                {athlete(72)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>4-й тур | Группа А</div>
                            <div className={styleGridTo32.fourthRoundGroupA}>
                                {athlete(89)}
                                {athlete(90)}
                                {athlete(91)}
                                {athlete(92)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>5-й тур | Группа А</div>
                            <div className={styleGridTo32.fifthRoundGroupA}>
                                {athlete(117)}
                                {athlete(118)}
                            </div>
                        </div>

                        {props.settings.place5_6 &&
                            <div className={styleGridTo32.groupContainPlace5_6}>
                                <div className={styleGridTo32.RoundName}>5-6 место</div>
                                <div className={styleGridTo32.place5_6}>
                                    {athlete(121)}
                                    {athlete(122)}
                                </div>
                            </div>}

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>Полуфинал</div>
                            <div className={styleGridTo32.semiFinalRound}>
                                {athlete(123)}
                                {athlete(124)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>Финал</div>
                            <div className={styleGridTo32.finalFightsContain}>
                                <div className={styleGridTo32.firstFightContain}>
                                    <div className={styleGridTo32.RoundName}>1-й Поединок</div>
                                    <div className={styleGridTo32.finalRound}>
                                        {athlete(125)}
                                        {athlete(126)}
                                    </div>
                                </div>
                                {superFinal && <div className={styleGridTo32.secondFightContain}>
                                    <div className={styleGridTo32.RoundName}>2-й Поединок</div>
                                    <div className={styleGridTo32.finalRound}>
                                        {athlete(127)}
                                        {athlete(128)}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className={styleGridTo32.groupBContainer}>
                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>2-й тур | Группа Б</div>
                            <div className={styleGridTo32.secondRoundGroupB}>
                                {athlete(49)}
                                {athlete(50)}
                                {athlete(51)}
                                {athlete(52)}
                                {athlete(53)}
                                {athlete(54)}
                                {athlete(55)}
                                {athlete(56)}
                                {athlete(57)}
                                {athlete(58)}
                                {athlete(59)}
                                {athlete(60)}
                                {athlete(61)}
                                {athlete(62)}
                                {athlete(63)}
                                {athlete(64)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>3-й тур | Группа Б</div>
                            <div className={styleGridTo32.thirdRoundGroupB}>
                                {athlete(73)}
                                {athlete(74)}
                                {athlete(75)}
                                {athlete(76)}
                                {athlete(77)}
                                {athlete(78)}
                                {athlete(79)}
                                {athlete(80)}
                                {athlete(81)}
                                {athlete(82)}
                                {athlete(83)}
                                {athlete(84)}
                                {athlete(85)}
                                {athlete(86)}
                                {athlete(87)}
                                {athlete(88)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>4-й тур | Группа Б</div>
                            <div className={styleGridTo32.fourthRoundGroupB}>
                                {athlete(93)}
                                {athlete(94)}
                                {athlete(95)}
                                {athlete(96)}
                                {athlete(97)}
                                {athlete(98)}
                                {athlete(99)}
                                {athlete(100)}
                                {athlete(101)}
                                {athlete(102)}
                                {athlete(103)}
                                {athlete(104)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>5-й тур | Группа Б</div>
                            <div className={styleGridTo32.fifthRoundGroupB}>
                                {athlete(105)}
                                {athlete(106)}
                                {athlete(107)}
                                {athlete(108)}
                                {athlete(109)}
                                {athlete(110)}
                                {athlete(111)}
                                {athlete(112)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>6-й тур | Группа Б</div>
                            <div className={styleGridTo32.sixthRoundGroupB}>
                                {athlete(113)}
                                {athlete(114)}
                                {athlete(115)}
                                {athlete(116)}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>7-й тур | Группа Б</div>
                            <div className={styleGridTo32.seventhRoundGroupB}>
                                {athlete(119)}
                                {athlete(120)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}