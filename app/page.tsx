import Link from 'next/link'
import Image from 'next/image'
import crusadeGatheringImage from '../images/jamama1.jpg'
import crusadeStageImage from '../images/jamama2.jpg'
import crusadePrayerImage from '../images/guinea2.jpg'
import leadersTogetherImage from '../images2/GrassfieldCommunity/Grassifield Community Crusade2.jpg'
import {
  Heart,
  Flame,
  Users,
  ArrowRight,
  BookOpen,
  Globe,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HeroBackgroundSlideshow } from '@/components/hero-background-slideshow'
import { HeroActionButtons } from '@/components/hero-action-buttons'
import { FounderStorySection } from '@/components/founder-story-section'
import { MinistryVideoSection } from '@/components/ministry-video-section'
import { PastorPreachingSection } from '@/components/pastor-preaching-section'
import { TextRevealDifferentDirections } from '@/components/text-reveal-different-directions'
import { Button } from '@/components/ui/button'
import { CtaBand } from '@/components/cta-band'
import { activities } from '@/lib/nav'

const pillars = [
  {
    icon: Flame,
    title: 'Spirit-Led Evangelism',
    text: 'We preach the Gospel in streets, towns, villages, and unreached communities so lost souls can encounter Jesus Christ.',
  },
  {
    icon: Heart,
    title: 'Intentional Discipleship',
    text: 'We guide new believers into spiritual growth through discipleship, leadership training, and connection to church communities.',
  },
  {
    icon: Globe,
    title: 'Church Planting',
    text: 'We establish Bible-based churches and raise leaders so the Gospel can take root and transform communities.',
  },
]

const stats = [
  { value: '50+', label: 'Communities Reached' },
  { value: '1,200+', label: 'Souls Discipled' },
  { value: '30+', label: 'Churches Planted' },
  { value: '8', label: 'Active Ministries' },
]

const crusadeMoments = [
  {
    title: 'Gathering The Community',
    text: 'Our crusades bring neighborhoods, families, and first-time visitors together in one place to hear the message of Jesus Christ with clarity and hope.',
    image: crusadeGatheringImage,
    alt: 'Crowd gathered during an outdoor crusade service',
  },
  {
    title: 'Preaching With Boldness',
    text: 'Each crusade is centered on Christ-centered preaching, prayer, worship, and a clear call to repentance, faith, and new life in Jesus.',
    image: crusadeStageImage,
    alt: 'Preacher ministering from a crusade stage at night',
  },
  {
    title: 'Responding To The Gospel',
    text: 'We believe crusades should lead to real transformation, with prayer, follow-up, discipleship, and connection to a healthy church family.',
    image: crusadePrayerImage,
    alt: 'People standing in prayer during a crusade gathering',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <HeroBackgroundSlideshow />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/40" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                Jesus&apos; Passion for Souls Movement
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-primary-foreground text-balance sm:text-6xl lg:text-7xl">
                Reaching everyone everywhere with the{' '}
                <TextRevealDifferentDirections
                  text="Gospel of Jesus Christ"
                  className="text-gold"
                />
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty sm:text-xl">
                Jesus Passion for Souls is an interdenominational evangelistic
                movement fulfilling the Great Commission through Spirit-led
                evangelism, strategic church planting, intentional
                discipleship, and meeting needs to reach the world.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-9 space-y-4">
                <HeroActionButtons />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                  >
                    <Link href="/activities">
                      Our Activities
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <Link href="/about">Who We Are</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Mission Statement
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-snug text-foreground text-balance sm:text-4xl">
              Fulfilling the Great Commission through evangelism, church
              planting, discipleship, and practical care
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Jesus Passion for Souls Movement (JP4SM) is an
              interdenominational Evangelistic movement that seeks to fulfil
              the Great commission through Spirit-led Evangelism, strategic
              church planting, intentional discipleship, and meeting needs to
              reach the world.
            </p>
          </Reveal>
        </div>
      </section>

      <MinistryVideoSection />

      <FounderStorySection />

      <PastorPreachingSection />

      {/* Core focus */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Our Focus
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                How we carry out the mission
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <div>
              <Reveal>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  What We Do
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Our Activities
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) as 0 | 1 | 2} as="article">
                <Link
                  href={`/activities/${a.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.image || '/placeholder.svg'}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        </div>
      </section>

      {/* Crusade showcase */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={crusadeGatheringImage}
                    alt="People gathered during an outdoor crusade event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                  Crusade Ministry
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Large gatherings where the Gospel is preached with power and clarity
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Crusades are one of the ways JP4SM reaches entire communities
                  at once. Through worship, prayer, preaching, and public
                  invitation, we create moments where many people can encounter
                  the saving power of Jesus Christ.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  These gatherings are not just events. They are mission
                  opportunities for salvation, healing, restoration, and
                  connection to ongoing discipleship and local church life.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    'Open-air Gospel preaching',
                    'Prayer, worship, and altar response',
                    'Follow-up into discipleship and church community',
                  ].map((item, index) => (
                    <Reveal key={item} delay={(index % 3) as 0 | 1 | 2}>
                      <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                        <p className="text-sm font-medium leading-relaxed text-foreground">
                          {item}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Crusade moments */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Moments From Crusades
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Reaching crowds, strengthening faith, and calling people to Christ
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {crusadeMoments.map((moment, index) => (
              <Reveal key={moment.title} delay={(index % 3) as 0 | 1 | 2} as="article">
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {moment.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {moment.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 3) as 0 | 1 | 2}>
                <div className="text-center">
                  <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Word + image split */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={leadersTogetherImage}
                alt="Leaders gathered together during a ministry event"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Building leaders, planting churches, and transforming society
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Our vision is to reach everyone everywhere with the Gospel,
                plant churches, and see lives and society transformed through
                the power of the Gospel. That is why we train leaders, disciple
                believers, and serve communities with both truth and compassion.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Users className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We also foster collaboration among churches and partners for
                  effective evangelism, discipleship, relief, and community
                  transformation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
