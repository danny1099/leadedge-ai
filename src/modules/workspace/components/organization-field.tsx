import React from "react";
import { useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/select";
import { FormControl, P } from "@/shared/components";

/* TODO: Implementar consulta de orzanizaciones por usuario */

interface StatusProps extends React.ComponentProps<typeof Select> {}

export const OrganizationField = ({ ...props }: StatusProps) => {
  const t = useTranslations("workspace");

  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={t("form.organization.placeholder")} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="cmgpr8zh500018uy4ce6x5xym">
          <P className="text-foreground">Danny's Workspace</P>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
