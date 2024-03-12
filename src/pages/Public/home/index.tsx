import { HeaderImageWrapper, List, SectionBlock } from "@/common/components";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carrousel";
import { data, dataList } from "@/data/dataHome";
import { Cog, Star } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import Footer from "@/components/Footer";

const Images = [
  { id: 1, alt: "Cerrajero" },
  { id: 2, alt: "Electricista" },
  { id: 3, alt: "Plomero" }
]

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
  return (
    <>
      <HeaderImageWrapper
        className=" bg-foreground/10"
        title="Safehaven"
        paragraph="Transforma tu experiencia de contratación de servicios a domicilio en Lima con nuestra plataforma"
      >
        <Carousel opts={{ loop: false }} plugins={[plugin.current]} className="shadow-2xl w-full rounded-2xl ">
          <CarouselContent>
            {Images.map(({ id, alt }) => (
              <CarouselItem key={id} className="w-full h-full">
                <img
                  src={`/main/main-${id}.svg`}
                  alt={alt}
                  className="rounded-2xl w-full h-[30rem] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </HeaderImageWrapper>
      <SectionBlock
        title={"Lo más Popular "}
        icon={<Star className="w-8 h-8" />}
        className="flex-col justify-center items-center mt-[2rem]"
      >
        <p
          className="
          mb-[3rem]
          w-[40%] 
          min-w-[320px] 
          text-center
          text-[0.9rem] 
          md:text-[1rem]
          text-foreground/90
          ">
          Descubre nuestros servicios más populares desde electricistas expertos
          que iluminarán tu hogar con soluciones eficientes, hasta fontaneros y
          gasfiteros dedicados a resolver cualquier problema de plomería.
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
          {data.map(({ name, text, img }, index) => (
            <Card
              key={index}
              className="
                group
                pb-16 
                md:pb-[4rem] 
                relative 
                overflow-hidden 
                bg-transparent 
                border-none
                w-[18rem]
                sm:w-[26rem] 
                shadow-b-2xl"
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
                  src={img}
                  alt=""
                  className="
                    transition-all 
                    group-hover:scale-125 
                    duration-700 
                    mr-2
                    sm:h-60
                    h-[10rem] 
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
                h-[6rem]
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
                <h2 className="font-bold text-background mt-7">{name}</h2>
                <span className="font-medium text-background text-[0.8rem] text-center relative top-">
                  {text}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock title={"Porque Safehaven ?"} className="items-center bg-foreground/10 rounded-xl p-10">
        <div className="relative flex xl:w-[85%] mt-12 mx-auto">
          <ul className="gap-16 xl:flex flex-col justify-center md:items-center bg-background/80 xl:w-[60%] shadow-2xl rounded-xl py-[2rem] md:py-[4rem]">
            {dataList.map(({ icon, name, text }, index) => (
              <List key={index} icon={icon} title={name} paragraph={text} className="mx-auto" />
            ))}
          </ul>
          <figure className="w-[40%] hidden xl:block">
            <img
              src="./secondaryImage.svg"
              alt=""
              className="w-[22rem] h-full mx-auto"
            />
          </figure>
        </div>
      </SectionBlock>
    </>
  );
}
