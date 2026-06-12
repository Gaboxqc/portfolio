import { motion } from "framer-motion";
import { PlatziIcon, LinkIcon, DateIcon, FilledStarIcon } from "../../assets/icons/index.js";
import TextCardSlim from "./TextCardSlim.jsx";
import useTilt from "../../hooks/useTilt.jsx";

const animationVariants = {
    tilt: {
        variants: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, ease: "easeOut" },
        whileHover: { scale: 1.03 },
    },
    rise: {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.3, ease: "easeOut" },
    },
}

const CertificationCard = ({ title, academy, year, tags = [], serial, url, isMain = false, animation }) => {
    const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

    const isTilt = animation === "tilt"

    const tiltProps = isTilt ? {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { rotateX, rotateY, transformPerspective: 800 },
    } : {
        style: { transformPerspective: 800 },
    };

    const className = isTilt
        ? "rounded-xl border border-primary/20 bg-card hover:border-primary/30"
        : `cursor-default rounded-2xl bg-card flex h-auto min-h-85 flex-col justify-center gap-4 bg-card/80 p-5 ${isMain 
            ? "border-2 border-accent/50 hover:border-accent/80" 
            : "border border-primary/30 hover:border-primary/30"}`

    return (
        <motion.div
            {...animationVariants[animation]}
            {...tiltProps}
            className={className}
        >
            <div className={"flex flex-col gap-4 p-5"}>
                <div className="flex h-16 justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 outline-1">
                        <PlatziIcon className="h-8 w-8"/>
                    </div>
                    {isMain && <FilledStarIcon className="text-accent"/>}
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-normal">{title}</h3>
                    <p className="text-muted-foreground">{academy}</p>
                    <div className="flex items-center gap-2">
                        <DateIcon className="h-5 w-5 text-muted-foreground"/>
                        <p className="text-sm text-muted-foreground">{year}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <ul className="flex max-w-xs flex-wrap gap-2 my-2">
                            {tags.map((t) => (
                                <li key={t.name}><TextCardSlim Text={t.name}/></li>
                            ))}
                        </ul>
                        <a className="self-start" href={url} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="text-muted-foreground"/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CertificationCard;