import { useState, useEffect } from "react";
import axios from "axios";

function useFilters(endpoint) {
    const [result, setResult] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        axios
            .get(`https://api.gabrielmayorga.dev/portfolio/${endpoint}`, { signal: controller.signal })
            .then(({ data }) => setResult(data))
            .catch((err) => { if (!axios.isCancel(err)) console.error(err); })
        return () => controller.abort()
    }, [endpoint])

    return result
}

export default useFilters
