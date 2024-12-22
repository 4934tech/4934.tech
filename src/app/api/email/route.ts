import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, firstName, lastName, company,  message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'mailgun',
        auth: {

            user: process.env.MAILGUN_USER,
            pass: process.env.MAILGUN_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        replyTo: email,
        to: process.env.RECIPIENT_EMAILS,
        cc: email,
        subject: `${firstName} ${lastName}, ${email} - 4934)`,
        text: message + '\n\n' + company + "\n\n This message was sent from the contact form on 4934. in accordance to the privacy policy (https://4934.tech/policies/privacy). The following data was submitted:" + JSON.stringify({ email, firstName, lastName, company, message }, null, 2),
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}