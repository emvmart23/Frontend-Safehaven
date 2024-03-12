import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { GoogleIcon, LogoSafehaven } from "@/components/Icons";
import RegisterForm from "../../forms/RegisterForm";
import { useState } from "react";
import useGoogleAuth from "@/hooks/useGoogleAuth";

interface Props {
  setIsOpen: (value: boolean) => void
}

export function RegisterActions({ setIsOpen }: Props) {
  const [isPending, setIsPending] = useState(false)
  const { googleLogin } = useGoogleAuth()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full inline-block text-start">
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
        <RegisterForm setIsPending={setIsPending} />
        <div className="space-y-2 w-full">
          <Button form="register-auth-form" type="submit" className="w-full h-[2.7rem]" disabled={isPending}>
            Registrarse
          </Button>
          <Button className="w-full flex gap-2 h-[2.7rem]" onClick={(e) => {
            googleLogin()
            e.preventDefault()
          }}>
            <GoogleIcon />Continuar con google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
