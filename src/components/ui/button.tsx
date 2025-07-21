import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow-primary",
        accent: "bg-gradient-accent text-accent-foreground shadow-glow-accent hover:shadow-glow-accent",
      },
      size: {
        default: "h-9 px-3 py-2 text-sm rounded-md sm:h-10 sm:px-4 sm:text-base lg:h-11 lg:px-6 lg:text-lg lg:rounded-lg",
        sm: "h-8 px-2 py-1 text-xs rounded sm:h-9 sm:px-3 sm:text-sm",
        lg: "h-11 px-6 py-3 text-base rounded-lg sm:h-12 sm:px-8 sm:text-lg lg:h-14 lg:px-10 lg:text-xl lg:rounded-xl",
        icon: "h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
