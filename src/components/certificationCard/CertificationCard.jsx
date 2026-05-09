import Platzi from "../../assets/Platzi.svg";
import Link from "../../assets/Link.svg";
import Date from "../../assets/Date.svg";
import TextCardSm from "../textCardSm/TextCardSm.jsx";

const CertificationCard = ({title, academy, year, tags, seria, url, isMain, isVerified}) => {
  return (
      <div className="max-h-100 bg-card flex flex-col gap-4 p-5 border rounded-xl">
            <div className={"flex h-16 justify-between"}>
                <div className={"h-12 w-12 bg-primary/20 outline-1 rounded-xl flex items-center justify-center"}>
                    <img src={Platzi} alt="Platzi logo" className={"h-8 w-8"}/>
                </div>
                <div className={"hidden"}>
                    <p className={"border border-accent text-accent rounded-xl p-2 text-xs"}>Verificado</p>
                </div>
            </div>
            <div className={"flex flex-col gap-4"}>
                <h3 className={"font-normal"}>{title}</h3>
                <p className={"text-muted-foreground"}>{academy}</p>
                <div className={"flex gap-2 items-center"}>
                    <img src={Date} alt="Date icon" className={"h-5 w-5"}/>
                    <p className={"text-muted-foreground text-sm"}>{year}</p>
                </div>
                <div className={"flex items-center justify-between"}>
                    <ul className={"flex gap-2 flex-wrap max-w-xs"}>
                        <li><TextCardSm Text={"Cloud"}/></li>
                    </ul>
                    <button className={"self-start"}>
                        <img src={Link} alt="Link icon"/>
                    </button>
                </div>
            </div>

        </div>
  )
}

export default CertificationCard