import React, {useState} from "react";
import styleM from "./Modal.module.css"
import {Option} from "../../common/WeightsSelect/WeightsSelect";
import {
    AgeType,
    CategoryAthleteType,
    CategoryType,
    GenderType,
    SettingsType,
    TableForArm
} from "../../App";
import {InfoTournament} from "./InfoTournament/InfoTournament";
import {InfoCategory} from "./InfoCategory/InfoCategory";
import {SettingsTournament} from "./SettingsTournament/SettingsTournament";

type ModalPropsType = {
    settings: SettingsType[]
    tableForArm: TableForArm[]
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
}

export const Modal = (props: ModalPropsType) => {
    const [error, setError] = useState(false)
    const [errorCategory, setErrorCategory] = useState<boolean>(false)
    const [buttonActive, setButtonActive] = useState(true)

    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.arrCategory.length > 0
            && props.location !== '') {
            props.setModalActive(false)
        } else {
            setError(true)
            setErrorCategory(false)
        }
    }

    return (
        <div className={props.modalActive ?
            `${styleM.modal} ${styleM.active}` : `${styleM.modal}`}>
            <div className={styleM.modalContent}>
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
                             onClick={() => setButtonActive(true)}>??????????????????
                        </div>
                        <div className={!buttonActive ? styleM.modalButtonOn : styleM.modalButton}
                             onClick={() => setButtonActive(false)}>?????????????????? ??????????????
                        </div>
                    </div>
                    {!buttonActive && <SettingsTournament tableForArm={props.tableForArm}
                                                          settings={props.settings}/>}
                    {buttonActive && <InfoCategory addNewCategoryAthletes={props.addNewCategoryAthletes}
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
                    ? <span className={styleM.error}>?????????????????? ???????????????????????? ????????( * )</span>
                    : <span className={styleM.error}>???? ???????????????? ???? ?????????? ?????????????? ??????????????????</span>)}

                <button className={styleM.creatableTournamentButton} onClick={addTournament}>?????????????? ????????????</button>
            </div>
        </div>
    )
}