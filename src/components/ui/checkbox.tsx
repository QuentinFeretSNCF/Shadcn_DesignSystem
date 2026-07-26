"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  readOnly,
  onCheckedChange,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  /** Visually normal but non-interactive; freeze `checked` when using this. */
  readOnly?: boolean
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      aria-readonly={readOnly || undefined}
      onCheckedChange={readOnly ? undefined : onCheckedChange}
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none hover:border-ring/60 active:scale-95 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        readOnly && "pointer-events-none cursor-default",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
