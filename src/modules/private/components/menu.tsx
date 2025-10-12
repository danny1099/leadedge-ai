"use client";
import { useParams } from "next/navigation";
import { getPrivateRoute } from "@/config/routes";
import { MenuHeader, MenuGroup, MenuLink } from "@/modules/private/components";
import { menuLinks } from "@/modules/private/utils";
import { WorkspaceList } from "@/modules/workspace/components";

export const Menu = () => {
  const params = useParams();
  const account = params.account as string;

  return (
    <div className="relative flex size-full flex-col transition-all duration-300">
      <MenuHeader />
      <MenuGroup title="Platform" className="mt-5">
        <ul className="flex w-full flex-col gap-1.5 px-2 md:px-6">
          {menuLinks?.map(({ route, icon, label }, idx) => {
            const routePrivate = getPrivateRoute({ route, segment: account });
            return (
              <li key={idx} className="w-full">
                <MenuLink route={routePrivate} icon={icon}>
                  {label}
                </MenuLink>
              </li>
            );
          })}
        </ul>
      </MenuGroup>
      <WorkspaceList />
    </div>
  );
};
