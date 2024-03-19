import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/routes/guards/links";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import useBreakpointer from "@/hooks/useBreakpointer";

interface Props {
  className?: string
  text?: string
  back?: boolean
}

const TitleAnimation = {
  hidden: {
    opacity: 0,
    y: `0.50em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function AnimatedTitle({ className, text, back }: Props) {
  const navigate = useNavigate()
  const width = useBreakpointer()
  const ctrls = useAnimation()
  
  const handlerBackButton = () =>{
    width > 1280 ? navigate(`/privado/${PrivateRoutes.PROFILE}`, { replace: true }) : navigate("/privado/ayuda", {replace:true})
  }

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
    <>
      {back ?
        <Button onClick={handlerBackButton} variant="outline" className="border-none">
          <ArrowLeft className="md:w-9 md:h-12" />
        </Button>
        : null}
      <h1 className={className}>
        {text?.split(" ").map((character, index) => (
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
    </>
  )
}
