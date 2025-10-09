"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "@/shared/components/icon";
import { cn } from "@/shared/utils";

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

/* prettier-ignore */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn("peer size-5 shrink-0 rounded-xs border border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Icon name="check" className="size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

export const CheckboxButton = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, icon, checkedIcon, ...props }, ref) => (
  <>
    <CheckboxPrimitive.Root ref={ref} className={cn("peer group", className)} {...props}>
      <span className="group-data-[state=checked]:hidden">{icon}</span>
      <span className="group-data-[state=unchecked]:hidden">{checkedIcon}</span>
      {!checkedIcon && (
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
          <Icon name="check" className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  </>
));

/* prettier-ignore */
export const CheckboxCard = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, children, ...props }, ref) => (
    <>
      <CheckboxPrimitive.Root ref={ref} {...props} className={cn("peer group ring-input text-muted-foreground data-[state=checked]:bg-accent data-[state=checked]:ring-tertiary relative rounded-md data-[state=checked]:ring-2", className)}>
        {children}
        <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-tertiary text-tertiary-foreground">
            <Icon name="check" className="h-4 w-4" />
          </div>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  )
);
