import * as Select from '@radix-ui/react-select'
import useLanguage from "../../hooks/useLanguage.jsx";

const languages = [
        {code: "es", name: "Español", flag: "🇪🇸"},
        {code: "en", name: "English", flag: "🇺🇸"},
        {code: "de", name: "Deutsch", flag: "🇩🇪"},
    ]

const LanguageSelector = () => {

    const {locale, setLocale} = useLanguage()

    return (
        <Select.Root value={locale} onValueChange={setLocale}>
            <Select.Trigger
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 focus:outline-0 cursor-pointer">
                <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.6 9h16.8M3.6 15h16.8M12 3a18.9 18.9 0 004.9 9c-.9 3.2-2.4 6.5-4.9 9m0-18a18.9 18.9 0 01-4.9 9c.9 3.2 2.4 6.5 4.9 9"/>
                </svg>
                <Select.Value placeholder={"Español"}/>
                <Select.Icon className="ml-1 text-slate-400">
                    <svg
                        className="h-3 w-3 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="rounded-2xl border border-slate-800 bg-[#0b1324] p-2 text-slate-200 shadow-xl">
                    <Select.Viewport>
                        {languages.map((language) => {
                            return (
                                <Select.Item
                                    key={language.code}
                                    value={language.code}
                                    className="flex cursor-pointer items-center justify-between rounded-xl p-3 text-slate-300 transition-colors outline-none hover:bg-slate-800/40 data-[state=checked]:text-white">
                                    <div className="flex items-center gap-3">
                                        <span className="text-base">{language.flag}</span>
                                        <Select.ItemText>{language.name}</Select.ItemText>
                                    </div>
                                    <Select.ItemIndicator>
                                        <div className="w-2 h-2 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                            );
                        })}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default LanguageSelector