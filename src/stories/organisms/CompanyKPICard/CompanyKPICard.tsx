import React from 'react';
import { Graph } from '../../molecules/Graph/Graph';
import './companykpicard.css';

type CompanyKPICardProps = {
    graphLink: string,
    categoryName: string,
}

export const CompanyKPICard = ({graphLink, categoryName}: CompanyKPICardProps) => {
    const KPIGraph = <Graph title='' link={graphLink}></Graph> 

    return (
        <div className='CompanyKPICard-Container'>
            <h1 className='CompanyKPICard-Title'>{categoryName}</h1>
            <div className='CompanyKPICard-Graphs'>
                {KPIGraph}
            </div>
            <p className='CompanyKPICard-Link'>View more</p>
        </div>
    )
}