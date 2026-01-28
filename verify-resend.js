
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    console.error('❌ Error: RESEND_API_KEY is missing from .env file.');
    process.exit(1);
}

const resend = new Resend(apiKey);

async function sendTestEmail() {
    console.log('📧 Attempting to send test email...');

    try {
        const { data, error } = await resend.emails.send({
            from: 'Makebetter Verification <info@makebetter.tech>',
            to: ['info@makebetter.tech'],
            subject: 'Verification: Resend Integration Works!',
            html: '<h3>Success!</h3><p>Your domain is verified and Resend is ready for production.</p>',
        });

        if (error) {
            console.error('❌ Resend Error:', error);
            process.exit(1);
        }

        console.log('✅ Success! Email sent.', data);
    } catch (err) {
        console.error('❌ Unexpected Error:', err);
    }
}

sendTestEmail();
