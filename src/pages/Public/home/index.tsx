import { HeaderImageWrapper, List, SectionBlock } from "@/common/components";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carrousel";
import { data, dataList } from "@/data/dataHome";
import { Cog, Star } from "lucide-react";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"

const Images = [
  { id: 1, alt: "Cerrajero" },
  { id: 2, alt: "Electricista" },
  { id: 3, alt: "Plomero" }
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
  return (
    <>
      <HeaderImageWrapper
        className=" bg-foreground/10"
        title="Safehaven"
        paragraph={<span>Transforma tu experiencia de<span className="text-purpouse/80"> contratación de servicios a domicilio en Lima</span> con nuestra plataforma</span>}
      >
        <Carousel opts={{ loop: true }} plugins={[plugin.current]} className="shadow-2xl w-full rounded-2xl ">
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
          <CarouselPrevious className="left-5 text-white" />
          <CarouselNext className="right-5 text-white " />
        </Carousel>
      </HeaderImageWrapper>
      <SectionBlock
        title={"Lo Más Popular "}
        icon={<Star className="w-8 h-8" />}
        className="flex-col justify-center items-center mt-[2rem]"
      >
        <motion.p
          className="
          mb-[3rem]
          w-[40%] 
          min-w-[320px] 
          text-center
          text-[0.9rem] 
          md:text-[1rem]
          text-foreground/90
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Descubre nuestros servicios más populares desde electricistas expertos
          que iluminarán tu hogar con soluciones eficientes, hasta fontaneros y
          gasfiteros dedicados a resolver cualquier problema de plomería.
        </motion.p>
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
              className="pl-6"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
            >
              <CardHeader className="relative md:w-[24rem]">
                <Cog className={`absolute -left-[0.6rem] top-[1.4rem] ${hoveredIndex === index && "animate-spin"} `} size={80} />
                <img src={img} alt="" className="w-80 z-50" />
              </CardHeader>
              <CardContent className="w-[24rem]">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="font-semibold text-[1.2rem] mb-2">
                  {name}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-foreground/80"
                >{text}
                </motion.p>
              </CardContent>
              <CardFooter>
                <motion.button
                  className="bg-[#1649BC] text-white p-2 rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  Solicitar ahora!
                </motion.button>

              </CardFooter>
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
