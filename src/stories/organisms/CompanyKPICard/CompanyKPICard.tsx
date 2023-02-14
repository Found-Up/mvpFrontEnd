import React from 'react';
import { Graph } from '../../molecules/Graph/Graph';
import './companykpicard.css';

type CompanyKPICardProps = {
    graphLink: string,
    companyName: string,
}

export const CompanyKPICard = ({graphLink, companyName}: CompanyKPICardProps) => {
    const KPIGraph =
        <Graph title='A graph title' link={graphLink}></Graph> 

    return (
        <div className='CompanyKPICard-Container'>
            <h1 className='CompanyKPICard-Title'>{companyName} KPI's</h1>
            <div className='CompanyKPICard-Graphs'>
                {KPIGraph}
            </div>
            <p className='CompanyKPICard-Link'>View all</p>
        </div>
    )
}