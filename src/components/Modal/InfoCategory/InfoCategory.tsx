import React, {useState} from "react";
import {SelectForModalGender} from "../../../common/Select/SelectForModalGender";
import {SelectForModalAge} from "../../../common/Select/SelectForModalAge";
import {SelectForModalCategoryAthl} from "../../../common/Select/SelectForModalCategoryAthl";
import WeightsSelect, {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {ListOfCategories} from "./ListOfCategories/ListOfCategories";
import {AgeType, CategoryAthleteType, CategoryType, GenderType} from "../../../App";
import styleInfoCategory from './InfoCategory.module.css'

type InfoCategoryType = {
    sortCategory: (value: CategoryType) => Option[]
    addNewCategoryAthletes: (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => void
    gender: GenderType[]
    ageAthletes: AgeType[]
    categoryAthlete: CategoryAthleteType[]
    weightNewCategory: readonly Option[]
    arrCategory: CategoryType[]
    deleteCategories: (id: string) => void
    setWeightNewCategory: (value: readonly Option[]) => void
    setError: (value: boolean) => void
    setButtonActive: (value: boolean) => void
    setErrorCategory: (value: boolean) => void
    errorCategory: boolean
}

export const InfoCategory = (props: InfoCategoryType) => {
    const [inputValueNewCategory, setInputValueNewCategory] = useState('')
    const [gender, setGender] = useState<GenderType>(props.gender[0])
    const [age, setAge] = useState<AgeType>(props.ageAthletes[0])
    const [categoryAthletes, setCategoryAthletes] = useState<CategoryAthleteType>(props.categoryAthlete[0])
    const [errorWeight, setErrorWeight] = useState<string>('')

    const onChangeNewCategory = (inputValue: string, value: readonly Option[]) => {
        setInputValueNewCategory(inputValue)
        props.setWeightNewCategory(value)
        props.setError(false)
    }

    const onChangeGender = (value: string) => {
        setGender(value as GenderType)
        props.setErrorCategory(false)
    }
    const onChangeAge = (value: string) => {
        setAge(value as AgeType)
        props.setErrorCategory(false)
    }
    const onChangeCategoryAthletes = (value: string) => {
        setCategoryAthletes(value as CategoryAthleteType)
        props.setErrorCategory(false)
    }

    const coincidence = (genderA: GenderType, ageA:AgeType, categoryA: CategoryAthleteType) => {
        let newString = genderA + ageA + categoryA
        for (let i = 0; i < props.arrCategory.length; i++) {
            if (newString === (props.arrCategory[i].gender + props.arrCategory[i].age + props.arrCategory[i].categoryAthlete)) {
                return true
            }
        }
    }

        const foundWeightPlus = props.weightNewCategory.find(v=> v.value.includes('+'))

        const addCategories = () => {
            if (props.weightNewCategory.length > 0 && !coincidence(gender, age, categoryAthletes) && foundWeightPlus) {
                props.addNewCategoryAthletes(gender, age, categoryAthletes, props.weightNewCategory)
                setGender(props.gender[0])
                setAge(props.ageAthletes[0])
                setCategoryAthletes(props.categoryAthlete[0])
                props.setWeightNewCategory([])
                setErrorWeight('')
            } else if (!foundWeightPlus) {
                setErrorWeight('Не введена максимальная категория')
                props.setErrorCategory(true)
                props.setError(false)
            } else {
                setErrorWeight('Данная категория уже существует')
                props.setErrorCategory(true)
                props.setError(false)
            }
    }

    return (
        <>
            <div className={styleInfoCategory.selects}>
                <div><SelectForModalGender options={props.gender}
                                           onChangeOption={onChangeGender}
                                           value={gender}
                                           placeholder={"Пол"}/></div>
                <div><SelectForModalAge options={props.ageAthletes}
                                        onChangeOption={onChangeAge}
                                        value={age}
                                        placeholder={"Возраст"}/></div>
                <div>
                    <SelectForModalCategoryAthl options={props.categoryAthlete}
                                                onChangeOption={onChangeCategoryAthletes}
                                                value={categoryAthletes}
                                                placeholder={"Категория спортсменов"}/></div>
                <div><WeightsSelect inputValue={inputValueNewCategory}
                                    value={props.weightNewCategory}
                                    onChange={onChangeNewCategory}/></div>

            </div>
            <button className={styleInfoCategory.addCategoryClose} disabled={props.weightNewCategory.length === 0}
                 onClick={addCategories}>
                добавить категории
            </button>

            {props.arrCategory.length > 0 && <ListOfCategories listOfCategories={props.arrCategory}
                                                               sortCategory={props.sortCategory}
                                                               setErrorCategory={props.setErrorCategory}
                                                               setGender={setGender}
                                                               setAge={setAge}
                                                               setCategoryAthletes={setCategoryAthletes}
                                                               setWeightNewCategory={props.setWeightNewCategory}

                                                               deleteCategories={props.deleteCategories}/>}
            {props.errorCategory && <span className={styleInfoCategory.errorCategory}>{errorWeight}</span>}

        </>
    )
}