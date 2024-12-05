"use client";

// react components
import { useState } from "react";

// ui
import Dropdown from "./Dropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function DropdownSelect() {
  const [selected, setSelected] = useState("All-Time");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <>
      <Dropdown name="Timeframe" selected={selected}>
        {["All-Time", "Last 7 Days", "This month", "This year", "Custom"].map(
          (elem) => {
            return (
              <DropdownMenuItem
                key={elem}
                onClick={() => handleSelect(elem)}
                data-state={elem === selected ? "active" : "inactive"}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-primary/5 ${
                  elem === selected ? "bg-primary/5 font-semibold" : ""
                }`}
              >
                {elem}
              </DropdownMenuItem>
            );
          },
        )}
      </Dropdown>
    </>
  );
}
