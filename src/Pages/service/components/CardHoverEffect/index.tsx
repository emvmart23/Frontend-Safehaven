import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";

interface Props {
  title: string;
  description: string;
  link: string;
}

interface Items {
  items: Props[];
}

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, delay: 0.2 },
  },
};

const HoverEffect = ({ items }: Items) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
      {items.map((item, idx) => (
        <Link to={item?.link} key={item?.link}>
          <div
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  variants={variants}
                />
              )}
            </AnimatePresence>
            <Card className="rounded-2xl h-full w-full p-[2.5rem] overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-50">
              <CardTitle className="text-zinc-100 font-bold tracking-wide mt-4">
                {" "}
                {item?.title}{" "}
              </CardTitle>
              <CardDescription className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                {" "}
                {item?.description}{" "}
              </CardDescription>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HoverEffect;
