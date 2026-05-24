import logoIcon from '../assets/Logo.svg'
import githubIcon from '../assets/Github.svg'
import linkedinIcon from '../assets/LinkedIn.svg'
import mailIcon from '../assets/Mail.svg'
import locationIcon from '../assets/Location.svg'
import timeIcon from '../assets/Time.svg'
import UseLanguage from "../hooks/useLanguage.jsx";

const Footer = () => {

    const {translate} = UseLanguage()

    return(
        <footer className={"container mx-auto p-4"}>
            <div className={"flex flex-col items-start gap-8 mt-4 mb-16"}>
                <div className={"flex gap-4"}>
                    <img src={logoIcon} alt="Logo icon" className={"h-8 w-8"}/>
                    <h2>Gabriel Mayorga</h2>
                </div>
                <p className={"text-muted-foreground text-md"}>{translate("footer.title")}</p>
                <div className={"flex items-center justify-center gap-4"}>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={githubIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={linkedinIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={mailIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"}>
                <div>
                    <h4 className={"text-lg"}>{translate("footer.navigation")}</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li>{translate("footer.about")}</li>
                        <li>{translate("footer.projects")}</li>
                        <li>{translate("footer.certificates")}</li>
                        <li>{translate("footer.contact")}</li>
                    </ul>
                </div>
                <div>
                    <h4 className={"text-lg"}>{translate("footer.services")}</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li>{translate("footer.web-development")}</li>
                        <li>{translate("footer.app-development")}</li>
                        <li>{translate("footer.desktop-development")}</li>
                        <li>{translate("footer.mentoring")}</li>
                    </ul>
                </div>
                <div>
                    <h4 className={"text-lg"}>Contacto</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li className={"flex items-center gap-2"}>
                            <img src={mailIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>gabrielmayorgate@gmail.com</p>
                        </li>
                        <li className={"flex items-center gap-2"}>
                            <img src={locationIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>Managua, NI</p>
                        </li>
                        <li className={"flex items-center gap-2"}>
                            <img src={timeIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>{translate("footer.time")}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"text-muted-foreground text-sm text-center py-12 border-t"}>
                <p>© 2026 Gabriel Mayorga. {translate("footer.rights")}</p>
                <div className={"flex justify-center gap-4 mt-4"}>
                    <p>{translate("footer.privacy")}</p>
                    <p>{translate("footer.service")}</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer