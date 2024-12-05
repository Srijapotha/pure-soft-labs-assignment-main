import { cn } from "@/lib/utils";

export function BoxContentBig({
  text,
  className,
}: {
  text: string | number;
  className?: string;
}) {
  return (
    <>
      <span className={cn("text-2xl font-bold", className)}>{text}</span>
    </>
  );
}
