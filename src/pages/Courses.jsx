import { useEffect, useRef, useState } from "react";
import CoursesSection from "../components/sections/CoursesSection.jsx";
import CertificationSection from "../components/sections/CertificationSection.jsx";
import FilterGroup from "../components/ui/FilterGroup.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import useCategories from "../hooks/useCategories.jsx";
import useCourses from "../hooks/useCourses.jsx";

const Courses = () => {
    const { translate } = useLanguage()
    const categories = useCategories()

    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const { courses, loading, error } = useCourses({
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
                <p className="text-muted-foreground">{translate("course-section.back")}</p>
                <h1 className="text-5xl md:text-6xl">{translate("course-section.title")}</h1>
                <p className="max-w-4xl text-lg text-muted-foreground">{translate("course-section.description")}</p>
            </section>

            <section className="flex flex-col gap-6">
                <FilterGroup
                    label="Filtrar por categoría"
                    items={categories}
                    selected={selectedCategories}
                    onToggle={(id) => toggle(setSelectedCategories, id)}
                />
                {availableTags.length > 0 && (
                    <FilterGroup
                        label="Filtrar por etiqueta"
                        items={availableTags}
                        selected={selectedTags}
                        onToggle={(id) => toggle(setSelectedTags, id)}
                    />
                )}
                {hasActiveFilters && (
                    <div className="flex h-16 items-center justify-between rounded-xl border bg-card p-4">
                        <p className="text-sm text-muted-foreground">
                            {loading ? "Cargando..." : `${courses.length} certificaciones encontradas`}
                        </p>
                        <button onClick={clearFilters} className="rounded-xl border bg-primary/20 px-4 py-2 text-sm font-normal">
                            ✕ Limpiar filtros
                        </button>
                    </div>
                )}
            </section>

            {!hasActiveFilters && (
                <section className="flex flex-col gap-8">
                    <h3 className="text-2xl">Certificaciones Principales</h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <CertificationSection isMain={true} categories={categories} />
                    </div>
                </section>
            )}

            <section className="my-8 flex flex-col gap-8">
                <h3 className="text-2xl">Todas las certificaciones</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <CoursesSection courses={courses} loading={loading} error={error} />
                </div>
            </section>
        </main>
    )
}

export default Courses;