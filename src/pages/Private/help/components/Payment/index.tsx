import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import ContactSuport from "../ContactSuport"

function Payment() {
    return (
        <div className=" w-full xl:w-[60%] absolute xl:relative bg-background h-screen shadow-none">
            <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                    <AccordionTrigger>El profesional ha cancelado un servicio ya aceptado</AccordionTrigger>
                    <AccordionContent className="space-y-2 flex flex-col">
                        <div className="space-y-4 font-semibold">
                            
                            <ContactSuport />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Payment