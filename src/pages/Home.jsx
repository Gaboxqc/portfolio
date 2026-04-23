import GradientButton from "../components/gradientButton/GradientButton.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

import githubIcon from '../assets/Github.svg'
import linkedInIcon from '../assets/LinkedIn.svg'
import mailIcon from '../assets/Mail.svg'

const Home = () => {
    return (
        <>
            <div className={"h-screen"}>
                <Navbar/>
                <main className={"h-full flex bg-linear-to-br from-primary/20 via-transparent to-accent/20 text-white"}>
                    <div className={"container my-4 mx-auto px-4 flex gap-10 flex-col items-start md:gap-4 "}>
                        <div className={"flex gap-2 px-3 items-center outline-1 p-2 rounded-3xl"}>
                            <div className={"bg-accent size-2 rounded-full animate-pulse"}></div>
                            <p className={"text-sm"}>Disponible para nuevos proyectos</p>
                        </div>
                        <div>
                            <h1 className={"text-7xl bg-linear-to-r from-cyan-400 to-[#5B8DEF] bg-clip-text text-transparent pb-3"}>Gabriel
                                Mayorga</h1>
                            <h2 className={"md:mt-1 text-3xl bg-linear-to-r from-cyan-400 to-[#5B8DEF] bg-clip-text text-transparent"}>Software
                                Developer</h2>
                        </div>
                        <p className={"text-lg text-muted-foreground max-w-150"}>Creando experiencias digitales
                            excepcionales con código limpio y diseño
                            innovador. Especializado en aplicaciones web modernas e interfaces interactivas.</p>
                        <div className={"flex gap-4"}>
                            <GradientButton label={"Ver proyectos ->"}/>
                            <button className={"h-13 w-auto px-6 outline-1 rounded-lg hover:bg-primary/10"}>Contáctame</button>
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
                        <div className={"bg-primary/20 size-150 rounded-full blur-3xl fixed bottom-1/2 right-1/2 " +
                            "animate-pulse [animation-duration:3s]"}></div>
                        <div className={"bg-accent/20 size-150 rounded-full blur-3xl fixed top-1/2 left-1/3 delay-150 " +
                            "animate-pulse [animation-duration:3s] [animation-delay:1.5s]"}></div>
                    </div>
                </main>
            </div>
            <div className={"h-90 bg-red-500"}></div>
        </>
    )
}

export default Home;