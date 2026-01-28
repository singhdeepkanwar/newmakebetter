import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // CORS implementation
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this in production if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { type, data } = req.body;

        // Construct email content based on form type
        let subject = `New Submission from Makebetter Website`;
        let htmlContent = '';

        if (type === 'contact') {
            subject = `New Contact Form Message from ${data.name}`;
            htmlContent = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
        } else if (type === 'career') {
            subject = `Job Application: ${data.job} - ${data.name}`;
            htmlContent = `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${data.job}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Portfolio/CV:</strong> <a href="${data.cvLink}">${data.cvLink}</a></p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'Makebetter Website <info@makebetter.tech>',
            to: ['info@makebetter.tech'],
            subject: subject,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error: error.message });
        }

        return res.status(200).json({ success: true, data: emailData });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
