import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { mainNav, activities } from '@/lib/nav'
import { siteContactEmail } from '@/lib/site-contact'
import { WhatsAppLink } from '@/components/whatsapp-link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-card ring-2 ring-gold/50">
              <Image
                src="/jp4sm-logo.ico"
                alt="JP4SM logo"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-heading text-lg font-bold">JP4SM</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Jesus&apos; Passion for Souls Movement — a Gospel organization
            reaching the lost with the love and truth of Jesus Christ.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            Activities
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {activities.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/activities/${a.slug}`}
                  className="text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            Connect
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>UPC Community, Kabbah Barnesville, Liberia</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={`mailto:${siteContactEmail}`}
                className="transition-colors hover:text-gold"
              >
                {siteContactEmail}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
              <WhatsAppLink
                phoneNumber="+2321778160653"
                className="transition-colors hover:text-gold"
              >
                (+2321) 778160653
              </WhatsAppLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Jesus&apos; Passion for Souls
            Movement. All rights reserved.
          </p>
          <p className="font-heading italic text-gold/80">
            &ldquo;The harvest is plentiful&rdquo; — Matthew 9:37
          </p>
        </div>
      </div>
    </footer>
  )
}
