import React from 'react';
import './memberCard.css';


type memberCardProps = {
    memberImgSrc : string
    name : string
    role : string
    date : string
    
}

export const MemberCard = ({memberImgSrc, name, role, date} : memberCardProps) => {
    return (
        <div className='MemberCard-container'>
            <img className='MemberCard-img' src={memberImgSrc} alt="" />
            <div className="MemberCard-body">
                <h3>{name}</h3>
                <p>{role}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}
