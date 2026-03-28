"use client";

import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover";

function parseIsoLocal(s) {
 if (!s || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return undefined;
 const [y, m, d] = s.split("-").map(Number);
 return new Date(y, m - 1, d);
}

export function LeaseDatePicker({
 id,
 value,
 onChange,
 placeholder = "Tarih seçin",
 className,
 required,
 disabled,
 minDate,
 maxDate,
}) {
 const [open, setOpen] = useState(false);
 const selected = parseIsoLocal(value);

 const matchers = [];
 const minD = parseIsoLocal(minDate ?? "");
 const maxD = parseIsoLocal(maxDate ?? "");
 if (minD) matchers.push({ before: minD });
 if (maxD) matchers.push({ after: maxD });
 const calendarDisabled = matchers.length === 0 ? undefined : matchers;

 return (
  <Popover open={open} onOpenChange={setOpen}>
   <PopoverTrigger asChild>
    <Button
     id={id}
     type="button"
     variant="outline"
     disabled={disabled}
     className={cn(
      "w-full justify-start gap-2 text-left font-normal",
      !value && "text-muted-foreground",
      className,
     )}
     aria-required={required}
    >
     <CalendarIcon className="size-4 shrink-0 opacity-70" />
     {selected ? (
      format(selected, "d MMMM yyyy", { locale: tr })
     ) : (
      <span>{placeholder}</span>
     )}
    </Button>
   </PopoverTrigger>
   <PopoverContent
    className="w-auto gap-0 overflow-hidden p-0"
    align="start"
   >
    <Calendar
     className={cn(
      "w-full min-w-0 px-2 py-1.5 text-xs [--cell-size:2rem] sm:[--cell-size:2.125rem]",
      "[&_.rdp-month]:gap-2 [&_.rdp-months]:gap-2",
      "[&_.rdp-week]:mt-1",
      "[&_.rdp-dropdowns]:gap-1 [&_.rdp-dropdowns]:text-xs [&_.rdp-dropdowns]:font-medium",
      "[&_.rdp-caption_label]:text-xs",
      "[&_.rdp-weekday]:text-[0.65rem] [&_.rdp-weekday]:py-0",
      "[&_.rdp-day_button]:text-xs [&_.rdp-day_button]:leading-none",
      "[&_.rdp-button_previous>svg]:size-3.5 [&_.rdp-button_next>svg]:size-3.5",
     )}
     mode="single"
     locale={tr}
     selected={selected}
     onSelect={(d) => {
      onChange(d ? format(d, "yyyy-MM-dd") : "");
      setOpen(false);
     }}
     disabled={calendarDisabled}
     captionLayout="dropdown"
     fromYear={1950}
     toYear={new Date().getFullYear() + 15}
     defaultMonth={selected ?? new Date()}
    />
    <div className="flex items-center justify-between gap-2 border-t border-border/60 bg-muted/15 px-2 py-1.5">
     <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-7 px-2 text-xs"
      onClick={() => {
       onChange("");
       setOpen(false);
      }}
     >
      Temizle
     </Button>
     <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-7 px-2 text-xs"
      onClick={() => {
       const t = new Date();
       const local = new Date(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
       );
       onChange(format(local, "yyyy-MM-dd"));
       setOpen(false);
      }}
     >
      Bugün
     </Button>
    </div>
   </PopoverContent>
  </Popover>
 );
}
