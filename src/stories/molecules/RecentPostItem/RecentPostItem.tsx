import React from 'react';
import './recentPostItem.css';


type recentPostItemProps = {
    imgSrc : string
    text : string
    date : string
    
}

export const RecentPostItem = ({imgSrc, text, date} : recentPostItemProps) => {
    return (
        <div className='RecentPostItem-container'>
            <img src={imgSrc} alt="" />
            <p className="post-text">{text}</p>
            <p className="post-date">{date}</p>
            
        </div>
    )
}