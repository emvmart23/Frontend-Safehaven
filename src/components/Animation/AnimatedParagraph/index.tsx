import { motion } from "framer-motion"
interface Props {
    text?: string
    className?: string
}

export default function AnimatedParagraph({ text, className }: Props) {

    const Paragraph = text?.split("  ");
    return (
        <>
            {Paragraph?.map((el, index) => (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: index / 10,
                    }}
                    key={index}
                    className={className}
                >
                    {el}
                </motion.p>
            ))}
        </>
    )
}