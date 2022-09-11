import React, {useState} from "react";
import styleM from "./Modal.module.css"
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {
    AgeType,
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

type ModalPropsType = {
    settings: SettingsType
    sortCategory: (value: CategoryType) => Option[]
    tableForArm: TableForArmType[]
    arrCategory: CategoryType[]
    addNewCategoryAthletes: (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => void
    setModalActive: (value: boolean) => void
    deleteCategories: (id: string) => void
    modalActive: boolean
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
    setActiveCategory: (value: {value: string, label: string, gender: string}) => void
}

export const Modal = (props: ModalPropsType) => {
    const [error, setError] = useState(false)
    const [errorCategory, setErrorCategory] = useState<boolean>(false)
    const [buttonActive, setButtonActive] = useState(true)
    const [createNewTournament, setCreateNewTournament] = useState<boolean>(false)

    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.arrCategory.length > 0
            && props.location !== '') {
            setCreateNewTournament(true)
            props.setActiveCategory({value:'', label: '', gender: ''})
        } else {
            setError(true)
            setErrorCategory(false)
        }
    }
    const newClassButton = props.tournament !== '' && props.location !== '' && props.arrCategory.length > 0
        ? `${styleM.creatableTournamentButton} ${styleM.creatableTournamentButtonActive}` : styleM.creatableTournamentButton
    return (
        <div className={props.modalActive ? `${styleM.modal} ${styleM.active}` : styleM.modal}>
            {createNewTournament && <CheckInfoWindow settings={props.settings}
                                                     location={props.location}
                                                     setModalActive={props.setModalActive}
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
                <div>
                    <div className={styleM.modalButtonContain}>
                        <div className={buttonActive ? styleM.modalButtonOn : styleM.modalButton}
                             onClick={() => setButtonActive(true)}>Категории
                        </div>
                        <div className={!buttonActive ? styleM.modalButtonOn : styleM.modalButton}
                             onClick={() => setButtonActive(false)}>Настройки турнира
                        </div>
                    </div>
                    {!buttonActive && <SettingsTournament tableForArm={props.tableForArm}
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
                </div>
                {error && (props.tournament === "" || props.location === ''
                    ? <span className={styleM.error}>заполните обязательные поля( * )</span>
                    : <span className={styleM.error}>Не добалено ни одной весовой категории</span>)}
                <button className={newClassButton} onClick={addTournament}>Создать турнир</button>
            </div>
        </div>
    )
}