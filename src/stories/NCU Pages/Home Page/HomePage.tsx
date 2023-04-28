import React from 'react';
import { Filter } from '../../organisms/Filter/Filter';
import { FeedItem } from '../../molecules/FeedItem/FeedItem';
import { CompanyInfoBox } from '../../organisms/CompanyInfoBox/CompanyInfoBox';
import './homepage.css';

type HomePageProps = {
    user: string,
};

export const HomePage = ({user}: HomePageProps ) => {
    return (
        <div>
            <div className='HomePage-Header'>
                <Filter name='Filters' filters={['Time', 'Engagement', 'Industry', 'Experience']} sortBy={true}></Filter>
            </div>
            <div className='HomePage-Body'>
                <div className='HomePage-FeedContainer'>
                    <h4>Your Feed</h4>
                    <div className='HomePage-Feed'>
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
                <div className='HomePage-CompInfoBox'>
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
