import { Button } from "@/components/ui/Buttom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { LogoSafehaven } from "@/components/Icons";
import RegisterForm from "../../forms/RegisterForm";

interface Props {
  setIsOpen: (value: boolean) => void
}

export function RegisterActions({ setIsOpen }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full inline-block text-start" variant="ghost">
          Registrate
        </Button>
      </DialogTrigger>
      <DialogContent onCloseAutoFocus={() => setIsOpen(false)} className="sm:max-w-[470px]">
        <DialogHeader className="h-[11rem]">
          <DialogTitle className="text-foreground text-[1.6rem]">
            Registrarse
          </DialogTitle>
          <LogoSafehaven className="h-full w-[6rem] mx-auto py-5" />
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
}
