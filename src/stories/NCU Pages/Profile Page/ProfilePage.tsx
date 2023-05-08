import React from 'react';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileCard } from '../../organisms/ProfileCard/ProfileCard';
import { EduCard } from '../../molecules/EduCard/EduCard';
import { ExpCard } from '../../molecules/ExpCard/ExpCard';
import './profilePage.css'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { NcuProfile } from '../../../types/ncu/ncuProfile';

type ProfilePageProps = {
    user : string
}

export const ProfilePage = ({user} : ProfilePageProps) => {
    const userProfileData = useLoaderData() as NcuProfile;
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <h1> Loading ... </h1>
    }

    return (
        <div className="ProfilePage-page">
            <div className="ProfilePage-body">
                <div className="ProfilePage-ProfileCard-container">
                    <ProfileCard 
                        fullName={userProfileData.first_name + ' ' + userProfileData.last_name}
                        tagline={userProfileData.headline}
                        description={userProfileData.biography}
                        profileImgSrc='./logo192png'
                    ></ProfileCard>
                </div>
                <div className="ProfilePage-exp-edu-container">
                    <div className="ProfilePage-Exp-container">
                        <div className="Exp-heading-container">
                            <WorkOutlineIcon/>
                            <h4>Experience</h4>
                        </div>
                        {userProfileData.experience.map((exp) => 
                            <ExpCard expImgSrc={''} role={exp.job_title} company={exp.company_name} date={exp.start_date + ' - ' + exp.end_date} />)}
                    </div>

                    <div className="ProfilePage-Edu-container">
                        <div className="Edu-heading-container">
                            <SchoolOutlinedIcon/>
                            <h4>Education</h4>
                        </div>
                        {userProfileData.education.map((edu) => 
                            <EduCard eduImgSrc={''} major={'NEED TO ADD THIS'} school={edu.university_name} date={edu.start_year + ' - ' + edu.end_year} />)}
                    </div>
                </div>  
            </div>
            <div className="ProfilePage-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}