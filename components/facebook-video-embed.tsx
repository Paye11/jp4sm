type FacebookVideoEmbedProps = {
  href: string
  title: string
}

export function FacebookVideoEmbed({ href, title }: FacebookVideoEmbedProps) {
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(href)}&show_text=false&width=1280`

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}
