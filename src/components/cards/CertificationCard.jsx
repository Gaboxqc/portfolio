import {motion} from "framer-motion";

import {PlatziIcon, LinkIcon, DateIcon} from "../../assets/icons/index.js";
import TextCardSm from "./TextCardSm.jsx";

const CertificationCard = ({title, academy, year, tags = [], serial, url, isVerified}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className="z-1 flex max-h-100 flex-col gap-4 rounded-xl border bg-card p-5 border-yellow-200/40 rounded-xl hover:border-yellow-200/70">
            <div className={"flex h-16 justify-between "}>
                <div className={"flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 outline-1"}>
                    <PlatziIcon className={"h-8 w-8"}/>
                </div>
                <div className={"hidden"}>
                    <p className={"rounded-xl border border-accent p-2 text-xs text-accent"}>Verificado</p>
                </div>
            </div>
            <div className={"flex flex-col gap-4"}>
                <h3 className={"font-normal"}>{title}</h3>
                <p className={"text-muted-foreground"}>{academy}</p>
                <div className={"flex items-center gap-2"}>
                    <DateIcon className={"h-5 w-5"}/>
                    <p className={"text-sm text-muted-foreground"}>{year}</p>
                </div>
                <div className={"flex items-center justify-between"}>
                    <ul className={"flex max-w-xs flex-wrap gap-2"}>
                        {tags.map((t) => {
                            return(
                                <li><TextCardSm Text={t.name}/></li>
                            )
                        })}
                    </ul>
                    <button className={"self-start"}>
                        <LinkIcon/>
                    </button>
                </div>
            </div>

        </motion.div>
    )
}

export default CertificationCard