import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
}

interface Requirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: Requirement[] = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "Contains uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "Contains lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "Contains number", test: (p) => /\d/.test(p) },
  { label: "Contains special character", test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = useMemo(() => {
    if (!password) return 0;
    return requirements.filter((req) => req.test(password)).length;
  }, [password]);

  const strengthLabel = useMemo(() => {
    if (strength === 0) return "Enter password";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Fair";
    if (strength <= 4) return "Good";
    return "Strong";
  }, [strength]);

  const strengthColor = useMemo(() => {
    if (strength === 0) return "bg-muted";
    if (strength <= 2) return "bg-destructive";
    if (strength <= 3) return "bg-warning";
    if (strength <= 4) return "bg-primary";
    return "bg-success";
  }, [strength]);

  return (
    <div className="space-y-3 animate-fade-in">
      {/* Strength Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-muted-foreground">Password Strength</span>
          <span className={cn(
            "text-xs font-mono font-medium transition-colors",
            strength === 0 && "text-muted-foreground",
            strength <= 2 && strength > 0 && "text-destructive",
            strength === 3 && "text-warning",
            strength === 4 && "text-primary",
            strength === 5 && "text-success"
          )}>
            {strengthLabel}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={cn("h-full transition-all duration-500 rounded-full", strengthColor)}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Requirements List */}
      <div className="grid grid-cols-1 gap-1.5">
        {requirements.map((req, index) => {
          const met = password ? req.test(password) : false;
          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 text-xs font-mono transition-all duration-300",
                met ? "text-success" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300",
                met ? "bg-success/20" : "bg-muted"
              )}>
                {met ? (
                  <Check className="w-2.5 h-2.5" />
                ) : (
                  <X className="w-2.5 h-2.5" />
                )}
              </div>
              {req.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
