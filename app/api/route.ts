import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define the response type
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API is working' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { surname, username, email, message } = req.body;

  if ( !username || !email || !message ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or SMTP settings
      auth: {
        user: process.env.EMAIL_USER, // Email address
        pass: process.env.EMAIL_PASS, // Email password or app password
      },
    });

    // Define email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: 'New Contact Form Submission',
      text: `
        You have received a new message from your website contact form:
        
        Surname: ${surname}
        Username: ${username}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
}
