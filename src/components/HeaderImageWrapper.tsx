interface Props {
  title?: string;
  paragraph?: string;
  className?: string;
  children: React.ReactNode;
}

export function HeaderImageWrapper({
  title,
  className,
  paragraph,
  children,
}: Props) {
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 relative w-full justify-center gap-3 h-[30rem] bg-transparent rounded-xl mx-auto">
      <div
        className={`${className} flex justify-center items-center h-[15rem] xl:h-full w-full rounded-2xl p-10 md:p-14`}
      >
        <div>
          <h1 className="text-[1.8rem] md:text-[4rem] font-medium">{title}</h1>
          <p className="sm:text-[1.3rem] font-medium">{paragraph}</p>
        </div>
      </div>
      <div className="h-[33rem] xl:h-full w-full rounded-2xl">{children}</div>
    </div>
  );
}
