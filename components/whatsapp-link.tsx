'use client'

import type { MouseEvent, ReactNode } from 'react'

type WhatsAppLinkProps = {
  phoneNumber: string
  className?: string
  children: ReactNode
}

export function WhatsAppLink({
  phoneNumber,
  className,
  children,
}: WhatsAppLinkProps) {
  const digitsOnly = phoneNumber.replace(/\D/g, '')

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const userAgent = navigator.userAgent || navigator.vendor
    const isMobile = /android|iphone|ipad|ipod|mobile/i.test(userAgent)

    if (!isMobile) {
      window.open(`https://wa.me/${digitsOnly}`, '_blank', 'noopener,noreferrer')
      return
    }

    const fallbackTimer = window.setTimeout(() => {
      window.location.href = `tel:+${digitsOnly}`
    }, 900)

    const clearFallback = () => {
      window.clearTimeout(fallbackTimer)
      window.removeEventListener('pagehide', clearFallback)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearFallback()
      }
    }

    window.addEventListener('pagehide', clearFallback, { once: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.location.href = `whatsapp://send?phone=${digitsOnly}`
  }

  return (
    <a
      href={`https://wa.me/${digitsOnly}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
