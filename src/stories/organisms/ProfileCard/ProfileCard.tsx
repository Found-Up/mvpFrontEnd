import React from 'react';
import { MyButton } from '../../atoms/Buttons/MyButton';
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
                    <div className="ProfileCard-main-buttons">
                        <MyButton label='Message' primary={true} size='large' />
                        <MyButton label='Save' primary={false} size='large' leftIcon='bookmark'/>
                        <a href="/">View Resume</a>
                    </div>
                </div>
                <div className="ProfileCard-img-container">
                    <img className='ProfileCard-img' src="./logo192.png" alt="" />
                    <div className="ProfileCard-links">
                        <MyButton label='Portfolio' primary={false} shape='round' size='large' rightIcon='link'/>
                        <MyButton label='Github' primary={false} shape='round' size='large' rightIcon='link'/>
                </div>
                </div>
                
            </div>
            
            {/* <div className='ProfileCard-button-container'>
                <div className="ProfileCard-main-buttons">
                    <MyButton label='Message' primary={true} size='large' />
                    <MyButton label='Save' primary={false} size='large'/>
                    <a href="">View Resume</a>
                </div>
                
                <div className="ProfileCard-links">
                    <MyButton label='Portfolio' primary={false} shape='round' size='large'/>
                    <MyButton label='Github' primary={false} shape='round' size='large'/>
                </div>
            </div> */}
            
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