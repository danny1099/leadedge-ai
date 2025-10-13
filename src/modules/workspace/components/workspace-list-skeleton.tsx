import { Skeleton } from "@/shared/components/skeleton";

export function WorkspaceSkeleton() {
  return (
    <div className="mx-auto max-w-md space-y-2 p-2">
      <div className="space-y-2">
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center space-x-3 p-3">
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-5 w-32" />
        </div>
      </div>
    </div>
  );
}
