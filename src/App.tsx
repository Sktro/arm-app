import React, {useState} from 'react';
import styleA from './App.module.css'
import {Registration} from "./components/Registration/Registration";
import {v1} from "uuid";
import {Modal} from "./components/Modal/Modal";
import {Header} from "./components/Header/Header";
import {Option} from "./common/WeightsSelect/WeightsSelect";

export type TableForArm =  '1' | '2' | '3' | '4'| '5' | '6'
export type RankType =
    'б/р'
    | '3ю.р.'
    | '2ю.р.'
    | '1ю.р.'
    | '3в.р.'
    | '2в.р.'
    | '1в.р.'
    | 'КМС'
    | 'МС'
    | 'МСМК'
    | 'ЗМС';

export type GenderType =
    'муж'
    | 'жен'

export type CategoryJudgeType =
    'б/к' | '3 категория' | '2 категория' | '1 категория' | 'ВК' | 'МК'

export type AgeType =
    'Взрослые'
    |'14-15'
    | '16-18'
    | '19-21'
    | '22+'
    | '40+'
    | '50+'
    | '60+'

export type CategoryAthleteType =
    'Общая'
    |'Любители'
    | 'Профессионалы'
    | 'Инвалиды'
    | 'Инвалиды(HEAR)'
    | 'Инвалиды(VIS)'
    | 'Инвалиды(STAND)'
    | 'Инвалиды(SIT)'

export type AthletesType = {
    id: string
    fullName: string
    weight: number
    team: string
    rank: RankType
    gender: GenderType
}

export type JudgeType = {
    id: string
    fullName: string
    category: CategoryJudgeType
    gender: GenderType
    region: string
}

export type CategoryType = {
    id: string
    gender: GenderType
    age: AgeType
    categoryAthlete: CategoryAthleteType
    weightsCategory: readonly Option[]
}

export type SettingsType = {
    tableNumb: TableForArm
    place5_6: boolean
    wrestlingSeparately: boolean
    leftHand: boolean
    rightHand: boolean
    semifinalAndFinal: boolean
    semifinal: boolean
    final: boolean
}

export const categoryJudge: CategoryJudgeType[] = ['б/к', '3 категория', '2 категория', '1 категория', 'ВК', 'МК']
export const TableForArm: TableForArm[] = ['1', '2', '3', '4', '5', '6']
export const categoryAthlete: CategoryAthleteType[] = ['Общая', 'Любители', 'Профессионалы', 'Инвалиды', 'Инвалиды(VIS)', 'Инвалиды(STAND)', 'Инвалиды(SIT)']
export const ageAthletes: AgeType[] = ['Взрослые', '14-15', '16-18', '19-21', '22+', '40+', '50+', '60+']
export const ranksAthletes: RankType[] = ['б/р', '3ю.р.', '2ю.р.', '1ю.р.', '3в.р.', '2в.р.', '1в.р.', 'КМС', 'МС', 'МСМК', 'ЗМС']
export const genderAthletes: GenderType[] = ['муж', 'жен']

function App() {
    // Starting modal window
    const [modalActive, setModalActive] = useState<boolean>(true)
    // information for tournament
    const [tournament, setTournament] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [startTournamentDate, setStartTournamentDate] = useState<string>(getCurrentDate())
    const [endTournamentDate, setEndTournamentDate] = useState<string>(getCurrentDate())
    const [mainReferee, setMainReferee] = useState<string>('')
    const [mainSecretary, setMainSecretary] = useState<string>('')
    // settings for tournament
    const [weightNewCategory, setWeightNewCategory] = useState<readonly Option[]>([])
    // New athlete
    const [athletes, setAthletes] = useState<Array<AthletesType>>([
        {id: v1(), fullName: 'Петров Артем', weight: 89.6, team: 'ФАТО', rank: 'б/р', gender: 'муж'},
        {id: v1(), fullName: 'Кервалидзе Игорь', weight: 87, team: 'ФАТО', rank: '1в.р.', gender: 'муж'}
    ])
    // New judge
    const [judge, setJudge] = useState<Array<JudgeType>>([])
    // New category
    const [arrCategory, setArrCategory] = useState<Array<CategoryType>>([])

    // Settings tournament
    const [settings, SetSettings] = useState<SettingsType>(
        {tableNumb: '1', place5_6: false, semifinalAndFinal:false, semifinal: false, final: false, leftHand: false, rightHand: false, wrestlingSeparately: false}
    )

    function getCurrentDate(separator = '-') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ?`0${date}` : `${date}`}`
    }

    const addAthlete = (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType) => {
        let newAthlete = {id: v1(), fullName, weight, team, rank, gender}
        setAthletes([newAthlete, ...athletes])
    }
    const addJudges = (fullName: string, gender: GenderType, category: CategoryJudgeType, region: string) => {
        let newJudge = {id: v1(), fullName, gender, category, region}
        setJudge([newJudge, ...judge])
    }
    const addNewCategoryAthletes = (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => {
        let newCategory = {id: v1(), gender, age, categoryAthlete, weightsCategory}
        setArrCategory([newCategory, ...arrCategory])
    }
    const removeAthlete = (AthleteID: string) => {
        setAthletes(athletes.filter(atl => atl.id !== AthleteID))
    }
    const removeJudge = (JudgeID: string) => {
        setJudge(judge.filter(jud => jud.id !== JudgeID))
    }
    const deleteCategories = (CategoryID: string) => {
        setArrCategory(arrCategory.filter(c => c.id !== CategoryID))
    }
    const sortCategory = (arrayCategory: CategoryType) => {
        const foundValuePlus = arrayCategory.weightsCategory.find(el => el.value.slice(-1) === '+')
        const arrForSort = arrayCategory.weightsCategory.filter(el => el.value.slice(-1) !== '+')
        const temp = arrForSort.map(v => v).sort((a, b) => Number(a.value) - Number(b.value))
        let result: Option[];
        if (foundValuePlus) {
            result = [...temp, foundValuePlus]
        } else {
            result = [...temp]
        }
        return result
    }
    const changeFullNameAndTeamAthlete = (FullNameAndTeam: string, AthleteID: string) => {
        setAthletes(athletes.map(at => at.id === AthleteID ? {...at, FullNameAndTeam} : at))
    }
    const changeWeightAthlete = (AthleteID: string, weightAthlete: number) => {
        setAthletes(athletes.map(at => at.id === AthleteID ? {...at, weightAthlete} : at))
    }
    const changeRankAthlete = (AthleteID: string, rank: RankType) => {
        setAthletes(athletes.map(at => at.id === AthleteID ? {...at, rank} : at))
    }

    return (
        <>
            {!modalActive && <div className={styleA.containTournament}>
                <Header tournament={tournament}
                        endTournamentDate={endTournamentDate}
                        startTournamentDate={startTournamentDate}
                        location={location}/>
                <Registration athletes={athletes}
                              removeJudge={removeJudge}
                              judge={judge}
                              addJudges={addJudges}
                              categoryJudge={categoryJudge}
                              SetSettings={SetSettings}
                              setArrCategory={setArrCategory}
                              sortCategory={sortCategory}
                              gender={genderAthletes}
                              arrCategory={arrCategory}
                              setAthletes={setAthletes}
                              setModalActive={setModalActive}
                              removeAthlete={removeAthlete}
                              ranks={ranksAthletes}
                              addAthleteCallback={addAthlete}
                              changeFullNameAndTeamAthlete={changeFullNameAndTeamAthlete}
                              changeWeightAthlete={changeWeightAthlete}
                              weightNewCategory={weightNewCategory}
                              setTournament={setTournament}
                              setLocation={setLocation}
                              setMainReferee={setMainReferee}
                              setMainSecretary={setMainSecretary}
                              setWeightNewCategory={setWeightNewCategory}
                              changeRankAthlete={changeRankAthlete}/>
            </div>}
            <Modal modalActive={modalActive}
                   sortCategory={sortCategory}
                   settings={settings}
                   tableForArm={TableForArm}
                   arrCategory={arrCategory}
                   deleteCategories={deleteCategories}
                   addNewCategoryAthletes={addNewCategoryAthletes}
                   categoryAthlete={categoryAthlete}
                   location={location}
                   ageAthletes={ageAthletes}
                   gender={genderAthletes}
                   setLocation={setLocation}
                   setTournament={setTournament}
                   setModalActive={setModalActive}
                   setWeightNewCategory={setWeightNewCategory}
                   weightNewCategory={weightNewCategory}
                   tournament={tournament}
                   startTournamentDate={startTournamentDate}
                   endTournamentDate={endTournamentDate}
                   setMainSecretary={setMainSecretary}
                   setMainReferee={setMainReferee}
                   mainReferee={mainReferee}
                   mainSecretary={mainSecretary}
                   setStartTournamentDate={setStartTournamentDate}
                   setEndTournamentDate={setEndTournamentDate}
            />
        </>
    );
}

export default App;
