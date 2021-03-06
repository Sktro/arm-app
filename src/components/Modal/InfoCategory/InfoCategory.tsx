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
    setErrorCategory: (value: boolean) => void
    errorCategory: boolean
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

        const addCategories = () => {
            if (props.weightNewCategory.length > 0 && !coincidence(gender, age, categoryAthletes)) {
                props.addNewCategoryAthletes(gender, age, categoryAthletes, props.weightNewCategory)
                setGender(props.gender[0])
                setAge(props.ageAthletes[0])
                setCategoryAthletes(props.categoryAthlete[0])
                props.setWeightNewCategory([])
            } else {
                props.setErrorCategory(true)
                props.setError(false)
            }
    }

    return (
        <>
            <div className={styleM.selects}>
                <div><SelectForModalGender options={props.gender}
                                           onChangeOption={onChangeGender}
                                           value={gender}
                                           placeholder={"??????"}/></div>
                <div><SelectForModalAge options={props.ageAthletes}
                                        onChangeOption={onChangeAge}
                                        value={age}
                                        placeholder={"??????????????"}/></div>
                <div>
                    <SelectForModalCategoryAthl options={props.categoryAthlete}
                                                onChangeOption={onChangeCategoryAthletes}
                                                value={categoryAthletes}
                                                placeholder={"?????????????????? ??????????????????????"}/></div>
                <div><WeightsSelect inputValue={inputValueNewCategory}
                                    value={props.weightNewCategory}
                                    onChange={onChangeNewCategory}/></div>

            </div>
            <button className={styleM.addCategoryClose} disabled={props.weightNewCategory.length === 0}
                 onClick={addCategories}>
                ???????????????? ??????????????????
            </button>

            {props.arrCategory.length > 0 && <ListOfCategories listOfCategories={props.arrCategory}
                                                               setErrorCategory={props.setErrorCategory}
                                                               setGender={setGender}
                                                               setAge={setAge}
                                                               setCategoryAthletes={setCategoryAthletes}
                                                               setWeightNewCategory={props.setWeightNewCategory}

                                                               deleteCategories={props.deleteCategories}/>}
            {props.errorCategory && <span className={styleM.errorCategory}>???????????? ?????????????????? ?????? ????????????????????</span>}
        </>
    )
}