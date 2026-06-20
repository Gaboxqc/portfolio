import { NavLink, useNavigate } from 'react-router'
import { ArrowIcon } from '../../assets/icons/index'

interface PageHeaderProps {
  backLabel: string
  title: string
  description: string
}

function PageHeader({ backLabel, title, description }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col gap-8'>
      <NavLink
        to='#'
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}
        className='group flex w-fit cursor-pointer items-center gap-2 hover:text-accent'
      >
        <ArrowIcon className='h-5 w-5 rotate-180 text-muted-foreground group-hover:text-accent' />
        <p className='text-muted-foreground group-hover:text-accent'>{backLabel}</p>
      </NavLink>
      <h1 className='text-5xl md:text-6xl'>{title}</h1>
      <p className='max-w-4xl text-lg text-muted-foreground'>{description}</p>
    </section>
  )
}

export default PageHeader
