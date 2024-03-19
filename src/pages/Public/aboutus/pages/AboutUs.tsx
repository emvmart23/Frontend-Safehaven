import { SectionBlock } from "@/common/components"
import { Card, CardContent, CardTitle } from "@/components/ui/Card"
import { Rocket } from "lucide-react"

const AboutUs = () => {
  return (
    <>
    <figure className="flex w-full h-full">
        <img src="/aboutus.svg" alt="" className="w-full max-h-[60vh] object-cover"/>
    </figure>
    <SectionBlock title="Conoce más de Nosotros" className="p-1 flex items-center md:py-20 py-5">
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:w-[95%] gap-8 xl:max-w-[60%]">
        <Card className="p-4 pt-12 border-dashed border-2 border-foreground flex flex-col items-center space-y-5 md:w-full justify-center">
          <div>
          <Rocket className="size-12"/>
          </div>
          <CardTitle className="font-bold text-[1.5rem]">
            Nuestra misión
          </CardTitle>
          <CardContent className="text-justify">
          Lo más importante es conectar a las personas con los mejores servicios locales, impulsar la economía local y crear oportunidades para los emprendedores.
          </CardContent>
        </Card>
        <Card className="p-4 pt-12 border-dashed border-2 border-foreground flex flex-col items-center space-y-5 md:w-full justify-center">
          <div>
          <Rocket className="size-12"/>
          </div>
          <CardTitle className="font-bold text-[1.5rem]">
            Lo más Importante
          </CardTitle>
          <CardContent className="text-justify">
          Lo más importante es conectar a las personas con los mejores servicios locales, impulsar la economía local y crear oportunidades para los emprendedores.
          </CardContent>
        </Card>
      </div>
    </SectionBlock>
    <SectionBlock title="Nuestro Team" className="p-1 flex items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
    <Card className="p-1 flex flex-col items-center justify-center space-y-5 md:">
        <figure className="p-5 w-[14.5rem] md:w-[15rem]">
          <img src="/userExample.svg" alt="" className="rounded-full"/>
        </figure>
        <CardTitle className="font-bold text-[1.3rem]">
          Hilari Martinez
        </CardTitle>
        <CardContent className="text-justify">
          SafeHaven
        </CardContent>
      </Card>
      <Card className="p-1 flex flex-col items-center justify-center space-y-5">
        <figure className="p-5 w-[14.5rem] md:w-[15rem]">
          <img src="/userExample.svg" alt="" className="rounded-full"/>
        </figure>
        <CardTitle className="font-bold text-[1.3rem]">
          Hilari Martinez
        </CardTitle>
        <CardContent className="text-justify">
          SafeHaven
        </CardContent>
      </Card>
      </div>
    </SectionBlock>
    </>
  )
}

export default AboutUs

