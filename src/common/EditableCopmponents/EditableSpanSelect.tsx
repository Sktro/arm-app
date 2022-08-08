import React, {KeyboardEvent, useState} from 'react';
import {SuperSelect} from "./SuperSelect";
import styleES from "./EditableSpanSelect.module.css"
import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import Tippy from "@tippyjs/react";

type EditableSpanSelectPropsType = {
    value: string
    changeOptions: (value: string) => void
    options: string[]
}

const Box = styled(animated.div)`
  background: rgba(51, 51, 51, 0.81);
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
`;


export const EditableSpanSelect = (props: EditableSpanSelectPropsType) => {
    const config = {tension: 250, friction: 15};
    const initialStyles = {opacity: 0, transform: "scale(0.4)"};
    const [spring, setSpring] = useSpring(() => initialStyles);

    function onMount() {
        setSpring({
            opacity: 1,
            transform: "scale(1)",
            onRest: () => {
            },
            config
        });
    }

    function onHide() {
        setSpring({
            ...initialStyles,
            onRest: () => {
            },
            config: {...config, clamp: true}
        });
    }

    const [value, setValue] = useState(props.value)
    const [editModeSS, setEditModeSS] = useState<boolean>(false)

    const changeTitle = (value: string) => setValue(value)
    const onEditMode = () => setEditModeSS(true)
    const offEditMode = () => {
        setEditModeSS(false)
        props.changeOptions(value)
    }

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLSelectElement>) => {
        if (e.key === "Enter") {
            offEditMode();
        }
    }

    return (
        editModeSS
            ? <SuperSelect options={props.options}
                           onKeyPress={onKeyPressAddItem}
                           onChangeOption={changeTitle}
                           autoFocus={true}
                           value={value}
                           onBlur={offEditMode}
            />
            : <div className={styleES.editableDivSelectContain} onDoubleClick={onEditMode}>
                <Tippy disabled={value.length < 12}
                       render={attrs => (
                           <Box style={spring} {...attrs} >
                               {value.length > 12 ? value : ''}
                           </Box>
                       )}
                       animation={true}
                       onMount={onMount}
                       onHide={onHide}
                >
                <div className={styleES.editableDivSelectContent}>{value}</div>
                </Tippy>
            </div>
    );
};