import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Check, AlertCircle } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  hint?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, success, hint, type, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              "w-full px-4 py-3 bg-secondary border rounded-lg font-mono text-sm",
              "placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
              "transition-all duration-200",
              error && "border-destructive focus:ring-destructive",
              success && !error && "border-success focus:ring-success",
              !error && !success && "border-border focus:ring-primary",
              isPassword && "pr-20",
              className
            )}
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}
            {error && (
              <AlertCircle className="w-4 h-4 text-destructive animate-scale-in" />
            )}
            {success && !error && (
              <Check className="w-4 h-4 text-success animate-scale-in" />
            )}
          </div>
        </div>
        {(error || hint) && (
          <p className={cn(
            "text-xs font-mono animate-slide-up",
            error ? "text-destructive" : "text-muted-foreground"
          )}>
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
