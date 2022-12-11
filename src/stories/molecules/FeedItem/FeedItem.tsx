import React from 'react';
import './feeditem.css';

 type FeedItemProps = {
    imgSrc: string,
    feedActivity: string
 }

 export const FeedItem = ({imgSrc, feedActivity}: FeedItemProps) => {
    return (
        <div className='feedItem-Container'>
            <img className='feedItem-Image' src={imgSrc} alt="Activity"/>
            <p className='feedItem-Text'>{feedActivity}</p>
        </div>
    );
 };
 