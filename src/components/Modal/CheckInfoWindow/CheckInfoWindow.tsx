import React from "react";
import styleCheckInfoWindow from "./CheckInfoWindow.module.css";
import {CategoryType, SettingsType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {Link} from "react-router-dom";

type CheckInfoWindowType = {
    settings: SettingsType
    setCreateNewTournament: (value: boolean) => void
    tournament: string
    location: string
    startTournamentDate: string
    endTournamentDate: string
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
}

export const CheckInfoWindow = (props: CheckInfoWindowType) => {

    return (
        <div className={styleCheckInfoWindow.checkInfo}>
            <div className={styleCheckInfoWindow.textNewTournament}>Создан новый турнир!</div>
            <div className={styleCheckInfoWindow.aboutTournament}>
                <div>Название: <span>{props.tournament}</span></div>
                <div>Место проведения: <span>{props.location}</span></div>
                <div>Дата начала/окончания: {props.startTournamentDate === props.endTournamentDate
                    ? <span>{props.startTournamentDate}</span>
                    : <span>{props.startTournamentDate} / {props.endTournamentDate}</span>}</div>
            </div>
            <div className={styleCheckInfoWindow.categoriesAndSettings}>
                <div className={styleCheckInfoWindow.categoryAll}><span>Категории:</span>
                    {props.arrCategory
                        .map(v => <div key={v.id}> {v.gender} / {v.categoryAthlete} ({v.age}): {props.sortCategory(v)
                            .map((v, index) => (index ? '; ' : '') + v.value)}</div>)}
                </div>
                <div className={styleCheckInfoWindow.settingsAll}><span>Настройки турнира:</span>
                    <div>- Кол-во столов: {props.settings.tableNumb}</div>
                    {props.settings.place5_6 && <div> - Борьба за 5-6 место</div>}
                    {!props.settings.wrestlingSeparately && <div>- Двоеборье</div>}
                    {props.settings.leftHand && <div>- Борьба на левой руке </div>}
                    {props.settings.rightHand && <div>- Борьба на правой руке </div>}
                    {props.settings.final && props.settings.semifinal ?
                        <div>- Полуфиналы и финалы проводятся отдельно</div>
                        : props.settings.final && !props.settings.semifinal ?
                            <div>- Финалы проводятся отдельно</div> : ''}
                </div>
            </div>
            <div className={styleCheckInfoWindow.warring}>ВНИМАНИЕ! При нажатии на кнопку "Создать турнир" возможность
                внесения
                изменений турнира будет невозможна.
            </div>
            <div className={styleCheckInfoWindow.buttonAcceptCancel}>
                <Link to={'/registrationMembers'} className={styleCheckInfoWindow.creatableTournament}>Создать турнир</Link>
                <button className={styleCheckInfoWindow.cancel} onClick={() => props.setCreateNewTournament(false)}>Отмена</button>
            </div>
        </div>
    )
}