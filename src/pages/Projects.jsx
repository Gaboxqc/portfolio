import {ArrowIcon, SearchIcon} from "../assets/icons/index.js";
import TextCardTransparent from "../components/cards/TextCardTransparent.jsx";
import ProjectCard from "../components/cards/ProjectCard.jsx";

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import useLanguage from "../hooks/useLanguage.jsx";
import FilterGroup from "../components/ui/FilterGroup.jsx";
import useFilters from "../hooks/useFilters.jsx";
import {useState} from "react";
import {NavLink, useNavigate} from "react-router";

const Projects = () => {
    const {translate} = useLanguage()
    const navigate = useNavigate()
    const projectTypes = useFilters("project_type")
    const difficulty_level = useFilters("difficulty_level")

    const [selectedProjectTypes, setSelectedProjectTypes] = useState()
    const [selectedDifficultyLevels, setSelectedDifficultyLevels] = useState()

    const toggle = (setter, id) =>
        setter((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

    const projects = [
        {
            title: "Personal finance app",
            description: "This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. I build it as a full-stack app!",
            image: project1
        },
        {
            title: "Link-sharing app",
            description: "In this project, I build a fully-functional link-sharing app for developers! I practice working with image uploads, repeater fields, drag-and-drop, and more!",
            image: project2
        },
        {
            title: "Kanban task management web app",
            description: "In this project, I build a fully-functional task management app with a light/dark mode toggle.",
            image: project3
        },
        {
            title: "Product feedback app",
            description: "I have been working with JSON, managing state, and building like a real-world app. I create it as a full-stack project!",
            image: project4
        }
    ]

    return (
        <main className={"container mx-auto flex flex-col gap-8 px-4 pt-24"}>
            <section className={"flex flex-col gap-8"}>
                <NavLink to="#" onClick={(e) => { e.preventDefault(); navigate(-1); }}
                         className={"flex gap-2 items-center cursor-pointer"}>
                    <ArrowIcon className={"rotate-180 h-5 w-5 text-muted-foreground"} />
                    <p className="text-muted-foreground">{translate("course-section.back")}</p>
                </NavLink>
                <h1 className={"text-5xl md:text-6xl"}>{translate("project-section.title")}</h1>
                <p className={"max-w-4xl text-lg text-muted-foreground"}>{translate("project-section.description")}</p>
            </section>
            <section className={"flex flex-col gap-8"}>
                <div className={"flex h-12 w-full items-center rounded-xl border bg-background"}>
                    <SearchIcon className={"mr-2 ml-3 h-5 w-5"}/>
                    <input type="text" className={"w-full p-2 text-muted-foreground outline-0"}
                           placeholder={translate("project-section.search")}/>
                </div>
                <div>
                    <FilterGroup
                        label={translate("project-section.type_filter")}
                        items={projectTypes}
                        selected={selectedProjectTypes}
                        onToggle={(id) => toggle(setSelectedProjectTypes, id)}
                    />
                </div>
                <div>
                    <FilterGroup
                        label={translate("project-section.difficulty_filter")}
                        items={difficulty_level}
                        selected={selectedDifficultyLevels}
                        onToggle={(id) => toggle(setSelectedDifficultyLevels(), id)}
                    />
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>{translate("project-section.tag_filter")}</p>
                    <ul className={"flex flex-wrap gap-2"}>
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
                <div className={"flex hidden h-16 items-center justify-between rounded-xl border bg-card p-4"}>
                    <p className={"text-sm text-muted-foreground"}>2 {translate("project-section.founded_projects")}</p>
                    <button className={"rounded-xl border bg-primary/20 px-4 py-2 text-sm font-normal"}>
                        <span>X </span>{translate("project-section.clean_filter")}</button>
                </div>
            </section>
            <section className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
                {projects.map((project) => (
                    <ProjectCard title={project.title} description={project.description} image={project.image}/>
                ))}
            </section>
        </main>
    )
}

export default Projects