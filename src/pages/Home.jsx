import GradientButton from "../components/gradientButton/GradientButton.jsx";
import LineButton from "../components/lineButton/LineButton.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
    // bg-[#030d16] bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent
    return (
        <>
            <Navbar/>
            <section
                className={"min-h-screen flex items-center bg-background text-white"}>
                <div className={"container mx-auto px-4 flex gap-2 flex-col items-start md:gap-4"}>
                    <p className={"hidden md:block"}>Disponible para nuevos proyectos</p>
                    <div>
                        <h1 className={"text-7xl bg-linear-to-r from-cyan-400 to-[#5B8DEF] bg-clip-text text-transparent"}>Gabriel
                            Mayorga</h1>
                        <h2 className={"mt-3 md:mt-1 text-3xl bg-linear-to-r from-cyan-400 to-[#5B8DEF] bg-clip-text text-transparent"}>Software
                            Developer</h2>
                    </div>
                    <p className={"mt-4 text-lg text-muted-foreground max-w-150"}>Creando experiencias digitales
                        excepcionales con código limpio y diseño
                        innovador. Especializado en aplicaciones web modernas e interfaces interactivas.</p>
                    <div className={"flex gap-4 md:mt-7"}>
                        <GradientButton label={"Ver proyectos ->"}></GradientButton>
                        <LineButton label={"Contáctame"}></LineButton>
                    </div>
                    <div className={"bg-accent size-80 rounded-full blur-3xl opacity-30 fixed bottom-3 left-0 animate-pulse [animation-duration:10s]"}></div>
                </div>
            </section>
            <div className={"h-90"}></div>
        </>
    )
}

export default Home;