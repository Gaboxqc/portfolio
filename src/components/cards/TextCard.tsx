import { motion } from 'framer-motion'

interface TextCardProps {
  text: string
}

const TextCard = ({ text }: TextCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring' }}
      viewport={{ once: true }}
      className={
        'rounded-2xl border border-primary/30 bg-card p-3 text-center hover:border-primary/80'
      }
    >
      <p>{text}</p>
    </motion.div>
  )
}

export default TextCard
