import React from "react";
import styleR from "../Registration.module.css";
import {CategoryType} from "../../../App";
import {Option} from "../../../common/WeightsSelect/WeightsSelect";

type CategoriesListPropsType = {
    arrCategory: CategoryType[]
    sortCategory: (value: CategoryType) => Option[]
}


export const CategoriesList = (props: CategoriesListPropsType) => {

    const findQty = (str: string) => {
        let count = 0
        for (let i = 0; i < props.arrCategory.length; i++) {
            if(props.arrCategory[i].gender === str) {
                count++
            }
        }
        return count
    }
    const sortArrayGender = (arr: CategoryType[], str: string) => {
        let newArr = []
        for(let i = 0; i < arr.length; i++) {
            if (props.arrCategory[i].gender === str) {
                newArr.push(props.arrCategory[i])
            }
        }
        return newArr
    }

    return (
        <div className={styleR.weightsCategories}>
                <span className={styleR.registrationDescription}>
                    Список весовых категорий({findQty('муж') > 0 ? <span>M:{findQty('муж')}</span> : ''}
                    {findQty('муж') > 0 && findQty('жен') > 0 ? ';' : ''}
                    {findQty('жен') > 0 ?<span>Ж:{findQty('жен')}</span> : ''}):
                    {findQty('муж') ? <div>Мужчины:
                    <div>{sortArrayGender(props.arrCategory, 'муж')
                        .map(c => <div key={c.id}><span className={styleR.listMale}>- {c.categoryAthlete}({c.age}):</span><span className={styleR.weightListM}>{props.sortCategory(c)
                            .map((w, index) => (index ? '; ': '') + w.value)}</span> </div>)}</div>
                    </div> : ''}
                    {findQty('жен') ? <div>Женщины:
                            <div>{sortArrayGender(props.arrCategory, 'жен')
                                .map(c => <div key={c.id}><span className={styleR.listFemale}>- {c.categoryAthlete}({c.age}):</span><span className={styleR.weightListF}>{props.sortCategory(c)
                                    .map((w, index) => (index ? '; ': '') + w.value)}</span></div>)}</div>
                        </div> : ''}
                </span>
        </div>
        )

}