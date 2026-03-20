import { motion } from 'framer-motion'

const variants = {
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  },
  fadeScale: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.25 } },
  },
  curtain: {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
}

export default function PageTransition({ children, variant = 'slideUp' }) {
  const v = variants[variant] || variants.slideUp
  return (
    <motion.div
      initial={v.initial}
      animate={v.animate}
      exit={v.exit}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}
