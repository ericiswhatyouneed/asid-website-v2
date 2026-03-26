'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = ''
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  )
}
