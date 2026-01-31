import { motion } from "framer-motion";
import styles from "../style/HeroText.module.css";

const lines = [
    "Innovation—Real",
    "Clients Driven by",
    "Marketing"
];

const letterAnimation = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: (i) => ({
        opacity: 1,
        rotateX: 15,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const HeroText = () => {
    return (
        <motion.div
            className={styles.textBox}
            initial="hidden"
            animate="visible"
        >
            <h1 className={styles.title}>
                {lines.map((line, lineIndex) => (
                    <div key={lineIndex} className={styles.line}>
                        {line.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterAnimation}
                                className={
                                    line === "Marketing" ? styles.highlight : styles.letter
                                }
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                ))}
            </h1>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={styles.btn}
            >
                Discover More <span>→</span>
            </motion.button>
        </motion.div>
    );
};

export default HeroText;
