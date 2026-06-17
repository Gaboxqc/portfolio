import {useEffect, useRef, useState} from 'react';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import useLanguage from "../../hooks/useLanguage.jsx";
import FeaturedProjectCard from "../cards/FeaturedProjectCard.jsx";
import useProjects from "../../hooks/useProjects.jsx";
import getTranslation from "../../utils/getTranslation.js";

const ITEMS = [
    {
        id: "1",
        title: "Personal finance app",
        description: "This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. I build it as a full-stack app!",
        image: "https://assets.gabrielmayorga.dev/Projects/Hangman.jpg"
    },
    {
        id: "2",
        title: "Link-sharing app",
        description: "In this project, I build a fully-functional link-sharing app for developers! I practice working with image uploads, repeater fields, drag-and-drop, and more!",
        image: project2
    },
    {
        id: "3",
        title: "Kanban task management web app",
        description: "In this project, I build a fully-functional task management app with a light/dark mode toggle.",
        image: project3
    },
    {
        id: "4",
        title: "Product feedback app",
        description: "I have been working with JSON, managing state, and building like a real-world app. I create it as a full-stack project!",
        image: project4
    }
]

export default function FeaturedProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRefs = useRef([])
    const {translate, locale} = useLanguage()
    const {projects, loading, error } = useProjects({isMain: true})

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((e) => e.isIntersecting)
                if (visibleSection) {
                    const index = sectionRefs.current.indexOf(visibleSection.target)
                    if (index !== -1) setActiveIndex(index)
                    console.log(projects)
                }
            },
            {
                rootMargin: '-49% 0px -49% 0px',
                threshold: 0
            }
        )

        sectionRefs.current.forEach((ref) => ref && observer.observe(ref))
        return () => observer.disconnect()
    }, [projects])

    const stepPct = 100 / ITEMS.length

    return (
        <div className="container mx-auto flex flex-col items-center px-4 ">
            <h2 className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-center text-5xl font-bold text-transparent">
                {translate("projects.title")}
            </h2>
            <p className="my-4 text-center leading-7 text-muted-foreground">
                {translate("projects.subtitle")}
            </p>
            <div className="grid w-full max-w-none gap-8 lg:grid-cols-[auto_1fr_2fr] lg:gap-16">

                <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-8 lg:items-center lg:justify-center">
                    <div className="relative h-48 w-1 rounded-full bg-zinc-600">
                        <div
                            className="absolute left-0 w-full rounded-full bg-accent shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-500 ease-in-out"
                            style={{height: `${stepPct}%`, top: `${activeIndex * stepPct}%`}}
                        />
                    </div>
                </div>

                <div className="flex flex-col py-16 md:py-[25vh]">
                    
                    {projects.map((project, index) => {
                        const translation = getTranslation(project.translations, locale)
                        return (
                            <FeaturedProjectCard
                                key={project.id}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                position={index + 1}
                                year={project.year}
                                title={translation.title}
                                description={translation.description}
                                tags={project.tags}
                                isActive={activeIndex === index}
                            />
                        )
                    })}
                </div>

                <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl">
                        {projects[activeIndex] && (
                            <img
                                src={projects[activeIndex].image_url}
                                alt={projects[activeIndex].title}
                                className="h-full w-full object-cover object-center transition-all duration-500"
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}