import { motion } from "framer-motion";
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

export default function AnimatedTitle({ className, text, back }: Props) {
  const navigate = useNavigate()
  const width = useBreakpointer()

  const handlerBackButton = () => {
    width > 1280 ? navigate(`/privado/${PrivateRoutes.PROFILE}`, { replace: true }) : navigate("/privado/ayuda", { replace: true })
  }

  return (
    <>
      {back &&
        <Button onClick={handlerBackButton} variant="outline" className="border-none">
          <ArrowLeft className="md:w-9 md:h-12" />
        </Button>
        }
      <motion.h1 className={className}
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {text}
      </motion.h1>
    </>
  )
}
