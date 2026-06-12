import { useState, useEffect } from "react";
import axios from "axios";

const useCourses = ({ categoryIds = [], tagIds = [] } = {}) => {
    const [courses, setCourses] = useState([])
    const [fetchedKey, setFetchedKey] = useState(null)
    const [error, setError] = useState(null)

    const currentKey = [...categoryIds].sort().join(",") + "|" + [...tagIds].sort().join(",")
    const loading = fetchedKey !== currentKey

    useEffect(() => {
        const controller = new AbortController()

        const params = new URLSearchParams({ offset: 0, limit: 100 })
        categoryIds.forEach((id) => params.append("category_id", id))
        tagIds.forEach((id)      => params.append("tag_id", id))

        axios
            .get(`https://api.gabrielmayorga.dev/portfolio/courses?${params}`, { signal: controller.signal })
            .then(({ data }) => { setCourses(data ?? []); setError(null); setFetchedKey(currentKey) })
            .catch((err) => { if (!axios.isCancel(err)) { setError(err.message); setFetchedKey(currentKey) } })

        return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentKey])

    return { courses, loading, error }
}

export default useCourses;