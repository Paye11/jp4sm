import Link from 'next/link'
import { Play, ExternalLink } from 'lucide-react'
import { FacebookVideoEmbed } from '@/components/facebook-video-embed'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const PASTOR_PREACHING_VIDEO_URL =
  'https://www.facebook.com/share/v/199RY6C61B/'

export function PastorPreachingSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                Watch the Message
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Hear the Gospel preached with boldness and clarity
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                From open-air crusades to community gatherings, JP4SM carries
                the message of Jesus Christ to everyone who will listen. Watch
                Rev. Sylvester Gleekia minister the Word and invite people to
                respond to the saving power of Christ.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This is the heart of our movement: Spirit-led preaching that
                calls people to repentance, faith, and new life in Jesus.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link
                    href={PASTOR_PREACHING_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch on Facebook
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  <Link href="/activities/crusade">
                    Explore Crusade Ministry
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <FacebookVideoEmbed
              href={PASTOR_PREACHING_VIDEO_URL}
              title="Rev. Sylvester Gleekia preaching the Gospel"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
