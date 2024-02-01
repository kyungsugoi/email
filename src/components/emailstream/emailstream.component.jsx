import React from 'react';
import './emailstream.styles.css';
import { EmailBlock } from '../email/email.component';

export const EmailStream = ({ emails }) => (
    <div className="emailstream">
        {emails.map(email => (
            <EmailBlock key={email.id} email={email} />
        ))}
    </div>
);