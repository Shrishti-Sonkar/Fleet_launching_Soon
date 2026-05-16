import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/**
 * AnimatedSection – wraps children in a fade-up reveal animation
 * triggered when it enters the viewport.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}
