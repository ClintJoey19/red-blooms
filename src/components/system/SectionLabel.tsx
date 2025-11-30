import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const SectionLabel = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-xs font-sans tracking-[0.2em] text-muted-foreground uppercase mb-4 block",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default SectionLabel;
