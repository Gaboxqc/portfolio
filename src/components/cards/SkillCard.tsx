import {motion} from "framer-motion";

import {ArtIcon, CodeIcon, LightningIcon, RocketIcon} from "../../assets/icons/index";
import useTilt from "../../hooks/useTilt";
import type {IconComponent} from "../../types";

type SkillIconName = "Code" | "Art" | "Rocket" | "Lightning";

const icons: Record<SkillIconName, IconComponent> = {
    Code: CodeIcon,
    Art: ArtIcon,
    Rocket: RocketIcon,
    Lightning: LightningIcon,
}

interface SkillCardProps {
    Icon: SkillIconName;
    Title: string;
    Description: string;
}

const SkillCard = ({Icon, Title, Description}: SkillCardProps) => {
    const ResolvedIcon = icons[Icon] ?? CodeIcon;
    const {rotateX, rotateY, handleMouseMove, handleMouseLeave, fadeInLeft} = useTilt()

    // noinspection JSValidateTypes
    return (
        <motion.div
            {...fadeInLeft}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{rotateX, rotateY, transformPerspective: 800}}
            whileHover={{scale: 1.03}}
            className="my-4 flex max-w-100 flex-col gap-y-4 rounded-xl border border-primary/30 bg-card p-4 transition-colors duration-300 hover:border-primary"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/25 text-primary">
                <ResolvedIcon/>
            </div>
            <h2>{Title}</h2>
            <p className="text-muted-foreground">{Description}</p>
        </motion.div>
    )
}

export default SkillCard
