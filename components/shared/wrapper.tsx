import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Wrapper = forwardRef<HTMLElement, React.ComponentProps<"section">>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl px-5 md:max-w-[1404px] md:px-10",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
