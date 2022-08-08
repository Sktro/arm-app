import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './editable.module.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styled from "styled-components";
import {useSpring, animated} from "react-spring";

type EditableSpanTextPropsType = {
    value: string
    changeValue: (value: string) => void
    id: string
}

const Box = styled(animated.div)`
  background: rgba(51, 51, 51, 0.81);
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
`;


export const EditableSpanText = (props: EditableSpanTextPropsType) => {

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

        const [value, setValue] = useState<string>(props.value)
        const [editModeST, setEditModeST] = useState<boolean>(false)
        const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }
        const onEditMode = () => setEditModeST(true)
        const offEditMode = () => {
            if (value.length > 1) {
                setEditModeST(false)
                props.changeValue(value.replace(/ +/g, ' ').trim())
            } else {
                setEditModeST(true)
            }
        }

        const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                offEditMode();
            }
        }
        const newClassContain = props.id === 'fullName' ? style.fullNameContain : props.id === 'team'
            ? style.teamContain : props.id === 'region' ? style.regionContain : ''
        const newClassContent = props.id === 'fullName' ? style.fullNameContent : props.id === 'team'
            ? style.teamContent : props.id === 'region' ? style.regionContent : ''

        const titleFullName = props.id === 'fullName' && value.length >= 20 ? value : ''
        const titleTeam = props.id === 'team' && value.length > 12 ? value : ''
        const titleRegion = props.id === 'region' && value.length > 10 ? value : ''

        const notTitleFullName = props.id === 'fullName' && value.length < 20
        const notTitleTeam = props.id === 'team' && value.length < 12
        const notTitleRegion = props.id === 'region' && value.length <= 10

        return (
            editModeST
                ? <input
                    className={style.editableSpanText}
                    onKeyPress={onKeyPressAddItem}
                    value={value}
                    autoFocus={true}
                    onBlur={offEditMode}
                    onChange={changeTitle}/>
                : <div className={newClassContain} onDoubleClick={onEditMode}>
                    <Tippy disabled={notTitleFullName || notTitleTeam || notTitleRegion}
                           render={attrs => (
                               <Box style={spring} {...attrs} >
                                   {titleFullName || titleTeam || titleRegion}
                               </Box>
                           )}
                           animation={true}
                           onMount={onMount}
                           onHide={onHide}
                    >
                        <div className={newClassContent}>{value}</div>
                    </Tippy>
                </div>

        );
    }
;