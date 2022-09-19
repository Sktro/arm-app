import React from "react";
import styleCheckInfoWindow from "./CheckInfoWindow.module.css";
import {CategoryType, SettingsType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {Link} from "react-router-dom";
import {createdCategories} from "../../../App";
import {v1} from "uuid";

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
        let arrMale = sortArrayGender(props.arrCategory, 'муж')
        for (let i = 0; i < arrMale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j])) {
                    createdCategories.push({id: v1(),title: arrMale[i].categoryAthlete + `(${arrMale[i].age}): ${arr[i][j]}`,gender: 'муж'})
                }
                if (arr[i][j].includes('+')) {
                    createdCategories.push({id: v1(),title: arrMale[i].categoryAthlete + `(${arrMale[i].age}): ${arr[i][j]}`,gender: 'муж'})
                }
            }
        }
    }

    const newArrayCategoryFemale = (arr: string[][]) => {
        let arrFemale = sortArrayGender(props.arrCategory, 'жен')
        for (let i = 0; i < arrFemale.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Number(arr[i][j])) {
                    createdCategories.push({id: v1(),title: arrFemale[i].categoryAthlete + `(${arrFemale[i].age}): ${arr[i][j]}`, gender:'жен'})
                }
                if (arr[i][j].includes('+')) {
                    createdCategories.push({id: v1(),title: arrFemale[i].categoryAthlete + `(${arrFemale[i].age}): ${arr[i][j]}`, gender:'жен'})
                }
            }
        }
    }

    const addSettings = () => {
        newArrayCategoryMale(arrWeightMale)
        newArrayCategoryFemale(arrWeightFemale)
    }






    const listOfWeightCategories = props.arrCategory
        .map(v => <div key={v.id}> {v.gender} / {v.categoryAthlete} ({v.age}): {props.sortCategory(v)
            .map((v, index) => (index ? '; ' : '') + v.value)}</div>)

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
                    {listOfWeightCategories}
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
                <Link to={'/registrationMembers'} className={styleCheckInfoWindow.creatableTournament} onClick={addSettings}>Создать турнир</Link>
                <button className={styleCheckInfoWindow.cancel} onClick={() => props.setCreateNewTournament(false)}>Отмена</button>
            </div>
        </div>
    )
}