import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

type FacebookVideoEmbedProps = {
  href: string
  coverSrc: string
  title: string
}

export function FacebookVideoEmbed({
  href,
  coverSrc,
  title,
}: FacebookVideoEmbedProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
      aria-label={`${title} — watch on Facebook`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <Image
          src={coverSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-9 w-9 fill-current pl-1" />
          </span>
        </div>
        <p className="absolute inset-x-4 bottom-4 text-center text-sm font-medium text-primary-foreground drop-shadow-md">
          Tap to watch on Facebook
        </p>
      </div>
    </Link>
  )
}
