import {useState, useEffect} from "react";
import axios from "axios";
import CertificationCard from "../cards/CertificationCard.jsx";
import useLanguage from "../../hooks/useLanguage.jsx";
import getTranslation from "../../utils/getTranslation.js";

const fetchCourses = async (offset) => {
    const response = await axios.get(`https://api.gabrielmayorga.dev/portfolio/courses?offset=${offset}&limit=10`)
    return response.data
}

function CoursesSection({offset = 0}) {
    const [course, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {locale} = useLanguage()

    useEffect(() => {
        let isMounted = true;

        fetchCourses(offset).then((data) => {
            if (isMounted) {
                setCourses(data)
                setError(null)
                setLoading(false)
            }
        }).catch((err) => {
            if (isMounted) {
                setError(err.message)
                setLoading(false)
            }
        })

        return () => {
            isMounted = false
        }
    }, []);

    if (loading) return (
        <>
            {[...Array(4)].map((_, i) => (
                <div key={i} className="h-40 w-full animate-pulse rounded-xl bg-muted-foreground/10"/>
            ))}
        </>
    )
    if (error) return <p className="p-10 text-center text-red-500">Error: {error}</p>

    return (
        <>
            {course.map((course) => {
                const translation = getTranslation(course.translations, locale)
                return (
                    <CertificationCard key={course.id} title={translation.title} year={course.year}
                                       academy={course.academy.name} url={course.url} tags={course.tags}/>
                )
            })}
        </>
    )
}

export default CoursesSection