import * as React from 'react';

interface RegistrationEmailProps {
    data: {
        fullName: string;
        email: string;
        mobile: string;
        course: string;
        mode: string;
        message?: string;
    };
}

export const RegistrationEmail: React.FC<Readonly<RegistrationEmailProps>> = ({
    data,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h2 style={{ color: '#d32f2f' }}>New Course Registration</h2>
        <p>You have received a new registration for <strong>{data.course}</strong>.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Full Name:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.fullName}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Email:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.email}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Mobile:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.mobile}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Course:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.course}</td>
            </tr>
            <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Mode:</strong></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.mode}</td>
            </tr>
            {data.message && (
                <tr>
                    <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}><strong>Message:</strong></td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{data.message}</td>
                </tr>
            )}
        </table>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#777' }}>
            This email was sent from the Sreshta Semicon website.
        </p>
    </div>
);
