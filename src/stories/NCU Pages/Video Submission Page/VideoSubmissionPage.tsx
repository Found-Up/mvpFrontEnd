import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { CompanyInfoBox } from '../../organisms/CompanyInfoBox/CompanyInfoBox';
import './videosubmissionpage.css';
import { Button } from '../../atoms/Buttons/Button';


type VideoSubmissionProps = {
    user: string;
};

export const VideoSubmissionPage = ({user}: VideoSubmissionProps) => {
    return (
        <div>
            <NCUHeader links={['Home','Messages','Profile','Notifications']}></NCUHeader>
            <div className='VidSubmissionPage-Body'>
                <div>
                    <CompanyInfoBox 
                        companyName='Company Name' 
                        companyDesc='What are you passionate about? Focus on what’s important to you in your daily life.'
                        companyTags={['Tag', 'Tag']}
                        companyImgSrc='https://via.placeholder.com/75'></CompanyInfoBox>
                </div>
                <div className='VidSubmissionPage-VidBox'>
                    <h1>Placeholder</h1>
                    <Button label='Submit'></Button>
                </div>
            </div>
        </div>
    )
}