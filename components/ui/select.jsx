"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "radix-ui";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select(props) {
 return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup(props) {
 return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue(props) {
 return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

const SelectTrigger = React.forwardRef(
 ({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
   ref={ref}
   data-slot="select-trigger"
   className={cn(
    "flex h-9 w-full min-w-0 shrink-0 items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "[&>span]:line-clamp-1 dark:bg-input/30",
    className,
   )}
   {...props}
  >
   {children}
   <SelectPrimitive.Icon asChild>
    <ChevronDownIcon className="size-4 shrink-0 opacity-50" />
   </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
 ),
);
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
 <SelectPrimitive.ScrollUpButton
  ref={ref}
  className={cn(
   "flex cursor-default items-center justify-center py-1 text-muted-foreground",
   className,
  )}
  {...props}
 >
  <ChevronUpIcon className="size-4" />
 </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
 <SelectPrimitive.ScrollDownButton
  ref={ref}
  className={cn(
   "flex cursor-default items-center justify-center py-1 text-muted-foreground",
   className,
  )}
  {...props}
 >
  <ChevronDownIcon className="size-4" />
 </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

const SelectContent = React.forwardRef(
 ({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
   <SelectPrimitive.Content
    ref={ref}
    data-slot="select-content"
    position={position}
    className={cn(
     "relative z-50 max-h-[min(24rem,var(--radix-select-content-available-height))] min-w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10",
     "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
     "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
     position === "popper" &&
     "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
     className,
    )}
    {...props}
   >
    <SelectScrollUpButton />
    <SelectPrimitive.Viewport
     className={cn(
      "p-1",
      position === "popper" &&
      "w-full min-w-(--radix-select-trigger-width)",
     )}
    >
     {children}
    </SelectPrimitive.Viewport>
    <SelectScrollDownButton />
   </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
 ),
);
SelectContent.displayName = "SelectContent";

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
 <SelectPrimitive.Label
  ref={ref}
  data-slot="select-label"
  className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
  {...props}
 />
));
SelectLabel.displayName = "SelectLabel";

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
 <SelectPrimitive.Item
  ref={ref}
  data-slot="select-item"
  className={cn(
   "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
   className,
  )}
  {...props}
 >
  <span className="absolute right-2 flex size-3.5 items-center justify-center">
   <SelectPrimitive.ItemIndicator>
    <CheckIcon className="size-4" />
   </SelectPrimitive.ItemIndicator>
  </span>
  <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
 </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
 <SelectPrimitive.Separator
  ref={ref}
  data-slot="select-separator"
  className={cn("-mx-1 my-1 h-px bg-border", className)}
  {...props}
 />
));
SelectSeparator.displayName = "SelectSeparator";

export {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectScrollDownButton,
 SelectScrollUpButton,
 SelectSeparator,
 SelectTrigger,
 SelectValue,
};
