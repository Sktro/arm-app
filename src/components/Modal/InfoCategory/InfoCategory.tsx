import React, {useState} from "react";
import styleM from "../Modal.module.css";
import {SelectForModalGender} from "../../../common/Select/SelectForModalGender";
import {SelectForModalAge} from "../../../common/Select/SelectForModalAge";
import {SelectForModalCategoryAthl} from "../../../common/Select/SelectForModalCategoryAthl";
import WeightsSelect, {Option} from "../../../common/WeightsSelect/WeightsSelect";
import {ListOfCategories} from "./ListOfCategories/ListOfCategories";
import {AgeType, CategoryAthleteType, CategoryType, GenderType} from "../../../App";

type InfoCategoryType = {
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
}


export const InfoCategory = (props: InfoCategoryType) => {
    const [inputValueNewCategory, setInputValueNewCategory] = useState('')
    const [gender, setGender] = useState<GenderType>(props.gender[0])
    const [age, setAge] = useState<AgeType>(props.ageAthletes[0])
    const [categoryAthletes, setCategoryAthletes] = useState<CategoryAthleteType>(props.categoryAthlete[0])

    const onChangeNewCategory = (inputValue: string, value: readonly Option[]) => {
        setInputValueNewCategory(inputValue)
        props.setWeightNewCategory(value)
        props.setError(false)
    }

    const onChangeGender = (value: string) => {
        setGender(value as GenderType)
    }
    const onChangeAge = (value: string) => {
        setAge(value as AgeType)
    }
    const onChangeCategoryAthletes = (value: string) => {
        setCategoryAthletes(value as CategoryAthleteType)
    }

    const addCategories = () => {
        if (props.weightNewCategory.length > 0) {
            props.addNewCategoryAthletes(gender, age, categoryAthletes, props.weightNewCategory)
            setGender(props.gender[0])
            setAge(props.ageAthletes[0])
            setCategoryAthletes(props.categoryAthlete[0])
            props.setWeightNewCategory([])
        } else {
            props.setError(true)
        }
    }

    return (
        <>
            <div className={styleM.selects}>
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

            <div className={styleM.addCategoryClose}
                 onClick={addCategories}>
                добавить категории
            </div>
            {props.arrCategory.length > 0 && <ListOfCategories listOfCategories={props.arrCategory}

                                                               setGender={setGender}
                                                               setAge={setAge}
                                                               setCategoryAthletes={setCategoryAthletes}
                                                               setWeightNewCategory={props.setWeightNewCategory}

                                                               deleteCategories={props.deleteCategories}/>}
        </>
    )
}