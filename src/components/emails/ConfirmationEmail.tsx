import * as React from 'react';

interface ConfirmationEmailProps {
    name: string;
}

export const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
    name,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h2 style={{ color: '#d32f2f' }}>Registration Confirmed</h2>
        <p>Dear {name},</p>
        <p>Thank you for registering with <strong>Sreshta Semicon</strong>. We have received your application and will contact you shortly with more details.</p>
        <p>If you have any immediate questions, feel free to reply to this email or call us at our office.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>The Sreshta Semicon Team</strong></p>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', marginTop: '20px' }} />
        <p style={{ fontSize: '12px', color: '#777' }}>
            This is an automated confirmation email. Please do not reply directly if you need urgent technical assistance.
        </p>
    </div>
);
