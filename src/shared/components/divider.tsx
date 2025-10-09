import { type VariantProps } from "class-variance-authority";
import { dividerVariants } from "@/shared/variants";
import { cn } from "@/shared/utils";

interface Props extends VariantProps<typeof dividerVariants> {
  text?: string;
  className?: string;
}

export const Divider = ({ type, className }: Props) => {
  return <span className={cn(dividerVariants({ type, className }))} />;
};

export const Separator = ({ text, className }: Props) => {
  return (
    <span className={cn("flex items-center justify-center space-x-3", className)}>
      <Divider type="horizontal" className="flex w-full" />
      <span className="text-muted-foreground text-xs font-medium">{text}</span>
      <Divider type="horizontal" className="flex w-full" />
    </span>
  );
};
