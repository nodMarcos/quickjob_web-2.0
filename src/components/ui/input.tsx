import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  onPressX?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div
        className={cn(
          "flex h-12 w-full border border-input bg-background rounded-md gap-1 px-2 items-center",
          className
        )}>
        {props.icon && (
          <div className="flex items-center justify-center max-w-12 w-12 h-12">
            {props.icon}
          </div>
        )}
        <input
          className={cn(
            "w-full h-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none text-sm md:text-base",
            {
              "pl-0": props.icon,
              "pl-3": !props.icon,
            }
          )}
          type={
            type === "password" && showPassword
              ? "text"
              : type === "search"
                ? "text"
                : type || "text"
          }
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="flex items-center justify-center w-12 h-12"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeIcon className="size-5 text-typography/60" />
            ) : (
              <EyeOffIcon className="size-5 text-typography/60" />
            )}
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
