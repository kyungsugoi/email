import React from 'react';
import './emailbody.styles.css';

export const EmailBody = ({email}) => {
    const { from, subject, address, time, message } = email;
    <div className = 'email-body-container'>
        <p>{from} - {address}</p>
        <h2>{subject}</h2>
        <p>{time}</p>
        <p>{message}</p>
    </div>
}