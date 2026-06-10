import {GithubIcon, LinkedInIcon, MailIcon, ChatIcon, LocationIcon} from "../assets/icons/index.js";

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

import GradientButton from "../components/GradientButton.jsx";
import SkillCard from "../components/cards/SkillCard.jsx";
import TextCard from "../components/cards/TextCard.jsx";
import FeaturedProjectCard from "../components/cards/FeaturedProjectCard.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import {Link} from "react-router";
import useFetch from "../hooks/useFetch.jsx";
import CertificationCard from "../components/cards/CertificationCard.jsx";

const Home = () => {

    const {translate} = useLanguage()
    const {data: course, loading: loadCourse} = useFetch("https://api.gabrielmayorga.dev/portfolio/course_by?offset=0&limit=10")

    return (

        <main className={"flex w-full flex-col"}>
            <section className={"h-screen bg-linear-to-br from-primary/20 via-transparent to-accent/10 text-white"}>
                <div
                    className={"container mx-auto flex h-full flex-col items-start justify-center gap-y-10 px-4 pt-4 md:gap-4 md:gap-y-12"}>
                    <div
                        className={"flex items-center gap-2 rounded-3xl bg-muted-foreground/10 p-2 px-3 outline-1"}>
                        <div className={"size-2 animate-pulse rounded-full bg-accent"}></div>
                        <p className={"text-sm"}>{translate("hero.available")}</p>
                    </div>
                    <div>
                        <h1 className={"bg-linear-to-r from-accent to-primary bg-clip-text pb-3 text-7xl text-transparent md:text-8xl"}>Gabriel
                            Mayorga</h1>
                        <h2 className={"bg-linear-to-r from-accent to-primary bg-clip-text text-3xl text-transparent md:mt-1"}>{translate("hero.subtitle")}</h2>
                    </div>
                    <p className={"max-w-150 text-lg text-muted-foreground"}>{translate("hero.description")}.</p>
                    <div className={"flex gap-4"}>
                        <GradientButton label={translate("hero.projects")} nav={"/projects"}/>

                        <Link to={"#contact"} className={"flex h-13 w-auto items-center justify-center rounded-lg px-6 " +
                            "outline-1 hover:bg-primary/10"}>{translate("hero.contact")}
                        </Link>
                    </div>
                    <div className={"flex items-center justify-center gap-5"}>
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

            <section id={"about"} className={"container mx-auto flex h-full flex-col items-center px-5 py-12 xl:h-screen"}>
                <h2 className={"text-center text-5xl leading-16"}>{translate("about.title")}</h2>
                <p className={"mx-4 my-8 text-center leading-7 text-muted-foreground"}>{translate("about.description")}</p>
                <div className={"grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
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
                <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    <TextCard Text={"HTML"}/>
                    <TextCard Text={"CSS"}/>
                    <TextCard Text={"JavaScript"}/>
                    <TextCard Text={"Python"}/>
                    <TextCard Text={"React"}/>
                    <TextCard Text={"FastAPI"}/>
                    <TextCard Text={"PostgreSQL"}/>
                    <TextCard Text={"Figma"}/>
                </div>
            </section>

            <section id={"featuredProjects"} className={"container mx-auto my-30 flex flex-col items-center"}>
                <h2 className={"text-center text-5xl leading-16"}>{translate("projects.title")}</h2>
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
                    <div className={"col-span-7 flex flex-col gap-50 "}>
                        <div className={"sticky top-40 hidden h-150 w-full self-start rounded-xl overflow-hidden lg:block"}>
                            <img src={project1} alt=""/>
                        </div>
                        <div className={"sticky top-40 hidden h-150 w-full self-start rounded-xl overflow-hidden  lg:block"}>
                            <img src={project2} alt=""/>
                        </div>
                        <div className={"sticky top-40 hidden h-150 w-full self-start rounded-xl overflow-hidden  lg:block"}>
                            <img src={project3} alt=""/>
                        </div>
                        <div className={"sticky top-40 hidden h-150 w-full self-start rounded-xl overflow-hidden  lg:block"}>
                            <img src={project4} alt=""/>
                        </div>
                    </div>
                </div>
                <GradientButton label={translate("projects.all-projects")} nav={"/projects"}></GradientButton>
            </section>

            <section id={"featuredCourses"} className={"container mx-auto my-30 flex flex-col items-center"}>
                <h2 className={"text-center text-5xl leading-16 md:mx-4 md:text-left"}>{translate("courses.title")}</h2>
                <div className={"grid w-full grid-cols-1 items-center md:mx-4 md:grid-cols-3"}>
                    <p className={"col-start-2 my-4 w-max justify-self-center leading-7 text-muted-foreground md:text-left"}>{translate("courses.subtitle")}</p>
                    <Link to={"/courses"}
                          className={"col-start-3 hidden text-end font-normal text-primary hover:text-accent md:block"}>{translate("courses.all-courses")}</Link>
                </div>
                <div className={"my-20 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2"}>

                    {loadCourse ? console.log("Cargando") : course.slice(0, 4).map((c) => {
                        return (
                            <CertificationCard title={c.title} year={c.year} academy={c.academy.name}
                                                link={c.url} tags={""}/>
                        )
                    })
                    }
                </div>
                <Link to={"/courses"}
                      className={"cursor-pointer self-center rounded-xl bg-primary/20 p-4 outline-1 hover:bg-primary/30 md:hidden"}>
                    {translate("courses.all-courses")}
                </Link>
            </section>

            <section id={"contact"} className={"container mx-auto flex flex-col items-center py-30"}>
                <h2 className={"text-center text-5xl leading-16"}>{translate("contact.title")}</h2>
                <p className={"mx-4 my-4 text-center leading-7 text-muted-foreground"}>{translate("contact.subtitle")}</p>
                <div className={"my-16 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3"}>
                    <div className={"flex max-h-100 flex-col items-center gap-4 rounded-xl bg-card py-8 outline-1"}>
                        <div
                            className={"flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 outline-1"}>
                            <MailIcon className={"h-8 w-8"}/>
                        </div>
                        <span className={"text-xl"}>Email</span>
                        <a href={"mailto:gabrielmayorgate@gmail.com"}
                           className={"font-normal text-muted-foreground hover:text-accent"}>
                            gabrielmayorgate@gmail.com
                        </a>
                    </div>
                    <div className={"flex max-h-100 flex-col items-center gap-4 rounded-xl bg-card py-8 outline-1"}>
                        <div
                            className={"flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 outline-1"}>
                            <LocationIcon className={"h-8 w-8"}/>
                        </div>
                        <span className={"text-xl"}>Ubicación</span>
                        <p className={"font-normal text-muted-foreground"}>Managua, NI</p>
                    </div>
                    <div className={"flex max-h-100 flex-col items-center gap-4 rounded-xl bg-card py-8 outline-1"}>
                        <div
                            className={"flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 outline-1"}>
                            <ChatIcon className={"h-8 w-8"}/>
                        </div>
                        <span className={"text-xl"}>Chat</span>
                        <a href={"https://t.me/Gaboxqc"}
                           className={"font-normal text-muted-foreground hover:text-accent"}>
                            Telegram/Discord: Gaboxqc
                        </a>
                    </div>
                </div>
                <GradientButton label={translate("contact.conversation")} nav={"https://t.me/Gaboxqc"}/>
            </section>
        </main>
    )
}

export default Home;