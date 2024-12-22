import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
    try {
        // 1. Parse the incoming request data
        const { email, firstName, lastName, company, message } = await request.json();
        const mailgunDomain = process.env.MAILGUN_DOMAIN || '';
        const mailgunApiKey = process.env.MAILGUN_API_KEY || '';
        const recipientEmails = process.env.RECIPIENT_EMAILS || ''; // "someone@example.com"

        // 2. Build the content of the email
        //    NOTE: For best results, ensure you set "from" to a domain verified in Mailgun.
        const from = `Contact Form <postmaster@${mailgunDomain}>`;
        const subject = `${firstName} ${lastName}, ${email} - 4934`;
        const bodyText = `${message}\n\n${company}\n\nThis message was sent from the contact form on 4934.tech in accordance with the privacy policy (https://4934.tech/policies/privacy). The following data was submitted:\n${JSON.stringify({ email, firstName, lastName, company, message }, null, 2)}`;

        // 3. Prepare form data for Mailgun
        const formData = new FormData();
        formData.append('from', from);
        formData.append('to', recipientEmails);
        formData.append('cc', email); // cc the sender
        formData.append('subject', subject);
        formData.append('text', bodyText);

        // If you want a "Reply-To", Mailgun handles it via a custom header:
        formData.append('h:Reply-To', email);

        // 4. Make a POST request to Mailgun’s API
        //    We use Basic Auth with "api:<API_KEY>"
        const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
            },
            body: formData,
        });

        if (!response.ok) {
            // Print any error text for debugging
            const errorText = await response.text();
            console.error('Mailgun Error:', errorText);
            throw new Error(`Mailgun API returned status ${response.status}`);
        }

        // 5. Respond back to client
        return NextResponse.json({ message: 'Email sent successfully via Mailgun API' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
