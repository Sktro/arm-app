import React, {ChangeEvent, FocusEvent} from "react";
import style from "./InputWeight.module.css"

type  InputWeightType = {
    type: string
    placeholder: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    handleFocusEvent?: (e: FocusEvent<HTMLInputElement>) => void
    obligatoryField?: boolean
    autofocus?: boolean
}


export const InputWeight = (props: InputWeightType) => {

    return (
        <div className={style.form}>
            <input type={props.type}
                   autoFocus={props.autofocus}
                   className={style.form__input}
                   autoComplete="off"
                   placeholder=" "
                   onChange={props.onChange}
                   value={props.value}
                   onBlur={props.handleFocusEvent}/>
            <label className={style.form__label}>
                {props.placeholder}
            </label>
            {props.obligatoryField && <div className={style.obligatory}>*</div>}
        </div>
    )
}