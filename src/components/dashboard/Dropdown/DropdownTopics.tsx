"use client";

// react components
import { useState } from "react";

// ui
import Dropdown from "./Dropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

// data
import data from "@/data/task-data.json";

export default function DropdownTopics() {
  const [selected, setSelected] = useState("All");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <>
      <Dropdown name="Topic" selected={selected}>
        {data.topics.weakest.concat(data.topics.strongest).map(({ name }) => {
          return (
            <DropdownMenuItem
              key={name}
              onClick={() => handleSelect(name)}
              data-state={name === selected ? "active" : "inactive"}
              className={`block w-full truncate rounded-xl px-3 py-2 text-left text-sm hover:bg-primary/5 ${
                name === selected ? "bg-primary/5 font-semibold" : ""
              }`}
            >
              {name}
            </DropdownMenuItem>
          );
        })}
      </Dropdown>
    </>
  );
}
