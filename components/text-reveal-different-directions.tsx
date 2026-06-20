import type { CSSProperties } from 'react'

type TextRevealDifferentDirectionsProps = {
  text: string
  className?: string
}

const extrusionLayers = 7

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
          className="text-reveal-word"
          style={
            {
              '--word-delay': `${0.12 + index * 0.16}s`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          {Array.from({ length: extrusionLayers }).map((_, layerIndex) => (
            <span
              key={`${word}-${index}-layer-${layerIndex + 1}`}
              className="text-extrusion-layer"
              style={
                {
                  '--layer-depth': layerIndex + 1,
                } as CSSProperties
              }
            >
              {word}
            </span>
          ))}
          <span className="text-extrusion-front">{word}</span>
        </span>
      ))}
    </span>
  )
}
