import { Input } from "@/components/ui/Input";
import { InputPassword } from "@/components/index";
import { UserSchema } from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
      email: ""
    },
  });

  console.log(form.formState.errors)

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
          <InputPassword form={form} name={"password"} />
        </form>
      </Form>
    </ScrollArea>
  );
}
export default RegisterForm;
