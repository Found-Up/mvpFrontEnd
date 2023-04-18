import React from 'react';
import { Filter } from '../../organisms/Filter/Filter';
import { Footer } from '../../organisms/Footer/Footer';
import { MessageFeedItem } from '../../molecules/MessageFeedItem/MessageFeedItem';
import './messageportal.css';

type MessagePortalProps = {
    user: string,
    messages: string[]
}

export const MessagePortal = ({user, messages}: MessagePortalProps) => {
    return (
        <div>
            <div className='MessagePortal-Head'>
                <Filter sortBy={false} name='Sort' filters={['Unread', 'Industry']} />
            </div>
            <div className='MessagePortal-Body'>
                <div className='MessagePortal-Feed'>
                    <MessageFeedItem recieverName='Company Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={true}></MessageFeedItem>
                    <MessageFeedItem recieverName='Company Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Company Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Company Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Company Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                </div>
                <div>
                    <h1>Placeholder</h1>
                </div>
            </div>
            <Footer links={['Help']} />
        </div>
    )
    
};
