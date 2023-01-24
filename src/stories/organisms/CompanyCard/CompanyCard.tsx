import React from 'react';
import { MyButton } from '../../atoms/Buttons/MyButton';
import { Primary, Secondary } from '../../atoms/Buttons/MyButton.stories';
import './companyCard.css';

type companyCardProps = {
    companyName : string
    location : string
    description : string
    companyImgSrc : string
    
}

export const CompanyCard = ({companyName, location, description, companyImgSrc} : companyCardProps) => {
    return (
        <div className='CompanyCard-container'>
            <div className="CompanyCard-header">
                <div className='CompanyCard-text-container'>
                    <h1>{companyName}</h1>
                    <h3>{location}</h3>
                    <p>{description}</p>
                    
                </div>
                <div className="CompanyCard-img-container">
                    <img className='CompanyCard-img' src={companyImgSrc} alt="" />
                    <div className="CompanyCard-links">
                        <MyButton label='Website' primary={false} shape='round' size='large' rightIcon='link'/>
                    </div>
                </div>
                
            </div>
            
            <div className="CompanyCard-fact-container">
                <div className="CompanyCard-fact">
                    <img src="./logo192.png" alt="" />
                    <p>fact</p>
                </div>
                <div className="CompanyCard-fact">
                    <img src="./logo192.png" alt="" />
                    <p>fact</p>
                </div>
                <div className="CompanyCard-fact">
                    <img src="./logo192.png" alt="" />
                    <p>fact</p>
                </div>
                <div className="CompanyCard-fact">
                    <img src="./logo192.png" alt="" />
                    <p>fact</p>
                </div>
            </div>
        </div>
    )
}