import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  //DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import useAuth from "@/hooks/useAuth";
import { LoginActions } from "@/Pages/auth/components/UserActions/LoginAction";
import { RegisterActions } from "@/Pages/auth/components/UserActions/RegisterAction";
import { logout } from "@/store/slices";
import { useAppDispatch } from "@/store/store";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/AlertDialog";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { getInitials } from "@/tools/getInitials";


interface Props {
  className?: string;
  text?: string;
}

function UserDropDown({ className, text }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const buttonHandlerLogout = () => {
    dispatch(logout())
    setIsOpen(false)
    navigate('/')
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        {user ? (
          <Button  size="icon" variant="outline" className={`${className} `}>
            <Avatar>
              <AvatarImage>
                                  
              </AvatarImage>
              <AvatarFallback>
                {getInitials(user?.name)}
              </AvatarFallback>
            </Avatar>
          </Button>
        ) : (
          <Button size="icon" variant="outline" className={`${className} `}>
            <span className="text-foreground/80">{text}</span>
            <LogIn className="text-foreground/70 w-6 h-6" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 relative left-[12.5rem] bottom-[4rem]"
      >
        <DropdownMenuSeparator />
        {
          user ? (
            <div className="flex-col flex">
              <Button>
                Perfil
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Salir</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cerrar sesión</AlertDialogTitle>
                    <AlertDialogDescription>
                      ¿Seguro que deseas cerrar sesión?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={buttonHandlerLogout}>Salir</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
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
