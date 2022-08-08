import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styleSS from "./SuperSelect.module.css"


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
}


export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [options ? options.map((o,i) =>
        <option key={i} value={options[i]} >{options[i]}</option>
    ) : []];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={styleSS.superSelect} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}