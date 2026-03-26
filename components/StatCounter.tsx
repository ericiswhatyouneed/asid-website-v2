'use client'
import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: string
  label: string
  redNumber?: boolean
}

export default function StatCounter({
  value,
  label,
  redNumber = true
}: StatCounterProps) {
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const match = value.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/)
          if (!match) { setDisplayed(value); return }
          const prefix = match[1]
          const num = parseFloat(match[2].replace(/,/g, ''))
          const suffix = match[3]

          const duration = 800
          const steps = 40
          const increment = num / steps
          let current = 0
          let step = 0

          const timer = setInterval(() => {
            step++
            current = Math.min(current + increment, num)
            const formatted = Number.isInteger(num)
              ? Math.round(current).toLocaleString()
              : current.toFixed(1)
            setDisplayed(`${prefix}${formatted}${suffix}`)
            if (step >= steps) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        className="stat-number"
        style={{ color: redNumber ? 'var(--color-red)' : 'var(--color-text)' }}
      >
        {displayed}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
