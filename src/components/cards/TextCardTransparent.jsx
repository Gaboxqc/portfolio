import {motion} from "framer-motion";

const TextCardTransparent = ({text, isActive = false}) => {
    return (
        <motion.div
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
            className={`${isActive ? "border-accent/20 text-foreground" : "border-primary/20 text-muted-foreground bg-transparent"} h-fit w-fit rounded-xl border bg-primary/20 p-2 text-sm hover:border-primary/40 cursor-pointer`}>
            <p>{text}</p>
        </motion.div>
    )
}

export default TextCardTransparent