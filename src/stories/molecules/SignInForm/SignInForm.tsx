import React, { MouseEvent, useState } from 'react';
import { Button } from '../../atoms/Buttons/Button';

import './signInForm.css'


type SignInFormProps = {

}

export const SignInForm = ({}: SignInFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="SignInForm-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="text-field">
                    <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" placeholder='Email' id='email' name='email' />
                </div>
                
                <div className="text-field">
                    <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" placeholder='Password' id='email' name='email' />
                </div>
                
                <div className="forgot-password">
                    <a href="">Forgot password?</a>
                </div>

                <button type='submit'>Sign In</button>

                <div className="signup-link">
                    Dont have an account? <a href="">Sign Up</a>
                </div>

            </form>
        </div>
        
    )
}