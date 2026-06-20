import { motion } from 'framer-motion'
import type { IconComponent } from '../../types'

interface ContactCardProps {
  title: string
  label: string
  Icon: IconComponent
  link: string
}

function ContactCard({ title, label, Icon, link }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, boxShadow: '0 0 0px 0px rgba(0, 212, 255, 0)' }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: '0 0 30px 4px rgba(0, 212, 255, 0.25)' }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={'flex max-h-100 flex-col items-center gap-4 rounded-xl bg-card py-8 outline-1'}
    >
      <div
        className={'flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 outline-1'}
      >
        <Icon className={'text-primary'} />
      </div>
      <span className={'text-xl'}>{title}</span>
      <a href={link} className={'font-normal text-muted-foreground hover:text-accent'}>
        {label}
      </a>
    </motion.div>
  )
}

export default ContactCard
