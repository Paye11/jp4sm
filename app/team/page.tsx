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
    profile: {
      positions: [
        'Founder & General Overseer, Christ Brazen Assembly (CBA) Church',
        'Executive Director, Jesus Passion for Souls Movement (JP4SM)',
      ],
      education: [
        'Bachelor of Theology, B.Th. — Monrovia Bible College, MBC / Carver Christian University-Brainerd Johnson College of Theology, Paynesville, Liberia',
        'Advanced Diploma in Theology — Monrovia Bible Training Center (MBTC)',
      ],
    },
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
    profile: {
      positions: [
        'General Administrator for General Administration at Christ Brazen Assembly Church',
        'Food Technologist & Fisheries Quality Assurance Professional, National Fisheries and Aquaculture Authority of Liberia (NaFAA)',
      ],
      education: [
        'BSc in Agronomy — Nha Trang University, Vietnam',
        'MSc in Food Technology (Focus: Fish Processing) — Nha Trang University, Vietnam',
      ],
      overview: [
        'Bro. Sonkarlay Karnue serves as General Administrator for General Administration at Christ Brazen Assembly Church, a ministry he has been part of since its founding, with over 16 years of dedicated service.',
        'He supports church leadership in administrative affairs, documentation, communication, planning, church records, ministry reporting, and the smooth running of church programs and activities.',
        'He is actively involved in leadership support, evangelism, departmental coordination, and the strengthening of church administration, reflecting commitment, order, accountability, and dedication to the advancement of God’s Kingdom.',
        'Professionally, Bro. Karnue is a Food Technologist and Fisheries Quality Assurance Professional with the National Fisheries and Aquaculture Authority of Liberia (NaFAA), contributing to food safety, research, inspection, and regulatory development in the fisheries sector.',
      ],
    },
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
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    <details className="mt-5 text-left">
                      <summary className="cursor-pointer list-none rounded-full border border-primary/15 bg-secondary px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary/80">
                        Read Profile
                      </summary>
                      <div className="mt-4 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-muted-foreground">
                        {member.profile ? (
                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold uppercase tracking-wider text-gold">
                                Leadership Roles
                              </p>
                              <ul className="mt-2 space-y-2">
                                {member.profile.positions.map((position) => (
                                  <li key={position} className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                    <span>{position}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold uppercase tracking-wider text-gold">
                                Education
                              </p>
                              <ol className="mt-2 space-y-2">
                                {member.profile.education.map((item, index) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="font-semibold text-foreground">
                                      {index + 1}.
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            {member.profile.overview ? (
                              <div>
                                <p className="font-semibold uppercase tracking-wider text-gold">
                                  Profile
                                </p>
                                <div className="mt-2 space-y-3">
                                  {member.profile.overview.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ) : (
                          <p>Full profile details will be added soon.</p>
                        )}
                      </div>
                    </details>
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
