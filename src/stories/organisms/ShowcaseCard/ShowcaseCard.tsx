import React from 'react';
import { Component } from 'react';
import './showcaseCard.css'

type ShowcaseCardProps = {
    showcaseHeader : string,
    showcaseIcon : string,
    editIcon? : string,

}

export const ShowcaseCard = ({showcaseHeader, showcaseIcon} : ShowcaseCardProps) => {
    return (
        <div className="ShowcaseCard-container">
            <div className="ShowcaseCard-heading">
                
            </div>
            <div className="VideoReel-container">
                <div className="VideoReel">
                    
                </div>
            </div>
        </div>
    )
}