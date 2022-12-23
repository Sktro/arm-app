import React, {useEffect, useState} from 'react';
import {Registration} from "./components/Registration/Registration";
import {v1} from "uuid";
import {Modal} from "./components/Modal/Modal";
import {Option} from "./common/WeightsSelect/WeightsSelect";
import {MultiValue} from "react-select";
import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage";
import {HoldingATournament} from "./components/HoldingATournament/HoldingATournament";

export type TableForArmType = '1' | '2' | '3' | '4' | '5' | '6'
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

export type FilterType = GenderType | 'all' | 'judges'

export type StatusJudgeType =
    'главный судья'
    | 'зам. главного судьи'
    | 'главный секретарь'
    | 'зам. главного секретаря'
    | 'рефери'
    | 'боковой судья'

export type CategoryJudgeType =
    'б/к' | '3 кат.' | '2 кат.' | '1 кат.' | 'ВК' | 'МК'

export type AgeType =
    'Взрослые'
    | '14-15'
    | '16-18'
    | '19-21'
    | '22+'
    | '40+'
    | '50+'
    | '60+'

export type CategoryAthleteType =
    'Общая'
    | 'Любители'
    | 'Проф-лы'
    | 'Инвалиды'
    | 'Инв.(HEAR)'
    | 'Инв.(VIS)'
    | 'Инв.(STAND)'
    | 'Инв.(SIT)'

export type AthletesType = {
    id: string
    fullName: string
    weight: number
    team: string
    rank: RankType
    gender: GenderType
    categoryMember?: MultiValue<{ value: string, label: string }>
}

export type JudgeType = {
    id: string
    fullName: string
    status: StatusJudgeType
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
    tableNumb: TableForArmType
    place5_6: boolean
    doubleEvent: boolean
    wrestlingSeparately: boolean
    leftHand: boolean
    rightHand: boolean
    semifinalAndFinal: boolean
    semifinal: boolean
    final: boolean
}

export type AvailableCategoriesType = {
    id: string
    newAthlete: AthletesType
    categoryMember: MultiValue<{ value: string, label: string }>
}

export type CreatedCategoryType = {
    id: string
    title: string
    gender: string
}


export type GSType = {
    hand: string // рука, на которой проходит турнирная сетка
    gs: (number | null)[] // массив генеральной последовательности
    app: (number | null)[] // Указатель на возможность апелляции (1 - возможна; 0 - невозможна)
    winCount: number[] // Колличество побед участника
    N: number // номер поединка
    LLos: number[] // Массив тех, кому последнему проиграл участник
    lLosS: number[][] // Массив тех, кому последнему проиграл участник (Сохранение)
    title: string // наименование весовой категории
    gender: string // пол весовой категории
    theWrestlingIsOver: boolean // окончание борьбы
    superFinal: 0 | 1 | 2 // 0 - суперфинала не было, 1 - в супер финале победил первый, 2 - в суперфинале победил второй
    jer: boolean
}

export type biathlonType = {
    id: string
    leftHand: GSType
    rightHand: GSType
}


export const createdCategories: CreatedCategoryType[] = []
export const statusJudge: StatusJudgeType[] = ['главный судья', 'зам. главного судьи', 'главный секретарь', 'зам. главного секретаря', 'рефери', 'боковой судья']
export const categoryJudge: CategoryJudgeType[] = ['б/к', '3 кат.', '2 кат.', '1 кат.', 'ВК', 'МК']
export const TableForArm: TableForArmType[] = ['1', '2', '3', '4', '5', '6']
export const categoryAthlete: CategoryAthleteType[] = ['Общая', 'Любители', 'Проф-лы', 'Инвалиды', 'Инв.(VIS)', 'Инв.(STAND)', 'Инв.(SIT)']
export const ageAthletes: AgeType[] = ['Взрослые', '14-15', '16-18', '19-21', '22+', '40+', '50+', '60+']
export const ranksAthletes: RankType[] = ['б/р', '3ю.р.', '2ю.р.', '1ю.р.', '3в.р.', '2в.р.', '1в.р.', 'КМС', 'МС', 'МСМК', 'ЗМС']
export const genderAthletes: GenderType[] = ['муж', 'жен']

function App() {
    // General Sequence
    const [GS, setGS] = useState<biathlonType[] | null>(null)
    // information for tournament
    const [tournament, setTournament] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [startTournamentDate, setStartTournamentDate] = useState<string>(getCurrentDate())
    const [endTournamentDate, setEndTournamentDate] = useState<string>(getCurrentDate())
    // weights Categories
    const [arrCategory, setArrCategory] = useState<Array<CategoryType>>([])
    const [weightNewCategory, setWeightNewCategory] = useState<readonly Option[]>([]) // superSelect
    const [activeCategory, setActiveCategory] = useState<{ value: string, label: string, gender: string } | null>(null)
    const [copyCategory, setCopyCategory] = useState<CreatedCategoryType[]>([])
    // New members
    const [athletes, setAthletes] = useState<Array<AthletesType>>([])
    const [judge, setJudge] = useState<Array<JudgeType>>([])
    // Settings tournament
    const [settings, SetSettings] = useState<SettingsType>(
        {
            tableNumb: '1',
            place5_6: false,
            semifinalAndFinal: false,
            semifinal: false,
            final: false,
            leftHand: false,
            rightHand: false,
            doubleEvent: false,
            wrestlingSeparately: false
        }
    )
    // filter
    const [filterAthletes, setFilterAthletes] = useState<Array<AthletesType>>([])
    const [filter, setFilter] = useState<FilterType>('all')
    const [categoryVisibility, setCategoryVisibility] = useState<boolean>(false)
    // USE-EFFECT
    useEffect(() => {
        setTournament(JSON.parse(localStorage.getItem('tournamentValue')!))
        setLocation(JSON.parse(localStorage.getItem('locationValue')!))
        setStartTournamentDate(JSON.parse(localStorage.getItem('dateValue')!))
        setEndTournamentDate(JSON.parse(localStorage.getItem('EndDateValue')!))
        setArrCategory(JSON.parse(localStorage.getItem('arrCategory')!))
        SetSettings(JSON.parse(localStorage.getItem('settingsValue')!))
        setGS(JSON.parse(localStorage.getItem('generalSequenceValue')!))
        setActiveCategory(JSON.parse(localStorage.getItem('activeCategoryValue')!))
        setAthletes(JSON.parse(localStorage.getItem('athletesValue')!))
        setJudge(JSON.parse(localStorage.getItem('judgesValue')!))
        setFilterAthletes(JSON.parse(localStorage.getItem('filterAthletesValue')!))
        setCopyCategory(JSON.parse(localStorage.getItem('createdCategoriesArray')!))
    }, [])

    useEffect(() => {
        localStorage.setItem('tournamentValue', JSON.stringify(tournament))
        localStorage.setItem('locationValue', JSON.stringify(location))
        localStorage.setItem('dateValue', JSON.stringify(startTournamentDate))
        localStorage.setItem('EndDateValue', JSON.stringify(endTournamentDate))
        localStorage.setItem('arrCategory', JSON.stringify(arrCategory))
        localStorage.setItem('settingsValue', JSON.stringify(settings))
        localStorage.setItem('generalSequenceValue', JSON.stringify(GS))
        localStorage.setItem('activeCategoryValue', JSON.stringify(activeCategory))
        localStorage.setItem('athletesValue', JSON.stringify(athletes))
        localStorage.setItem('judgesValue', JSON.stringify(judge))
        localStorage.setItem('filterAthletesValue', JSON.stringify(filterAthletes))
        localStorage.setItem('createdCategoriesArray', JSON.stringify(copyCategory))
    }, [tournament, location, startTournamentDate, endTournamentDate, arrCategory, settings, GS, activeCategory, athletes, judge, filterAthletes, copyCategory])

    function getCurrentDate(separator = '-') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`
    }

    const addAthlete = (fullName: string, weight: number, team: string, rank: RankType, gender: GenderType, categoryMember: MultiValue<{ value: string, label: string }>) => {
        let newAthlete = {id: v1(), fullName, weight, team, rank, gender, categoryMember}
        setAthletes([newAthlete, ...athletes])
    }

    const addJudges = (fullName: string, gender: GenderType, status: StatusJudgeType, category: CategoryJudgeType, region: string) => {
        let newJudge = {id: v1(), fullName, gender, status, category, region}
        setJudge([newJudge, ...judge])
    }

    const addNewCategoryAthletes = (gender: GenderType, age: AgeType, categoryAthlete: CategoryAthleteType, weightsCategory: readonly Option[]) => {
        let newCategory = {id: v1(), gender, age, categoryAthlete, weightsCategory}
        setArrCategory([newCategory, ...arrCategory])
    }

    const changeFilter = (allAthlete: AthletesType[], filter: FilterType) => {
        if (filter === 'муж') {
            return allAthlete.filter(a => a.gender === 'муж')
        }
        if (filter === 'жен') {
            return allAthlete.filter(a => a.gender === 'жен')
        }
        if (filter === 'all') {
            return allAthlete
        } else {
            return []
        }
    }

    const filteredAthletes = changeFilter(athletes, filter)

    const removeAthlete = (AthleteID: string) => {
        setAthletes(athletes.filter(atl => atl.id !== AthleteID))
    }

    const removeRegisteredCategoryAtAthlete = (athleteID: string, category: { value: string, label: string }) => {
        const athletesResult = athletes.map(at => {
            if (at.id === athleteID) {
                if (at) {
                    const arrCat = at.categoryMember?.filter(v => v.value !== category.value)
                    return {...at, categoryMember: arrCat}
                }
            }
            return at
        })
        setAthletes([...athletesResult])
        setFilterAthletes([...athletesResult])
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
    const changeFullNameAthlete = (athleteID: string, fullName: string) => {
        const athlete = athletes.find(at => at.id === athleteID)
        if (athlete) {
            athlete.fullName = fullName
            setAthletes([...athletes])
        }
    }
    const changeTeamAthlete = (athleteID: string, team: string) => {
        const athlete = athletes.find(at => at.id === athleteID)
        if (athlete) {
            athlete.team = team
            setAthletes([...athletes])
        }
    }
    const changeWeightAthlete = (athleteID: string, weight: number) => {
        const athlete = athletes.find(at => at.id === athleteID)
        if (athlete) {
            athlete.weight = weight
            setAthletes([...athletes])
        }
    }
    const changeRankAthlete = (athleteID: string, rank: RankType) => {
        const athlete = athletes.find(at => at.id === athleteID)
        if (athlete) {
            athlete.rank = rank
            setAthletes([...athletes])
        }
        //setAthletes(athletes.map(at => at.id === athleteID ? {...at, rank} : at))
    }

    const changeFullNameJudge = (judgeID: string, fullName: string) => {
        const findJudge = judge.find(j => j.id === judgeID)
        if (findJudge) {
            findJudge.fullName = fullName
        }
    }

    const changeRegionJudge = (judgeID: string, region: string) => {
        const findJudge = judge.find(j => j.id === judgeID)
        if (findJudge) {
            findJudge.region = region
        }
    }

    const changeStatusJudge = (judgeID: string, status: StatusJudgeType) => {
        const findJudge = judge.find(j => j.id === judgeID)
        if (findJudge) {
            findJudge.status = status
        }
    }

    const changeCategoryJudge = (judgeID: string, category: CategoryJudgeType) => {
        const findJudge = judge.find(j => j.id === judgeID)
        if (findJudge) {
            findJudge.category = category
        }
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Modal setActiveCategory={setActiveCategory}
                                                GS={GS}
                                                setCopyCategory={setCopyCategory}
                                                setSettings={SetSettings}
                                                sortCategory={sortCategory}
                                                settings={settings}
                                                setGS={setGS}
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
                                                setWeightNewCategory={setWeightNewCategory}
                                                weightNewCategory={weightNewCategory}
                                                tournament={tournament}
                                                startTournamentDate={startTournamentDate}
                                                endTournamentDate={endTournamentDate}
                                                setStartTournamentDate={setStartTournamentDate}
                                                setEndTournamentDate={setEndTournamentDate}/>}/>
                <Route path="/registrationMembers" element={<Registration athletes={athletes}
                                                                          setGS={setGS}
                                                                          GS={GS}
                                                                          copyCategory={copyCategory}
                                                                          createdCategories={createdCategories}
                                                                          location={location}
                                                                          endTournamentDate={endTournamentDate}
                                                                          startTournamentDate={startTournamentDate}
                                                                          tournament={tournament}
                                                                          activeCategory={activeCategory}
                                                                          setActiveCategory={setActiveCategory}
                                                                          removeRegisteredCategoryAtAthlete={removeRegisteredCategoryAtAthlete}
                                                                          changeFilter={changeFilter}
                                                                          categoryVisibility={categoryVisibility}
                                                                          setCategoryVisibility={setCategoryVisibility}
                                                                          filterAthletes={filterAthletes}
                                                                          setFilterAthletes={setFilterAthletes}
                                                                          filter={filter}
                                                                          setJudge={setJudge}
                                                                          setFilter={setFilter}
                                                                          filteredAthletes={filteredAthletes}
                                                                          changeStatusJudge={changeStatusJudge}
                                                                          changeRegionJudge={changeRegionJudge}
                                                                          changeFullNameJudge={changeFullNameJudge}
                                                                          changeCategoryJudge={changeCategoryJudge}
                                                                          removeJudge={removeJudge}
                                                                          judge={judge}
                                                                          statusJudge={statusJudge}
                                                                          addJudges={addJudges}
                                                                          categoryJudge={categoryJudge}
                                                                          SetSettings={SetSettings}
                                                                          setArrCategory={setArrCategory}
                                                                          sortCategory={sortCategory}
                                                                          gender={genderAthletes}
                                                                          arrCategory={arrCategory}
                                                                          setAthletes={setAthletes}
                                                                          removeAthlete={removeAthlete}
                                                                          ranks={ranksAthletes}
                                                                          addAthleteCallback={addAthlete}
                                                                          changeTeamAthlete={changeTeamAthlete}
                                                                          changeFullNameAthlete={changeFullNameAthlete}
                                                                          changeWeightAthlete={changeWeightAthlete}
                                                                          weightNewCategory={weightNewCategory}
                                                                          setTournament={setTournament}
                                                                          setLocation={setLocation}
                                                                          setWeightNewCategory={setWeightNewCategory}
                                                                          changeRankAthlete={changeRankAthlete}/>}/>
                <Route path={'holdingATournament/*'} element={<HoldingATournament athletes={athletes}
                                                                                  GS={GS}
                                                                                  setGS={setGS}
                                                                                  settings={settings}
                                                                                  sortCategory={sortCategory}
                                                                                  arrCategory={arrCategory}
                                                                                  startTournamentDate={startTournamentDate}
                                                                                  endTournamentDate={endTournamentDate}
                                                                                  tournament={tournament}
                                                                                  location={location}/>}/>

                <Route path={'*'} element={<NotFoundPage GS={GS}/>}/>
            </Routes>
        </>
    );
}

export default App;