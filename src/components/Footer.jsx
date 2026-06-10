import {LogoIcon, GithubIcon, LinkedInIcon, MailIcon, LocationIcon, TimeIcon} from "../assets/icons/index.js";
import UseLanguage from "../hooks/useLanguage.jsx";
import {Link} from "react-router";

const Footer = () => {

    const {translate} = UseLanguage()

    return(
        <footer className={"container mx-auto p-4"}>
            <div className={"flex flex-col items-start gap-8 mt-4 mb-16"}>
                <div className={"flex gap-4"}>
                    <LogoIcon className={"h-8 w-8"}/>
                    <h2>Gabriel Mayorga</h2>
                </div>
                <p className={"text-muted-foreground text-md"}>{translate("footer.title")}</p>
                <div className={"flex items-center justify-center gap-4"}>
                    <a href={"https://github.com/Gaboxqc"} className={"bg-primary/10 outline-1 p-2 rounded-xl cursor-pointer"}>
                        <GithubIcon className={"h-8 w-8"}/>
                    </a>
                    <a href={"https://linkedin.com/in/gabriel-mayorga-b36611231"} className={"bg-primary/10 outline-1 p-2 rounded-xl cursor-pointer"}>
                        <LinkedInIcon className={"h-8 w-8"}/>
                    </a>
                    <a href={"mailto:gabrielmayorgate@gmail.com"} className={"bg-primary/10 outline-1 p-2 rounded-xl cursor-pointer"}>
                        <MailIcon className={"h-8 w-8"}/>
                    </a>
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"}>
                <div>
                    <h4 className={"text-lg"}>{translate("footer.navigation")}</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li><Link to={"#about"}>{translate("footer.about")}</Link></li>
                        <li><Link to={"#featuredProjects"}>{translate("footer.projects")}</Link></li>
                        <li><Link to={"#featuredCourses"}>{translate("footer.courses")}</Link></li>
                        <li><Link to={"#contact"}>{translate("footer.contact")}</Link></li>

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
                        <li className={"flex items-center gap-2 cursor-default"}>
                            <MailIcon className={"h-8 w-8"}/>
                            <p>gabrielmayorgate@gmail.com</p>
                        </li>
                        <li className={"flex items-center gap-2 cursor-default"}>
                            <LocationIcon className={"h-8 w-8"}/>
                            <p>Managua, NI</p>
                        </li>
                        <li className={"flex items-center gap-2 cursor-default"}>
                            <TimeIcon className={"h-8 w-8"}/>
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