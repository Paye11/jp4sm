import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { HeroActionButtons } from '@/components/hero-action-buttons'
import { Reveal } from '@/components/reveal'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string | StaticImageData
}

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
        />
      ) : null}
      <div
        className={
          image
            ? 'absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30'
            : 'absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80'
        }
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <Reveal>
              <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal delay={1}>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle ? (
            <Reveal delay={2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={3}>
            <HeroActionButtons className="mt-8" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
