type TextRevealDifferentDirectionsProps = {
  text: string
  className?: string
}

const directions = ['from-left', 'from-top', 'from-right', 'from-bottom'] as const

export function TextRevealDifferentDirections({
  text,
  className = '',
}: TextRevealDifferentDirectionsProps) {
  const words = text.split(' ')

  return (
    <span
      className={`text-reveal-different-directions ${className}`.trim()}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`text-reveal-word ${directions[index % directions.length]}`}
          style={{ animationDelay: `${0.18 + index * 0.14}s` }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  )
}
