import React, {useState} from "react";
import styleControlPanel from "./ControlPanel.module.css";
import {AthletesType, CategoryType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type ControlPanelType = {
    athletes: AthletesType[]
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
}

export const ControlPanel = (props: ControlPanelType) => {

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
        <div className={styleControlPanel.controlPanelContain}>
            <div className={styleControlPanel.nameControlPanel}>Управление турниром</div>
            <div>
                <div>Мужские категории:</div>
                <div>{newArrayCategoryMale(arrWeightMale).map((c, index) => <button
                    onClick={()=>click(c)}
                    key={index}>{c}</button>)}</div>
            </div>
            <div>Женские категории:</div>
            <div>{newArrayCategoryFemale(arrWeightFemale).map((c, index) => <div key={index}>{c}</div>)}</div>
        </div>
        )

}