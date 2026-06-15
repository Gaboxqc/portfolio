import {useState, useEffect} from "react";
import axios from "axios";
import CertificationCard from "../cards/CertificationCard.jsx";
import useLanguage from "../../hooks/useLanguage.jsx";
import {motion} from "framer-motion";

const fetchCertifications = async (limit) => {
    const response = await axios.get(`https://api.gabrielmayorga.dev/portfolio/certifications?limit=${limit}`)
    return response.data
}

function CertificationSection({limit = 10, isMain = false, animation}) {
    const [certification, setCertifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {locale} = useLanguage()

    const getTranslation = (translations, locale) => {
        return (
            translations.find(t => t.language_code === locale) ??
            translations.find(t => t.language_code === "en") ??
            translations[0]
        )
    }

    useEffect(() => {
        let isMounted = true;

        fetchCertifications(limit).then((data) => {
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
            {certification.map((certification) => {
                const translation = getTranslation(certification.translations, locale)
                return (
                    (
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{type: "spring"}}
                            viewport={{once: true}}
                            key={certification.id}>
                            <CertificationCard  title={translation.title}
                                               year={certification.year} academy={certification.academy.name}
                                               url={certification.url} tags={certification.tags} isMain={isMain}
                                               animation={animation}/>
                        </motion.div>
                    )
                )
            })}
        </>
    )

}

export default CertificationSection