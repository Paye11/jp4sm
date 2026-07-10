'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle2, HandCoins, HeartHandshake, Mail, MapPin, Phone, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteDonateLink } from '@/lib/site-contact'

type HeroActionButtonsProps = {
  className?: string
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  location: '',
  request: '',
}

export function HeroActionButtons({ className }: HeroActionButtonsProps) {
  const [mounted, setMounted] = useState(false)
  const [isPrayerFormOpen, setIsPrayerFormOpen] = useState(false)
  const [showDonateMessage, setShowDonateMessage] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isPrayerFormOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPrayerFormOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isPrayerFormOpen])

  const closePrayerForm = () => {
    setIsPrayerFormOpen(false)
    setSubmitState('idle')
    setSubmitMessage('')
  }

  const handlePrayerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSubmitState('submitting')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/prayer-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your prayer request right now.')
      }

      setForm(initialForm)
      setSubmitState('success')
      setSubmitMessage(
        result.message || 'Prayer request submitted successfully. We will pray with you shortly.',
      )
    } catch (error) {
      setSubmitState('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your prayer request right now.',
      )
    }
  }

  const handleDonateClick = () => {
    if (siteDonateLink) {
      window.open(siteDonateLink, '_blank', 'noopener,noreferrer')
      return
    }

    setShowDonateMessage(true)
    window.setTimeout(() => setShowDonateMessage(false), 3000)
  }

  return (
    <>
      <div className={cn('space-y-3', className)}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            size="lg"
            onClick={handleDonateClick}
            className="animate-attention-blink rounded-full bg-gold px-6 text-gold-foreground shadow-lg shadow-gold/30 hover:bg-gold/90"
          >
            <HandCoins className="mr-1 h-4 w-4" />
            Donate
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={() => {
              setSubmitState('idle')
              setSubmitMessage('')
              setIsPrayerFormOpen(true)
            }}
            className="animate-attention-blink rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-6 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary-foreground/18 hover:text-primary-foreground [animation-delay:0.2s]"
          >
            <HeartHandshake className="mr-1 h-4 w-4" />
            Prayer Form
          </Button>
        </div>
        {showDonateMessage ? (
          <p className="text-sm text-primary-foreground/80">
            Donation link will be added as soon as you send it.
          </p>
        ) : null}
      </div>

      {mounted && isPrayerFormOpen
        ? createPortal(
            <div className="fixed inset-0 z-[120] overflow-y-auto">
              <button
                type="button"
                className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
                aria-label="Close prayer request form"
                onClick={() => setIsPrayerFormOpen(false)}
              />
              <div className="relative flex min-h-full items-start justify-center p-4 sm:items-center sm:p-6">
                <div className="relative z-[121] my-4 flex max-h-[min(92vh,48rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                  <div className="flex items-start justify-between gap-4 border-b border-primary/10 bg-primary px-5 py-5 text-primary-foreground sm:px-6">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                        Prayer Request
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-bold sm:text-2xl">
                        Share your prayer need
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
                        Fill in the form below and submit your request.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-full border border-primary-foreground/20 p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      onClick={closePrayerForm}
                      aria-label="Close prayer request form"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {submitState === 'success' ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-5 bg-card px-5 py-10 text-center sm:px-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-heading text-2xl font-bold text-foreground">
                          Prayer request submitted successfully
                        </h4>
                        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {submitMessage}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="rounded-full"
                          onClick={() => {
                            setSubmitState('idle')
                            setSubmitMessage('')
                          }}
                        >
                          Submit Another Request
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                          onClick={closePrayerForm}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form
                      className="flex-1 overflow-y-auto bg-card p-5 sm:p-6"
                      onSubmit={handlePrayerSubmit}
                    >
                      <div className="space-y-5">
                        {submitState === 'error' ? (
                          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {submitMessage}
                          </div>
                        ) : null}

                        <div className="grid gap-5 sm:grid-cols-2">
                          <label className="space-y-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <User className="h-4 w-4 text-gold" />
                              Full Name
                            </span>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(event) =>
                                setForm((current) => ({ ...current, name: event.target.value }))
                              }
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                              placeholder="Enter your full name"
                              disabled={submitState === 'submitting'}
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Mail className="h-4 w-4 text-gold" />
                              Email Address
                            </span>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(event) =>
                                setForm((current) => ({ ...current, email: event.target.value }))
                              }
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                              placeholder="Enter your email"
                              disabled={submitState === 'submitting'}
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Phone className="h-4 w-4 text-gold" />
                              Phone Number
                            </span>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(event) =>
                                setForm((current) => ({ ...current, phone: event.target.value }))
                              }
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                              placeholder="Optional"
                              disabled={submitState === 'submitting'}
                            />
                          </label>

                          <label className="space-y-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <MapPin className="h-4 w-4 text-gold" />
                              Location
                            </span>
                            <input
                              type="text"
                              value={form.location}
                              onChange={(event) =>
                                setForm((current) => ({ ...current, location: event.target.value }))
                              }
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                              placeholder="City / Country"
                              disabled={submitState === 'submitting'}
                            />
                          </label>
                        </div>

                        <label className="block space-y-2">
                          <span className="text-sm font-medium text-foreground">Prayer Request</span>
                          <textarea
                            required
                            value={form.request}
                            onChange={(event) =>
                              setForm((current) => ({ ...current, request: event.target.value }))
                            }
                            rows={7}
                            className="w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                            placeholder="Write your prayer request here"
                            disabled={submitState === 'submitting'}
                          />
                        </label>
                      </div>

                      <div className="sticky bottom-0 mt-6 flex flex-col gap-3 border-t border-border bg-card pt-4 sm:flex-row sm:justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="rounded-full"
                          onClick={closePrayerForm}
                          disabled={submitState === 'submitting'}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          size="lg"
                          className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                          disabled={submitState === 'submitting'}
                        >
                          {submitState === 'submitting'
                            ? 'Submitting Prayer Request...'
                            : 'Submit Prayer Request'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
