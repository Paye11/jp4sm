import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JP4SM — Jesus\' Passion for Souls Movement',
  description:
    'Jesus\' Passion for Souls Movement (JP4SM) is a Gospel organization committed to evangelism, discipleship, church planting, and reaching the lost with the love of Christ.',
  generator: 'v0.app',
  icons: {
    icon: '/jp4sm-logo.ico',
    shortcut: '/jp4sm-logo.ico',
    apple: '/jp4sm-logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollProgress />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
