import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/Sheet";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

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
                  className="absolute inset-0 h-full w-full bg-[#6d28d9] block  rounded-3xl"
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
            <SheetContent side={"top"}>
              <SheetHeader>
                <SheetTitle>Usar tu ubicacion actulal</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
              </div>
            </SheetContent>
          </div>
        </Sheet>
      ))}
    </div>
  );
};

export default HoverEffect;
