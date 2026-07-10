import { NextResponse } from 'next/server'
import { siteContactEmail } from '@/lib/site-contact'

type PrayerRequestPayload = {
  name?: string
  email?: string
  phone?: string
  location?: string
  request?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PrayerRequestPayload

    const name = body.name?.trim() || ''
    const email = body.email?.trim() || ''
    const phone = body.phone?.trim() || 'Not provided'
    const location = body.location?.trim() || 'Not provided'
    const prayerRequest = body.request?.trim() || ''

    if (!name || !email || !prayerRequest) {
      return NextResponse.json(
        { message: 'Please complete your name, email address, and prayer request.' },
        { status: 400 },
      )
    }

    const upstreamResponse = await fetch(`https://formsubmit.co/ajax/${siteContactEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        message: prayerRequest,
        _subject: `Prayer Request from ${name}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
      }),
    })

    const upstreamResult = (await upstreamResponse.json().catch(() => null)) as
      | { message?: string; success?: string }
      | null

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          message:
            upstreamResult?.message ||
            'Prayer request could not be sent right now. Please try again shortly.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      message:
        'Prayer request submitted successfully. Our team will receive it immediately by email.',
      details: {
        name,
        email,
        phone,
        location,
      },
    })
  } catch {
    return NextResponse.json(
      {
        message: 'Prayer request could not be submitted right now. Please try again shortly.',
      },
      { status: 500 },
    )
  }
}
