import ProjectCard from "../cards/ProjectCard.jsx";
import useLanguage from "../../hooks/useLanguage.jsx";
import getTranslation from "../../utils/getTranslation.js";
import { motion } from "framer-motion";

function ProjectsContainer({ projects = [], loading = false, error = null }) {
    const { locale } = useLanguage();

    if (loading)
        return (
            <>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-40 w-full animate-pulse rounded-xl bg-muted-foreground/10" />
                ))}
            </>
        );

    if (error) return <p className="col-span-full p-10 text-center text-red-500">Error: {error}</p>;

    if (!projects.length)
        return <p className="col-span-full p-10 text-center text-muted-foreground">No se encontraron proyectos.</p>;

    return (
        <>
            {projects.map((project) => {
                const translation = getTranslation(project.translations, locale);
                console.log(project)
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" }}
                        viewport={{ once: true }}
                        key={project.id}
                    >
                        <ProjectCard
                            key={project.id}
                            title={translation.title}
                            description={translation.description}
                            year={project.year}
                            difficulty={project.difficulty_level.name}
                            type={project.project_type.name}
                            tags={project.tags}
                            image={project.image_url}
                            gitUrl={project.git_url}
                            projectUrl={project.deploy_url}
                        />
                    </motion.div>
                );
            })}
        </>
    );
}

export default ProjectsContainer;