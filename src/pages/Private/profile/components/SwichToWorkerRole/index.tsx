import { Button } from "@/components/ui/Button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { RefreshCw } from "lucide-react"

function SwichToWorkerRole() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex justify-start gap-3 h-[2.8rem]"
                >
                    <RefreshCw size={20} />
                    Cambiar a trabajador
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="py-8">
                        <QuestionMarkCircledIcon className="w-24 h-24 mx-auto" />
                    </DialogTitle>
                    <DialogDescription className="font-semibold text-foreground/70">
                        ¿Quieres ofrecer tus servicios? ¡Descarga la aplicación y comienza a trabajar!, Recuerda mantener tu perfil actualizado y ofrecer un servicio de calidad. ¡Empieza hoy mismo!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default SwichToWorkerRole