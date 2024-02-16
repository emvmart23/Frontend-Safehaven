import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string
  text: string
}

const TitleAnimation = {
  hidden: {
    opacity: 0,
    y: `0.30em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function AnimatedTitle({ className, text }: Props) {
  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
    if (!inView) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView])

  return (
    <h1 className={className}>
      {text.split(" ").map((character, index) => (
        <motion.span
          key={index}
          ref={ref}
          animate={ctrls}
          aria-hidden="true"
          variants={TitleAnimation}
          className="inline-block mr-2"
        >
          {character}
        </motion.span>
      ))}
    </h1>
  )
}
