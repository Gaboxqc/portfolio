import TextCardTr from "../components/textCardTr/TextCardTr.jsx";
import CertificationCardMain from "../components/certificationCardMain/CertificationCardMain.jsx";
import CertificationCard from "../components/certificationCard/CertificationCard.jsx";

const Certifications = () => {
    return (
        <main className={"container pt-24 flex flex-col gap-8 mx-auto px-4 mb-30"}>
            <section className={"flex flex-col gap-8"}>
                <p className={"text-muted-foreground"}>Volver</p>
                <h1 className={"text-5xl md:text-6xl"}>Certificaciones</h1>
                <p className={"text-muted-foreground text-lg max-w-4xl"}>Un registro completo de mis certificaciones profesionales, validando experiencia en desarrollo, cloud computing, DevOps y seguridad.</p>
            </section>
            <section className={"flex flex-col gap-8"}>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por categoría</p>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardTr text={"Cloud"}/></li>
                        <li><TextCardTr text={"DevOps"}/></li>
                        <li><TextCardTr text={"Frontend"}/></li>
                        <li><TextCardTr text={"Backend"}/></li>
                        <li><TextCardTr text={"Bases de datos"}/></li>
                        <li><TextCardTr text={"Seguridad"}/></li>
                    </ul>
                </div>
                <div>
                    <p className={"mb-2 text-muted-foreground"}>Filtrar por lenguaje de programación</p>
                    <ul className={"flex gap-2 flex-wrap"}>
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
                    <ul className={"flex gap-2 flex-wrap"}>
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
                <div className={"h-16 bg-card flex items-center justify-between p-4 rounded-xl border"}>
                    <p className={"text-muted-foreground text-sm"}>2 proyectos encontrados</p>
                    <button className={"bg-primary/20 py-2 px-4 rounded-xl border text-sm font-normal"}><span>X </span> Limpiar filtros</button>
                </div>
            </section>
            <section className={"flex flex-col gap-8"}>
                <h3 className={"text-2xl"}>Certificaciones Principales</h3>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    <CertificationCardMain title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCardMain title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCardMain title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCardMain title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                </div>

                <h3 className={"text-2xl"}>Todas las certificaciones</h3>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    <CertificationCard title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCard title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCard title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                    <CertificationCard title={"AWS Certified Solutions Architect"} year={2025} academy={"Platzi"} link={"https://google.com"}/>
                </div>
            </section>
        </main>
    )
}

export default Certifications