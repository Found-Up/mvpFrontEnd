import React from 'react';
import './expCardLarge.css';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type expCardLargeProps = {
    expImgSrc : string
    role : string
    company : string
    description : string
    
}

export const ExpCardLarge = ({expImgSrc, role, company, description} : expCardLargeProps) => {
    return (
        <div className='ExpCardLarge-container'>
            <img className='ExpCardLarge-img' src="./logo192.png" alt="" />
            <div className="text-container">
                <h1>{role} @ {company}</h1>
                <p>{description}</p>
                <a href="">Read more about {company} </a>
            </div>
            
        </div>
    )
}