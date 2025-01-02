import { cn } from "@/lib/utils";
import type { PropsWithChildren, ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

export default function InfoWrapper({ children, className, ...props }: PropsWithChildren<Props>) {
  const isClient = typeof window !== "undefined";

  return (
    <div
      title={isClient ? "Client" : "Server"}
      className={cn(
        "border-2 rounded-md",
        {
          " border-blue-300": isClient,
          "border-red-300": !isClient,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
