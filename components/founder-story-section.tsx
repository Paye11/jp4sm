'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

import founderImage from '../images/founder1.jpg'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const storyParagraphs = [
  'I grew up in a small town called Nyor Butuo, located in Nimba County, Liberia. Life in our town was simple. I grew up speaking only Gio (also known as Dan), our native tongue. I was not a Christian; I had no thought of becoming a preacher. No one laid hands on me, no man mentored me into ministry. My calling into ministry did not come through any man’s influence or training. It came directly through a vision from God.',
  'On Wednesday, August 1, 2001, my life changed forever. That day I was completely normal, healthy, strong, and speaking my native language fluently as I always did. I had stayed out late playing with friends and went to sleep at my friend Enoch\'s house late at night. But in the quiet of my sleep, something extraordinary happened: I had a vision.',
  'In my vision, I found myself standing in the midst of a great multitude of people, all surrounding me, giving me their full attention. Suddenly, a loud voice from the clouds, like thunder and lightning combined, declared, "This world is coming to an end! This world will be destroyed by the power of God!" At that moment, fear gripped the crowd, and they scattered into the bushes, looking for a place to hide.',
  'Then I felt the hand of an unknown person on my head, turning my face forcefully to the right toward the sky. When I looked up, the clouds parted and came down close to my face. Through the opening, I saw a beautiful city made entirely of gold.',
  'My eyes were drawn to its beauty and my attention was taken to one place after another. On the rooftops of the houses were what looked like crowns of kings or golden lampstands. The walls of the houses were smooth, like water flowing down a mirror, yet made of gold. The streets stretched out perfectly flat, with no hills or bumps, shining like light reflecting on asphalt or waves of the ocean, but all of gold. Every house was of one style, and the entire city was silent, glittering with purity and brilliance, yet seemingly uninhabited.',
  'As I gazed in awe, the voice came again, louder and more terrifying than before: "This place is where Christians who believe in Jesus will rest their souls." Then the city vanished.',
  'I immediately thought of my friend Austin Layweahyee and went to tell him what I had seen. When I reached his house, he was lying on a traditional country bed made of dirt. He sat up when he saw me, and I sat beside him. But instead of telling him about the city, I began to speak words I had never planned. I asked him, "Do you know why you are suffering from sickness and poverty?" He said, "No." I replied, "It is because you move from one church to another." He immediately took a pen and notebook and began writing everything I was saying. I left him writing and stepped out of the house, then I woke up physically from my vision.',
  'I lay still in bed, reflecting on the beauty of the city and the voice declaring, "This place is where Christians who believe in Jesus will rest their souls." A deep sorrow fell over me. I asked myself, "Am I a Christian? Will I inherit this city?" Tears began to flow.',
  'Hearing my crying, the older brother of my friend Enoch woke him up, saying, "Enoch, your friend Sylvester is crying." Enoch woke up and hurried to me, asking why I was crying so late at night. I did not answer right away. Finally, I told him to bring the lamp so I could see my watch and know the time the Lord had spoken to me. As he went for the light, I followed him.',
  'All our conversations were in Gio, my dialect. As soon as we entered the living room, I began crying loudly, alarming everyone in the house. They all rushed in, asking what was wrong. Suddenly, my mouth shut tight, my tongue stuck, and I became speechless. I could hear them but could not respond. My body started trembling violently, and fear filled the house. Some shouted, "He is going crazy!" Others said, "This might be high malaria or an evil spirit!"',
  'I heard everything but could not speak. Then a cold breeze, like air from an open freezer, entered my heart, filling me with indescribable peace and comfort. As the breeze faded, my mouth opened and I began shouting in English, a language I had never spoken before: "Jesus! Jesus!"',
  'I told everyone, "Leave me alone! God has given me His word! He has said I should leave this house and go outside. There He will give me His message!" I broke free from their hands, ran outside, and as soon as I opened my mouth, I began to preach: "Repent and turn away from your sins! The coming of the Lord Jesus is near! God will destroy this whole world with fire!"',
  'From that moment, God changed my dialect into English. I can still understand Gio but can no longer speak it. I continued preaching throughout my town. Some ran to my mother, saying, "Your son Sylvester is going mad! Let\'s tie him up!" But educated elders who had listened to my preaching said, "This boy is not mad, nor under demonic influence. He has had an encounter with the living God. Let\'s observe him."',
  'From that night until 6:00 a.m., I preached all over my hometown. Then I travelled to two neighbouring towns, Nyor Display and Nyor Blomtuo, preaching until late evening before returning home.',
  'On August 3, I left my home with only one shirt, one trouser, and an umbrella. From that day on, I travelled from town to town, city to city, preaching the Gospel, planting churches, visiting villages and farms, and winning souls for Jesus.',
  'And to this date, I continue to preach the Gospel of Jesus Christ, His death, resurrection, and return.',
]

export function FounderStorySection() {
  const [isPinnedOpen, setIsPinnedOpen] = useState(false)
  const [isHoverPreviewOpen, setIsHoverPreviewOpen] = useState(false)

  const expanded = isPinnedOpen || isHoverPreviewOpen

  const visibleParagraphs = useMemo(
    () => (expanded ? storyParagraphs : storyParagraphs.slice(0, 3)),
    [expanded],
  )

  return (
    <section className="bg-secondary/20 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1.2fr] lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div
            onMouseLeave={() => {
              if (!isPinnedOpen) setIsHoverPreviewOpen(false)
            }}
            onClick={() => {
              if (expanded && !isPinnedOpen) setIsPinnedOpen(true)
            }}
          >
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Foundnig Story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              A divine encounter that launched a lifelong Gospel mission
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {visibleParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              aria-expanded={expanded}
              className="mt-8 rounded-full border-gold/40 bg-background text-primary hover:bg-gold/10"
              onMouseEnter={() => {
                if (!isPinnedOpen) setIsHoverPreviewOpen(true)
              }}
              onClick={(event) => {
                event.stopPropagation()

                if (isPinnedOpen) {
                  setIsPinnedOpen(false)
                  setIsHoverPreviewOpen(false)
                  return
                }

                setIsPinnedOpen(true)
              }}
            >
              {isPinnedOpen ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={1} className="order-1 lg:order-2">
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={founderImage}
                  alt="Founder portrait"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
