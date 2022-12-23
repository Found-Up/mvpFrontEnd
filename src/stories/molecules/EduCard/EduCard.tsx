import React from 'react';
import './eduCard.css';


type eduCardProps = {
    eduImgSrc : string
    major : string
    school : string
    date : string
    
}

export const EduCard = ({eduImgSrc, major, school, date} : eduCardProps) => {
    return (
        <div className='EduCard-container'>
            <img className='EduCard-img' src={eduImgSrc} alt="" />
            <div className="EduCard-body">
                <h3>{major}</h3>
                <p>{school}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}