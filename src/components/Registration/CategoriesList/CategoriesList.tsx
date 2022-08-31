import React from "react";
import styleR from "../Registration.module.css";
import {AthletesType, CategoryType, FilterType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type CategoriesListPropsType = {
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
    athletes: AthletesType[]
    setFilter: (filter: FilterType) => void
    setFilterAthletes: (value: AthletesType[]) => void
    setCategoryVisibility: (value: boolean) => void
    changeFilter: (allAthlete: AthletesType[], filter: FilterType) => void
    setActiveCategory: (value: { value: string, label: string, gender: string }) => void
    setModalDeleteAthlete: (value: boolean) => void
}

export const CategoriesList = (props: CategoriesListPropsType) => {

    const findQty = (str: string) => {
        let count = 0
        for (let i = 0; i < props.arrCategory.length; i++) {
            if (props.arrCategory[i].gender === str) {
                count++
            }
        }
        return count
    }

    const sortArrayGender = (arr: CategoryType[], str: string) => {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (props.arrCategory[i].gender === str) {
                newArr.push(props.arrCategory[i])
            }
        }
        return newArr
    }

    const allTeam = props.athletes.map(t => t.team).filter(t => t !== '----')
    const sortRepeatedTeam = allTeam.filter((item, index) => {
        return allTeam.indexOf(item) === index;
    })

    const changeFilterCategoryFemale = (str: string) => {
        let arrFemale = []
        let newArr = props.athletes
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].categoryMember!.length; j++) {
                if (newArr[i].categoryMember![j].value === str && newArr[i].gender === 'жен') {
                    arrFemale.push(newArr[i])
                }
            }
        }
        props.setFilterAthletes(arrFemale)
        props.setModalDeleteAthlete(false)
        props.setActiveCategory({value: str, label: str, gender: 'жен'})
    }

    const activateButtonFemale = (str: string, value: boolean) => {
        changeFilterCategoryFemale(str)
        props.setCategoryVisibility(value)
    }

    const changeFilterCategoryMale = (str: string) => {
        let arrMale = []
        let newArr = props.athletes
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].categoryMember!.length; j++) {
                if (newArr[i].categoryMember![j].value === str && newArr[i].gender === 'муж') {
                    arrMale.push(newArr[i])
                }
            }
        }
        props.setFilterAthletes(arrMale)
        props.setModalDeleteAthlete(false)
        props.setActiveCategory({value: str, label: str, gender: 'муж'})
    }

    const activateButtonMale = (str: string, value: boolean) => {
        changeFilterCategoryMale(str)
        props.setCategoryVisibility(value)
    }

    return (
        <div className={styleR.weightsCategories}>
                <span className={styleR.registrationDescription}>
                    Список весовых категорий({findQty('муж') > 0 ? <span>M:{findQty('муж')}</span> : ''}
                    {findQty('муж') > 0 && findQty('жен') > 0 ? ';' : ''}
                    {findQty('жен') > 0 ? <span>Ж:{findQty('жен')}</span> : ''}):
                    {findQty('муж') ? <div className={styleR.genderList}>Мужчины:
                        <div>{sortArrayGender(props.arrCategory, 'муж')
                            .map(c => <div key={c.id}><span
                                className={styleR.listMale}>- {c.categoryAthlete}({c.age}):</span>
                                <span>{props.sortCategory(c)
                                    .map((w, index) => <button key={index} className={styleR.weightListM}
                                                               onClick={() => activateButtonMale(`${c.categoryAthlete}(${c.age}): ` + w.value, true)}>{w.value}</button>)}
                                </span>
                            </div>)}</div>
                    </div> : ''}
                    {findQty('жен') ? <div className={styleR.genderList}>Женщины:
                        <div>{sortArrayGender(props.arrCategory, 'жен')
                            .map(c => <div key={c.id}><span
                                className={styleR.listFemale}>- {c.categoryAthlete}({c.age}):</span><span>{props.sortCategory(c)
                                .map((w, index) => <button key={index} className={styleR.weightListF}
                                                           onClick={() => activateButtonFemale(`${c.categoryAthlete}(${c.age}): ` + w.value, true)}>{w.value}</button>)}</span>
                            </div>)}</div>
                    </div> : ''}
                </span>
            <span className={styleR.registrationDescription}>Список команд({sortRepeatedTeam.length}): {sortRepeatedTeam
                .map((t, index) => (index ? '; ' : '') + t)}
            </span>
        </div>
    )

}