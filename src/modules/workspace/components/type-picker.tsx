"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Icon, IconName, P, CheckboxCard } from "@/shared/components";

interface TypePickerProps {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const TypePicker = ({ value = "education", onChange }: TypePickerProps) => {
  const [selected, setSelected] = useState<string>(value);
  const t = useTranslations("workspace.types");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange!(value);
  };

  const typesWorkspace = [
    {
      name: "education",
      icon: "education",
      label: t("education.label"),
      placeholder: t("education.placeholder"),
    },
    {
      name: "business",
      icon: "corporate",
      label: t("business.label"),
      placeholder: t("business.placeholder"),
    },
    {
      name: "nonprofit",
      icon: "personal",
      label: t("nonprofit.label"),
      placeholder: t("nonprofit.placeholder"),
    },
  ];

  return (
    <div className="mt-0.5 flex w-full flex-row items-center justify-between gap-3 rounded-md max-sm:overflow-y-auto max-sm:p-1">
      {typesWorkspace.map(({ name, icon, label, placeholder }) => (
        <CheckboxCard
          key={name}
          value={name}
          checked={selected === name}
          onCheckedChange={(checked) => {
            return checked ? handleSelect(name) : handleSelect("");
          }}
        >
          <div className="border-input flex h-32 w-fit min-w-24 flex-col items-center justify-center gap-2.5 rounded-md border p-2 md:h-28 md:min-w-40">
            <Icon name={icon as IconName} className="text-foreground mt-2 size-5 shrink-0 md:size-6" />
            <div className="grid w-full flex-1 text-center">
              <P className="text-accent-foreground text-2xs font-medium md:text-xs">{label}</P>
              <span className="text-4xs text-muted-foreground max-sm:-mt-4 max-sm:line-clamp-2">
                {placeholder}
              </span>
            </div>
          </div>
        </CheckboxCard>
      ))}
    </div>
  );
};
