import { Button } from "@/components/ui/Button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
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
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default SwichToWorkerRole