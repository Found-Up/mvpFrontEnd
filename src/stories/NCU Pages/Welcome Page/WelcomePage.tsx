import React from 'react';
import { BaseHeader } from '../../organisms/Headers/BaseHeader';
import './welcomepage.css';


type WelcomePageProps = {
    user: string
}

export const WelcomePage = ({user}: WelcomePageProps) => {
    return (
        <div>
            <BaseHeader links={['Home', 'Features', 'Process', 'Discover', 'Feedback']}/>
            <div>
                
            </div>

        </div>
    )
};
