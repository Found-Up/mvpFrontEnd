import React from 'react';
import './graph.css';

type GraphProps = {
    title: string,
    link: string,
}

export const Graph = ({title, link}: GraphProps) => {
    return (
        <div className='Graph-Container'>
            <p>{title}</p>
            <div className='Graph-Box'>
                <p>{link}</p>
            </div>
        </div>
    )
};
