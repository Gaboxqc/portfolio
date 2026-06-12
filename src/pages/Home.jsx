import {Link} from "react-router";
import {motion} from "framer-motion";

import {GithubIcon, LinkedInIcon, MailIcon, ChatIcon, LocationIcon, ArrowIcon} from "../assets/icons/index.js";

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

import GradientButton from "../components/ui/GradientButton.jsx";
import SkillCard from "../components/cards/SkillCard.jsx";
import TextCard from "../components/cards/TextCard.jsx";
import FeaturedProjectCard from "../components/cards/FeaturedProjectCard.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import ContactCard from "../components/cards/ContactCard.jsx";
import TypewriterLoop from "../components/ui/TypewriterLoop.jsx";
import CertificationSection from "../components/sections/CertificationSection.jsx";

const Home = () => {
    const {translate} = useLanguage()

    return (
        <div className={"flex w-full flex-col gap-30"}>
            <section className={"h-screen bg-linear-to-br from-primary/20 via-transparent to-accent/20 text-white"}>
                <div
                    className={"container mx-auto flex h-full flex-col items-start justify-center gap-y-10 px-4 pt-4 md:gap-4 md:gap-y-12"}>
                    <div
                        className={"mt-12 flex items-center gap-2 rounded-3xl bg-muted-foreground/10 p-2 px-3 outline-1"}>
                        <div className={"size-2 animate-pulse rounded-full bg-accent"}></div>
                        <p className={"text-sm"}>{translate("hero.available")}</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <h1 className={"pb-3 text-7xl text-foreground md:text-8xl"}>Gabriel Mayorga</h1>
                        <TypewriterLoop/>
                    </div>
                    <p className={"max-w-150 text-lg text-muted-foreground"}>{translate("hero.description")}.</p>
                    <div className={"flex gap-4"}>
                        <GradientButton label={translate("hero.projects")} nav={"/projects"}/>

                        <Link to={"#contact"}
                              className={"flex h-13 w-auto items-center justify-center rounded-lg px-4 " +
                                  "border border-accent/20 hover:bg-primary/10"}>{translate("hero.contact")}
                        </Link>
                    </div>
                    <div className={"flex items-center justify-center gap-5 text-muted-foreground"}>
                        <a href={"https://github.com/Gaboxqc"}>
                            <GithubIcon className={"h-8 w-8"}/>
                        </a>
                        <a href={"https://linkedin.com/in/gabriel-mayorga-b36611231"}>
                            <LinkedInIcon className={"h-8 w-8"}/>
                        </a>
                        <a href={"mailto:gabrielmayorgate@gmail.com"}>
                            <MailIcon className={"h-8 w-8"}/>
                        </a>
                    </div>
                </div>
            </section>

            <section id={"about"}
                     className={"container mx-auto flex h-full flex-col items-center px-5 py-16 xl:h-screen"}>
                <h2 className={"text-center text-5xl leading-16 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"}>{translate("about.title")}</h2>
                <p className={"mx-4 my-8 text-center leading-7 text-muted-foreground"}>{translate("about.description")}</p>
                <div

                    className={"grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                    <SkillCard Icon={"Code"} Title={translate("about.clean-code")}
                               Description={translate("about.clean-code-description")}/>
                    <SkillCard Icon={"Art"} Title={translate("about.ai-interfaces")}
                               Description={translate("about.ai-interfaces-description")}/>
                    <SkillCard Icon={"Rocket"} Title={translate("about.high-performance")}
                               Description={translate("about.high-performance-description")}/>
                    <SkillCard Icon={"Lightning"} Title={translate("about.fast-delivery")}
                               Description={translate("about.fast-delivery-description")}/>
                </div>
                <h2 className={"my-10 text-2xl"}>Tecnologías y herramientas</h2>
                <div className="grid w-full grid-cols-2 gap-3 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
                    <TextCard text={"HTML"}/>
                    <TextCard text={"CSS"}/>
                    <TextCard text={"JavaScript"}/>
                    <TextCard text={"Python"}/>
                    <TextCard text={"React"}/>
                    <TextCard text={"FastAPI"}/>
                    <TextCard text={"PostgreSQL"}/>
                    <TextCard text={"Figma"}/>
                </div>
            </section>

            <motion.section
                id={"featuredProjects"} className={"container mx-auto flex flex-col items-center py-16"}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring"}}
                viewport={{once: true}}>
                <h2 className={"text-center text-5xl leading-16 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"}>{translate("projects.title")}</h2>
                <p className={"mx-4 my-4 text-center leading-7 text-muted-foreground"}>{translate("projects.subtitle")}</p>
                <div className="mt-20 mb-30 grid lg:grid-cols-12">
                    <div className={"col-span-5 flex flex-col gap-30"}>
                        <FeaturedProjectCard position={1} year={2026} title={"Personal finance app"}
                                             description={"This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. I build it as a full-stack app!"}
                                             technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                        <FeaturedProjectCard position={2} year={2026} title={"Link-sharing app"}
                                             description={"In this project, I build a fully-functional link-sharing app for developers! I practice working with image uploads, repeater fields, drag-and-drop, and more!"}
                                             technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                        <FeaturedProjectCard position={3} year={2026} title={"Kanban task management web app"}
                                             description={"In this project, I build a fully-functional task management app with a light/dark mode toggle."}
                                             technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                        <FeaturedProjectCard position={4} year={2026} title={"Product feedback app"}
                                             description={"I have been working with JSON, managing state, and building like a real-world app. I create it as a full-stack project!"}
                                             technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                    </div>
                    <div className={"col-span-7 flex flex-col gap-50"}>
                        <div
                            className={"sticky top-40 hidden h-150 w-full self-start overflow-hidden rounded-xl lg:block"}>
                            <img src={project1} loading="lazy" alt=""/>
                        </div>
                        <div
                            className={"sticky top-40 hidden h-150 w-full self-start overflow-hidden rounded-xl lg:block"}>
                            <img src={project2} loading="lazy" alt=""/>
                        </div>
                        <div
                            className={"sticky top-40 hidden h-150 w-full self-start overflow-hidden rounded-xl lg:block"}>
                            <img src={project3} loading="lazy" alt=""/>
                        </div>
                        <div
                            className={"sticky top-40 hidden h-150 w-full self-start overflow-hidden rounded-xl lg:block"}>
                            <img src={project4} loading="lazy" alt=""/>
                        </div>
                    </div>
                </div>
                <GradientButton label={translate("projects.all-projects")} nav={"/projects"}></GradientButton>
            </motion.section>

            <section id={"certifications"} className={"bg-linear-to-b from-primary/5 via-transparent to-accent/5"}>
                <div className="container mx-auto flex flex-col items-center py-16">
                    <h2 className={"text-center text-5xl leading-16 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent md:mx-4 md:text-left "}>{translate("certifications.title")}</h2>
                    <div className="relative flex w-full items-center justify-center md:mx-4">
                        <p className="my-4 text-center leading-7 text-muted-foreground">
                            {translate("certifications.subtitle")}
                        </p>
                        <Link
                            to="/courses"
                            className="absolute right-0 hidden items-center gap-1 font-normal text-primary hover:text-accent md:flex">
                            {translate("certifications.all-courses")}
                            <ArrowIcon/>
                        </Link>
                    </div>
                    <div className={"my-20 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2"}>
                        <CertificationSection limit={4} animation={"tilt"}/>
                    </div>
                    <Link to={"/courses"}
                          className={"cursor-pointer self-center rounded-xl bg-primary/20 p-4 outline-1 hover:bg-primary/30 md:hidden"}>
                        {translate("certifications.all-courses")}
                        <ArrowIcon/>
                    </Link>
                </div>
            </section>

            <section id={"contact"} className={" bg-linear-to-t from-primary/10 via-transparent to-transparent"}>
                <div className={"container mx-auto flex flex-col items-center pt-16 pb-30"}>
                    <h2 className={"bg-linear-to-r from-foreground to-accent bg-clip-text text-center text-5xl leading-16 text-transparent"}>{translate("contact.title")}</h2>
                    <p className={"mx-4 my-4 text-center leading-7 text-muted-foreground"}>{translate("contact.subtitle")}</p>
                    <div className={"my-16 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3"}>
                        <ContactCard title={"Email"} label={"gabrielmayorgate@gmail.com"}
                                     link={"mailto:gabrielmayorgate@gmail.com"} Icon={MailIcon}/>
                        <ContactCard title={"Ubicación"} label={"Managua, NI"} link={""} Icon={LocationIcon}/>
                        <ContactCard title={"Chat"} label={"Telegram/Discord: Gaboxqc"} link={"https://t.me/Gaboxqc"}
                                     Icon={ChatIcon}/>
                    </div>
                    <GradientButton label={translate("contact.conversation")} nav={"https://t.me/Gaboxqc"}/>
                </div>
            </section>
        </div>
    )
}

export default Home;