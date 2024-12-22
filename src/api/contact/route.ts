import { NextResponse } from 'next/server'
import { z } from 'zod'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
})

const mailgunClient = new Mailgun(FormData)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validationResult = contactSchema.safeParse(body)

        if (!validationResult.success) {
            return NextResponse.json(
                { errors: validationResult.error.flatten().fieldErrors },
                { status: 400 }
            )
        }

        const { firstName, lastName, company, email, message } = validationResult.data

        const mg = mailgunClient.client({
            username: 'api',
            key: process.env.MAILGUN_API_KEY || '',
        })

        const mailData = {
            from: `Contact Form <${process.env.MAILGUN_SENDER_EMAIL}>`,
            to: (process.env.RECIPIENT_EMAILS || '').split(',').map(email => email.trim()),
            subject: `Contact Form Submission From ${firstName} ${lastName} ${email} - 4934 Tech`,
            text: `
        Name: ${firstName} ${lastName}
        Company: ${company || 'N/A'}
        Email: ${email}
        Message: ${message}
      `,
        }

        await mg.messages.create(process.env.MAILGUN_DOMAIN || '', mailData)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error processing contact form submission:', error)
        return NextResponse.json(
            { errors: { _form: ['An unexpected error occurred. Please try again.'] } },
            { status: 500 }
        )
    }
}
