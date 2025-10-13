"use client";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPrivateRoute } from "@/config/routes";
import { useToast } from "@/shared/hooks";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/form";
import { Button, Cancel, Input, IconAndColorPicker, Textarea, P } from "@/shared/components";
import { workspaceSchema, type WorkspaceSchema } from "@/modules/workspace/schema";
import { TypePicker, OrganizationField } from "@/modules/workspace/components";
import { trpc, useUtils } from "@/trpc/client";

export const NewWorkspaceForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useParams();
  const toast = useToast();
  const t = useTranslations("workspace");

  /* get routes to navigate and get account id from url params */
  const account = params.account as string;
  const redirectTo = getPrivateRoute({ route: "WORKSPACES", segment: account });

  /* use trpc api services and utils to request and refresh data */
  const utils = useUtils();
  const api = trpc.workspace.create.useMutation({
    onSuccess: () => utils.workspace.getAllWorkspaces.invalidate(),
  });

  const form = useForm<WorkspaceSchema>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: "",
      avatar: "ia-black",
      type: "education",
      description: "",
      status: "active",
      organizationId: "",
    },
  });

  const { formState } = form;

  const onSubmit = async (values: WorkspaceSchema) => {
    startTransition(async () => {
      const { result, message, status } = await api.mutateAsync(values);

      /* handle error if any occurs while creating workspace */
      if (status === "error" || !result) {
        toast(message as string, "error");
        return;
      }

      /* handle success if account is created successfully redirect to overview */
      toast(message as string, "success");
      router.push(`${redirectTo}/${result.id}`, { scroll: false });
    });
  };

  return (
    <article className="bg-background flex size-full flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex size-full flex-col gap-1 py-2">
          <div className="flex size-full flex-col gap-5 md:mt-5 md:flex-row">
            <div className="mt-4 flex h-full w-full flex-col space-y-5 md:w-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{t("form.name.label")}</FormLabel>
                    <FormControl className="flex w-full">
                      <Input
                        {...field}
                        type="text"
                        isBordered
                        placeholder={t("form.name.placeholder")}
                        value={field.value as string}
                        variant="outline"
                        icon="color"
                        className="text-foreground w-full"
                        child={
                          <FormField
                            control={form.control}
                            name="avatar"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <IconAndColorPicker value={field.value as string} onChange={field.onChange} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        }
                      />
                    </FormControl>
                    {formState.errors["name"] && <FormMessage />}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel>{t("form.ws-type")}</FormLabel>
                    <FormControl>
                      <TypePicker value={field.value as string} onChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organizationId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{t("form.organization.label")}</FormLabel>
                    <OrganizationField onValueChange={field.onChange} value={field.value as string} />
                    {formState.errors["organizationId"] && <FormMessage />}
                  </FormItem>
                )}
              />
            </div>
            <div className="flex size-full md:mt-8 md:px-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t("form.description.placeholder")}
                        value={field.value as string}
                        variant="secondary"
                        isBordered
                        className="text-foreground h-24 w-full md:min-h-70"
                      />
                    </FormControl>
                    {formState.errors["name"] && <FormMessage />}
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row-reverse md:p-4">
            <Button type="submit" icon="save" isLoading={isPending} className="w-full md:w-fit">
              {t("submit-button")}
            </Button>
            <Cancel className="w-full md:w-32" onClick={() => form.reset()}>
              {t("cancel-button")}
            </Cancel>
          </div>
        </form>
      </Form>
    </article>
  );
};
