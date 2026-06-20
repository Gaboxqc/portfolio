import { useMotionValue, useTransform, type MotionValue, Easing } from 'framer-motion'
import type { MouseEvent } from 'react'

interface FadeInLeft {
  initial: { opacity: number; x: number }
  whileInView: { opacity: number; x: number }
  viewport: { once: boolean; margin: string }
  transition: { duration: number; ease: Easing }
}

interface UseTiltResult {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  handleMouseMove: (e: MouseEvent<HTMLElement>) => void
  handleMouseLeave: () => void
  fadeInLeft: FadeInLeft
}

function useTilt(): UseTiltResult {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = Math.min(Math.max((e.clientX - rect.left) / rect.width - 0.5, -0.5), 0.5)
    const py = Math.min(Math.max((e.clientY - rect.top) / rect.height - 0.5, -0.5), 0.5)
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const fadeInLeft: FadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: 'easeOut' },
  }

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave, fadeInLeft }
}

export default useTilt
