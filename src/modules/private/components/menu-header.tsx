import { Logo } from "@/shared/components";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
}

export const MenuHeader = ({ className }: Props) => {
  return (
    <div className={cn("bg-background flex h-16 w-full items-center px-4 md:px-8", className)}>
      <Logo withText />
    </div>
  );
};
