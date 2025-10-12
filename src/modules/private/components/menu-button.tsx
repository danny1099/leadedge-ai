"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/shared/components/sheet";
import { Menu } from "@/modules/private/components/menu";
import { Button } from "@/shared/components";

export const MenuButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" icon="sidebar" className="shrink-0 md:hidden">
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" aria-describedby="">
        <SheetTitle />
        <Menu />
      </SheetContent>
    </Sheet>
  );
};
