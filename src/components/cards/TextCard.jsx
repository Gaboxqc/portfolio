import {motion} from "framer-motion";

const TextCard = ({Text}) => {
    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className={"bg-primary/20 p-3 rounded-2xl text-center outline-1"}>
            <span>{Text}</span>
        </motion.div>
    )
}

export default TextCard