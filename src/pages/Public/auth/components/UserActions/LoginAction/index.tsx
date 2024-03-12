import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import LoginForm from "../../forms/LoginForm";
import { LogoSafehaven } from "@/components/Icons";

interface Props {
  setIsOpen: (value: boolean) => void
}

export function LoginActions({ setIsOpen }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full inline-block text-start" variant="ghost">
          Iniciar sesion
        </Button>
      </DialogTrigger>
      <DialogContent onCloseAutoFocus={() => setIsOpen(false)} className="sm:max-w-[470px]">
        <DialogHeader className="h-[11rem]">
          <DialogTitle className="text-[1.6rem]">
            Iniciar sesion
          </DialogTitle>
          <LogoSafehaven className="h-full w-[6rem] mx-auto py-5" />
        </DialogHeader>
        <LoginForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
