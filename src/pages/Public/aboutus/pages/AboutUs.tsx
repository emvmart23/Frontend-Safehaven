import { SectionBlock } from "@/common/components"
import { Card, CardContent, CardTitle } from "@/components/ui/Card"
import { Rocket } from "lucide-react"

const AboutUs = () => {
  return (
    <>
    <figure className="flex w-full h-full">
        <img src="public/aboutus.svg" alt="" className="w-full max-h-[60vh] object-cover"/>
    </figure>
    <SectionBlock title="Conoce más de Nosotros" className="p-1 flex items-center py-20">
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

    </SectionBlock>
    </>
  )
}

export default AboutUs

