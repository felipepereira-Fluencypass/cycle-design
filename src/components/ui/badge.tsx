import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        brand:
          "border-transparent bg-brand text-brand-foreground hover:bg-brand/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        positive:
          "border-transparent bg-positive text-positive-foreground hover:bg-positive/80",
        class:
          "border-transparent bg-class text-class-foreground hover:bg-class/80",
        private:
          "border-transparent bg-private text-private-foreground hover:bg-private/80",
        group:
          "border-transparent bg-group text-group-foreground hover:bg-group/80",
        impulse:
          "border-transparent bg-impulse text-impulse-foreground hover:bg-impulse/80",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-px text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
