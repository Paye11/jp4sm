import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from 'lucide-react'
import ctyHeroImage from '../../../images/CTY/CTY1.jpeg'
import ctyImage2 from '../../../images/CTY/cty2.jpeg'
import ctyImage3 from '../../../images/CTY/cty3.jpeg'
import ctyImage4 from '../../../images/CTY/cty4.jpeg'
import ctyImage5 from '../../../images/CTY/cty5.jpeg'
import ctyImage6 from '../../../images/CTY/cty6.jpeg'
import ctyImage7 from '../../../images/CTY/cty7.jpeg'
import ctyImage8 from '../../../images/CTY/cty8.jpeg'
import ctyImage9 from '../../../images/CTY/cty9.jpeg'
import ctyImage10 from '../../../images/CTY/cty10.jpeg'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { activities, getActivity } from '@/lib/nav'

const ctyGallery = [
  ctyHeroImage,
  ctyImage2,
  ctyImage3,
  ctyImage4,
  ctyImage5,
  ctyImage6,
  ctyImage7,
  ctyImage8,
  ctyImage9,
  ctyImage10,
]

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivity(slug)
  if (!activity) return { title: 'Activity — JP4SM' }
  return {
    title: `${activity.title} — JP4SM`,
    description: activity.short,
  }
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const activity = getActivity(slug)
  if (!activity) notFound()

  const others = activities.filter((a) => a.slug !== slug).slice(0, 3)
  const isCatchThemYoung = slug === 'catch-them-young'

  return (
    <>
      <PageHero
        eyebrow="Activity"
        title={activity.title}
        subtitle={activity.tagline}
        image={activity.image}
      />

      {/* Intro */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={activity.image || '/placeholder.svg'}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                About this ministry
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                {activity.tagline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {activity.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scripture */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-gold" />
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 font-heading text-2xl font-medium leading-relaxed text-primary-foreground text-balance sm:text-3xl">
              &ldquo;{activity.scripture}&rdquo;
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gold">
              {activity.scriptureRef}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                How We Serve
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                What this looks like in action
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {activity.highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CheckCircle2 className="h-8 w-8 text-gold" />
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {h.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isCatchThemYoung ? (
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  CTY Moments
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Catch Them Young in action
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  These moments reflect how JP4SM reaches children and young people
                  with Christ-centered teaching, joyful fellowship, mentorship,
                  and life-shaping encouragement.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ctyGallery.map((image, index) => (
                <Reveal key={`cty-gallery-${index}`} delay={(index % 3) as 0 | 1 | 2} as="article">
                  <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`Catch Them Young ministry moment ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Other activities */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Explore other activities
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <Button
                asChild
                variant="ghost"
                className="rounded-full text-primary hover:bg-secondary"
              >
                <Link href="/activities">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) as 0 | 1 | 2} as="article">
                <Link
                  href={`/activities/${a.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image || '/placeholder.svg'}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.short}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-transparent"
            >
              <Link href="/activities">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to all activities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
