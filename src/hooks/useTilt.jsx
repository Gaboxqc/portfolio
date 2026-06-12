import {useMotionValue, useTransform} from "framer-motion";

function useTilt(){
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const fadeInLeft = {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return { rotateX, rotateY, handleMouseMove, handleMouseLeave, fadeInLeft }
}

export default useTilt