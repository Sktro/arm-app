import React, {ChangeEvent, FocusEvent} from "react";
import style from "./InputAnimationForModal.module.css"

type  InputAnimationPropsType = {
    type: string
    placeholder: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    handleFocusEvent?: (e: FocusEvent<HTMLInputElement>) => void
    obligatoryField?: boolean
}


export const InputAnimationForModal = (props: InputAnimationPropsType) => {

    return (
        <div className={style.form}>
            <input type={props.type}
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