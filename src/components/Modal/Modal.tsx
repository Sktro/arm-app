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
    sortCategory: (value: CategoryType) => Option[]
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
    const [createNewTournament, setCreateNewTournament] = useState<boolean>(false)

    const addTournament = () => {
        if (props.tournament !== ''
            && props.startTournamentDate !== ''
            && props.arrCategory.length > 0
            && props.location !== '') {
            setCreateNewTournament(true)
        } else {
            setError(true)
            setErrorCategory(false)
        }

    }

    const addNewTournament = () => {
        props.setModalActive(false)
        setCreateNewTournament(false)
    }

    return (
            <div className={props.modalActive ? `${styleM.modal} ${styleM.active}` : styleM.modal}>

                {createNewTournament && <div className={styleM.checkInfo}>
                    <div className={styleM.textNewTournament}>Создан новый турнир!</div>
                    <div className={styleM.aboutTournament}>
                        <div>Название: {props.tournament}</div>
                        <div>Место проведения: {props.location}</div>
                        <div>Дата начала/окончания: {props.startTournamentDate === props.endTournamentDate
                            ? <span>{props.startTournamentDate}</span>
                            : <span>{props.startTournamentDate} / {props.endTournamentDate}</span>}</div>
                    </div>
                    <div className={styleM.categoriesAndSettings}>
                        <div className={styleM.categoryAll}><span>Категории:</span>
                            {props.arrCategory
                                .map(v => <div> {v.gender} / {v.categoryAthlete} ({v.age}): {props.sortCategory(v)
                                    .map((v, index) => (index ? '; ' : '') + v.value)}</div>)}
                        </div>
                        <div className={styleM.settingsAll}><span>Настройки турнира:</span>
                            <div>- Кол-во столов: {props.settings[0].tableNumb}</div>
                            {props.settings[0].place5_6 && <div> - Борьба за 5-6 место</div>}
                            {!props.settings[0].wrestlingSeparately && <div>- Двоеборье</div>}
                            {props.settings[0].leftHand && <div>- Борьба на левой руке </div>}
                            {props.settings[0].rightHand && <div>- Борьба на правой руке </div>}
                            {props.settings[0].final && props.settings[0].semifinal ?
                                <div>- Полуфиналы и финалы проводятся отдельно</div>
                                : props.settings[0].final && !props.settings[0].semifinal ?
                                    <div>- Финалы проводятся отдельно</div> : ''}
                        </div>
                    </div>
                    <div className={styleM.warring}>ВНИМАНИЕ! При нажатии на кнопку "Создать турнир" возможность
                        внесения
                        изменений турнира будет невозможна.
                    </div>
                    <div className={styleM.buttonAcceptCancel}>
                        <button className={styleM.creatableTournament} onClick={addNewTournament}>Создать турнир
                        </button>
                        <button className={styleM.cancel} onClick={() => setCreateNewTournament(false)}>Отмена</button>
                    </div>
                </div>}


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

                    <button className={styleM.creatableTournamentButton} onClick={addTournament}>Создать турнир</button>
                </div>
            </div>
    )
}