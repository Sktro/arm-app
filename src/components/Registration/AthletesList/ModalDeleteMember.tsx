import React from "react";
import styleR from "../Registration.module.css";

type ModalDeleteMemberType = {
    numberOfCategoriesForAthlete: number
    nameAthlete: string
    idAthlete: string
    modalDeleteAthlete: boolean
    removeAthlete: (AthleteID: string) => void
    setModalDeleteAthlete: (value: boolean) => void
    removeRegisteredCategoryAtAthlete: (athleteID: string, category: { value: string, label: string }) => void
    activeCategory: { value: string, label: string, gender: string } | undefined
}

export const ModalDeleteMember = (props: ModalDeleteMemberType) => {

    const deleteAthleteFromTournament = <div>Вы действительно хотите удалить спортсмена: {props.nameAthlete} ?</div>
    const deleteAthleteFromCategory = <div>Вы действительно хотите удалить спортсмена: {props.nameAthlete} из данной
        категории?</div>

    const deleteAthlete = (athleteId: string, modal: boolean, count: number) => {
        if (count === 1) {
            props.removeAthlete(athleteId)
            props.setModalDeleteAthlete(modal)
        } else {
            props.removeRegisteredCategoryAtAthlete(athleteId, props.activeCategory!)
            props.setModalDeleteAthlete(modal)
        }
    }

    return <>
            <div className={styleR.removalOfAthlete}>
                {props.numberOfCategoriesForAthlete > 1 && deleteAthleteFromCategory}
                {props.numberOfCategoriesForAthlete === 1 && deleteAthleteFromTournament}
                <div className={styleR.buttonsModalDelete}>
                    <button className={styleR.delete}
                            onClick={() => deleteAthlete(props.idAthlete, false, props.numberOfCategoriesForAthlete)}>удалить
                    </button>
                    <button className={styleR.cancel}
                            onClick={() => props.setModalDeleteAthlete(false)}>отмена
                    </button>
                </div>
            </div>
    </>
}
