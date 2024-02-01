import React from 'react';
import './email.styles.css';
import { EmailBody } from '../emailbody/emailbody.component';

export const EmailBlock = ({email}) => {
    const { from, subject, address, time, read } = email;
    if (read === "false") {
        return (
            <div className = 'unread-container'>
                <p>{from} - {address}</p>
                <h2>{subject}</h2>
                <p>{time}</p>
            </div>
        )
    } else {
        return (
            <div className = 'read-container'>
                <EmailBody key={email.id} email={email} />
                <p>{from} - {address}</p>
                <h2>{subject}</h2>
                <p>{time}</p>
            </div>
        )
    }
};