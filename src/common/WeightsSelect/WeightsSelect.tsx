import React, {Component, KeyboardEventHandler} from 'react';

import CreatableSelect from 'react-select/creatable';
import {ActionMeta, OnChangeValue} from 'react-select';
import style from './WeightsSelect.module.css'

const components = {
    DropdownIndicator: null,
};

export interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    label,
    value: label,
});

type WeightSelectPropsType = {
    inputValue: string,
    value: readonly Option[]
    onChange: (inputValue: string, value: readonly Option[]) => void
}

export default class WeightsSelect extends Component<WeightSelectPropsType, {}> {

    handleChange = (
        value: OnChangeValue<Option, true>,
        actionMeta: ActionMeta<Option>
    ) => {
        this.props.onChange(this.props.inputValue, value)
    };
    handleInputChange = (inputValue: string) => {
        if (Number(inputValue) < 1000
            || Number(inputValue) === undefined
            || inputValue.slice(-1) === '+') {
            this.props.onChange(inputValue.replace(/(\D)(?=.*\1)/g, ""), this.props.value)
        }
    };
    handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        const {inputValue, value} = this.props;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                     /*console.group('Value Added');
                     console.log(value);
                     console.groupEnd();*/
                const foundMatch = value.find(el => el.value === inputValue.replace(/\s/g, ''))
                const foundPlus = value.find(el => el.value.slice(-1) === '+')

                const findMax = (str: string) => {
                    let newArr = value.map(v => Number(v.value))
                    let maxValue = Math.max(...newArr)
                    if(!foundPlus && str.slice(-1) === '+') {
                        let newValue = Number(str.slice(0, -1))
                        return maxValue > newValue
                    }
                }

                const chart = (str: string) => {
                    let newArr = value.map(v => v.value)
                    for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i].slice(-1) === '+') {
                            let newChart = newArr[i].slice(0, -1)
                            return Number(newChart) < Number(str)
                        }
                    }
                }

                if (!foundMatch
                    && inputValue[0] !== '0'
                    && inputValue[0] !== '+'
                    && !findMax(inputValue)
                    && !inputValue.match(/[a-zа-я]+/gui)
                    && !chart(inputValue)
                    && (!foundPlus || (foundPlus && !inputValue.includes('+')))
                    && !inputValue.includes('.')) {

                    this.props.onChange(
                        '',
                        [...value, createOption(inputValue.replace(/\s/g, ''))]
                    );

                    event.preventDefault();

                } else {
                    this.props.onChange('', this.props.value)
                }
        }
    };

    render() {
        const {inputValue, value} = this.props;

        const foundValuePlus = value.find(el => el.value.slice(-1) === '+')
        const arrForSort = value.filter(el => el.value.slice(-1) !== '+')
        const temp = arrForSort.map(v => v).sort((a, b) => Number(a.value) - Number(b.value))
        let result;
        if (foundValuePlus) {
            result = [...temp, foundValuePlus]
        } else {
            result = [...temp]
        }

        return (
            <div className={style.creatableSelect}>
                <CreatableSelect
                    components={components}
                    inputValue={inputValue}
                    isClearable
                    isMulti
                    menuIsOpen={false}
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder="Введите весовые категории"
                    value={result}
                />
            </div>
        );
    }
}