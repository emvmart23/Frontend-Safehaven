interface Props {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

function List({ icon, title, paragraph }: Props) {
  return (
    <li className="flex justify-center items-start gap-4 w-[80%]">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/90 mt-[0.3rem]">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium leading-loose text-foreground">{title}</h4>
        <p className="text-gray-500">{paragraph}</p>
      </div>
    </li>
  );
}

export default List;
