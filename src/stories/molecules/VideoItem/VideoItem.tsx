import React from 'react';
import { Component } from 'react';
import './videoItem.css'

type VideoItemProps = {
    thumbnailSrc : string,
    title : string,
    time : string,
    videoSrc : string

}

export const VideoItem = ({thumbnailSrc, title, time} : VideoItemProps) => {
    return (
        <div className="VideoItem-container">
            <div className="VideoItem-thumbnail">
                <img src={thumbnailSrc} alt="" />
            </div>
            <p className="VideoItem-title">{title}</p>
            <p className="VideoItem-time">{time}</p>
        </div>
    )
}