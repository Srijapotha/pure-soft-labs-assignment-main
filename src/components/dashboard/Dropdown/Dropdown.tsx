"use client";

// icons
import { BsCaretDownFill } from "react-icons/bs";

// ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// react components
import { useState } from "react";

// utils
import { cn } from "@/lib/utils";

export default function Dropdown({
  children,
  name,
  selected,
}: {
  name: string;
  selected: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <DropdownMenu
        onOpenChange={(e) => {
          setActive(e);
        }}
      >
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex min-w-80 items-center justify-between rounded-2xl border border-slate-100 bg-white px-3 py-2 text-sm outline-none max-sm:pointer-events-none",
              active ? "shadow-custom" : "",
            )}
          >
            <span>
              {name}: <strong className="truncate">{selected}</strong>
            </span>
            <BsCaretDownFill
              data-active={active}
              className="transition-transform data-[active=true]:rotate-180"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="start">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
