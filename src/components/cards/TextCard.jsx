import {motion} from "framer-motion";

const TextCard = ({text}) => {
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className={"bg-card p-3 rounded-2xl text-center border border-primary/30 hover:border-primary/80"}>
            <p>{text}</p>
        </motion.div>
    )
}

export default TextCard