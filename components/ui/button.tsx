import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-[#147a5e] text-white hover:bg-[#0f5c47] focus-visible:ring-[#147a5e]",
      outline:
        "border border-[#e2e8f0] bg-white text-[#0f172a] hover:bg-[#f8fafc] focus-visible:ring-[#147a5e]",
      ghost:
        "text-[#0f172a] hover:bg-[#f8fafc] focus-visible:ring-[#147a5e]",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
      secondary:
        "bg-[#f1f5f9] text-[#0f172a] hover:bg-[#e2e8f0] focus-visible:ring-[#147a5e]",
      link: "text-[#147a5e] underline-offset-4 hover:underline focus-visible:ring-[#147a5e]",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
