import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../../assets/icons/index.js";

function ResultsBar({ count, label, clearLabel, onClear }) {
    return (
        <motion.div
            key="results-bar"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex h-16 items-center justify-between rounded-xl border bg-card p-4"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={count}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-[#8B9DC3]"
                >
                    {count} {label}
                </motion.span>
            </AnimatePresence>

            <button
                onClick={onClear}
                className="flex items-center gap-1 rounded-xl border bg-primary/20 px-4 py-2 text-sm font-normal text-muted-foreground cursor-pointer hover:bg-primary/30 hover:text-foreground"
            >
                <CloseIcon className="h-5 w-5" />
                {clearLabel}
            </button>
        </motion.div>
    );
}

export default ResultsBar;