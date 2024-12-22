// app/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm } from '@/lib/mail/submitContactForm'
// ^ update this path if needed

/**
 * This function is called for a POST request to /contact
 */
export async function POST(request: NextRequest) {
    try {
        // 1. Extract FormData from the incoming request
        const formData = await request.formData()

        // 2. Call your existing function
        const result = await submitContactForm({}, formData)

        // 3. Respond with JSON
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 }
        )
    }
}

export const runtime = 'edge';
