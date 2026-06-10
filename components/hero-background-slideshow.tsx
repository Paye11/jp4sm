'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import gallery4 from '../heroimages background/gallery4.jpg'
import hero from '../heroimages background/hero.jpg'
import jamama1 from '../heroimages background/jamama1.jpg'
import jamama4 from '../heroimages background/jamama4.jpg'
import jamama5 from '../heroimages background/jamama5.jpg'

const heroSlides = [
  { src: hero, alt: 'Worship service gathering at night' },
  { src: gallery4, alt: 'Open-air gospel meeting with attendees seated outdoors' },
  { src: jamama1, alt: 'Crowd responding during a night outreach service' },
  { src: jamama4, alt: 'Congregation lifting hands in worship at night' },
  { src: jamama5, alt: 'People gathered outdoors for a gospel event' },
]

export function HeroBackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="absolute inset-0">
      {heroSlides.map((slide, index) => {
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
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}
