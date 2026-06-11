import {motion} from "framer-motion";

const TextCard = ({text}) => {
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className={"bg-primary/20 p-3 rounded-2xl text-center outline-1"}>
            <p>{text}</p>
        </motion.div>
    )
}

export default TextCard