import {motion} from "framer-motion";

function ContactCard({title, label, Icon, link}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: "spring"}}
            viewport={{once: true}}
            className={"flex max-h-100 flex-col items-center gap-4 rounded-xl bg-card py-8 outline-1"}>
            <div
                className={"flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 outline-1"}>
                <Icon/>
            </div>
            <span className={"text-xl"}>{title}</span>
            <a href={link}
               className={"font-normal text-muted-foreground hover:text-accent"}>
                {label}
            </a>
        </motion.div>
    )
}

export default ContactCard