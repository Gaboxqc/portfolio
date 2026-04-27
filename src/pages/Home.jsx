import GradientButton from "../components/gradientButton/GradientButton.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

import githubIcon from '../assets/Github.svg'
import linkedInIcon from '../assets/LinkedIn.svg'
import mailIcon from '../assets/Mail.svg'
import AbilityCard from "../components/abilityCard/AbilityCard.jsx";
import TextCard from "../components/textCard/TextCard.jsx";

const Home = () => {
    return (
        <>
            <header className={"fixed z-1"}>
                <Navbar/>
            </header>
            <main className={"w-full flex flex-col overflow-hidden"}>
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
                    <h2 className={"text-5xl text-center text-s leading-16"}>Construyendo productos digitales con
                        precisión</h2>
                    <p className={"text-center mx-4 leading-7 text-muted-foreground my-8"}>Soy un desarrollador y
                        diseñador con más de 8 años de experiencia creando experiencias web elegantes y de alto
                        rendimiento. He trabajado con startups y empresas consolidadas para dar vida a sus visiones
                        digitales.</p>
                    <div className={"grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                        <AbilityCard Icon={"Code"} Title={"Código limpio"}
                                     Description={"Desarrollo con las mejores prácticas y arquitectura escalable"}/>
                        <AbilityCard Icon={"Art"} Title={"Diseño Innovador"}
                                     Description={"Interfaces modernas y experiencias de usuario excepcionales"}/>
                        <AbilityCard Icon={"Rocket"} Title={"Alto Rendimiento"}
                                     Description={"Optimización extrema para velocidad y eficiencia"}/>
                        <AbilityCard Icon={"Lightning"} Title={"Entrega Rápida"}
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
            </main>

            <div className={"bg-primary/20 size-100 rounded-full blur-3xl fixed bottom-1/2 right-1/2 " +
                "animate-pulse [animation-duration:3s] z-2 xl:right-0"}></div>
            <div className={"bg-accent/20 size-100 rounded-full blur-3xl fixed top-1/2 left-1/3 delay-150 " +
                "animate-pulse [animation-duration:3s] [animation-delay:1.5s] z-2 xl:left-0"}></div>
            <div className={"h-screen bg-red-500"}></div>
        </>
    )
}

export default Home;