import Image from 'next/image'
import type { Metadata } from 'next'
import founderImage from '../../images/founder1.jpg'
import kamaraImage from '../../images/kamara.jpg'
import karnueImage from '../../images/karnue.jpg'
import glekeaImage from '../../images/glekea.jpg'
import cheaImage from '../../images/chea.jpg'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Our Team — JP4SM',
  description:
    'Meet the dedicated leaders and servants behind Jesus\' Passion for Souls Movement (JP4SM).',
}

const team = [
  {
    name: 'Rev. Sylvester Gleekia',
    role: 'Executive Director - Founder',
    image: founderImage,
    bio: 'Carries the founding vision of JP4SM with a lifelong passion for the lost.',
  },
  {
    name: 'Pastor Patick Kamara',
    role: 'Director of Evangelism & Missions',
    image: kamaraImage,
    bio: 'Leads gospel outreach and mission efforts with a burden to reach souls and strengthen the harvest field.',
  },
  {
    name: 'Mr. Sonkarlay Karnue',
    role: 'Finance & Administration Officer',
    image: karnueImage,
    bio: 'Supports the ministry through faithful financial stewardship and sound administrative coordination.',
  },
  {
    name: 'Pastor Faith T. Gleekia',
    role: 'Strategic Planning & Development Officer',
    image: glekeaImage,
    bio: 'Helps guide ministry growth through planning, coordination, and development strategies that support the mission.',
  },
  {
    name: 'Mr. Ellison Chea',
    role: 'Technical Services Officer',
    image: cheaImage,
    bio: 'Provides technical support and service coordination that helps ministry activities run effectively and smoothly.',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The servants behind the movement"
        subtitle="A devoted family of leaders laboring together for the harvest, each bringing their gifts to serve the call of Christ."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Meet the Leadership
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Called, committed, and Christ-centered
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) as 0 | 1 | 2} as="article">
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
