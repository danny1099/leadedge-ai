"use client";
import { usePathname } from "next/navigation";
import { Navlink, IconName } from "@/shared/components";
import { cn } from "@/shared/utils";

interface Props {
  children: React.ReactNode;
  route: string;
  icon: IconName;
  className?: string;
}

/* prettier-ignore */
export const MenuLink = ({ children, route, icon, className }: Props) => {
  const pathname = usePathname();
  const segments = route.split("/t/")[1];
  const isSelected = pathname.includes(segments)

  return (
    <Navlink
      href={route}
      icon={icon}
      place="start"
      variant="ghost"
      className={cn("h-9 w-full justify-start text-secondary-foreground", isSelected && "bg-primary/80 text-primary-foreground", !isSelected && "hover:bg-secondary", className )}>
      {children}
    </Navlink>
  );
};
