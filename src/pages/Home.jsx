import GradientButton from "../components/gradientButton/GradientButton.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

import githubIcon from '../assets/Github.svg'
import linkedInIcon from '../assets/LinkedIn.svg'
import mailIcon from '../assets/Mail.svg'
import chatIcon from '../assets/Chat.svg'
import locationIcon from '../assets/Location.svg'

import SkillCard from "../components/skillCard/SkillCard.jsx";
import TextCard from "../components/textCard/TextCard.jsx";
import FeaturedProject from "../components/featuredProject/FeaturedProject.jsx";
import CertificationCardS from "../components/certificationCardS/CertificationCardS.jsx";

const Home = () => {
    return (
        <>
            <header className={"fixed z-1"}>
                <Navbar/>
            </header>
            <main className={"w-full flex flex-col"}>
                <section className={"h-screen bg-linear-to-br from-primary/20 via-transparent to-accent/10 text-white"}>
                    <div className={"container h-full flex justify-center gap-y-10 flex-col items-start mx-auto pt-4 px-4 md:gap-y-12 md:gap-4 "}>
                        <div
                            className={"flex bg-muted-foreground/10 gap-2 px-3 items-center outline-1 p-2 rounded-3xl"}>
                            <div className={"bg-accent size-2 rounded-full animate-pulse"}></div>
                            <p className={"text-sm"}>Disponible para nuevos proyectos</p>
                        </div>
                        <div>
                            <h1 className={"text-7xl bg-linear-to-r from-accent to-primary bg-clip-text text-transparent pb-3 md:text-8xl"}>Gabriel
                                Mayorga</h1>
                            <h2 className={"md:mt-1 text-3xl bg-linear-to-r from-accent to-primary bg-clip-text text-transparent"}>Software
                                Developer</h2>
                        </div>
                        <p className={"text-lg text-muted-foreground max-w-150"}>Creando experiencias digitales
                            excepcionales con código limpio y diseño
                            innovador. Especializado en aplicaciones web modernas e interfaces interactivas.</p>
                        <div className={"flex gap-4"}>
                            <GradientButton label={"Ver proyectos ->"}/>
                            <button className={"h-13 w-auto px-6 outline-1 rounded-lg hover:bg-primary/10"}>Contáctame
                            </button>
                        </div>
                        <div className={"flex items-center justify-center gap-5"}>
                            <button className={""}>
                                <img src={githubIcon} alt="Github" className={"h-8 w-8"}/>
                            </button>
                            <button className={""}>
                                <img src={linkedInIcon} alt="Github" className={"h-8 w-8"}/>
                            </button>
                            <button className={""}>
                                <img src={mailIcon} alt="Github" className={"h-8 w-8"}/>
                            </button>
                        </div>
                    </div>
                </section>

                <section className={"h-full w-screen flex flex-col items-center px-5 py-12 overflow-hidden xl:h-screen container mx-auto"}>
                    <h2 className={"text-5xl text-center leading-16"}>Construyendo productos digitales con
                        precisión</h2>
                    <p className={"text-center mx-4 leading-7 text-muted-foreground my-8"}>Soy un desarrollador y
                        diseñador con más de 8 años de experiencia creando experiencias web elegantes y de alto
                        rendimiento. He trabajado con startups y empresas consolidadas para dar vida a sus visiones
                        digitales.</p>
                    <div className={"grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                        <SkillCard Icon={"Code"} Title={"Código limpio"}
                                   Description={"Desarrollo con las mejores prácticas y arquitectura escalable"}/>
                        <SkillCard Icon={"Art"} Title={"Diseño Innovador"}
                                   Description={"Interfaces modernas y experiencias de usuario excepcionales"}/>
                        <SkillCard Icon={"Rocket"} Title={"Alto Rendimiento"}
                                   Description={"Optimización extrema para velocidad y eficiencia"}/>
                        <SkillCard Icon={"Lightning"} Title={"Entrega Rápida"}
                                   Description={"Metodologías ágiles para resultados rápidos y efectivos"}/>
                    </div>
                    <h2 className={"text-2xl my-10"}>Tecnologías y herramientas</h2>
                    <div className="grid grid-cols-2 gap-3 w-full md:grid-cols-3 lg:grid-cols-4">
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                        <TextCard Text={"React y Next.js"}/>
                    </div>
                </section>

                <section className={"container flex flex-col items-center mx-auto my-30"}>
                    <h2 className={"text-5xl text-center leading-16"}>Proyectos Principales</h2>
                    <p className={"text-center mx-4 leading-7 text-muted-foreground my-4"}>Una selección de proyectos que han impactado a miles de usuarios</p>
                    <div className="grid lg:grid-cols-12 mt-20 mb-30">
                        <div className={"flex flex-col col-span-5 gap-30"}>
                            <FeaturedProject position={1} year={2026} title={"Quantum Commerce Platform"} description={"Plataforma de comercio electrónico de próxima generación con recomendaciones impulsadas por IA, gestión de inventario en tiempo real y análisis predictivo de ventas."} technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                            <FeaturedProject position={1} year={2026} title={"Quantum Commerce Platform"} description={"Plataforma de comercio electrónico de próxima generación con recomendaciones impulsadas por IA, gestión de inventario en tiempo real y análisis predictivo de ventas."} technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                            <FeaturedProject position={1} year={2026} title={"Quantum Commerce Platform"} description={"Plataforma de comercio electrónico de próxima generación con recomendaciones impulsadas por IA, gestión de inventario en tiempo real y análisis predictivo de ventas."} technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                            <FeaturedProject position={1} year={2026} title={"Quantum Commerce Platform"} description={"Plataforma de comercio electrónico de próxima generación con recomendaciones impulsadas por IA, gestión de inventario en tiempo real y análisis predictivo de ventas."} technologies={["React", "Node.js", "PostgresSQL", "Redis"]}/>
                        </div>
                        <div className={"col-span-7 flex flex-col gap-50"}>
                            <div className={"hidden lg:block w-full h-150 bg-primary/20 rounded-xl sticky top-40 self-start"}></div>
                            <div className={"hidden lg:block w-full h-150 bg-red-500/20 rounded-xl sticky top-40 self-start"}></div>
                            <div className={"hidden lg:block w-full h-150 bg-green-500/20 rounded-xl sticky top-40 self-start"}></div>
                            <div className={"hidden lg:block w-full h-150 bg-orange-500/20 rounded-xl sticky top-40 self-start"}></div>
                        </div>
                    </div>
                    <GradientButton label={"Ver todos los proyectos"}></GradientButton>
                </section>

                <section className={"container mx-auto flex flex-col my-30"}>
                    <h2 className={"text-5xl text-center leading-16 md:text-left md:mx-4"}>Certificaciones</h2>
                    <div className={"flex justify-center text-center md:mx-4 md:justify-between"}>
                        <p className={"leading-7 text-muted-foreground my-4 md:text-left"}>Certificaciones profesionales que respaldan mi experiencia técnica</p>
                        <button className={"text-primary font-normal hover:text-accent hidden md:block"}>Ver todas</button>
                    </div>
                    <div className={"w-full grid grid-cols-1 gap-8 my-20 px-4 md:grid-cols-2"}>
                        <CertificationCardS title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                        <CertificationCardS title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                        <CertificationCardS title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                        <CertificationCardS title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    </div>
                    <button className={"bg-primary/20 self-center p-4 rounded-xl outline-1 hover:bg-primary/30 md:hidden"}>Ver todas las certificaciones</button>
                </section>

                <section className={"container mx-auto flex flex-col items-center my-30"}>
                    <h2 className={"text-5xl text-center leading-16"}>Creemos algo excepcional juntos</h2>
                    <p className={"text-center mx-4 leading-7 text-muted-foreground my-4"}>Disponible para proyectos freelance, oportunidades de tiempo completo y colaboraciones.</p>
                    <div className={"grid grid-cols-1 gap-8 w-full px-4 my-16"}>
                        <div className={"max-h-100 bg-card flex flex-col gap-4 items-center outline-1 rounded-xl py-8"}>
                            <div className={"h-14 w-14 flex justify-center items-center bg-primary/20 rounded-xl outline-1"}>
                                <img src={mailIcon} alt="Mail icon" className={"h-8 w-8"}/>
                            </div>
                            <span className={"text-xl"}>Email</span>
                            <button className={"font-normal text-muted-foreground"}>gabrielmayorgate@gmail.com</button>
                        </div>
                        <div className={"max-h-100 bg-card flex flex-col gap-4 items-center outline-1 rounded-xl py-8"}>
                            <div className={"h-14 w-14 flex justify-center items-center bg-primary/20 rounded-xl outline-1"}>
                                <img src={locationIcon} alt="Mail icon" className={"h-8 w-8"}/>
                            </div>
                            <span className={"text-xl"}>Ubicación</span>
                            <button className={"font-normal text-muted-foreground"}>Managua, NI</button>
                        </div>
                        <div className={"max-h-100 bg-card flex flex-col gap-4 items-center outline-1 rounded-xl py-8"}>
                            <div className={"h-14 w-14 flex justify-center items-center bg-primary/20 rounded-xl outline-1"}>
                                <img src={chatIcon} alt="Mail icon" className={"h-8 w-8"}/>
                            </div>
                            <span className={"text-xl"}>Chat</span>
                            <button className={"font-normal text-muted-foreground"}>Telegram / Discord</button>
                        </div>
                    </div>

                    <GradientButton label={"Iniciar Conversación"}/>
                </section>
            </main>

            <div className={"bg-primary/20 size-100 rounded-full blur-3xl fixed bottom-1/2 right-1/2 " +
                "animate-pulse [animation-duration:3s] -z-1 xl:right-0"}></div>
            <div className={"bg-accent/20 size-100 rounded-full blur-3xl fixed top-1/2 left-1/3 delay-150 " +
                "animate-pulse [animation-duration:3s] [animation-delay:1.5s] -z-1"}></div>
            <div className={"h-screen bg-blue-950"}></div>
        </>
    )
}

export default Home;