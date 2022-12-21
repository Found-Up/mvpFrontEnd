import React from 'react';
import { Button } from '../../atoms/Buttons/Button';
import './companyinfobox.css';

type compInfoBoxProps = {
    companyName: string,
    companyDesc: string,
    companyTags: string[],
    companyImgSrc: string
}

export const CompanyInfoBox = ({companyName, companyDesc, companyTags, companyImgSrc}: compInfoBoxProps) => {
    return (
        <div className='compInfoBox-Container'>
            <div className='compInfoBox-Heading'>
                <img src={companyImgSrc} alt='CompanyImage'/>
                <h1>{companyName}</h1>
            </div>
            <div className='compInfoBox-Body'>
                <p>{companyDesc}</p>
                {/* Need to make a tag atom or molecule */}
                <a href='http://google.com/'>More company info {'>'}</a>
            </div>
            <div className='compInfoBox-Footing'>
                <Button label='Respond' primary={true}></Button>
                <p>x/x Responses Remaining</p>
            </div>
        </div>
    );
};