import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function SectionBlock({ title, children, className }: Props) {
  return (
    <section
      className={cn(
        `flex-col 
        flex 
        justify-center 
        items-start 
        gap-4
        text-foreground/80
        p-20`,
        className
      )}
    >
      <h2
        className="
        text-[2.4rem] 
        font-bold 
        flex 
        items-center 
        gap-4"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionBlock;
