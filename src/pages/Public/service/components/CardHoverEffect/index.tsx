import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { useLoadScript } from "@react-google-maps/api";
import MapExample from "../MapExample";

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
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
  //   libraries: ["places"]
  // })

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  py-10">
      {items.map((item, idx) => (
        <Sheet key={item?.link}>
          <div
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#6d28d9] block rounded-3xl"
                  layoutId="hoverBackground"
                  variants={variants}
                />
              )}
            </AnimatePresence>
            <SheetTrigger asChild>
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
            </SheetTrigger>
            <SheetContent side={"top"} className="flex flex-col justify-center items-center h-80">
              <MapExample/>
            </SheetContent>
          </div>
        </Sheet>
      ))}
    </div>
  );
};

export default HoverEffect;
