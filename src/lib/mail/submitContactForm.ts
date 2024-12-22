// lib/submitContactForm.ts
'use server' // optional: allows direct "Server Action" usage if needed

import { z } from 'zod'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'

// Contact form Zod schema
const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
})

// Initialize Mailgun client outside the function
// This avoids recreating it on every request.
const mailgunClient = new Mailgun(FormData)

// Explicitly type the formData parameter as a Web API FormData
export async function submitContactForm(
    _prevState: Record<string, unknown>,
    formData: globalThis.FormData
) {
    // Access environment variables
    const env = process.env.NEXT_RUNTIME === 'edge'
        ? globalThis.process.env
        : process.env

    const mg = mailgunClient.client({
        username: 'api',
        key: env.MAILGUN_API_KEY || '',
    })

    // Convert FormData to a regular object for validation
    const rawFormData = {
        firstName: formData.get('first-name')?.toString(),
        lastName: formData.get('last-name')?.toString(),
        company: formData.get('company')?.toString(),
        email: formData.get('email')?.toString(),
        message: formData.get('message')?.toString(),
    }

    const validatedFields = contactSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors }
    }

    const { firstName, lastName, company, email, message } = validatedFields.data

    // Compose the email
    const mailData = {
        from: `Contact Form <${env.MAILGUN_SENDER_EMAIL}>`,
        to: (env.RECIPIENT_EMAILS || '')
            .split(',')
            .map((email) => email.trim()),
        subject: `Contact Form Submission From ${firstName} ${lastName} ${email} - 4934 Tech`,
        text: `
      Name: ${firstName} ${lastName}
      Company: ${company || 'N/A'}
      Email: ${email}
      Message: ${message}
    `,
    }

    try {
        if (!env.RECIPIENT_EMAILS) {
            throw new Error('RECIPIENT_EMAILS environment variable is not set')
        }

        // Send the email
        const result = await mg.messages.create(env.MAILGUN_DOMAIN || '', mailData)
        console.log('Email sent successfully:', result)

        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return {
            success: false,
            error: 'Failed to send email',
            details: error instanceof Error ? error.message : String(error),
        }
    }
}
