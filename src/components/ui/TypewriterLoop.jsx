import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

export default function TypewriterLoop({
  words = ["Desarrollador de software", "Softwareentwickler", "Software Developer"],
  typingSpeed = 0.04,
  deletingSpeed = 0.02,
  delayBetweenWords = 2000
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const count = useMotionValue(0);

  const displayText = useTransform(count, (latest) =>
    words[currentWordIndex].slice(0, Math.round(latest))
  );

  const [text, setText] = useState("");
  useEffect(() => {
    return displayText.on("change", (latest) => setText(latest));
  }, [displayText]);

  useEffect(() => {
    let controls;
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      controls = animate(count, currentWord.length, {
        duration: currentWord.length * typingSpeed,
        ease: "linear",
        onComplete: () => {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      });
    } else {
      controls = animate(count, 0, {
        duration: currentWord.length * deletingSpeed,
        ease: "linear",
        onComplete: () => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      });
    }

    return () => controls?.stop();
  }, [currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-3xl text-transparent md:mt-1">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-1 h-8 bg-accent ml-1 align-middle"
      />
    </span>
  );
}