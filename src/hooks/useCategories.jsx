import { useState, useEffect } from "react";
import axios from "axios";

function useCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        axios
            .get("https://api.gabrielmayorga.dev/portfolio/category", { signal: controller.signal })
            .then(({ data }) => setCategories(data))
            .catch((err) => { if (!axios.isCancel(err)) console.error(err); })
        return () => controller.abort()
    }, [])

    return categories
}

export default useCategories
