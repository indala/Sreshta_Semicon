import * as React from 'react';

interface NewsletterEmailProps {
    email: string;
}

export const NewsletterEmail: React.FC<NewsletterEmailProps> = ({ email }) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.5 }}>
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> {email}</p>
        <hr />
        <p style={{ fontSize: '12px', color: '#666' }}>
            This email was sent from the Sreshta Semicon website.
        </p>
    </div>
);
