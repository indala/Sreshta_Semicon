import * as React from 'react';

interface ContactEmailProps {
    data: {
        name: string;
        email: string;
        mobile: string;
        message: string;
    };
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    data,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h2 style={{ color: '#d32f2f' }}>New Contact Message</h2>
        <p>You have received a new message from the contact form.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Name:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.name}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Email:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.email}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Mobile:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.mobile}</td>
            </tr>
        </table>
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            <strong>Message:</strong>
            <p style={{ whiteSpace: 'pre-wrap' }}>{data.message}</p>
        </div>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#777' }}>
            This email was sent from the Sreshta Semicon website.
        </p>
    </div>
);
