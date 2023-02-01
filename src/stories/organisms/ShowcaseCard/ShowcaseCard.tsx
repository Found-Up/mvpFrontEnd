import React from 'react';
import { VideoItem } from '../../molecules/VideoItem/VideoItem';
import './showcaseCard.css'

import SlideshowIcon from '@mui/icons-material/Slideshow';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

type ShowcaseCardProps = {
    showcaseHeader : string,
    showcaseIcon : string,
    editIcon? : string,

}

export const ShowcaseCard = ({showcaseHeader, showcaseIcon} : ShowcaseCardProps) => {
    return (
        <div className="ShowcaseCard-container">
            <div className="ShowcaseCard-heading">
                <SlideshowIcon/>
                <h4>{showcaseHeader}</h4>
                <div className="edit-button"><ModeEditOutlineOutlinedIcon/></div>
            </div>
            <div className="VideoReel-container">
                <div className="VideoReel">
                    <VideoItem 
                    thumbnailSrc='./logo192.png'
                    title='What is your greatest strength?'
                    time='1 day ago'></VideoItem>
                    <VideoItem 
                    thumbnailSrc='./logo192.png'
                    title='What is your greatest strength?'
                    time='1 day ago'></VideoItem>
                    <VideoItem 
                    thumbnailSrc='./logo192.png'
                    title='What is your greatest strength?'
                    time='1 day ago'></VideoItem>
                    <VideoItem 
                    thumbnailSrc='./logo192.png'
                    title='What is your greatest strength?'
                    time='1 day ago'></VideoItem>

                </div>
            </div>
        </div>
    )
}