import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

// This function will handle POST requests to /api/airtableWebhook
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, email, twitterUrl } = body;

        const webhookUrl = process.env.NEXT_PUBLIC_AIRTABLE_WEBHOOK;

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                twitterUrl,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to send data to Airtable' }, { status: response.status });
        }

        return NextResponse.json({ message: 'Data sent successfully to Airtable' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred while sending data to Airtable' }, { status: 500 });
    }
}
