import { ThemeToggle, LangToggle, Avatar, Divider } from "@/shared/components";
import { MenuButton } from "@/modules/private/components";

export const Navbar = () => {
  return (
    <header className="bg-background col-span-2 col-start-2 flex h-16 w-full flex-row items-center px-4 md:px-8">
      <MenuButton />

      <nav className="flex size-full flex-row items-center justify-end gap-4">
        <LangToggle />
        <ThemeToggle />
        <Divider type="vertical" className="h-8" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" ring="white" withDot />
      </nav>
    </header>
  );
};
