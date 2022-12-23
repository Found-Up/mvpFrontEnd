import React from 'react';
import './expCard.css';


type expCardProps = {
    expImgSrc : string
    role : string
    company : string
    date : string
    
}

export const ExpCard = ({expImgSrc, role, company, date} : expCardProps) => {
    return (
        <div className='ExpCard-container'>
            <img className='ExpCard-img' src="expImgSrc" alt="" />
            <div className="ExpCard-body">
                <h3>{role}</h3>
                <p>{company}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}
