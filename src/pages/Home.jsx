const Home = () => {
    return (
        <section
            className={"min-w-screen  min-h-screen flex items-center bg-[#030d16] bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent text-white"}>
            <div className={"flex gap-2 flex-col mx-6 items-start"}>
                <p>Disponible para nuevos proyectos</p>
                <h1 className={"text-8xl"}>Gabriel Mayorga</h1>
                <h2 className={"text-4xl"}>Software Developer</h2>
                <p className={"mt-4 text-xl"}>Creando experiencias digitales excepcionales con código limpio y diseño
                    innovador. Especializado en
                    aplicaciones web modernas e interfaces interactivas.</p>
                <button className={"bg-red-500"}>Ver proyectos</button>
                <button>Contactame</button>
            </div>


        </section>
    )
}

export default Home;