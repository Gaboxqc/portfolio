import {motion} from "framer-motion";

import {ArtIcon, CodeIcon, LightningIcon, RocketIcon} from "../../assets/icons/index.js";

const SkillCard = ({Icon, Title, Description}) => {
    switch (Icon) {
        case 'Code': {
            Icon = <CodeIcon/>
            break
        }
        case 'Art': {
            Icon = <ArtIcon/>
            break
        }
        case 'Rocket': {
            Icon = <RocketIcon/>
            break
        }
        case 'Lightning': {
            Icon = <LightningIcon/>
            break
        }
        default: {
            Icon = <CodeIcon/>
            break
        }

    }

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className={"my-4 flex max-w-100 flex-col gap-y-4 rounded-xl bg-primary/20 p-4 outline-1 transition-colors duration-300 hover:bg-primary/30"}>
            <div className={"flex h-10 w-10 items-center justify-center rounded-xl bg-primary/25 outline-1"}>
                {Icon}
            </div>
            <h2>{Title}</h2>
            <p className={"text-muted-foreground"}>{Description}</p>
        </motion.div>
    )
}

export default SkillCard