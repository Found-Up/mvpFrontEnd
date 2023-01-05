import React from 'react';
import { MessageFeedItem } from '../../molecules/MessageFeedItem/MessageFeedItem';
import { Footer } from '../../organisms/Footer/Footer';
import { SRUHeader } from '../../organisms/Headers/SRUHeader';

import './srumessageportal.css';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';

type SRUMessagePortalProps = {
    user: string,
    messages: string[],
}

export const SRUMessagePortal = ({user, messages}: SRUMessagePortalProps) => {
    return (
        <div>
            <SRUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></SRUHeader>
            <div className='SRUMessagePortal-Body'>
                <div className='SRUMessagePortal-MessageFeed'>
                    <SearchBar label=''/>
                    <MessageFeedItem recieverName='Candidate Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={true}></MessageFeedItem>
                    <MessageFeedItem recieverName='Candidate Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Candidate Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Candidate Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                    <MessageFeedItem recieverName='Candidate Name' 
                    date='Jan 3' 
                    message='Lorem ipsum dolor sit amet, consecte...'
                    imgSrc='https://via.placeholder.com/75'
                    bookMarked={false}></MessageFeedItem>
                </div>
                <div>
                    <h1>Placeholder</h1>
                </div>
            </div>
            <Footer links={['Help']}></Footer>
        </div>
    )
}