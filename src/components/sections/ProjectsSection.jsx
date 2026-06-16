import { useEffect, useRef, useState } from 'react';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import useLanguage from "../../hooks/useLanguage.jsx";
import FeaturedProjectCard from "../cards/FeaturedProjectCard.jsx";

const ITEMS = [
  { id: "1", title: "Personal finance app", description: "This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) and includes a lot of tricky elements. I build it as a full-stack app!", image: project1 },
  { id: "2", title: "Link-sharing app", description: "In this project, I build a fully-functional link-sharing app for developers! I practice working with image uploads, repeater fields, drag-and-drop, and more!", image: project2 },
  { id: "3", title: "Kanban task management web app", description: "In this project, I build a fully-functional task management app with a light/dark mode toggle.", image: project3 },
  { id: "4", title: "Product feedback app", description: "I have been working with JSON, managing state, and building like a real-world app. I create it as a full-stack project!", image: project4 }
]

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])
  const { translate } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((e) => e.isIntersecting)
        if (visibleSection) {
          const index = sectionRefs.current.indexOf(visibleSection.target)
          if (index !== -1) setActiveIndex(index)
        }
      },
      {
        rootMargin: '-49% 0px -49% 0px',
        threshold: 0
      }
    )

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  const stepPct = 100 / ITEMS.length

  return (
    <div className="container mx-auto flex flex-col items-center md:py-16 px-4">
      <h2 className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-center text-5xl font-bold text-transparent">
        {translate("projects.title")}
      </h2>
      <p className="my-4 text-center leading-7 text-muted-foreground">
        {translate("projects.subtitle")}
      </p>

      <div className="grid gap-8 lg:grid-cols-[auto_1fr_2fr] lg:gap-16 w-full md:mt-12 max-w-none">

        <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-8 lg:items-center lg:justify-center">
          <div className="relative w-1 h-48 bg-zinc-600 rounded-full ">
            <div
              className="absolute left-0 w-full bg-accent shadow-[0_0_15px_rgba(139,92,246,0.8)] rounded-full transition-all duration-500 ease-in-out"
              style={{ height: `${stepPct}%`, top: `${activeIndex * stepPct}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col py-16 md:py-[25vh]">
          {ITEMS.map((item, index) => (
            <FeaturedProjectCard
              key={item.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              position={index + 1}
              year={2026}
              title={item.title}
              description={item.description}
              technologies={["React", "Node.js", "PostgresSQL", "Redis"]}
              isActive={activeIndex === index}
            />
          ))}
        </div>

        <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center">
          <div className="w-full aspect-video overflow-hidden rounded-2xl">
            {ITEMS[activeIndex] && (
              <img
                src={ITEMS[activeIndex].image}
                alt={ITEMS[activeIndex].title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
            )}
          </div>
        </div>

      </div>
    </div>
  )
}