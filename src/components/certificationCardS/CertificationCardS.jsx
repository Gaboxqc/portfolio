import Link from '../../assets/Link.svg'
import Platzi from '../../assets/Platzi.svg'


const CertificationCardS = ({title, year, academy, link}) => {
    return (
        <div className="max-h-100 bg-card flex flex-col gap-4 p-5 outline-1 rounded-xl">
            <div className={"flex justify-between"}>
                <div className={"h-12 w-12 bg-primary/20 outline-1 rounded-xl flex items-center justify-center"}>
                    <img src={Platzi} alt="Platzi logo" className={"h-8 w-8"}/>
                </div>
                <button className={"self-start"}>
                    <img src={Link} alt="Link icon"/>
                </button>
            </div>
            <h3 className={"font-normal"}>{title}</h3>
            <span className={"text-muted-foreground"}>{academy}</span>
            <span className={"text-muted-foreground text-sm mt-5"}>{year}</span>
        </div>
    )
}

export default CertificationCardS