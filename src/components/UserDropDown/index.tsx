import { Button } from "@/components/ui/Buttom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useAuth } from "@/hooks/useAuth";
import { LoginActions } from "@/Pages/auth/components/UserActions/LoginAction";
import { RegisterActions } from "@/Pages/auth/components/UserActions/RegisterAction";
import { LogIn } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
  text?: string;
}

function UserDropDown({ className, text }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isAutheticated } = useAuth()
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" className={`${className} `}>
          <span className="text-foreground/80">{text}</span>
          <LogIn className="text-foreground/70 w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 relative left-[12.5rem] bottom-[4rem]"

      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Safehaven</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          isAutheticated ? (
            <>
              <Button>
                Perfil
              </Button>
              <Button>
                Cerrar sesion 
              </Button>
            </>
          ) : (
            <>
              <LoginActions setIsOpen={setIsOpen} />
              <RegisterActions setIsOpen={setIsOpen} />
            </>
          )
        }

      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropDown
