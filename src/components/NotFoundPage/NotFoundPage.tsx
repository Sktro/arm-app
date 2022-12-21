import React from "react";
import styleNotFound from './NotFoundPage.module.css'
import logo from '../../img/Group 5.png'
import {Link} from "react-router-dom";
import {biathlonType} from "../../App";

type NotFoundPageType = {
    GS: biathlonType[] | null
}

export const NotFoundPage = (props: NotFoundPageType) => {
    return (
        <div className={styleNotFound.contain}>
            <header className={styleNotFound.header}>ARM-APP</header>
            <div className={styleNotFound.containInfo}>
                <div className={styleNotFound.info}>
                    <img src={logo} height={295} width={448} alt={'error'}/>
                    <div className={styleNotFound.textContain}>
                        <div className={styleNotFound.textError1}>Sorry, it looks like the page get lost</div>
                        <div className={styleNotFound.textError2}>(or someone has stolen it recently)</div>
                    </div>
                    {props.GS === null &&
                        <Link className={styleNotFound.buttonBack} to={'/'}>Back to Registration</Link>}
                    {props.GS !== null && <>
                        {props.GS?.length! >= 1 && props.GS![0].id === '' &&
                            <Link className={styleNotFound.buttonBack} to={'/registrationMembers'}>Back to
                                Registration</Link>}
                        {props.GS![0].id !== '' &&
                            <Link className={styleNotFound.buttonBack} to={'/holdingATournament'}>Back to
                                Tournament</Link>}
                    </>}

                </div>
            </div>
            <footer className={styleNotFound.footer}>2022©</footer>
        </div>

    )
}