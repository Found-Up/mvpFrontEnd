import React, { MouseEvent, useState } from 'react';
import { NCUHeader } from '../../organisms/Headers/NCUHeader';
import { Button } from '../../atoms/Buttons/Button';
import { Footer } from '../../organisms/Footer/Footer';
import { SignInForm } from '../../molecules/SignInForm/SignInForm';

import './ncuSignInPage.css'


type SignInProps = {

}

export const NCUSignInPage = ({}: SignInProps) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    return (
        <div className="SignIn-body">
            <NCUHeader links={['Home', 'Messages', 'Profile', 'Notifications']}></NCUHeader>
            <div className="SignIn-content-container">
                <div className="SignIn-content">
                    <SignInForm></SignInForm>
                </div>
            </div>
            <Footer links={['Placeholder']}></Footer>
        </div>
    )
}