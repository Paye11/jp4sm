'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav, activities } from '@/lib/nav'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activitiesOpen, setActivitiesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-card shadow-md ring-2 ring-gold/40">
            <Image
              src="/jp4sm-logo.ico"
              alt="JP4SM logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                'font-heading text-lg font-bold tracking-tight transition-colors',
                scrolled ? 'text-primary' : 'text-white',
              )}
            >
              JP4SM
            </span>
            <span
              className={cn(
                'text-[11px] font-medium uppercase tracking-wider transition-colors',
                scrolled ? 'text-muted-foreground' : 'text-gold',
              )}
            >
              Passion for Souls
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.title === 'Activities') {
              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => setActivitiesOpen(true)}
                  onMouseLeave={() => setActivitiesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      scrolled
                        ? isActive(item.href)
                          ? 'text-primary'
                          : 'text-foreground/80 hover:text-primary'
                        : 'text-gold hover:text-gold/80',
                    )}
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div
                    className={cn(
                      'absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-200',
                      activitiesOpen
                        ? 'visible opacity-100'
                        : 'invisible opacity-0',
                    )}
                  >
                    <div className="grid gap-1 rounded-2xl border border-border bg-card p-2 shadow-xl">
                      {activities.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/activities/${a.slug}`}
                          className="rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                        >
                          {a.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  scrolled
                    ? isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                    : 'text-gold hover:text-gold/80',
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/activities/evangelism">Get Involved</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden',
          mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                isActive(item.href)
                  ? 'bg-secondary text-primary'
                  : 'text-foreground/80 hover:bg-secondary',
              )}
            >
              {item.title}
            </Link>
          ))}
          <p className="mt-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Activities
          </p>
          {activities.map((a) => (
            <Link
              key={a.slug}
              href={`/activities/${a.slug}`}
              className="rounded-xl px-4 py-2.5 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
            >
              {a.title}
            </Link>
          ))}
          <Button
            asChild
            className="mt-3 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/activities/evangelism">Get Involved</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
