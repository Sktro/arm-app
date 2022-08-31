import React from 'react'
import Select, {MultiValue} from 'react-select'
import styleMS from './MultiSelect.module.css'

type MultiSelectType = {
    options: {value: string, label: string}[]
    setAvailableCategories: (values: MultiValue<{value: string, label: string}>) => void
    disable: boolean
    value: readonly { value: string; label: string; }[]
}

export const MultiSelect = (props: MultiSelectType) => (
    <div className={styleMS.select}>
        <Select options={props.options}
                isMulti={true}
                isDisabled={props.disable}
                value={props.value}
                placeholder={'Доступные категории'}
                onChange={(x)=> {
                   props.setAvailableCategories(x)
                }}/>
        <div className={styleMS.requiredField}>*</div>
    </div>
)

