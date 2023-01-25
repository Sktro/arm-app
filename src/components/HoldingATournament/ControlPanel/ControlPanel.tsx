import React from "react";
import styleControlPanel from "./ControlPanel.module.css";
import {AthletesType, biathlonType, CategoryType, CreatedCategoryType, JudgeType, SettingsType} from "../../../App";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type ControlPanelType = {
    athletes: AthletesType[]
    GS: biathlonType[] | null
    setGS: (value: biathlonType[] | null) => void
    setSettings: (value: SettingsType) => void
    setArrCategory: (value: CategoryType[]) => void
    createdCategories: CreatedCategoryType[]
    setJudge: (value: JudgeType[]) => void
    setAthletes: (value: AthletesType[]) => void
    setTournament: (value: string) => void
    setLocation: (value: string) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setCopyCategory: (value: CreatedCategoryType[]) => void
    setActiveCategory: (value: { value: string, label: string, gender: string } | null) => void
    setCategoryVisibility: (value: boolean) => void
}

export const ControlPanel = (props: ControlPanelType) => {

    const navigate = useNavigate()
    const location = useLocation().pathname.split('/', 5)
    const locationID = location[3]

    const arrCategory = (gender: string) => {
        let newArr = []
        let arrCategories = props.GS
        for (let i = 0; i < arrCategories!.length; i++) {
            if (arrCategories![i].leftHand.gender === gender) {
                newArr.push(arrCategories![i])
            }
        }
        return newArr
    }

    const activeClass = (id: string) => locationID === id ? styleControlPanel.buttonCategoryOn : styleControlPanel.buttonCategory

    const categoryMale = arrCategory('муж').map(c => <NavLink className={activeClass(c.id)} to={`table/${c.id}/`}
                                                              key={c.id}>{c.leftHand.title}</NavLink>)
    const categoryFemale = arrCategory('жен').map(c => <NavLink className={activeClass(c.id)} to={`table/${c.id}/`}
                                                                key={c.id}>{c.leftHand.title}</NavLink>)

    const tournamentClosed = props.GS?.map(el => el.categoryClosed).every(el => el)


    /*        let text = JSON.stringify('<h1></h1>')

            function downloadAsFile(data: any) {
                let a = document.createElement("a")
                let file = new Blob([JSON.parse(data)], {type: 'application/json'})
                a.href = URL.createObjectURL(file)
                a.download = "exam.html"
                a.click()
            }*/

    const finishTheTournament = () => {
        props.setSettings({
            tableNumb: '1',
            place5_6: false,
            semifinalAndFinal: false,
            semifinal: false,
            final: false,
            leftHand: false,
            rightHand: false,
            doubleEvent: false,
            wrestlingSeparately: false
        })
        props.setArrCategory([])
        props.createdCategories.length = 0
        props.setJudge([])
        props.setAthletes([])
        props.setTournament('')
        props.setLocation('')
        props.setWeightNewCategory([])
        props.setGS(null)
        props.setCopyCategory([])
        props.setActiveCategory(null)
        props.setCategoryVisibility(false)
        localStorage.clear()
        navigate('/', {replace: true})
    }

    return (
        <div className={styleControlPanel.controlPanelContain}>
            <div className={styleControlPanel.nameControlPanel}>Управление турниром</div>
            <div>
                {categoryMale.length > 0 && <div>Мужские категории:</div>}
                <div>{categoryMale}</div>
            </div>
            {categoryFemale.length > 0 && <div>Женские категории:</div>}
            <div>{categoryFemale}</div>
            {tournamentClosed && <div>
                <button className={styleControlPanel.closed} onClick={finishTheTournament}>Завершить турнир</button>
            </div>}
        </div>
    )

}