import React, {ChangeEvent, useEffect, useState} from "react";
import StarRating from 'react-svg-star-rating'
import styleClock from './StarRating.module.css'

export const TournamentRating = () => {

    const [rating, setRating1] = useState<number>(0)
    const [text, setText] = useState<string>('')
    const [needFeedBack, setNeedFeedBack] = useState<boolean>(false)

    useEffect(() => {
        setNeedFeedBack(rating <= 3.5)
    }, [rating])

    const handleOnClick = (rating: number) => {
        setRating1(rating)
    }

    const disableButton = (needFeedBack && rating === 0) || (text.length < 20 && needFeedBack)

    const onChangeHandleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <div className={styleClock.starContain}>
            <h1>Оцените наше приложение</h1>
            <StarRating handleOnClick={handleOnClick} unit={'half'} size={50}/>

            {rating <= 3.5 && rating !== 0 && <div className={styleClock.feedback}>
                <div className={styleClock.feedbackText}>
                    Пожалуйста, оставьте Ваш отзыв.
                    В дальнейшем, это поможет нам улучшить работу данного приложения
                </div>
                <textarea onChange={onChangeHandleText} maxLength={300}
                          placeholder={'минимальное/максимальное кол-во символов: 20/300'}></textarea>
            </div>
            }
            <button className={styleClock.btnSend} disabled={disableButton}>Отправить</button>
        </div>


    )
}