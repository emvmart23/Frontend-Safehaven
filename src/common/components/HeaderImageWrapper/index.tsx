import { AnimatedParagraph, AnimatedTitle } from "@/components";

interface Props {
  title: string;
  paragraph: string;
  className?: string;
  children: React.ReactNode;
}

function HeaderImageWrapper({
  title,
  className,
  paragraph,
  children,
}: Props) {
  return (
    <header className="flex flex-col xl:flex-row w-full gap-3 h-[40rem] xl:h-[30rem] bg-transparent rounded-xl mx-auto">
      <div
        className={`${className} flex-col flex justify-center h-2/6 xl:h-full w-full rounded-2xl p-10 md:p-14 shadow-2xl`}
      >
        <AnimatedTitle text={title} className="text-[1.8rem] md:text-[4rem] text-foreground font-medium" />
        <AnimatedParagraph text={paragraph} className="sm:text-[1.2rem] text-foreground/80" />
      </div>
      <figure className="shadow-2xl h-full w-full rounded-2xl">{children}</figure>
    </header>
  );
}

export default HeaderImageWrapper
