import { AnimatedTitle } from "@/components";
import { motion } from "framer-motion"

interface Props {
  title: string;
  paragraph: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

function HeaderImageWrapper({
  title,
  className,
  paragraph,
  children,
}: Props ) {

  return (
    <header className="flex flex-col xl:flex-row w-full gap-3 h-[40rem] xl:h-[30rem] bg-transparent rounded-xl mx-auto">
      <div
        className={`${className} flex-col flex justify-center h-2/6 xl:h-full w-full rounded-2xl p-10 md:p-14 shadow-2xl`}
      >
        <AnimatedTitle 
          text={title} 
          className="text-[1.8rem] md:text-[3rem] lg:text-[4rem]  text-foreground font-medium" />
        <motion.p
          className="md:text-[1.4rem] text-foreground/80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{delay: 0.2, duration: 0.3}}
          variants={{
            hidden: { opacity: 0, y:50 },
            visible:{ opacity:1, y:0}
          }}
        >
          {paragraph}
        </motion.p>
      </div>
      <>{children}</>
    </header>
  );
}

export default HeaderImageWrapper
