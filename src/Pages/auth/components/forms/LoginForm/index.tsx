import { GoogleIcon } from "@/components/Icons";
import { InputPassword } from "@/components/index";
import { Button } from "@/components/ui/Buttom";
import { Checkbox } from "@/components/ui/CheckBox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { toast } from "@/hooks/useToast";
import { LoginSchema } from "@/lib/validators/auth";
import { login } from "@/store/slices";
import { useAppDispatch } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  setIsOpen: (value: boolean) => void
}

function LoginForm({ setIsOpen }: Props) {
  const [isPending, setIsPending] = useState(false)
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsPending(true)
    try {
      const { data } = await axios.post(import.meta.env.VITE_API_URL + "/login", values);
      if (data.access) {
        dispatch(login({ ...data }))
        toast({
          description: "Listo",
          variant: "destructive"
        })
      }
      setIsOpen(false)
    } catch (error: any) {
      if (error.data && error.data.status === 401) {
        toast({
          title: "Credenciales incorrectas",
          variant: "destructive"
        })
      } else {
        toast({
          title: "Credenciales incorrectas",
          variant: "destructive"
        })
      }
    } finally {
      setIsPending(false)
    }
  };

  return (
    <Form {...form}>
      <form
        id="id-login"
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-[2rem]"
      >
        <div className="h-[220px] space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Correo electronico
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ingresa tu correo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <InputPassword
            placeholder="Ingresa tu contraseña"
            form={form}
            name={"password"}
          />
        </div>
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border-none px-1">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-foreground">Recordarme</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <div className="space-y-2 w-full">
          <Button onClick={() => {
            toast({ title: "Listo" })
          }} form="id-login" type="submit" className="w-full h-[2.7rem]" disabled={isPending}>
            Iniciar sesion
          </Button>
          <Button type="submit" className="w-full flex gap-2 h-[2.7rem]">
            <GoogleIcon /> Iniciar sesion con google
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default LoginForm;
