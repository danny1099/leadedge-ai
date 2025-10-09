import { toast as Sonner } from "sonner";
import { useTranslations } from "next-intl";
import { Icon, IconName } from "@/shared/components";
import { cn } from "@/shared/utils";

export type ToastType = "success" | "error" | "warning" | "info" | "loading";

const toastType = {
  success: { icon: "check" as IconName, className: "bg-green-200 text-green-700" },
  error: { icon: "close" as IconName, className: "bg-red-200 text-red-700" },
  warning: { icon: "warning" as IconName, className: "bg-amber-200 text-amber-800" },
  info: { icon: "info" as IconName, className: "bg-blue-200 text-blue-700" },
  loading: { icon: "refresh" as IconName, className: "bg-violet-200 text-violet-700 animate-spin" },
};

/* prettier-ignore */
export const useToast = () => {
  const t = useTranslations("messages");

  return (message: string, type: ToastType = "success") => {
    const i18nMessage = t(message as any);
    const [title, description] = i18nMessage.split(":");

    Sonner(title || "LeadEdge AI", {
      /* @ts-ignore */
      description: `${description}` || "LeadEdge AI notification message",
      dismissible: true,
      classNames: {
        title: "font-medium ml-2 text-sm",
        description: "text-foreground-muted text-2xs ml-2",
      },
      icon: (
        <div className={cn("flex size-7 items-center justify-center rounded-full", toastType[type].className)}>
          <Icon name={toastType[type].icon} className="size-4" />
        </div>
      ),
    });
  };
};
