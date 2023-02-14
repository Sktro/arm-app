import React, {ChangeEvent, CSSProperties, FocusEvent, LegacyRef} from "react";
import style from "./InputAnimationForRegistration.module.css"

type  InputAnimationPropsType = {
    type: string
    placeholder: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    handleFocusEvent?: (e: FocusEvent<HTMLInputElement>) => void
    obligatoryField?: boolean
    autofocus?: boolean
    inputRef?: LegacyRef<HTMLInputElement>
    style?: CSSProperties | undefined
}


export const InputAnimationForRegistration =(props: InputAnimationPropsType) => {

    return (
        <div className={style.form}>
            <input type={props.type}
                   autoFocus={props.autofocus}
                   className={style.form__input}
                   autoComplete="off"
                   ref={props.inputRef}
                   style={props.style}
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