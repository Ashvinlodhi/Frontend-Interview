import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent } from "../components/ui/card";

export function LoadingSkeleton() {
  return (
    <Card>
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </Card>
  );
}