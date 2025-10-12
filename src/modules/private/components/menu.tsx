"use client";
import { MenuHeader, MenuGroup } from "@/modules/private/components";

export const Menu = () => {
  return (
    <div className="relative flex size-full flex-col transition-all duration-300">
      <MenuHeader />
      <MenuGroup title="Platform" className="mt-5">
        <ul className="flex w-full flex-col gap-1.5 px-2 md:px-6"></ul>
      </MenuGroup>
    </div>
  );
};
