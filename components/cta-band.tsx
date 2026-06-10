import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export function CtaBand() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            Join the Movement
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground text-balance sm:text-4xl">
            Will you answer the call to reach souls for Christ?
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Whether you give, go, or pray — there is a place for you in the
            harvest. Partner with JP4SM today and help us take the Gospel to the
            ends of the earth.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <Link href="/activities">Explore Our Activities</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
