import { AnimatedTitle } from "@/components";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function SectionBlock({ title, children, className, icon }: Props) {
  return (
    <section
      className={cn(
        `flex-col 
        flex 
        justify-center 
        items-start 
        gap-4
        p-20`,
        className
      )}
    >
      <div
        className="
        text-center 
        inline-flex 
        justify-center 
        items-center 
        gap-2
      "
      >
        <AnimatedTitle
          text={title}
          className="
            text-[1.4rem] md:text-[2.2rem] text-foreground font-semibold
            " />
          {icon}
      </div>
      {children}
    </section>
  );
}

export default SectionBlock;




