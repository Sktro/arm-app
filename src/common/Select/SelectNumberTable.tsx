import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from "./SelectNumberTable.module.css";


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
    placeholder: string
}


export const SelectNumberTable: React.FC<SuperSelectPropsType> = (
    {
        options,
        placeholder,
        onChange,
        onChangeOption,
        ...restProps
    }) => {

    const mappedOptions: any[] = [options ? options.map((o, i) =>
        <option className={style.options} key={i} value={options[i]}>{options[i]}</option>
    ) : []];
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    return (
        <div className={style.form}>
            <select
                className={style.form__input}
                onChange={onChangeCallback}
                {...restProps}>
                {mappedOptions}
            </select>
            <label className={style.form__label}>
                {placeholder}
            </label>
        </div>
    )
}