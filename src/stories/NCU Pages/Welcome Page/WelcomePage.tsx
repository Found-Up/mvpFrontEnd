import React from 'react';
import { BaseHeader } from '../../organisms/Headers/BaseHeader';
import { Button } from '../../atoms/Buttons/Button';
import './welcomepage.css';


type WelcomePageProps = {
    user: string
}

export const WelcomePage = ({user}: WelcomePageProps) => {
    return (
        <div>
            <BaseHeader links={['Home', 'Features', 'Process', 'Discover', 'Feedback']}/>
            <div>
                <h1>Be You. Get Found. Build Together</h1>
                <p>FoundUp connects talent, employers, and companies through on simple paltform</p>
                <Button label='Join Today'></Button>
                <img src='https://via.placeholder.com/423' alt='Placeholder' />
            </div>
            <div>
                <img src='https://via.placeholder.com/423' alt='Placeholder' />
                <h1>We're on a mission to form genuine connections</h1>
                <p>FoundUp is a fresh platform to create open conversation between real people and real companies.</p>
                <Button label='Start Connecting'></Button>
            </div>
            <div>
                <h1>Spark converstaion, view insights, and connect from a single dashboard</h1>
                {/* TODO - create component */}
            </div>
            <div>
                <div>
                    <img src='https://via.placeholder.com/223' alt='Placeholder' />
                    <h3>Spark Conversation</h3>
                    <p>Ask the questions that are important to you. A strong candidate is one that belives in your mission - what's yours?</p>
                </div>
                <div>
                    <img src='https://via.placeholder.com/223' alt='Placeholder' />
                    <h3>Candidate Profiles</h3>
                    <p>Access vetted candidate profiles to navigate through your pool.</p>
                </div>
                <div>
                    <img src='https://via.placeholder.com/223' alt='Placeholder' />
                    <h3>All-in-One Platform</h3>
                    <p>Conduct your search from beginning to end. Start a conversation, message, and achieve your goals.</p>
                </div>
            </div>
            <div>
                <h1>We help streamline the recruitment process</h1>
                <p>FoundUp connects you upfront to talent without all the formalities, showing you their genuine self.</p>
                <Button label='Register'></Button>
                <img src='https://via.placeholder.com/423' alt='Placeholder' />
            </div>
            <div>
                <h2>Connect confidentily at any stage of growth</h2>
                <p>From startups to enterprises, comapnies know that they can reach a network of like-minded individuals.</p>
                <div>
                    {/* TODO: Company logo section */}
                </div>
            </div>
            <div>
                <h1>Join the community</h1>
                <p>Get connected on FoundUp within minutes. Signing up and connecting with companies is free.</p>
                <Button label='Sign Up'></Button>
            </div>
        </div>
    )
};
