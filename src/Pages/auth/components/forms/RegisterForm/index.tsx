import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/Input";
import { InputPassword } from "@/components/index";
import { UserSchema } from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import { CheckIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { api } from "@/service/api";
import { toast } from "@/hooks/useToast";
import { ScrollArea } from "@/components/ui/ScrollArea";


const languages = [
  { label: "San Juan de Miraflores", value: "1" },
  { label: "Chorrillos", value: "2" },
  { label: "Villa el salvador", value: "3" },
  { label: "Barranco", value: "4" },
  { label: "Villa maria del triunfo", value: "5" },
] as const;

interface Props {
  setIsPending: (value: boolean) => void
}

function RegisterForm({ setIsPending }: Props) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      lastname: "",
      password: "",
      email: "",
      location: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserSchema>) => {
    setIsPending(true)
    try {
      const { status } = await api.post("/auth/register", values)
      status >= 400 ?
        toast({
          description: "Error al crear cuenta",
          variant: "destructive"
        }) : toast({
          description: ""
        })
    } catch (error) {
      toast({
        description: "Error al crear cuenta",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  };

  return (
    <ScrollArea className="max-h-[350px] pr-2 mb-2">
      <Form {...form}>
        <form id="register-auth-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-[99%] p-[0.3rem]">
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electronico</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Distrito</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? languages.find((language) => language.value === field.value)?.label : "Selecciona un distrito"}
                        <CaretSortIcon className="ml-2 h-4 w-full shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                      />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("location", language.value);
                            }}
                          >
                            {language.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <InputPassword form={form} name={"password"} />
        </form>
      </Form>
    </ScrollArea>
  );
}
export default RegisterForm;
