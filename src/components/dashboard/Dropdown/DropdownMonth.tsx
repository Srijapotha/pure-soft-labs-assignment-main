// ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// data
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function DropdownMonth() {
  return (
    <Select>
      <SelectTrigger className="-mt-10 mb-2 ml-auto mr-0 w-max border-0 bg-transparent p-0 text-xs text-muted-foreground sm:text-sm">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent className="rounded-2xl border border-slate-100 p-1">
        {months.map((month, index) => (
          <SelectItem
            className="rounded-xl"
            key={index}
            value={month.toLowerCase()}
          >
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
