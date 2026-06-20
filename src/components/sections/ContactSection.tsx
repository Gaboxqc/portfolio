import { ChatIcon, LocationIcon, MailIcon } from '../../assets/icons/index'
import useLanguage from '../../hooks/useLanguage'
import GradientButton from '../ui/GradientButton'
import ContactCard from '../cards/ContactCard'

function ContactSection() {
  const { translate } = useLanguage()
  return (
    <section
      id={'contact'}
      className={'bg-linear-to-t from-primary/10 via-transparent to-transparent py-30'}
    >
      <div className={'container mx-auto flex flex-col items-center pt-16 pb-30'}>
        <h2
          className={
            'bg-linear-to-r from-foreground to-accent bg-clip-text text-center text-5xl leading-16 text-transparent'
          }
        >
          {translate('contact.title')}
        </h2>
        <p className={'mx-4 my-4 text-center leading-7 text-muted-foreground'}>
          {translate('contact.subtitle')}
        </p>
        <div className={'my-16 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3'}>
          <ContactCard
            title={'Email'}
            label={'gabrielmayorgate@gmail.com'}
            link={'mailto:gabrielmayorgate@gmail.com'}
            Icon={MailIcon}
          />
          <ContactCard
            title={translate('contact.location')}
            label={'Managua, NI'}
            link={''}
            Icon={LocationIcon}
          />
          <ContactCard
            title={'Chat'}
            label={'Telegram/Discord: Gaboxqc'}
            link={'https://t.me/Gaboxqc'}
            Icon={ChatIcon}
          />
        </div>
        <GradientButton label={translate('contact.conversation')} nav={'https://t.me/Gaboxqc'} />
      </div>
    </section>
  )
}

export default ContactSection
