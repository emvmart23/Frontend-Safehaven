import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/buttom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export function UserDropDown({ children }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 relative left-[12.5rem] bottom-[4rem]"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Safehaven</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Iniciar sesión
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Registrarse</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const ButtonAccess = () => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="flex gap-3 h-9 w-[10rem] p-5 shadow-2xl"
    >
      <span className="text-foreground">Acceder</span>
      <LogIn className="text-foreground w-6 h-6" />
    </Button>
  );
};

export const AvatarAccess = () => {
  return (
    <Button
      variant="outline"
      className="relative h-8 w-8 rounded-full border border-muted-foreground"
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback>
          <LogIn className="text-foreground w-6 h-6" />
        </AvatarFallback>
      </Avatar>
    </Button>
  );
};
