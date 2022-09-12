import React from "react";
import styleButtonCategoryAndSettings from "./ButtonCategoryAndSettings.module.css";

type ButtonCategoryAndSettingsType = {
    buttonActive: boolean
    setButtonActive: (value: boolean) => void
}

export const ButtonCategoryAndSettings = (props: ButtonCategoryAndSettingsType) => {
    return (
            <div className={styleButtonCategoryAndSettings.modalButtonContain}>
                <div className={props.buttonActive ? styleButtonCategoryAndSettings.modalButtonOn : styleButtonCategoryAndSettings.modalButton}
                     onClick={() => props.setButtonActive(true)}>Категории
                </div>
                <div className={!props.buttonActive ? styleButtonCategoryAndSettings.modalButtonOn : styleButtonCategoryAndSettings.modalButton}
                     onClick={() => props.setButtonActive(false)}>Настройки турнира
                </div>
            </div>
    )

}
