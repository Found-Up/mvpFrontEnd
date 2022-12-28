import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileCard } from '../../organisms/ProfileCard/ProfileCard';
import { EduCard } from '../../molecules/EduCard/EduCard';
import { ExpCard } from '../../molecules/ExpCard/ExpCard';
import './profilePage.css'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

type ProfilePageProps = {
    user : string
}

export const ProfilePage = ({user} : ProfilePageProps) => {
    return (
        <div className="ProfilePage-page">
            <div className="ProfilePage-header">
                <NCUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></NCUHeader>
            </div>
            <div className="ProfilePage-body">
                <div className="ProfilePage-ProfileCard-container">
                    <ProfileCard 
                        fullName='Matthew Chin'
                        tagline='I am a computer engineer and I like to ball'
                        description='Currently a software developer @ Pond, 
                            previously a computer engineer @ FoundUp'
                        profileImgSrc='./logo192png'
                    ></ProfileCard>
                </div>
                <div className="ProfilePage-exp-edu-container">
                    <div className="ProfilePage-Exp-container">
                        <div className="Exp-heading-container">
                            <WorkOutlineIcon/>
                            <h4>Experience</h4>
                        </div>
                        <ExpCard
                            expImgSrc=''
                            role='Software Engineer'
                            company='Pond'
                            date='Jan 2021 - Current'
                        ></ExpCard>
                        <ExpCard
                            expImgSrc=''
                            role='Software Engineer'
                            company='Pond'
                            date='Jan 2021 - Current'
                        ></ExpCard>
                        <ExpCard
                            expImgSrc=''
                            role='Software Engineer'
                            company='Pond'
                            date='Jan 2021 - Current'
                        ></ExpCard>
                    </div>

                    <div className="ProfilePage-Edu-container">
                        <div className="Edu-heading-container">
                            <SchoolOutlinedIcon/>
                            <h4>Education</h4>
                        </div>
                        <EduCard
                            eduImgSrc=''
                            major='Computer Engineer'
                            school='Texas A&M University'
                            date='2018 - 2022'
                        ></EduCard>
                    </div>
                </div>
                
            </div>
            <div className="ProfilePage-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}