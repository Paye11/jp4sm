'use client'

import { useRef, useState } from 'react'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const MINISTRY_VIDEO_SRC = '/vid/ministry-overview.mp4'

export function MinistryVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return

    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)

    if (!nextMuted) {
      video.play().catch(() => {})
    }
  }

  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Our Story in Motion
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-heading text-3xl font-bold text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              See the movement, the mission, and the lives being reached
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
              Watch how Jesus Passion for Souls Movement carries the Gospel
              through evangelism, discipleship, church planting, and compassion
              across communities.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="group relative mx-auto mt-12 max-w-4xl">
            <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-gradient-to-tr from-gold/60 via-gold/10 to-transparent opacity-70 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-black shadow-2xl">
              <button
                type="button"
                onClick={toggleSound}
                aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
                className="relative block w-full cursor-pointer"
              >
                <video
                  ref={videoRef}
                  className="aspect-video w-full object-cover"
                  src={MINISTRY_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </span>

                {isMuted ? (
                  <span className="absolute bottom-5 left-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
                    <Volume2 className="h-3.5 w-3.5 text-gold" />
                    Tap for sound
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
