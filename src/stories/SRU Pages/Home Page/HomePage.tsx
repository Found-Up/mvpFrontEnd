import React from 'react';
import { SRUHeader } from '../../organisms/Headers/SRUHeader';
import { Footer } from '../../organisms/Footer/Footer';
import { CompanyKPICard } from '../../organisms/CompanyKPICard/CompanyKPICard';
import './homepage.css';

type HomePageProps = {
    user: string,
    graphs: string[],
}

export const HomePage = ({user, graphs}: HomePageProps) => {
    return (
        <div>
            <SRUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></SRUHeader>
            <div className='HomePage-Body'>
                <div className='HomePage-Activity'>
                    <h1>placeholder</h1>
                </div>
                <div className='HomePage-Statistics'>
                    <div className='HomePage-KPIs'>
                        <CompanyKPICard graphLinks={graphs} companyName={user}></CompanyKPICard>
                    </div>
                    <div className='HomePage-Suggestions'>
                        <p>Suggestions</p>
                        <ul>
                            <li>Set up this page</li>
                            <li>Respond to people</li>   
                        </ul>
                    </div>
                    <div className='HomePage-Articles'>
                        <p>Articles</p>
                        <ul>
                            <li>Writing a good question</li>
                            <li>Responding to people</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer links={['Feature', 'Feature']}></Footer>
        </div>
    )
}