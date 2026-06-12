import {useEffect, useRef, useState} from "react";
import CoursesSection from "../components/sections/CoursesSection.jsx";
import CertificationSection from "../components/sections/CertificationSection.jsx";
import FilterGroup from "../components/ui/FilterGroup.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import useFilters from "../hooks/useFilters.jsx";
import useCourses from "../hooks/useCourses.jsx";
import {ArrowIcon, CloseIcon} from "../assets/icons/index.js";
import {NavLink, useNavigate} from "react-router";
import {AnimatePresence, motion} from "framer-motion";

const Courses = () => {
    const navigate = useNavigate()
    const {translate} = useLanguage()
    const categories = useFilters("category")

    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const {courses, loading, error} = useCourses({
        categoryIds: selectedCategories,
        tagIds: selectedTags,
    });

    const [availableTags, setAvailableTags] = useState([])
    const tagsSet = useRef(false)

    useEffect(() => {
        if (tagsSet.current || courses.length === 0) return
        const map = new Map()
        courses.forEach((c) => c.tags?.forEach((t) => map.set(t.id, t)))
        setAvailableTags([...map.values()])
        tagsSet.current = true
    }, [courses])

    const toggle = (setter, id) =>
        setter((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

    const hasActiveFilters = selectedCategories.length > 0 || selectedTags.length > 0

    const clearFilters = () => {
        setSelectedCategories([])
        setSelectedTags([])
    }

    return (
        <main className="container mx-auto mb-30 flex flex-col gap-8 px-4 pt-24">

            <section className="flex flex-col gap-8">
                <NavLink to="#" onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
                         className={"flex cursor-pointer items-center gap-2 hover:text-foreground"}>
                    <ArrowIcon className={"h-5 w-5 rotate-180 text-muted-foreground"}/>
                    <p className="text-muted-foreground">{translate("course-section.back")}</p>
                </NavLink>
                <h1 className="text-5xl md:text-6xl">{translate("course-section.title")}</h1>
                <p className="max-w-4xl text-lg text-muted-foreground">{translate("course-section.description")}</p>
            </section>

            <section className="flex flex-col gap-6">
                <FilterGroup
                    label={translate("course-section.category_filter")}
                    items={categories}
                    selected={selectedCategories}
                    onToggle={(id) => toggle(setSelectedCategories, id)}
                />
                {availableTags.length > 0 && (
                    <FilterGroup
                        label={translate("course-section.tag_filter")}
                        items={availableTags}
                        selected={selectedTags}
                        onToggle={(id) => toggle(setSelectedTags, id)}
                    />
                )}
                <AnimatePresence mode={"wait"}>
                    {hasActiveFilters && (
                    <motion.div
                        key="results-bar"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3, ease: "easeOut"}}
                        className="flex h-16 items-center justify-between rounded-xl border bg-card p-4">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={courses.length}
                                initial={{opacity: 0, y: 6}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -6}}
                                transition={{duration: 0.2}}
                                className="text-sm text-[#8B9DC3]"
                            >
                                {courses.length} {translate("course-section.founded_projects")}
                            </motion.span>
                        </AnimatePresence>

                        <button onClick={clearFilters}
                                className="flex items-center rounded-xl gap-1 border bg-primary/20 px-4 py-2 text-sm font-normal text-muted-foreground cursor-pointer hover:bg-primary/30 hover:text-foreground">
                            <CloseIcon className={"h-5 w-5"}/>
                             {translate("course-section.clean_filter")}
                        </button>
                    </motion.div>
                )}
                </AnimatePresence>
            </section>

            {!hasActiveFilters && (
                <section className="flex flex-col gap-8">
                    <h3 className="text-2xl">{translate("course-section.main_certification")}</h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <CertificationSection isMain={true} categories={categories} animation={"rise"}/>
                    </div>
                </section>
            )}

            <section className="my-8 flex flex-col gap-8">
                <h3 className="text-2xl">{translate("course-section.all_courses")}</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <CoursesSection courses={courses} loading={loading} error={error}/>
                </div>
            </section>
        </main>
    )
}

export default Courses;