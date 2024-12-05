import { cn } from "@/lib/utils";
import { BsInfoCircle } from "react-icons/bs";
export default function BoxWrapper({
  children,
  className,
  heading,
  info,
}: {
  children: React.ReactNode;
  className?: string;
  heading: string;
  info?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "rounded-3xl border border-slate-100 bg-white p-5 shadow-custom",
          className,
        )}
      >
        <h3
          title={heading}
          className="mb-1 flex min-h-max items-center justify-between pb-2 text-xs font-medium text-muted-foreground/95 sm:text-sm"
        >
          <span className="w-full truncate">{heading}</span>
          {info && <BsInfoCircle title={heading} />}
        </h3>
        {children}
      </div>
    </>
  );
}
