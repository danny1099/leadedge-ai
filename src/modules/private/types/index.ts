import { PrivateRoute } from "@/config/routes";
import { IconName } from "@/shared/components/icon";

export interface MenuLink {
  label: string;
  icon: IconName;
  route: PrivateRoute;
  type: "link" | "divider";
}
