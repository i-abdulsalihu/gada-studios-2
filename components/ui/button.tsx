import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-[184px] items-center hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[4px_4px_0px_#B88745] active:translate-x-[0px] active:translate-y-[0px] duration-300 active:shadow-none justify-center whitespace-nowrap rounded-md border text-base font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        0: "bg-white hover:bg-white/80 text-black-950 hover:text-black-950/80 border-black-950",
        100: "border-gada-400 bg-gada-100 text-gada-400 hover:bg-gada-100/80",
        101: "border-gada-200 text-gada-200 bg-transparent",
        500: "border-transparent bg-gada-500 text-white hover:bg-gada-500/80",
        501: "border-gada-500 text-gada-500 bg-transparent",
        600: "border-transparent bg-gada-600 text-white hover:bg-gada-600/80",
        601: "border-gada-600 text-gada-600 bg-transparent",
        700: "border-transparent bg-gada-700 text-white hover:bg-gada-700/80",
        701: "border-gada-700 text-gada-700 bg-transparent",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-10 rounded-md px-3",
        lg: "h-16 rounded-md px-8 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: 0,
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
