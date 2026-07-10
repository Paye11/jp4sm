import type { CSSProperties } from 'react'

type TextRevealDifferentDirectionsProps = {
  text: string
  className?: string
}

export function TextRevealDifferentDirections({
  text,
  className = '',
}: TextRevealDifferentDirectionsProps) {
  const words = text.split(' ')

  return (
    <span className={`text-reveal-different-directions ${className}`.trim()}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="text-reveal-word"
          style={
            {
              '--word-delay': `${0.12 + index * 0.16}s`,
            } as CSSProperties
          }
        >
          {word}
        </span>
      ))}
    </span>
  )
}
