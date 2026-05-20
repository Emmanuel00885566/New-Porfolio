import { motion, type Variants } from 'framer-motion'
import { useMemo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: Props) {

  const variants: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : 0,
      x:
        direction === 'left'
          ? -30
          : direction === 'right'
          ? 30
          : 0,
    },

    visible: {
      opacity: 1,
      y: 0,
      x: 0,

      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  }), [delay, direction])

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}