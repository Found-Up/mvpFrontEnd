import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './messageFeedItem.css';

type MessageFeedItemProps = {
    recieverName: string,
    date: string,
    message: string,
    imgSrc: string,
    bookMarked: boolean,
}

export const MessageFeedItem = ({recieverName, date, message, imgSrc, bookMarked}: MessageFeedItemProps) => {
    let bookmark;
    if (bookMarked) {
        bookmark = <BookmarkIcon></BookmarkIcon>
    } else {
        bookmark = <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
    }
    return (
        <div className='MessageFeedItem-Container'>
            <img className='MessageFeedItem-Image' src={imgSrc} alt='ProfileImage'></img>
            <div className='MessageFeedItem-InfoText'>
                <h2>{recieverName}</h2>
                <p>{message}</p>
            </div>
            <div className='MessageFeedItem-BookAndDate'>
                <p>{date}</p>
                {bookmark}
            </div>
        </div>
    )
};
