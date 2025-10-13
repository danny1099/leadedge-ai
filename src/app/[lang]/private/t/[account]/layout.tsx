import { redirect } from "next/navigation";
import { getPublicRoute } from "@/config/routes";
import { getAuthSession } from "@/modules/auth/helpers";
import { Aside, Navbar, Menu } from "@/modules/private/components";

export default async function Layout({ children }: Children) {
  const session = await getAuthSession();
  const redirectTo = getPublicRoute("SIGN_IN");

  /* Redirect to sign in page if user is not authenticated */
  if (!session) redirect(redirectTo);

  return (
    <div className="grid h-dvh grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-auto">
      <Navbar />
      <Aside child={<Menu />} />
      <main className="bg-background col-span-2 col-start-2 row-start-2 size-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
