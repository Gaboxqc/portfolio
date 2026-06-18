import {useContext} from "react";

import {LanguageContext, type LanguageContextValue} from "../context/LanguageContext"

const useLanguage = (): LanguageContextValue => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe ser usado dentro de un LanguageProvider");
    }
    return context;
}

export default useLanguage
