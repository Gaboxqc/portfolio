import test from '../../assets/test.jpg'
import TextCardTr from "../textCardTr/TextCardTr.jsx";
import TextCardSm from "../textCardSm/TextCardSm.jsx";

const ProjectCard = ({title, description, year, dificulty, tags, type, image, gitUrl, projectUrl}) => {
    return (
        <div className={"max-h-200 w-full border rounded-2xl overflow-hidden"}>
            <div className={"h-100"}>
                <img src={test} alt="test img" className={"h-full w-full object-cover"}/>
            </div>
            <div className={"p-4 flex flex-col gap-4"}>
                <div className={"flex items-center gap-2"}>
                    <p className={"text-sm text-muted-foreground"}>2026</p>*
                    <p className={"border border-red-400 text-red-400 rounded-xl p-2 text-xs"}>Avanzado</p>*
                    <p className={"border border-accent text-accent rounded-xl p-2 text-xs"}>Aplicación Web</p>
                </div>
                <h2>Quantum Commerce</h2>
                <p className={"text-muted-foreground text-md"}>Plataforma de comercio electrónico de próxima generación con recomendaciones impulsadas por IA y gestión de inventario en tiempo real.</p>
                <div>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardSm Text={"CLI"}/></li>
                        <li><TextCardSm Text={"D3.js"}/></li>
                        <li><TextCardSm Text={"Docker"}/></li>
                        <li><TextCardSm Text={"Express"}/></li>
                        <li><TextCardSm Text={"Firabase"}/></li>
                        <li><TextCardSm Text={"GraphQL"}/></li>
                        <li><TextCardSm Text={"Kubernetes"}/></li>
                        <li><TextCardSm Text={"MongoDB"}/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard