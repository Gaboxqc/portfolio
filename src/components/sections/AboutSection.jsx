import SkillCard from "../cards/SkillCard.jsx";
import TextCard from "../cards/TextCard.jsx";
import useLanguage from "../../hooks/useLanguage.jsx";

function AboutSection() {
    const {translate} = useLanguage()

    return (
        <section id={"about"} className={"container mx-auto flex h-full flex-col items-center px-5 py-16 xl:h-screen"}>
            <h2 className={"bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-center text-5xl leading-16 text-transparent"}>
                {translate("about.title")}
            </h2>
            <p className={"mx-4 my-8 text-center leading-7 text-muted-foreground"}>{translate("about.description")}</p>
            <div
                className={"grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                <SkillCard Icon={"Code"} Title={translate("about.clean-code")}
                           Description={translate("about.clean-code-description")}/>
                <SkillCard Icon={"Art"} Title={translate("about.ai-interfaces")}
                           Description={translate("about.ai-interfaces-description")}/>
                <SkillCard Icon={"Rocket"} Title={translate("about.high-performance")}
                           Description={translate("about.high-performance-description")}/>
                <SkillCard Icon={"Lightning"} Title={translate("about.fast-delivery")}
                           Description={translate("about.fast-delivery-description")}/>
            </div>
            <h2 className={"my-10 text-2xl"}>Tecnologías y herramientas</h2>
            <div className="grid w-full grid-cols-2 gap-3 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
                <TextCard text={"HTML"}/>
                <TextCard text={"CSS"}/>
                <TextCard text={"JavaScript"}/>
                <TextCard text={"Python"}/>
                <TextCard text={"React"}/>
                <TextCard text={"FastAPI"}/>
                <TextCard text={"PostgreSQL"}/>
                <TextCard text={"Figma"}/>
            </div>
        </section>
    )
}

export default AboutSection
