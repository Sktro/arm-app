import React, {MouseEventHandler} from 'react';
import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import style from "../../../common/EditableCopmponents/editable.module.css";
import Tippy from "@tippyjs/react";

type TooltipPropsType = {
    id: string
    value: string
    onEditMode?: MouseEventHandler<HTMLDivElement> | undefined
}

const Box = styled(animated.div)`
  background: rgba(51, 51, 51, 0.81);
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
`

export const ToolTip = (props: TooltipPropsType) => {
    const config = {tension: 250, friction: 15};
    const initialStyles = {opacity: 0, transform: "scale(0.4)"};
    const [spring, setSpring] = useSpring(() => initialStyles);

    const newClassContain = props.id === 'fullName' ? style.fullNameContain : props.id === 'team'
        ? style.teamContain : props.id === 'region' ? style.regionContain : ''
    const newClassContent = props.id === 'fullName' ? style.fullNameContent : props.id === 'team'
        ? style.teamContent : props.id === 'region' ? style.regionContent : ''

    const titleFullName = props.id === 'fullName' && props.value.length >= 15 ? props.value : ''
    const titleTeam = props.id === 'team' && props.value.length > 12 ? props.value : ''
    const titleRegion = props.id === 'region' && props.value.length > 10 ? props.value : ''

    const notTitleFullName = props.id === 'fullName' && props.value.length < 19
    const notTitleTeam = props.id === 'team' && props.value.length < 12
    const notTitleRegion = props.id === 'region' && props.value.length <= 10

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

    return (
        <div className={newClassContain} onDoubleClick={props.onEditMode}>
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
                <div className={newClassContent}>{props.value}</div>
            </Tippy>
        </div>
    )
}
