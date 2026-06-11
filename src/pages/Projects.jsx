import {SearchIcon} from "../assets/icons/index.js";
import TextCardTransparent from "../components/cards/TextCardTransparent.jsx";
import ProjectCard from "../components/cards/ProjectCard.jsx";

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const Projects = () => {
    const projects = [
        {title: "Personal finance app", description: "This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. I build it as a full-stack app!", image: project1},
        {title: "Link-sharing app", description: "In this project, I build a fully-functional link-sharing app for developers! I practice working with image uploads, repeater fields, drag-and-drop, and more!", image: project2},
        {title: "Kanban task management web app", description: "In this project, I build a fully-functional task management app with a light/dark mode toggle.", image: project3},
        {title: "Product feedback app", description: "I have been working with JSON, managing state, and building like a real-world app. I create it as a full-stack project!", image: project4}
    ]

    return (
        <main className={"container pt-24 flex flex-col gap-8 mx-auto px-4"}>
            <section className={"flex flex-col gap-8"}>
                <p className={"text-muted-foreground"}>Volver</p>
                <h1 className={"text-5xl md:text-6xl"}>Proyectos</h1>
                <p className={"text-muted-foreground text-lg max-w-4xl"}>Una colección completa de proyectos que abarcan desarrollo web, aplicaciones móviles, herramientas open source y soluciones empresariales.</p>
            </section>
            <section className={"flex flex-col gap-8"}>
                <div className={"w-full h-12 bg-background flex items-center border rounded-xl"}>
                    <img src={SearchIcon} alt="Search icon" className={"h-5 w-5 ml-3 mr-2"}/>
                    <input type="text" className={"text-muted-foreground outline-0 p-2"}
                           placeholder={"Buscar proyectos..."}/>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por tipo de proyecto</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTransparent text={"Aplicación Web"}/></li>
                        <li><TextCardTransparent text={"App Mobile"}/></li>
                        <li><TextCardTransparent text={"Dashboard"}/></li>
                        <li><TextCardTransparent text={"API"}/></li>
                        <li><TextCardTransparent text={"Librería"}/></li>
                        <li><TextCardTransparent text={"CLI Tool"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por dificultad</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTransparent text={"Principiante"}/></li>
                        <li><TextCardTransparent text={"Intermedio"}/></li>
                        <li><TextCardTransparent text={"Avanzado"}/></li>
                        <li><TextCardTransparent text={"Experto"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por tecnologías</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTransparent text={"CLI"}/></li>
                        <li><TextCardTransparent text={"D3.js"}/></li>
                        <li><TextCardTransparent text={"Docker"}/></li>
                        <li><TextCardTransparent text={"Express"}/></li>
                        <li><TextCardTransparent text={"Firabase"}/></li>
                        <li><TextCardTransparent text={"GraphQL"}/></li>
                        <li><TextCardTransparent text={"Kubernetes"}/></li>
                        <li><TextCardTransparent text={"MongoDB"}/></li>
                    </ul>
                </div>
                <div className={"h-16 bg-card flex items-center justify-between p-4 rounded-xl border"}>
                    <p className={"text-muted-foreground text-sm"}>2 proyectos encontrados</p>
                    <button className={"bg-primary/20 py-2 px-4 rounded-xl border text-sm font-normal"}><span>X </span> Limpiar filtros</button>
                </div>
            </section>
            <section className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                {projects.map((project) => (
                    <ProjectCard title={project.title} description={project.description} image={project.image}/>
                ))}
            </section>
        </main>
    )
}

export default Projects