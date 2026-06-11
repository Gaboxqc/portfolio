import { useState, useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const CHARS = "ABCDEFG0123456789¡¿#!$%&";

export default function DecryptLoop({
    words = [
        "Desarrollador de software",
        "Softwareentwickler",
        "Software Developer",
    ],
    speed = 1.2,
    delayBetweenWords = 2000,
}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const count = useMotionValue(0);

    const currentWordRef = useRef(words[currentWordIndex]);

    useEffect(() => {
        currentWordRef.current = words[currentWordIndex];
    }, [currentWordIndex, words]);

    const displayText = useTransform(count, (latest) => {
        const currentWord = currentWordRef.current;

        const iteration = Math.round(latest);

        return currentWord
            .split("")
            .map((letter, index) => {
                if (index < iteration) return letter;
                if (letter === " ") return " ";

                return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
    });

    useEffect(() => {
        let controls;
        let timeoutId;

        count.set(0);

        const currentWord = words[currentWordIndex];

        controls = animate(count, currentWord.length, {
            duration: speed,
            ease: "linear",
            onComplete: () => {
                timeoutId = setTimeout(() => {
                    setCurrentWordIndex(
                        (prev) => (prev + 1) % words.length
                    );
                }, delayBetweenWords);
            },
        });

        return () => {
            controls?.stop();
            clearTimeout(timeoutId);
        };
    }, [
        currentWordIndex,
        words,
        speed,
        delayBetweenWords,
        count,
    ]);

    return (
        <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-3xl text-transparent md:mt-1">
            <motion.span>{displayText}</motion.span>


        </span>
    );
}

