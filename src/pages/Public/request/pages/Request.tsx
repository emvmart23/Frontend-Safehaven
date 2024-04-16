import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import contactSchema from "@/lib/validators/requestScheme";

type ContactFormValues = z.infer<typeof contactSchema>;

// This can come from your database or API.
const defaultValues: Partial<ContactFormValues> = {
  message: "I own a computer.",
};

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-[50%]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.2rem]">Name</FormLabel>
              <FormControl>
                <Input
                  maxLength={9}
                  type="tel"
                  placeholder="User"
                  className="text-[1rem]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.2rem]">Email</FormLabel>
              <FormControl>
                <Input
                  className="text-[1rem]"
                  maxLength={20}
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link to="">Link</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.2rem]">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your consult"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[1.2rem]">Phone</FormLabel>
              <FormControl>
                <Input
                  className="text-[1rem]"
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
              <FormDescription>
                This is your public display phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
