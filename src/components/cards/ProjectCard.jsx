import {motion} from "framer-motion";
import TextCardSlim from "./TextCardSlim.jsx";
import {getDifficultyStyle} from "../../utils/difficultyLevelStyles.js";
import {getProjectTypeStyle} from "../../utils/projectTypeStyles.js";

const ProjectCard = ({title, description, year, difficulty, tags = [], type, image, gitUrl, projectUrl}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={"max-h-200 overflow-hidden rounded-2xl border border-primary/40 hover:shadow-2xl shadow-accent/40"}>
            <div className={"h-65 w-fit"}>
                <img src={image} alt={title} className={"h-full w-full object-cover"}/>
            </div>
            <div className={"flex flex-col gap-4 bg-card p-4"}>
                <div className={"flex items-center gap-2"}>
                    <p className={"text-sm text-muted-foreground"}>{year}</p>*
                    <p className={`${getDifficultyStyle(difficulty)} rounded-xl border p-2 text-xs`}>{difficulty}</p>*
                    <p className={`${getProjectTypeStyle(type)} rounded-xl border p-2 text-xs`}>{type}</p>
                </div>
                <h2>{title}</h2>
                <p className={"text-md text-muted-foreground"}>{description}</p>
                <div>
                    <ul className={"flex flex-wrap gap-2"}>
                        {tags.map((tag) => {
                            return (
                                <li><TextCardSlim Text={tag.name}/></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </motion.div>
    )

}

export default ProjectCard