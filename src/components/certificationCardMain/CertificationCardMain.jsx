import Platzi from "../../assets/Platzi.svg";
import Link from "../../assets/Link.svg";
import Star from "../../assets/Star.svg";
import FilledStar from "../../assets/FilledStar.svg";
import TextCardSm from "../textCardSm/TextCardSm.jsx";

const CertificationCardMain = ({title, academy, year, tags, seria, url, isMain, isVerified}) => {
  return (
      <div className="max-h-100 bg-card flex flex-col gap-4 p-5 border border-yellow-200/40 rounded-xl hover:border-yellow-200/70 relative">
            <div className={"flex h-16 justify-between"}>
                <div className={"h-12 w-12 bg-primary/20 outline-1 rounded-xl flex items-center justify-center"}>
                    <img src={Platzi} alt="Platzi logo" className={"h-8 w-8"}/>
                </div>
                <div className={"self-end"}>
                    <p className={"border border-accent text-accent rounded-xl p-2 text-xs"}>Verificado</p>
                </div>
            </div>
            <div className={"flex flex-col gap-4"}>
                <h3 className={"font-normal"}>{title}</h3>
                <p className={"text-muted-foreground"}>{academy}</p>
                <p className={"text-muted-foreground text-sm"}>{year}</p>
                <div>
                    <ul className={"flex gap-2 flex-wrap"}>
                        <li><TextCardSm Text={"Cloud"}/></li>
                    </ul>
                </div>
                <div className={"flex items-center justify-between"}>
                    <TextCardSm Text={"AWS-SAA-PRO-2025"}/>
                    <button className={"self-start"}>
                    <img src={Link} alt="Link icon"/>
                </button>
                </div>
            </div>
            <img src={FilledStar} alt={"Filled star"} className={"absolute right-4 top-4"}/>
        </div>
  )
}

export default CertificationCardMain