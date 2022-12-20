import React from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { Filter } from '../../organisms/Filter/Filter';
import { FeedItem } from '../../molecules/FeedItem/FeedItem';
import { CompanyInfoBox } from '../../organisms/CompanyInfoBox/CompanyInfoBox';
import './welcomepage.css';

type WelcomePageProps = {
    user: string,
};

export const WelcomePage = ({user}: WelcomePageProps ) => {
    return (
        <div>
            <div className='WelcomePage-Header'>
                <NCUHeader links={['Home','Messages','Profile','Notifications']}></NCUHeader>
                <Filter filters={['Time', 'Engagement', 'Industry', 'Experience']}></Filter>
            </div>
            <div className='WelcomePage-Body'>
                <div className='WelcomePage-FeedContainer'>
                    <h4>Your Feed</h4>
                    <div className='WelcomePage-Feed'>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                        <FeedItem 
                            imgSrc='https://via.placeholder.com/75' 
                            feedActivity='Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum?'></FeedItem>
                    </div>
                </div>
                <div className='WelcomePage-CompInfoBox'>
                    <CompanyInfoBox 
                        companyName='Company Name' 
                        companyDesc='What are you passionate about? Focus on what’s important to you in your daily life.'
                        companyTags={['Tag', 'Tag']}
                        companyImgSrc='https://via.placeholder.com/75'></CompanyInfoBox>
                </div>
            </div>
        </div>
    );
};
