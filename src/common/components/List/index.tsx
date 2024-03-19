import { AnimatedParagraph, AnimatedTitle } from "@/components";
import { cn } from "@/lib/utils"

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
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/90 mt-[0.3rem]">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <AnimatedTitle text={title} className="text-[1.2rem] md:text-xl font-medium leading-loose text-foreground" />
        <AnimatedParagraph text={paragraph} className="text-foreground/70" />
      </div>
    </li>
  );
}

export default List;
