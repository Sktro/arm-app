import React, {useState} from 'react';
import styleA from './App.module.css'
import {Registration} from "./components/Registration/Registration";
import {v1} from "uuid";
import {Modal} from "./components/Modal/Modal";
import {Header} from "./components/Header/Header";
import {Option} from "./common/WeightsSelect/WeightsSelect";

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
    'мужской'
    | 'женский'

export type AgeType =
    '14-15'
    | '16-18'
    | '19-21'
    | '22+'
    | '40+'
    | '50+'
    | '60+'

export type CategoryAthlete =
    'Любители'
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
}
export const categoryAthlete: CategoryAthlete[] = ['Любители', 'Профессионалы', 'Инвалиды', 'Инвалиды(VIS)', 'Инвалиды(STAND)', 'Инвалиды(SIT)']
export const ageAthletes: AgeType[] = ['14-15', '16-18', '19-21', '22+', '40+', '50+', '60+']
export const ranksAthletes: RankType[] = ['б/р', '3ю.р.', '2ю.р.', '1ю.р.', '3в.р.', '2в.р.', '1в.р.', 'КМС', 'МС', 'МСМК', 'ЗМС']
export const genderAthletes: GenderType[] = ['мужской', 'женский']

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
    const [weightMale, setWeightMale] = useState<readonly Option[]>([])
    const [weightFemale, setWeightFemale] = useState<readonly Option[]>([])
    // New athlete
    const [athletes, setAthletes] = useState<Array<AthletesType>>([
        {id: v1(), fullName: 'Петров Артем', weight: 89.6, team: 'ФАТО', rank: 'б/р'},
        {id: v1(), fullName: 'Кервалидзе Игорь', weight: 87, team: 'ФАТО', rank: '1в.р.'}
    ])

    function getCurrentDate(separator = '-') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    const addAthleteCallback = (fullName: string, weight: number, team: string, rank: RankType) => {
        let newAthlete = {id: v1(), fullName, weight, team, rank}
        setAthletes([newAthlete, ...athletes])
    }
    const removeAthlete = (AthleteID: string) => {
        setAthletes(athletes.filter(atl => atl.id !== AthleteID))
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
                              setAthletes={setAthletes}
                              setModalActive={setModalActive}
                              removeAthlete={removeAthlete}
                              ranks={ranksAthletes}
                              addAthleteCallback={addAthleteCallback}
                              changeFullNameAndTeamAthlete={changeFullNameAndTeamAthlete}
                              changeWeightAthlete={changeWeightAthlete}
                              weightMale={weightMale}
                              setWeightFemale={setWeightFemale}
                              setTournament={setTournament}
                              setLocation={setLocation}
                              setMainReferee={setMainReferee}
                              setMainSecretary={setMainSecretary}
                              setWeightMale={setWeightMale}
                              weightFemale={weightFemale}
                              changeRankAthlete={changeRankAthlete}/>
            </div>}
            <Modal modalActive={modalActive}
                   categoryAthlete={categoryAthlete}
                   location={location}
                   ageAthletes={ageAthletes}
                   gender={genderAthletes}
                   setLocation={setLocation}
                   setTournament={setTournament}
                   setModalActive={setModalActive}
                   setWeightMale={setWeightMale}
                   weightMale={weightMale}
                   weightFemale={weightFemale}
                   setWeightFemale={setWeightFemale}
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
