import React from "react";
import styleGridTo32 from "./GridTo32.module.css";
import {visibility32} from "../../../../../../twoDimensionalArray/visibility32";
import {biathlonType, GSType, SettingsType} from "../../../../../../App";
import {subsequence} from "../../../../../../twoDimensionalArray/subsequence";

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

    const styleW = 2 * subsequence[props.ourObj?.N! - 1][props.count] - 1

    const athlete = (num: number, style: string) => {

        if (!props.GSAthletes) return
        let athlete = props.arrAthletes[(props.GSAthletes[visibility32[num - 1][props.count] - 1]!)]?.athlete
        let name = <div className={style}></div>
        let selection = num === styleW || num === styleW + 1 ? `${styleGridTo32[style]} ${styleGridTo32.gridColor}` : styleGridTo32[style]
        if (visibility32[num - 1][props.count] >= 0 && props.GSAthletes[visibility32[num - 1][props.count]]! >= 0) {
            name = <div className={selection}
                        id={num.toString()}>{athlete}</div>
        }
        if (visibility32[num - 1][props.count] === -1) {
            name = <div id={num.toString()} className={styleGridTo32[style]}> ---- </div>
        }
        return name
    }

    console.log(2 * subsequence[props.ourObj?.N! - 1][props.count] - 1)

    const superFinal = props.countAthletes < 6 ? (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 1 && !props.ourObj?.theWrestlingIsOver) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2
        : (props.ourObj?.N! === 2 * (props.countAthletes - 1) + 2 && !props.ourObj?.theWrestlingIsOver) || props.ourObj?.N! === 2 * (props.countAthletes - 1) + 3

    return (
        <>
            <div className={styleGridTo32.leaderboardContain}>
                <div className={styleGridTo32.firstRoundContain}>
                    <div className={styleGridTo32.RoundName}>1-й тур</div>
                    <div className={styleGridTo32.firstRound}>
                        {athlete(1, 'gridGray')}
                        {athlete(2, 'gridGray')}
                        {athlete(3, 'gridWhite')}
                        {athlete(4, 'gridWhite')}
                        {athlete(5, 'gridGray')}
                        {athlete(6, 'gridGray')}
                        {athlete(7, 'gridWhite')}
                        {athlete(8, 'gridWhite')}
                        {athlete(9, 'gridGray')}
                        {athlete(10, 'gridGray')}
                        {athlete(11, 'gridWhite')}
                        {athlete(12, 'gridWhite')}
                        {athlete(13, 'gridGray')}
                        {athlete(14, 'gridGray')}
                        {athlete(15, 'gridWhite')}
                        {athlete(16, 'gridWhite')}
                        {athlete(17, 'gridGray')}
                        {athlete(18, 'gridGray')}
                        {athlete(19, 'gridWhite')}
                        {athlete(20, 'gridWhite')}
                        {athlete(21, 'gridGray')}
                        {athlete(22, 'gridGray')}
                        {athlete(23, 'gridWhite')}
                        {athlete(24, 'gridWhite')}
                        {athlete(25, 'gridGray')}
                        {athlete(26, 'gridGray')}
                        {athlete(27, 'gridWhite')}
                        {athlete(28, 'gridWhite')}
                        {athlete(29, 'gridGray')}
                        {athlete(30, 'gridGray')}
                        {athlete(31, 'gridWhite')}
                        {athlete(32, 'gridWhite')}
                    </div>
                </div>

                <div className={styleGridTo32.groupAAndBContainer}>
                    <div className={styleGridTo32.groupAContainer}>
                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>2-й тур | Группа А</div>
                            <div className={styleGridTo32.secondRoundGroupA}>
                                {athlete(33, 'gridGray')}
                                {athlete(34, 'gridGray')}
                                {athlete(35, 'gridWhite')}
                                {athlete(36, 'gridWhite')}
                                {athlete(37, 'gridGray')}
                                {athlete(38, 'gridGray')}
                                {athlete(39, 'gridWhite')}
                                {athlete(40, 'gridWhite')}
                                {athlete(41, 'gridGray')}
                                {athlete(42, 'gridGray')}
                                {athlete(43, 'gridWhite')}
                                {athlete(44, 'gridWhite')}
                                {athlete(45, 'gridGray')}
                                {athlete(46, 'gridGray')}
                                {athlete(47, 'gridWhite')}
                                {athlete(48, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>3-й тур | Группа А</div>
                            <div className={styleGridTo32.thirdRoundGroupA}>
                                {athlete(65, 'gridGray')}
                                {athlete(66, 'gridGray')}
                                {athlete(67, 'gridWhite')}
                                {athlete(68, 'gridWhite')}
                                {athlete(69, 'gridGray')}
                                {athlete(70, 'gridGray')}
                                {athlete(71, 'gridWhite')}
                                {athlete(72, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>4-й тур | Группа А</div>
                            <div className={styleGridTo32.fourthRoundGroupA}>
                                {athlete(89, 'gridGray')}
                                {athlete(90, 'gridGray')}
                                {athlete(91, 'gridWhite')}
                                {athlete(92, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>5-й тур | Группа А</div>
                            <div className={styleGridTo32.fifthRoundGroupA}>
                                {athlete(105, 'gridGray')}
                                {athlete(106, 'gridGray')}
                            </div>
                        </div>


                        {props.settings.place5_6 && props.countAthletes >= 6 &&
                            <div className={styleGridTo32.groupContainPlace5_6}>
                                <div className={styleGridTo32.RoundName}>5-6 место</div>
                                <div className={styleGridTo32.place5_6}>
                                    {athlete(121, 'gridGray')}
                                    {athlete(122, 'gridGray')}
                                </div>
                            </div>}

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>Полуфинал</div>
                            <div className={styleGridTo32.semiFinalRound}>
                                {athlete(123, 'gridWhite')}
                                {athlete(124, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>Финал</div>
                            <div className={styleGridTo32.finalFightsContain}>
                                <div className={styleGridTo32.firstFightContain}>
                                    <div className={styleGridTo32.RoundName}>1-й Поединок</div>
                                    <div className={styleGridTo32.finalRound}>
                                        {athlete(125, 'gridGray')}
                                        {athlete(126, 'gridGray')}
                                    </div>
                                </div>
                                {superFinal && <div className={styleGridTo32.secondFightContain}>
                                    <div className={styleGridTo32.RoundName}>2-й Поединок</div>
                                    <div className={styleGridTo32.finalRound}>
                                        {athlete(127, 'gridWhite')}
                                        {athlete(128, 'gridWhite')}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className={styleGridTo32.groupBContainer}>
                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>2-й тур | Группа Б</div>
                            <div className={styleGridTo32.secondRoundGroupB}>
                                {athlete(49, 'gridGray')}
                                {athlete(50, 'gridGray')}
                                {athlete(51, 'gridWhite')}
                                {athlete(52, 'gridWhite')}
                                {athlete(53, 'gridGray')}
                                {athlete(54, 'gridGray')}
                                {athlete(55, 'gridWhite')}
                                {athlete(56, 'gridWhite')}
                                {athlete(57, 'gridGray')}
                                {athlete(58, 'gridGray')}
                                {athlete(59, 'gridWhite')}
                                {athlete(60, 'gridWhite')}
                                {athlete(61, 'gridGray')}
                                {athlete(62, 'gridGray')}
                                {athlete(63, 'gridWhite')}
                                {athlete(64, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>3-й тур | Группа Б</div>
                            <div className={styleGridTo32.thirdRoundGroupB}>
                                {athlete(73, 'gridGray')}
                                {athlete(74, 'gridGray')}
                                {athlete(75, 'gridWhite')}
                                {athlete(76, 'gridWhite')}
                                {athlete(77, 'gridGray')}
                                {athlete(78, 'gridGray')}
                                {athlete(79, 'gridWhite')}
                                {athlete(80, 'gridWhite')}
                                {athlete(81, 'gridGray')}
                                {athlete(82, 'gridGray')}
                                {athlete(83, 'gridWhite')}
                                {athlete(84, 'gridWhite')}
                                {athlete(85, 'gridGray')}
                                {athlete(86, 'gridGray')}
                                {athlete(87, 'gridWhite')}
                                {athlete(88, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>4-й тур | Группа Б</div>
                            <div className={styleGridTo32.fourthRoundGroupB}>
                                {athlete(93, 'gridGray')}
                                {athlete(94, 'gridGray')}
                                {athlete(95, 'gridWhite')}
                                {athlete(96, 'gridWhite')}
                                {athlete(97, 'gridGray')}
                                {athlete(98, 'gridGray')}
                                {athlete(99, 'gridWhite')}
                                {athlete(100, 'gridWhite')}
                                {athlete(101, 'gridGray')}
                                {athlete(102, 'gridGray')}
                                {athlete(103, 'gridWhite')}
                                {athlete(104, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>5-й тур | Группа Б</div>
                            <div className={styleGridTo32.fifthRoundGroupB}>
                                {athlete(107, 'gridGray')}
                                {athlete(108, 'gridGray')}
                                {athlete(109, 'gridWhite')}
                                {athlete(110, 'gridWhite')}
                                {athlete(111, 'gridGray')}
                                {athlete(112, 'gridGray')}
                                {athlete(113, 'gridWhite')}
                                {athlete(114, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>6-й тур | Группа Б</div>
                            <div className={styleGridTo32.sixthRoundGroupB}>
                                {athlete(115, 'gridGray')}
                                {athlete(116, 'gridGray')}
                                {athlete(117, 'gridWhite')}
                                {athlete(118, 'gridWhite')}
                            </div>
                        </div>

                        <div className={styleGridTo32.groupContain}>
                            <div className={styleGridTo32.RoundName}>7-й тур | Группа Б</div>
                            <div className={styleGridTo32.seventhRoundGroupB}>
                                {athlete(119, 'gridWhite')}
                                {athlete(120, 'gridWhite')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}