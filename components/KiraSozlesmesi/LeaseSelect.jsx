"use client";

import { useMemo, useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const LEASE_SELECT_EMPTY = "__lease_empty__";

const optionRowClass =
 "relative flex w-full cursor-default select-none items-center gap-2 rounded-md py-1.5 pl-2 pr-8 text-left text-sm outline-none focus:bg-accent focus:text-accent-foreground";

export function LeaseSelect({
 id,
 value,
 onChange,
 options,
 placeholder = "Seçiniz",
 showPlaceholder = true,
 className,
 required,
 disabled,
}) {
 const listboxId = useId();
 const [open, setOpen] = useState(false);

 const normalized = value === "" || value == null ? "" : value;
 const displayLabel = useMemo(() => {
  if (!normalized) return placeholder;
  const hit = options.find((o) => o.value === normalized);
  return hit?.label ?? normalized;
 }, [normalized, options, placeholder]);

 const commit = (next) => {
  onChange({ target: { value: next } });
  setOpen(false);
 };

 return (
  <Popover open={open} onOpenChange={setOpen} modal={false}>
   <PopoverTrigger asChild>
    <Button
     id={id}
     type="button"
     variant="outline"
     disabled={disabled}
     role="combobox"
     aria-expanded={open}
     aria-haspopup="listbox"
     aria-controls={listboxId}
     aria-required={required}
     className={cn(
      "h-9 w-full min-w-0 shrink-0 justify-between gap-2 px-2.5 py-2 font-normal",
      !normalized && "text-muted-foreground",
      className,
     )}
    >
     <span className="line-clamp-1 min-w-0 flex-1 text-left">
      {normalized ? displayLabel : placeholder}
     </span>
     <ChevronDown className="size-4 shrink-0 opacity-50" />
    </Button>
   </PopoverTrigger>
   <PopoverContent
    align="start"
    sideOffset={4}
    className={cn(
     "w-(--radix-popover-trigger-width) max-h-[min(24rem,var(--radix-popover-content-available-height))] overflow-y-auto p-1",
     "gap-0 data-[slot=popover-content]:gap-0",
    )}
    onOpenAutoFocus={(e) => e.preventDefault()}
   >
    <div id={listboxId} role="listbox" aria-labelledby={id} className="flex flex-col">
     {showPlaceholder && (
      <button
       type="button"
       role="option"
       aria-selected={!normalized}
       className={cn(optionRowClass, !normalized && "bg-accent/50")}
       onClick={() => commit("")}
      >
       <span className="flex-1 text-muted-foreground">{placeholder}</span>
       {!normalized ? (
        <Check className="absolute right-2 size-4 shrink-0" aria-hidden />
       ) : null}
      </button>
     )}
     {options.map((o) => {
      const isSelected = normalized === o.value;
      return (
       <button
        key={o.value}
        type="button"
        role="option"
        aria-selected={isSelected}
        className={cn(optionRowClass, isSelected && "bg-accent/50")}
        onClick={() => commit(o.value)}
       >
        <span className="flex-1">{o.label}</span>
        {isSelected ? (
         <Check className="absolute right-2 size-4 shrink-0" aria-hidden />
        ) : null}
       </button>
      );
     })}
    </div>
   </PopoverContent>
  </Popover>
 );
}
