import React from 'react';
import { Graph } from '../../molecules/Graph/Graph';
import './companykpicard.css';

type CompanyKPICardProps = {
    graphLinks: string[],
    companyName: string,
}

export const CompanyKPICard = ({graphLinks, companyName}: CompanyKPICardProps) => {
    const KPIGraphs = graphLinks.map((links) => 
        <Graph title='A graph title' link={links}></Graph> 
    )
    return (
        <div className='CompanyKPICard-Container'>
            <h1 className='CompanyKPICard-Title'>{companyName} KPI's</h1>
            <div className='CompanyKPICard-Graphs'>
                {KPIGraphs}
            </div>
            <p className='CompanyKPICard-Link'>View all</p>
        </div>
    )
}