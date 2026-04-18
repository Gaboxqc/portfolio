const Home = () => {
    // bg-[#030d16] bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent
    return (
        <section
            className={"min-h-screen flex items-center bg-background text-white"}>
            <div className={"container mx-auto px-4 flex gap-2 flex-col items-start"}>
                <p className={"hidden md:block"}>Disponible para nuevos proyectos</p>
                <h1 className={""}>Gabriel Mayorga</h1>
                <h2 className={"mt-3 md:mt-1"}>Software Developer</h2>
                <p className={"mt-4 text-xl"}>Creando experiencias digitales excepcionales con código limpio y diseño
                    innovador. Especializado en
                    aplicaciones web modernas e interfaces interactivas.</p>
                <button className={"bg-red-500"}>Ver proyectos</button>
                <button>Contactame</button>
                <div className={"bg-blue-500 size-60 rounded-full blur-3xl opacity-30 transition duration1000 ease-in-out"}></div>
            </div>


        </section>
    )
}

export default Home;