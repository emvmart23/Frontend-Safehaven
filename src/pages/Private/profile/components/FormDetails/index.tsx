import { Button } from "@/components/ui/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import useAuth from "@/hooks/useAuth"
import { toast } from "@/hooks/useToast"
import { ProfileEditSchema } from "@/lib/validators/user"
import api from "@/service/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

function FormDetails() {

    const { user } = useAuth()
    const form = useForm<z.infer<typeof ProfileEditSchema>>({
        resolver: zodResolver(ProfileEditSchema),
        defaultValues: {
            name: user?.given_name ?? user?.name,
            lastname: user?.family_name ?? user?.lastname,
            email: user?.email,
            phone: user?.phone
        }
    })

    const onSubmit = async (values: z.infer<typeof ProfileEditSchema>) => {
        try {
            const { status } = await api.patch(`/users/update/${user?._id}`, values)
            status === 200 ? toast({ title: "Informacion actualizada" }) : toast({ title: "error al actualizar", variant: "destructive" })
        } catch (error) {
            console.log(error)
        }
    }

    console.log(user?.family_name)
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel className="absolute top-1 start-[0.4rem] p-1 h-full text-foreground">Nombre</FormLabel>
                            <FormControl>
                                <Input className="h-[4rem] pt-5" placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel className="absolute top-1 start-[0.4rem] p-1 h-full text-foreground">Apellido</FormLabel>
                            <FormControl>
                                <Input className="h-[4rem] pt-5" placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel className="absolute top-1 start-[0.4rem] p-1 h-full text-foreground">Email</FormLabel>
                            <FormControl>
                                <Input className="h-[4rem] pt-5" placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {!user.sub ? (
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel className="absolute top-2 start-[0.4rem] p-1 h-full text-foreground">Numero</FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-[4rem] pt-5"
                                        type="text"
                                        pattern="^\d{1,9}$"
                                        onInput={(e) =>
                                        (e.currentTarget.value = e.currentTarget.value.replace(
                                            /[^\d]/g,
                                            ""
                                        ))
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ) : null}
                <Button className="w-full" >
                    Guardar cambios
                </Button>
            </form>
        </Form>
    )
}
export default FormDetails