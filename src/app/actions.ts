'use server';

import { z } from 'zod';

// Helper function to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

  // Simulate sending email with Resend
  console.log('Registration Data:', parsed.data);
  await delay(1000);

  // In a real app, you would:
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'sreshtasemicon@gmail.com',
  //   subject: 'New Course Registration',
  //   react: <RegistrationEmail data={parsed.data} />
  // });
  // await resend.emails.send({
  //   from: 'noreply@sreshtasemicon.com',
  //   to: parsed.data.email,
  //   subject: 'Registration Confirmation',
  //   react: <ConfirmationEmail name={parsed.data.fullName} />
  // });

  return { success: true, message: 'Registration successful! We will contact you shortly.' };
}

// Schema for Contact Form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.email('Invalid email address.'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function handleContact(data: unknown) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors };
  }

  // Simulate sending email with Resend
  console.log('Contact Form Data:', parsed.data);
  await delay(1000);

  // In a real app, you would use Resend here.

  return { success: true, message: 'Your message has been sent successfully!' };
}
