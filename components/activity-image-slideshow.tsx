'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type SlideItem = {
  src: StaticImageData
  alt: string
}

type ActivityImageSlideshowProps = {
  slides: SlideItem[]
}

export function ActivityImageSlideshow({
  slides,
}: ActivityImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-primary/5 shadow-2xl">
      <div className="relative aspect-[5/4] min-h-[320px]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={slide.alt}
              className={`absolute inset-0 transition-all duration-[1600ms] ease-in-out ${
                isActive ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />
            </div>
          )
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-5 text-primary-foreground sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Crusade Highlights
          </p>
          <p className="mt-2 text-sm text-primary-foreground/80 sm:text-base">
            Worship, preaching, response, and moments of transformation.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.alt}-dot`}
              type="button"
              aria-label={`View crusade slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-gold'
                  : 'w-2.5 bg-primary-foreground/45 hover:bg-primary-foreground/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
