import searchIcon from '../assets/Search.svg'
import TextCardTr from "../components/textCardTr/TextCardTr.jsx";
import ProjectCard from "../components/projectCard/ProjectCard.jsx";

const Projects = () => {
    return (
        <main className={"container pt-24 flex flex-col gap-8 mx-auto px-4"}>
            <section className={"flex flex-col gap-8"}>
                <p className={"text-muted-foreground"}>Volver</p>
                <h1 className={"text-5xl md:text-6xl"}>Proyectos</h1>
                <p className={"text-muted-foreground text-lg max-w-4xl"}>Una colección completa de proyectos que abarcan desarrollo web, aplicaciones móviles, herramientas open source y soluciones empresariales.</p>
            </section>
            <section className={"flex flex-col gap-8"}>
                <div className={"w-full h-12 bg-background flex items-center border rounded-xl"}>
                    <img src={searchIcon} alt="Search icon" className={"h-5 w-5 ml-3 mr-2"}/>
                    <input type="text" className={"text-muted-foreground outline-0 p-2"}
                           placeholder={"Buscar proyectos..."}/>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por tipo de proyecto</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTr text={"Aplicación Web"}/></li>
                        <li><TextCardTr text={"App Mobile"}/></li>
                        <li><TextCardTr text={"Dashboard"}/></li>
                        <li><TextCardTr text={"API"}/></li>
                        <li><TextCardTr text={"Librería"}/></li>
                        <li><TextCardTr text={"CLI Tool"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por dificultad</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTr text={"Principiante"}/></li>
                        <li><TextCardTr text={"Intermedio"}/></li>
                        <li><TextCardTr text={"Avanzado"}/></li>
                        <li><TextCardTr text={"Experto"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por tecnologías</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTr text={"CLI"}/></li>
                        <li><TextCardTr text={"D3.js"}/></li>
                        <li><TextCardTr text={"Docker"}/></li>
                        <li><TextCardTr text={"Express"}/></li>
                        <li><TextCardTr text={"Firabase"}/></li>
                        <li><TextCardTr text={"GraphQL"}/></li>
                        <li><TextCardTr text={"Kubernetes"}/></li>
                        <li><TextCardTr text={"MongoDB"}/></li>
                    </ul>
                </div>
                <div className={"h-16 bg-card flex items-center justify-between p-4 rounded-xl border"}>
                    <p className={"text-muted-foreground text-sm"}>2 proyectos encontrados</p>
                    <button className={"bg-primary/20 py-2 px-4 rounded-xl border text-sm font-normal"}><span>X </span> Limpiar filtros</button>
                </div>
            </section>
            <section className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </section>
        </main>
    )
}

export default Projects