import CertificationCard from "../cards/CertificationCard.jsx";
import useLanguage from "../../hooks/useLanguage.jsx";
import getTranslation from "../../utils/getTranslation.js";

function CoursesSection({courses = [], loading = false, error = null}) {
    const {locale} = useLanguage();

    if (loading)
        return (
            <>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-40 w-full animate-pulse rounded-xl bg-muted-foreground/10"/>
                ))}
            </>
        );

    if (error)
        return <p className="p-10 text-center text-red-500">Error: {error}</p>;

    if (!courses.length)
        return <p className="col-span-full p-10 text-center text-muted-foreground">No se encontraron cursos.</p>;

    return (
        <>
            {courses.map((course) => {
                const translation = getTranslation(course.translations, locale);
                return (
                    <CertificationCard
                        key={course.id}
                        title={translation.title}
                        year={course.year}
                        academy={course.academy.name}
                        url={course.url}
                        tags={course.tags}
                    />
                );
            })}
        </>
    );
}

export default CoursesSection;
