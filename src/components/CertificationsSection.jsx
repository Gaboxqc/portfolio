import {useState, useEffect} from "react";
import axios from "axios";
import CertificationCard from "./cards/CertificationCard.jsx";

const fetchCertifications = async () => {
    const response = await axios.get("https://api.gabrielmayorga.dev/portfolio/certifications_by")
    return response.data
}

function CertificationsSection({language}){
    const [certification, setCertifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true;

        fetchCertifications().then((data) => {
            if (isMounted) {
                setCertifications(data)
                setError(null)
                setLoading(false)
            }
        }).catch((err) => {
            if (isMounted) {
                setError(err.message)
                setLoading(false)
            }
        })

        return () => {isMounted = false}
    }, []);

    if (loading) return (
        <>
        {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 w-full animate-pulse rounded-xl bg-muted-foreground/10"/>
        ))}
    </>
    )
    if (error) return <p className="text-center text-red-500 p-10">Error: {error}</p>

    return (
        <>
            {certification.map((certification) => (
                <CertificationCard key={certification.id} title={certification.translations[language].title} year={certification.year} academy={certification.academy.name} url={certification.url} tags={certification.tags}/>
            ))}
        </>
    )
}

export default CertificationsSection