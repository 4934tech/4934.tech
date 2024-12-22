'use server'

import { z } from 'zod'

const contactSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().optional(),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
})

export async function submitContactForm(
    _prevState: Record<string, unknown>,
    formData: FormData
): Promise<{ success: boolean; errors?: Record<string, string[]> }> {
    const rawFormData = {
        firstName: formData.get('first-name')?.toString() ?? '',
        lastName: formData.get('last-name')?.toString() ?? '',
        company: formData.get('company')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        message: formData.get('message')?.toString() ?? '',
    }

    const validationResult = contactSchema.safeParse(rawFormData)

    if (!validationResult.success) {
        return {
            success: false,
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validationResult.data),
        })

        if (!response.ok) {
            const errorData = await response.json()
            return { success: false, errors: errorData.errors }
        }

        return { success: true }
    } catch (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, errors: { _form: ['An unexpected error occurred. Please try again.'] } }
    }
}

