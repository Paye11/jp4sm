import Image from 'next/image'
import type { Metadata } from 'next'
import { Target, Eye, Compass, CheckCircle2 } from 'lucide-react'
import discipleshipHeroImage from '../../images/discipleship1.jpg'
import evangelismImage from '../../images2/Evangelism.jpeg'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

const missionStatement =
  'Jesus Passion for Souls Movement (JP4SM) is an interdenominational Evangelistic movement that seeks to fulfil the Great commission through Spirit-led Evangelism, strategic church planting, intentional discipleship, and meeting needs to reach the world.'

const visionStatement =
  'To reach everyone everywhere with the gospel of Jesus Christ, plant churches, and transform lives and society through the power of the gospel.'

export const metadata: Metadata = {
  title: 'About — JP4SM',
  description:
    'Learn about Jesus\' Passion for Souls Movement (JP4SM), our story, mission, vision, and the values that drive our Gospel work.',
}

const values = [
  'Preach, promote, and spread the Gospel of Jesus Christ in accordance with Matthew 28:18-20.',
  'Evangelize to unreached communities through crusade, outreach, media, and discipleship.',
  'Recruit men and women who feel called to pastoral ministry, provide them with practical and theological ministry training, empower them through spiritual development, and send them into the field for local and global mission work.',
  'Engage in active church planting efforts in rural and urban Liberia, and international communities to establish Bible-based churches and disciple new believers.',
  'Engage in advocacy, education, outreach, and rehabilitation initiatives aimed at preventing and reducing drug and narcotic substance abuse within society, especially among youth and vulnerable populations.',
  'Partner with like-minded humanitarian, faith-based, and nonprofit organizations locally and internationally to advance common goals in evangelism, discipleship, community development, social transformation, and relief efforts.',
  'Organize events, seminars, and spiritual training in unreached communities for soul winning and spiritual growth.',
]

const objectives = [
  'Evangelize to the lost souls and integrate new converts into church communities.',
  'Plant churches, train pastors and other church leaders in helping new believers to grow in faith.',
  'Foster collaboration among churches, equip pastors and other church leaders for effective evangelism, and build interdenominational relationships.',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A movement committed to the Great Commission"
        subtitle={missionStatement}
        image={discipleshipHeroImage}
      />

      {/* Identity */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={evangelismImage}
                alt="Community gospel outreach gathering"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Who We Are
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Reaching everyone everywhere with the Gospel of Jesus Christ
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>{missionStatement}</p>
                <p>{visionStatement}</p>
                <p>
                  We exist to preach the Gospel, plant churches, raise leaders,
                  strengthen believers, and serve communities in ways that
                  reflect the transforming power of Jesus Christ.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Mandate */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Mission Statement',
                text: missionStatement,
              },
              {
                icon: Eye,
                title: 'Vision Statement',
                text: visionStatement,
              },
              {
                icon: Compass,
                title: 'Our Mandate',
                text: 'We pursue Spirit-led evangelism, intentional discipleship, church planting, leadership development, and compassionate service so the Gospel brings lasting transformation.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Objectives
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                The objective of this organization is summarized as follows
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {objectives.map((objective, i) => (
              <Reveal key={objective} delay={(i % 3) as 0 | 1 | 2}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                  <CheckCircle2 className="h-7 w-7 text-gold" />
                  <p className="mt-4 leading-relaxed text-foreground">{objective}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Core Values
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                The values and commitments that shape our ministry
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v} delay={(i % 3) as 0 | 1 | 2}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
                    {i + 1}
                  </span>
                  <span className="font-medium leading-relaxed text-foreground">
                    {v}
                  </span>
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
