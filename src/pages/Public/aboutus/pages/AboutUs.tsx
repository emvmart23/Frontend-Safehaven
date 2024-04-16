import { SectionBlock } from "@/common/components";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Rocket, Star } from "lucide-react";
import { Contact } from "../../request/pages/Request";

const AboutUs = () => {
  return (
    <>
      <figure className="flex w-full h-full aspect-auto">
        <img
          src="/aboutus.svg"
          alt=""
          className="w-full max-h-[60vh] object-cover "
        />
      </figure>
      <SectionBlock
        title="Conoce más de Nosotros"
        className="p-1 flex items-center md:pt-20 py-5 md:gap-20"
      >
        <div className="flex flex-col w-full md:w-[95%] gap-16 xl:max-w-[60%]">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Card className="p-4 pt-8 border-dashed border-2 border-foreground/50 flex flex-col items-center space-y-5 md:w-full justify-center">
            <div>
              <Rocket className="size-12" />
            </div>
            <CardTitle className="font-bold text-[1.5rem]">
              Nuestra misión
            </CardTitle>
            <CardContent className="text-justify">
              Nuestra misión es proporcionar soluciones personalizadas y seguras
              de mantenimiento del hogar que permitan a nuestros clientes
              proteger, mejorar y disfrutar de sus espacios vitales. Nos
              esforzamos por transformar la forma en que se abordan las
              necesidades de mantenimiento del hogar, utilizando procesos
              eficientes para brindar resultados excepcionales a nuestros
              clientes.
            </CardContent>
          </Card>
          <figure>
            <img src="https://res.cloudinary.com/dovqxavyy/image/upload/v1712633510/Abput_us-transformed_jxcfg5.png" alt="" className="rounded-xl w-[20rem] md:w-[40rem] md:h-[31rem]" />
          </figure>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <figure className="order-last md:order-none">
              <img src="https://res.cloudinary.com/dovqxavyy/image/upload/v1712633510/aboutus2-transformed_uzn3ti.png" alt="" className="rounded-xl w-[20rem] md:w-[40rem] md:h-[32rem]"/>
            </figure>
          <Card className="p-4 pt-12 border-dashed border-2 border-foreground/50 flex flex-col items-center space-y-5 md:w-full justify-center">
            <div>
              <Star className="size-12" />
            </div>
            <CardTitle className="font-bold text-[1.5rem]">
              Lo más Importante
            </CardTitle>
            <CardContent className="text-justify">
              Lo que nos mueve es la pasión por crear hogares seguros y
              confortables. Nos impulsa la visión de ser líderes en la industria
              del mantenimiento del hogar, ofreciendo soluciones confiables y
              accesibles que satisfagan las necesidades únicas de cada hogar.
              Nos imaginamos un futuro donde cada persona pueda disfrutar de la
              tranquilidad de saber que su hogar está en buenas manos.
            </CardContent>
          </Card>
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        title="Nuestro Team"
        className=" flex items-center md:gap-20"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <Card className="p-1 flex flex-col items-center justify-center space-y-5 md:">
            <figure className="p-5 w-[14.5rem] md:w-[15rem]">
              <img src="/userExample.svg" alt="" className="rounded-full" />
            </figure>
            <CardTitle className="font-bold text-[1.3rem]">
              Hilari Martinez
            </CardTitle>
            <CardContent className="text-justify">SafeHaven</CardContent>
          </Card>
          <Card className="p-1 flex flex-col items-center justify-center space-y-5">
            <figure className="p-5 w-[14.5rem] md:w-[15rem]">
              <img src="/userExample.svg" alt="" className="rounded-full" />
            </figure>
            <CardTitle className="font-bold text-[1.3rem]">
              Hilari Martinez
            </CardTitle>
            <CardContent className="text-justify">SafeHaven</CardContent>
          </Card>
        </div>
      </SectionBlock>
      <SectionBlock
        title="Contáctanos"
        className="flex items-center md:gap-20 p-1"
      >
        <Contact />
      </SectionBlock>
    </>
  );
};

export default AboutUs;
