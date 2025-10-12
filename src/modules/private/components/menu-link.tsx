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
  const segments = route.split("/ws/")[1];
  const isSelected = pathname.includes(segments);

  return (
    <Navlink
      href={route}
      icon={icon}
      place="start"
      align="start"
      variant="ghost"
      className={cn("hover:bg-secondary h-9 w-full", isSelected && "bg-secondary text-tertiary border-border border", className )}>
      {children}
    </Navlink>
  );
};
