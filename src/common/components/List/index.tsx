import { AnimatedTitle } from "@/components";
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Props {
  icon?: React.ReactNode;
  title?: string;
  paragraph?: string;
  className?: string
}

function List({ icon, title, paragraph, className }: Props) {
  return (
    <li className={cn("flex justify-center items-start gap-4 w-[80%]", className)}>

      {icon && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/90 mt-[0.3rem]">
          {icon}
        </motion.div>
      )}
      <div className="flex-1">
        <AnimatedTitle text={title} className="text-[1.2rem] md:text-xl font-medium leading-loose text-foreground" />
        <motion.li
          className="text-foreground/70"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >{paragraph}</motion.li>
      </div>
    </li>
  );
}

export default List;
