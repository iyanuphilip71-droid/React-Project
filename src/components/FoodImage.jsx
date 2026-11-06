import { useState } from 'react'

// Shows a food photo. If the image is missing or fails to load,
// it falls back to a large emoji tile so the layout never breaks.
export default function FoodImage({ src, alt, emoji, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`food-img-fallback ${className}`} role="img" aria-label={alt}>
        <span>{emoji || '🍽️'}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
