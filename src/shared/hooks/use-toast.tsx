import { toast as Sonner } from "sonner";
import { useTranslations } from "next-intl";
import { Icon, IconName } from "@/shared/components";
import { cn } from "@/shared/utils";

export type ToastType = "success" | "error" | "warning" | "info" | "loading";

const toastType = {
  success: { icon: "check" as IconName, className: "bg-green-200 text-green-600" },
  error: { icon: "close" as IconName, className: "bg-red-200 text-red-600" },
  warning: { icon: "warning" as IconName, className: "bg-amber-200 text-amber-700" },
  info: { icon: "info" as IconName, className: "bg-blue-200 text-blue-600" },
  loading: { icon: "refresh" as IconName, className: "bg-violet-200 text-violet-600 animate-spin" },
};

/* prettier-ignore */
export const useToast = () => {
  const t = useTranslations("messages");

  return (message: string, type: ToastType = "success") => {
    Sonner("LeadEdge AI", {
      /* @ts-ignore */
      description: t(`${message}`) || "LeadEdge AI notification message",
      dismissible: true,
      classNames: {
        title: "font-medium ml-2 text-sm",
        description: "text-foreground-muted text-xs ml-2",
      },
      icon: (
        <div className={cn("flex size-7 items-center justify-center rounded-full", toastType[type].className)}>
          <Icon name={toastType[type].icon} className="size-4" />
        </div>
      ),
    });
  };
};
