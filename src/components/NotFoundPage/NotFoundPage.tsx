import React from "react";
import styleNotFound from './NotFoundPage.module.css'
import logo from '../../img/Group 5.png'
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
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
                    <Link className={styleNotFound.buttonBack} to={'/arm-app' }>Back to Registration</Link>
                </div>
            </div>
            <footer className={styleNotFound.footer}>2022©</footer>
        </div>

    )
}