import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  form: any;
  placeholder?: string;
  className?: string;
  name: string;
}

function InputPassword({ form, placeholder, className, name }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel >Contraseña</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className={className}
                placeholder={placeholder}
                {...field}
              />
              <button
                className="absolute inset-y-0 right-0 pr-3"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye className="text-muted-foreground"/> : <EyeOff  className="text-muted-foreground"/>}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputPassword;