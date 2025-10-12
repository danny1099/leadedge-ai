import { P } from "@/shared/components";
import { cn } from "@/shared/utils";

interface Props extends Children {
  title?: string;
  className?: string;
}

export const MenuGroup = ({ children, title, className }: Props) => {
  return (
    <div className={cn("flex h-fit w-full flex-col px-2", className)}>
      {title && <P className="text-2xs mb-1 ml-3 md:ml-7">{title}</P>}
      {children}
    </div>
  );
};
