import { createContext, useState, type ReactNode } from 'react'

import es from '../locales/es.json'
import en from '../locales/en.json'
import de from '../locales/de.json'

export type Locale = 'es' | 'en' | 'de'

type Dictionary = Record<string, unknown>

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  translate: (path: string) => string
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const dictionaries: Record<Locale, Dictionary> = { es, en, de }

interface LanguageProviderProps {
  children: ReactNode
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState<Locale>('es')

  const translate = (path: string): string => {
    const directory = dictionaries[locale] || dictionaries['es']

    const value = path.split('.').reduce<unknown>((obj, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        return (obj as Record<string, unknown>)[key]
      }
      return undefined
    }, directory)

    return typeof value === 'string' ? value : path
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
