import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { activities } from '@/lib/nav'

export const metadata: Metadata = {
  title: 'Activities — JP4SM',
  description:
    'Explore the ministries and activities of Jesus\' Passion for Souls Movement: Evangelism, Discipleship, Church Planting, Vacation Bible School (VBS), Catch Them Young, Crusade, Mission, and Children Ministry.',
}

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Activities"
        title="Many ministries, one passion for souls"
        subtitle="From the streets to remote villages, from children to crowds — explore the ways JP4SM reaches the world for Christ."
        image="/images/crusade.png"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) as 0 | 1} as="article">
                <Link
                  href={`/activities/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:flex-row"
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-2/5">
                    <Image
                      src={a.image || '/placeholder.svg'}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
