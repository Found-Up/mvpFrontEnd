import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { Footer } from '../../organisms/Footer/Footer';
import { ProfileCard } from '../../organisms/ProfileCard/ProfileCard';
import { RecentPostItem } from '../../molecules/RecentPostItem/RecentPostItem';
import { ExpCardLarge } from '../../molecules/ExpCardLarge/ExpCardLarge';
import './sruProfilePage.css'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

type sruProfilePageProps = {

}

export const SRUProfilePage = ({} : sruProfilePageProps) => {
    return (
        <div className="page">
            <div className="page-header">
                <NCUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></NCUHeader>
            </div>

            <div className="page-body">
                <div className="ProfilePage-ProfileCard-container">
                    <ProfileCard 
                        fullName='Matthew Chin'
                        tagline='CEO @ FoundUp'
                        description='I am a ex-software developer and outdoot photographer'
                        profileImgSrc='./logo192png'
                    ></ProfileCard>
                </div>
                <div className="ProfilePage-Exp-container">
                    <div className="Exp-heading-container">
                        <WorkOutlineIcon/>
                        <h4>Experience</h4>
                    </div>
                    <ExpCardLarge
                        expImgSrc=''
                        role='CEO'
                        company='FoundUp'
                        description='This will be a description about their experience. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                    ></ExpCardLarge>
                </div>
                <div className="RecentPosts-container">
                    <div className="Posts-heading-container">
                        <FeedOutlinedIcon/>
                        <h4>Recent Posts</h4>
                    </div>
                    <RecentPostItem
                        imgSrc='./logo192.png'
                        text='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?'
                        date='2 hours ago'
                    ></RecentPostItem>
                </div>
            </div>

            <div className="page-footer">
                <Footer links={['Placeholder']}></Footer>
            </div>
        </div>
    )
}
