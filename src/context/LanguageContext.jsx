import {createContext, useState} from "react";

import es from "../locales/es.json"
import en from "../locales/en.json"
import de from "../locales/de.json"

export const LanguageContext = createContext();

const dictionaries = {es, en, de}

const LanguageProvider = ({children}) => {
    const [locale, setLocale] = useState("es")

    const translate = (path) => {
        const directory = dictionaries[locale] || dictionaries["es"]

        return path.split(".").reduce((obj, key) => obj?.[key], directory) || path
    }

    return (
        <LanguageContext.Provider value={{locale, setLocale, translate}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider