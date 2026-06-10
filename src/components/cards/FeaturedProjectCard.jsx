import TextCardSm from "./TextCardSm.jsx";

const FeaturedProjectCard = ({position, year, title, description, technologies}) => {
    return (
        <div className={"grid grid-cols-12 px-4 xl:h-screen"}>
            <span className={"col-span-4 text-7xl text-accent font-bold"}>0{position}</span>
            <div className="col-span-8 flex flex-col gap-5">
                <span className={"text-muted-foreground text-sm"}>{year}</span>
                <h3 className={"text-2xl"}>{title}</h3>
                <p className={"text-muted-foreground text-md"}>{description}</p>
                <div className={"flex flex-wrap gap-2"}>
                    {technologies.map((t) => {
                        return(
                            <TextCardSm Text={t}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjectCard