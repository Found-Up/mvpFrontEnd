import React from 'react';
import { Button } from '../../atoms/Buttons/Button';
import './profileCard.css';


type profileCardProps = {
    fullName : string
    tagline : string
    description : string
    profileImgSrc : string
    
}

export const ProfileCard = ({fullName, tagline, description} : profileCardProps) => {
    return (
        <div className='ProfileCard-container'>
            <div className="ProfileCard-header">
                <div className='ProfileCard-text-container'>
                    <h1>{fullName}</h1>
                    <h3>{tagline}</h3>
                    <p>{description}</p>
                </div>

                <img className='ProfileCard-img' src="./logo192.png" alt="" />
            </div>
            
            <div className='ProfileCard-button-container'>
                <div className="ProfileCard-main-buttons">
                    <Button label='Message' primary={true} size='large' />
                    <Button label='Save' size='large'/>
                    <a href="">View Resume</a>
                </div>
                
                <div className="ProfileCard-links">
                    <Button label='Portfolio' size='large'/>
                    <Button label='Github' size='large'/>
                </div>
            </div>
            <div className="ProfileCard-skill-container">
                <div className="ProfileCard-skill">
                    <img src="./logo192.png" alt="" />
                    <p>Skill</p>
                </div>
                <div className="ProfileCard-skill">
                    <img src="./logo192.png" alt="" />
                    <p>Skill</p>
                </div>
                <div className="ProfileCard-skill">
                    <img src="./logo192.png" alt="" />
                    <p>Skill</p>
                </div>
                <div className="ProfileCard-skill">
                    <img src="./logo192.png" alt="" />
                    <p>Skill</p>
                </div>
            </div>
        </div>
    )
}