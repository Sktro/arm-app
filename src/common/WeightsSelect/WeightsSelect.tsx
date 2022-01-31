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

export default class WeightsSelect extends Component<WeightSelectPropsType, {} > {

    handleChange = (
        value: OnChangeValue<Option, true>,
        actionMeta: ActionMeta<Option>
    ) => {
        this.props.onChange(this.props.inputValue, value)
    };
    handleInputChange = (inputValue: string) => {
        console.log(inputValue)
        if (Number(inputValue) < 1000
            || Number(inputValue) === undefined
            || inputValue.slice(-1) === '+') {
            this.props.onChange(inputValue, this.props.value)
        }
    };
    handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        const {inputValue, value} = this.props;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                console.group('Value Added');
                console.log(value);
                console.groupEnd();
                const find = value.find(el => el.value === inputValue)
                if (!find && inputValue.length > 1) {
                    this.props.onChange(
                         '',
                         [...value, createOption(inputValue)],
                    );
                    event.preventDefault();
                } else {
                    this.props.onChange('',this.props.value)
                }
        }
    };

    render() {
        const {inputValue, value} = this.props;
        const sortValue = value.map(v => v).sort((a, b) => Number(a.value) - Number(b.value))
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
                    value={sortValue}
                />
            </div>
        );
    }
}