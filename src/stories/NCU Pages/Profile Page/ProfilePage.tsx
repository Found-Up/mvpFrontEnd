import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileCard } from '../../organisms/ProfileCard/ProfileCard';
import { EduCard } from '../../molecules/EduCard/EduCard';
import { ExpCard } from '../../molecules/ExpCard/ExpCard';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import './profilePage.css'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { ShowcaseCard } from '../../organisms/ShowcaseCard/ShowcaseCard';

type ProfilePageProps = {
    user : string
}

export const ProfilePage = ({user} : ProfilePageProps) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <div className="ProfilePage-page">
            <div className="ProfilePage-header">
                <NCUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></NCUHeader>
            </div>
            <div className="ProfilePage-body">
                <div className="ProfilePage-ProfileCard-container">
                    <ProfileCard 
                        fullName='Kayden Fieldman'
                        tagline='I am a computer engineer and a lover of e-sports'
                        description='Currently a software developer @ FoundUp, 
                            previously a computer engineer @ FoundUp'
                        profileImgSrc='./logo192png'
                    ></ProfileCard>
                </div>

                <div className="ProfilePage-tab-container">
                    <Tabs value={selectedTab} onChange={handleChange}>
                        <Tab label='Background'/>
                        <Tab label='Showcase'/>
                    </Tabs>
                </div>
                

                {selectedTab === 0 && 
                    <div className="ProfilePage-bgInfo-container">
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

                        <div className="ProfilePage-Certifications">

                        </div>
                    </div>
                }
                
                {selectedTab === 1 && 
                    <div className="ProfilePage-showcase-container">
                        <ShowcaseCard
                        showcaseHeader='Curated Showcase'
                        showcaseIcon='' />
                        <ShowcaseCard
                        showcaseHeader='Most Popular Questions'
                        showcaseIcon='' />
                        <ShowcaseCard
                        showcaseHeader='About Me'
                        showcaseIcon='' />
                    </div>
                }
            </div>
            <div className="ProfilePage-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}