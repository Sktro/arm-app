import React, {useState} from 'react';
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
    'главный судья' | 'зам. главного судьи' | 'главный секретарь' | 'зам. главного секретаря' | 'судья'

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
export const createdCategories: CreatedCategoryType[] = []
export const statusJudge: StatusJudgeType[] = ['главный судья', 'зам. главного судьи', 'главный секретарь', 'зам. главного секретаря', 'судья']
export const categoryJudge: CategoryJudgeType[] = ['б/к', '3 кат.', '2 кат.', '1 кат.', 'ВК', 'МК']
export const TableForArm: TableForArmType[] = ['1', '2', '3', '4', '5', '6']
export const categoryAthlete: CategoryAthleteType[] = ['Общая', 'Любители', 'Проф-лы', 'Инвалиды', 'Инв.(VIS)', 'Инв.(STAND)', 'Инв.(SIT)']
export const ageAthletes: AgeType[] = ['Взрослые', '14-15', '16-18', '19-21', '22+', '40+', '50+', '60+']
export const ranksAthletes: RankType[] = ['б/р', '3ю.р.', '2ю.р.', '1ю.р.', '3в.р.', '2в.р.', '1в.р.', 'КМС', 'МС', 'МСМК', 'ЗМС']
export const genderAthletes: GenderType[] = ['муж', 'жен']

function App() {
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
    const [athletes, setAthletes] = useState<Array<AthletesType>>([])
    const [categoryVisibility, setCategoryVisibility] = useState<boolean>(false)
    // New judge
    const [judge, setJudge] = useState<Array<JudgeType>>([])
    // New category
    const [arrCategory, setArrCategory] = useState<Array<CategoryType>>([])
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
            wrestlingSeparately: false
        }
    )
    // filter
    const [filterAthletes, setFilterAthletes] = useState<Array<AthletesType>>([])
    const [filter, setFilter] = useState<FilterType>('all')
    //
    const [activeCategory, setActiveCategory] = useState<{ value: string, label: string, gender: string }>()

    //

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
                <Route path="/arm-app" element={<Modal setActiveCategory={setActiveCategory}
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
                                                       setEndTournamentDate={setEndTournamentDate}/>}/>
                <Route path="/registrationMembers" element={<Registration athletes={athletes}
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
                                                                          setMainReferee={setMainReferee}
                                                                          setMainSecretary={setMainSecretary}
                                                                          setWeightNewCategory={setWeightNewCategory}
                                                                          changeRankAthlete={changeRankAthlete}/>}/>
                <Route path={'holdingATournament/*'} element={<HoldingATournament athletes={athletes}
                                                                                 createdCategories={createdCategories}
                                                                                 settings={settings}
                                                                                 sortCategory={sortCategory}
                                                                                 arrCategory={arrCategory}
                                                                                 startTournamentDate={startTournamentDate}
                                                                                 endTournamentDate={endTournamentDate}
                                                                                 tournament={tournament}
                                                                                 location={location}/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default App;