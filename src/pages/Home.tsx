import { HeaderImageWrapper } from "@/components/HeaderImageWrapper";
import { List } from "@/components/List";
import SectionBlock from "@/components/SectionBlock";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { data, dataList } from "@/data/dataHome";
import { Cog, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeaderImageWrapper
        className=" bg-foreground/10"
        title="Safehaven"
        paragraph="Transforma tu experiencia de contratación de servicios a domicilio en Lima con nuestra plataforma"
      >
        <img
          src="./mainImage.svg"
          alt=""
          className="
            relative
            mx-auto 
            object-cover 
            w-full 
            h-full 
            rounded-2xl"
        />
      </HeaderImageWrapper>
      <SectionBlock
        title={"Lo mas Popular "}
        className="flex-col justify-center items-center"
      >
        <p
          className="
          mb-10 
          w-[40%] 
          min-w-[320px] 
          text-center 
          md:text-[1.1rem]
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores
          dolorum corrupti dolores dolore. Molestiae commodi, magni ipsam
          dignissimos, pariatur voluptas quia nobis voluptatem odio.
        </p>
        <div
          className="
          flex 
          justify-center 
          flex-wrap 
          gap-[4rem] 
          mb-8 
          max-w-[60rem]
          "
        >
          {data.map(({ name, text }, index) => (
            <Card
              key={index}
              className="
                group 
                pb-[4rem] 
                relative 
                overflow-hidden 
                bg-transparent 
                border-none 
                w-[26rem]"
            >
              <CardHeader>
                <div
                  className="
                  group-hover:translate-y-0 
                  transition-all 
                  duration-700 
                  translate-y-full 
                  top-0 
                  right-0 
                  bottom-10 
                  left-0 
                  absolute 
                  bg-gradient-to-b 
                  from-transparent 
                  to-black
                  z-10"
                />
                <img
                  src="https://picsum.photos/300/300"
                  alt=""
                  className="
                    transition-all 
                    group-hover:scale-125 
                    duration-700 
                    mr-2 
                    h-60 
                    w-full"
                />
              </CardHeader>
              <CardContent
                className="
                bg-foreground 
                absolute 
                z-10 
                bottom-0 
                left-0 
                w-full 
                h-24 
                flex 
                flex-col 
                justify-center 
                items-center"
              >
                <div
                  className="
                  w-full 
                  flex 
                  justify-center
                  absolute 
                  -top-5 
                  z-20"
                >
                  <Cog
                    className="
                    group-hover:bg-white
                    group-hover:text-black 
                      group-hover:rotate-180 
                      w-10 
                      h-10
                      bg-black 
                      text-white 
                      p-2 
                      rounded-full 
                      transition-all"
                  />
                </div>
                <div
                  className="
                  group-hover:hidden 
                  transition-all 
                  duration-1000 
                  w-5 
                  absolute 
                  overflow-hidden 
                  inline-block 
                  right-0 
                  -top-6"
                >
                  <div
                    className="
                    h-6 
                    bg-foreground/90 
                    -rotate-45 
                    transform 
                    origin-bottom-right"
                  />
                </div>
                <h2 className="font-bold text-background mt-6">{name}</h2>
                <span className="text-background">{text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock title={"Porque Safehaven ?"}>
        <div className="relative flex flex-wrap w-[85%] mt-12 px-10 mx-auto">
          <ul className="space-y-5 flex flex-col w-[60%] shadow-2xl rounded-xl py-10 px-10">
            {dataList.map(({ icon, name, text }, index) => (
              <List key={index} icon={icon} title={name} paragraph={text} />
            ))}
          </ul>
          <figure className="w-[40%]">
            <img src="./secondaryImage.svg" alt="" className="w-[22rem] h-full mx-auto" />
          </figure>
        </div>
        
      </SectionBlock>
    </>
  );
}
