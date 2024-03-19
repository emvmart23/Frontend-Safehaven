import { AnimatedTitle } from "@/components";
import { cn } from "@/lib/utils"

interface Props {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  back?: boolean;
}

function SectionBlock({ title, children, className, icon, back }: Props) {
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
          back={back}
          text={title}
          className="
            text-[1.4rem] md:text-[1.9rem] xl:text-[2.1rem] text-foreground font-semibold
            " />
          {icon}
      </div>
      {children}
    </section>
  );
}

export default SectionBlock;




