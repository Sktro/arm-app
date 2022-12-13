import React, {useState} from "react";
import styleM from "./Modal.module.css"
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {
    AgeType, biathlonType,
    CategoryAthleteType,
    CategoryType,
    GenderType,
    SettingsType,
    TableForArmType
} from "../../App";
import {InfoTournament} from "./InfoTournament/InfoTournament";
import {InfoCategory} from "./InfoCategory/InfoCategory";
import {SettingsTournament} from "./SettingsTournament/SettingsTournament";
import {CheckInfoWindow} from "./CheckInfoWindow/CheckInfoWindow";
import {ModalError} from "./ModalError/ModalError";
import {ButtonCategoryAndSettings} from "./ButtonCategoryAndSettings/ButtonCategoryAndSettings";
import {ButtonCreateTournament} from "./ButtonCreateTournament/ButtonCreateTournament";

type ModalPropsType = {
    settings: SettingsType
    sortCategory: (value: CategoryType) => Option[]
    tableForArm: TableForArmType[]
    arrCategory: CategoryType[]
    addNewCategoryAthletes: (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => void
    deleteCategories: (id: string) => void
    setTournament: (value: string) => void
    tournament: string
    setLocation: (value: string) => void
    location: string
    weightNewCategory: readonly Option[]
    setWeightNewCategory: (value: readonly Option[]) => void
    startTournamentDate: string
    endTournamentDate: string
    setMainSecretary: (value: string) => void
    mainReferee: string
    setMainReferee: (value: string) => void
    mainSecretary: string
    setStartTournamentDate: (separator: string) => void
    setEndTournamentDate: (separator: string) => void
    gender: GenderType[]
    ageAthletes: AgeType[]
    categoryAthlete: CategoryAthleteType[]
    setActiveCategory: (value: { value: string, label: string, gender: string }) => void
    setGS: (value: biathlonType[]) => void
}

export const Modal = (props: ModalPropsType) => {

    const [render, serRender] = useState(false)

    const [error, setError] = useState(false)
    const [errorCategory, setErrorCategory] = useState<boolean>(false)
    const [buttonActive, setButtonActive] = useState(true)
    const [createNewTournament, setCreateNewTournament] = useState<boolean>(false)

    return (
        <div className={styleM.modal}>
            {createNewTournament && <CheckInfoWindow settings={props.settings}
                                                     setGS={props.setGS}
                                                     location={props.location}
                                                     sortCategory={props.sortCategory}
                                                     startTournamentDate={props.startTournamentDate}
                                                     tournament={props.tournament}
                                                     setCreateNewTournament={setCreateNewTournament}
                                                     arrCategory={props.arrCategory}
                                                     endTournamentDate={props.endTournamentDate}/>}
            <div className={!createNewTournament ? styleM.modalContent : `${styleM.modalContent} ${styleM.notActive}`}>
                <InfoTournament setTournament={props.setTournament}
                                tournament={props.tournament}
                                setError={setError}
                                location={props.location}
                                setLocation={props.setLocation}
                                setStartTournamentDate={props.setStartTournamentDate}
                                startTournamentDate={props.startTournamentDate}
                                endTournamentDate={props.endTournamentDate}
                                setEndTournamentDate={props.setEndTournamentDate}/>
                <ButtonCategoryAndSettings buttonActive={buttonActive}
                                           setButtonActive={setButtonActive}/>
                {!buttonActive && <SettingsTournament tableForArm={props.tableForArm}
                                                      serRender={serRender}
                                                      render={render}
                                                      setError={setError}
                                                      settings={props.settings}/>}
                {buttonActive && <InfoCategory addNewCategoryAthletes={props.addNewCategoryAthletes}
                                               sortCategory={props.sortCategory}
                                               errorCategory={errorCategory}
                                               setErrorCategory={setErrorCategory}
                                               setButtonActive={setButtonActive}
                                               gender={props.gender}
                                               ageAthletes={props.ageAthletes}
                                               categoryAthlete={props.categoryAthlete}
                                               weightNewCategory={props.weightNewCategory}
                                               arrCategory={props.arrCategory}
                                               deleteCategories={props.deleteCategories}
                                               setWeightNewCategory={props.setWeightNewCategory}
                                               setError={setError}/>}
                <ModalError error={error}
                            settings={props.settings}
                            location={props.location}
                            arrCategory={props.arrCategory}
                            tournament={props.tournament}/>
                <ButtonCreateTournament tournament={props.tournament}
                                        settings={props.settings}
                                        setError={setError}
                                        setErrorCategory={setErrorCategory}
                                        arrCategory={props.arrCategory}
                                        startTournamentDate={props.startTournamentDate}
                                        setActiveCategory={props.setActiveCategory}
                                        location={props.location}
                                        setCreateNewTournament={setCreateNewTournament}/>
            </div>
        </div>
    )
}