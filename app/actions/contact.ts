'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const businessName = formData.get('businessName') as string;
  const businessType = formData.get('businessType') as string;

  try {
    if (!process.env.CONTACT_EMAIL) {
      throw new Error('CONTACT_EMAIL is not set');
    }

    await resend.emails.send({
      from: `AI Sidekick <${process.env.CONTACT_FORM_SENDER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send message' };
  }
} 