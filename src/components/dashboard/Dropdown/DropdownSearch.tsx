"use client";

// ui
import Dropdown from "./Dropdown";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

// data
import data from "@/data/task-data.json";

export default function DropdownSearch() {
  return (
    <>
      <Dropdown name="People" selected="All">
        <Command className="w-full border-0">
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="groups" className="py-3">
              <RadioGroup defaultValue="All" className="">
                {["All Users", "Managers", "Trainers"].map((option) => (
                  <CommandItem
                    key={option}
                    className="flex cursor-pointer items-center py-0.5 data-[selected='true']:bg-transparent"
                  >
                    <RadioGroupItem value={option} id={option} />
                    <label
                      htmlFor={option}
                      className="cursor-pointer text-sm font-medium"
                    >
                      {option}
                    </label>
                  </CommandItem>
                ))}
              </RadioGroup>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Users">
              <RadioGroup defaultValue="All" className="">
                {data.user_leaderboard.map(({ name }, index) => (
                  <CommandItem
                    key={name + index}
                    className="flex items-center py-0.5 data-[selected='true']:bg-transparent"
                  >
                    <RadioGroupItem value={name} id={name} />
                    <label
                      htmlFor={name}
                      className="cursor-pointer text-sm font-medium"
                    >
                      {name}
                    </label>
                  </CommandItem>
                ))}
              </RadioGroup>
            </CommandGroup>
          </CommandList>
        </Command>
      </Dropdown>
    </>
  );
}
