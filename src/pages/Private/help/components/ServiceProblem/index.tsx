import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { Button } from "@/components/ui/Button"

function ServiceProblem() {
    return (
        <Accordion type="single" collapsible className=" w-[90%] xl:w-[60%] absolute xl:relative bg-background h-screen px-0 md:px-20 xl:px-0">
            <AccordionItem value="item-1">
                <AccordionTrigger>El profesional no ha aceptado mi solicitud</AccordionTrigger>
                <AccordionContent className="space-y-2 flex flex-col">
                    <div className="space-y-4 font-semibold">
                        <p>No te preocupes, si reclamas se te reembolsará la totalidad del importe.</p>

                        <p className="font-semibold text-[1.2rem]">IMPORTANTE: Dispones de 24h para reclamar tu servicio.</p>
                    </div>

                    <Button variant="link" className="w-min px-0 text-blue-500">Contacta con nosotros</Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>EL profesional no se ha presentado</AccordionTrigger>
                <AccordionContent className="space-y-4 flex flex-col">
                    <p>Sentimos enormemente las molestias causadas por el profesional. <strong>No te preocupes, si reclamas se te reembolsará la totalidad del importe.</strong></p>
                    <strong>IMPORTANTE: Dispones de 24h para reclamar tu servicio.</strong>
                    <ol className="list-decimal space-y-1">
                        <li>dasdasd</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>No encuentro el servicio que necesito</AccordionTrigger>
                <AccordionContent className="space-y-3 font-semibold">
                    
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>No encuentro el servicio que necesito</AccordionTrigger>
                <AccordionContent className="space-y-3 font-semibold">

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export default ServiceProblem