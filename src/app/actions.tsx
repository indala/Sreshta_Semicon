'use server';

import { z } from 'zod';
import { resend } from '@/lib/resend';
import { RegistrationEmail } from '@/components/emails/RegistrationEmail';
import { ConfirmationEmail } from '@/components/emails/ConfirmationEmail';
import { ContactEmail } from '@/components/emails/ContactEmail';

// Schema for Registration Form
const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits.'),
  course: z.string().min(1, 'Please select a course.'),
  mode: z.enum(['Online', 'Offline', 'Hybrid']),
  message: z.string().optional(),
});

export async function handleRegistration(data: unknown) {
  const parsed = registrationSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors };
  }

  try {
    // Send email to Admin
    await resend.emails.send({
      from: 'Sreshta Semicon <onboarding@resend.dev>',
      to: 'sreshtasemicon@gmail.com',
      subject: `New Registration: ${parsed.data.course}`,
      react: <RegistrationEmail data={parsed.data} />,
    });

    // Send confirmation email to User
    await resend.emails.send({
      from: 'Sreshta Semicon <onboarding@resend.dev>',
      to: parsed.data.email,
      subject: 'Registration Confirmation - Sreshta Semicon',
      react: <ConfirmationEmail name={parsed.data.fullName} />,
    });

    return { success: true, message: 'Registration successful! We will contact you shortly.' };
  } catch (error) {
    console.error('Resend Error (Registration):', error);
    return { success: false, message: 'Failed to send registration emails.' };
  }
}

// Schema for Contact Form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function handleContact(data: unknown) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors };
  }

  try {
    // Send email to Admin
    await resend.emails.send({
      from: 'Sreshta Semicon <onboarding@resend.dev>',
      to: 'sreshtasemicon@gmail.com',
      subject: `New Contact Message from ${parsed.data.name}`,
      react: <ContactEmail data={parsed.data} />,
    });

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Resend Error (Contact):', error);
    return { success: false, message: 'Failed to send contact email.' };
  }
}
