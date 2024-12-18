'use server'

import { z } from 'zod'

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
})

export async function submitContactForm(prevState: Record<string, unknown>, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors }
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true }
}
