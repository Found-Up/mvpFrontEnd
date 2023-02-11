import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {green, grey, blue} from '@mui/material/colors';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './questionfeeditem.css';
import { IconButton, styled, Button } from '@mui/material';

type QuestionFeedItemProps = {
    status: string,
    timeRemaining: string,
    bookmarked: boolean,
    question: string,
    responses: number,
    unread: number,
    starred: number,
    repeats: number,
    open?: boolean,
}

const BorderLinearProgress = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    width: 218,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: grey,
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: blue,
      }, 
});

export const QuestionFeedItem = ({status, timeRemaining, bookmarked, question, responses, unread, starred, repeats, open }: QuestionFeedItemProps) => {
    const [isOpen, setIsOpen] = useState(open);
    const [edit, setEdit] = useState('Edit');
    const [footResponse, setFootResponse] = useState('Responses are availble after expiration or after all responses are received');

    const handleExpand = () => {
        setIsOpen((prev) => !prev);
    };

    const handleEdit = () => {
        if (edit === 'Delete') {
            handleDelete();
        } else {
            setEdit('Delete');
        }
    }

    const handleDelete = () => {
        setEdit('Confirm Delete');
        setFootResponse('Are you sure? All responses will be deleted');
    }


    let bookmarkIcon, statusIcon;
    switch(status){
        case 'Active':
            statusIcon = 
                <div id='QuestionFeedItem-HeaderLeft'>
                    <CircleIcon sx={{color: green[500]}}/>
                    <p>{status}</p>
                </div>
            break;
        case 'Complete':
            statusIcon =
            <div id='QuestionFeedItem-HeaderLeft'>
                <CircleIcon sx={{color: blue[500]}}/>
                <p>{status}</p>
            </div>
            break;
        default:
            statusIcon =
            <div id='QuestionFeedItem-HeaderLeft'>
                <CircleIcon sx={{color: grey[500]}}/>
                <p>{status}</p>
            </div>
            break;
    }
    if (bookmarked) {
        bookmarkIcon = <BookmarkIcon />
    } else {
        bookmarkIcon = <BookmarkBorderOutlinedIcon />
    }
    return (
        <div id='QuestionFeedItem-Container'>
            <div id='QuestionFeedItem-Header'>
                {statusIcon}
                <div id='QuestionFeedItem-HeaderRight'>
                    <p>{timeRemaining} remaining</p>
                    {bookmarkIcon}
                </div>
            </div>
            <div id='QuestionFeedItem-Body'>
                <p>{question}</p>
            </div>
            <div id='QuestionFeedItem-Footer'>
                View Info
                <IconButton aria-label='expand' onClick={handleExpand}>
                    {!isOpen ? (
                        <ExpandMoreIcon/>
                    ) : (
                        <ExpandLessIcon/>
                    )}
                </IconButton>
            </div>
            <div id='QuestionFeedItem-Expanded'>
                 {isOpen && (status === 'Active') && 
                    <>
                        <div id='QuestionFeedItem-ExpandedBody'>
                            <div id='QuestionFeedItem-ExpandedBodyLeft'>
                                <BorderLinearProgress variant='determinate' value={responses} />
                                <div id='QuestionFeedItem-QuestionStats'>
                                    <p>{responses} of 50 responses</p>
                                    <p>{repeats} repeat candidates</p>
                                </div>
                            </div>
                            <div id='QuestionFeedItem-ExpandedBodyRight'>
                                <Button variant='outlined' onClick={handleEdit}>
                                    {edit}
                                </Button>
                                <Button variant='outlined' disabled>
                                    View Responses
                                </Button>
                            </div>
                        </div>
                        <div id='QuestionFeedItem-ExpandedFooter'>
                            <p>{footResponse}</p>
                        </div>
                    </>
                 }
                 {isOpen && (status === 'Complete') && 
                    <>
                        <div id='QuestionFeedItem-ExpandedBody'>
                            <div id='QuestionFeedItem-ExpandedBodyLeft'>
                                <BorderLinearProgress variant='determinate' value={responses} />
                                <div id='QuestionFeedItem-QuestionStats'>
                                    <p>{responses} of 50 responses</p>
                                    <p>{repeats} repeat candidates</p>
                                </div>
                            </div>
                            <div id='QuestionFeedItem-ExpandedBodyRight'>
                                <Button variant='contained' href='#'>
                                    View Responses
                                </Button>
                            </div>
                        </div>
                    </>
                 }
            </div>
        </div>
    )
}