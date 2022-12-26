import React from 'react';
import './footer.css';

type footerProps = {
    links : string[]
}

export const Footer = ({links} : footerProps) => {
    return (
        <div className="Footer-container">
            <div className="Footer-content-container">
                <div className="Footer-row">
                    <div className="Footer-col">
                        <img src="./logo192.png" alt="" />
                    </div>
                    
                    <div className="Footer-col">
                        <h3>About Us</h3>
                        <ul className="Footer-links">
                            <li><a href="">{links}</a></li>
                            <li><a href="">link</a></li>
                            <li><a href="">link</a></li>
                        </ul>
                    </div>
                    <div className="Footer-col">
                        <h3>Contact Us</h3>
                        <ul className="Footer-links">
                            <li><a href="">link</a></li>
                            <li><a href="">link</a></li>
                            <li><a href="">link</a></li>
                        </ul>
                    </div>
                    <div className="Footer-col">
                        <h3>Get Help</h3>
                        <ul className="Footer-links">
                            <li><a href="">link</a></li>
                            <li><a href="">link</a></li>
                            <li><a href="">link</a></li>
                        </ul>
                    </div>
                </div>
                
            
            </div>
            <div className="Footer-copyright-banner">
                <p>FoundUp. All rights reserved.</p>
            </div>
        </div>
    )
}