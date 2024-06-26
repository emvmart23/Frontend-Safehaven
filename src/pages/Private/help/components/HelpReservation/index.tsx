import { List } from "@/common/components"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { Button } from "@/components/ui/Button"

function HelpReservation() {
    return (
        <div className=" w-full xl:w-[60%] absolute xl:relative bg-background h-screen shadow-none">
            <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                    <AccordionTrigger>El profesional dice estar disponible pero no puedo reservar</AccordionTrigger>
                    <AccordionContent className="space-y-2 flex flex-col">
                        <div className="space-y-4 font-semibold">
                            <p>Es posible que se deba a que:</p>
                            <ul className="w-[80%] space-y-3">
                                <List paragraph="a) El profesional tiene su agenda ocupada por deplazamientos entre servicios" />
                                <List paragraph="b) Estas intentando contratar con menos de 24 horas de antelación" />
                            </ul>
                            <p className="font-semibold text-[1.2rem]">¿ Tienes alguna duda ?</p>
                        </div>
                        <strong>Contacta con nosotros, estaremos encantados de ayudarte en lo que necesites</strong>
                        <Button variant="link" className="w-min px-0 text-blue-500">Contacta con nosotros</Button>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Quiero reservar con menos de 24 horas de antelación</AccordionTrigger>
                    <AccordionContent>
                        <p className="font-semibold text-foreground/70">
                            Para la organización de los profesionales, por defecto, no está habilitada la
                            reserva directa con menos de 24h de antelación.
                            <br />
                            No obstante, si el profesional te confirma que está disponible para cuando
                            necestias, pídele por el chat que te envíe una Propuesta de servicio. Con él
                            podrás contratar sin el límite de 24h.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>No encuentro el servicio que necesito</AccordionTrigger>
                    <AccordionContent className="space-y-3 font-semibold">
                        <p>Posibles causas:</p>
                        <span>Servicio no incluido en las tablas de precios de los trabajadores:</span>
                        <p className="text-foreground/70">
                            Es probable que sólo pueda realizarse bajo Propuesta previa del profesional.
                            Solicita por el chat al profesional que te envíe una Propuesta para poder
                            contratar el servicio a tu medida.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Ayuda para encontar mi trabajador ideal</AccordionTrigger>
                    <AccordionContent className="space-y-3 font-semibold">
                        <p>Si quieres que alguien del equipo de Webel te ayude a encontrar tu profesional ideal, </p>
                        <List paragraph="Descripcion detallada del servicio" />
                        <List paragraph="Horario en el que te gustaria recibirlo" />
                        <List paragraph="Dirección" />
                        <p></p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default HelpReservation