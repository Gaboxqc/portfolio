import TextCardTr from "../components/cards/TextCardTr.jsx";
import CoursesSection from "../components/sections/CoursesSection.jsx";
import CertificationSection from "../components/sections/CertificationSection.jsx";
import useLanguage from "../hooks/useLanguage.jsx";

const Courses = () => {
    const {translate} = useLanguage()

    return (
        <main className={"container mx-auto mb-30 flex flex-col gap-8 px-4 pt-24"}>
            <section className={"flex flex-col gap-8"}>
                <p className={"text-muted-foreground"}>{translate("course-section.back")}</p>
                <h1 className={"text-5xl md:text-6xl"}>{translate("course-section.title")}</h1>
                <p className={"max-w-4xl text-lg text-muted-foreground"}>{translate("course-section.description")}</p>
            </section>
            <section className={"flex flex-col gap-8"}>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por categoría</p>

                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por lenguaje de programación</p>
                    <ul className={"flex flex-wrap gap-2"}>
                        <li><TextCardTr text={"JavaScript"}/></li>
                        <li><TextCardTr text={"TypeScript"}/></li>
                        <li><TextCardTr text={"Python"}/></li>
                        <li><TextCardTr text={"Java"}/></li>
                        <li><TextCardTr text={"Go"}/></li>
                        <li><TextCardTr text={"Rust"}/></li>
                        <li><TextCardTr text={"C#"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por framework</p>
                    <ul className={"flex flex-wrap gap-2"}>
                        <li><TextCardTr text={"React"}/></li>
                        <li><TextCardTr text={"React Native"}/></li>
                        <li><TextCardTr text={"Vue.js"}/></li>
                        <li><TextCardTr text={"Next.js"}/></li>
                        <li><TextCardTr text={"Node.js"}/></li>
                        <li><TextCardTr text={"Flask"}/></li>
                        <li><TextCardTr text={"FastAPI"}/></li>
                        <li><TextCardTr text={"Docker"}/></li>
                    </ul>
                </div>
                <div className={"flex h-16 items-center justify-between rounded-xl border bg-card p-4"}>
                    <p className={"text-sm text-muted-foreground"}>2 proyectos encontrados</p>
                    <button className={"rounded-xl border bg-primary/20 px-4 py-2 text-sm font-normal"}>
                        <span>X </span> Limpiar filtros
                    </button>
                </div>
            </section>
            <section className={"flex flex-col gap-8"}>
                <h3 className={"text-2xl"}>Certificaciones Principales</h3>
                <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
                    <CertificationSection isMain={true}/>
                </div>
            </section>

            <section className={"flex flex-col gap-8 my-30"}>
                <h3 className={"text-2xl"}>Todas las certificaciones</h3>
                <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"}>
                    <CoursesSection offset={0}/>
                </div>
            </section>
        </main>
    )
}

export default Courses