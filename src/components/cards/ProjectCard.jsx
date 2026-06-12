import test from '../../assets/project1.jpg'
import TextCardSlim from "./TextCardSlim.jsx";

const ProjectCard = ({title, description, year, dificulty, tags, type, image, gitUrl, projectUrl}) => {


    return (
                <div className={"z-1 max-h-200 w-full overflow-hidden rounded-2xl border"}>
                    <div className={"h-100"}>
                        <img src={image} alt="test img" className={"h-full w-full object-cover"}/>
                    </div>
                    <div className={"flex flex-col gap-4 bg-card p-4"}>
                        <div className={"flex items-center gap-2"}>
                            <p className={"text-sm text-muted-foreground"}>2026</p>*
                            <p className={"rounded-xl border border-red-400 p-2 text-xs text-red-400"}>Avanzado</p>*
                            <p className={"rounded-xl border border-accent p-2 text-xs text-accent"}>Aplicación Web</p>
                        </div>
                        <h2>{title}</h2>
                        <p className={"text-md text-muted-foreground"}>{description}</p>
                        <div>
                            <ul className={"flex flex-wrap gap-2"}>
                                <li><TextCardSlim Text={"CLI"}/></li>
                                <li><TextCardSlim Text={"D3.js"}/></li>
                                <li><TextCardSlim Text={"Docker"}/></li>
                                <li><TextCardSlim Text={"Express"}/></li>
                                <li><TextCardSlim Text={"Firabase"}/></li>
                                <li><TextCardSlim Text={"GraphQL"}/></li>
                                <li><TextCardSlim Text={"Kubernetes"}/></li>
                                <li><TextCardSlim Text={"MongoDB"}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )

}

export default ProjectCard