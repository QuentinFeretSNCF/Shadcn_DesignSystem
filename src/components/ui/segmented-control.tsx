"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface SegmentedControlOption {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

function SegmentedControl({
  options,
  value,
  onValueChange,
  disabled,
  className,
}: {
  options: SegmentedControlOption[]
  value: string
  onValueChange: (value: string) => void
  disabled?: boolean
  className?: string
}) {
  return (
    <div
      role="radiogroup"
      data-slot="segmented-control"
      data-disabled={disabled ? "true" : undefined}
      className={cn(
        "bg-muted inline-flex items-center gap-0.5 rounded-lg p-1",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        className
      )}
    >
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            data-slot="segmented-control-item"
            data-state={active ? "active" : "inactive"}
            onClick={() => !active && onValueChange(option.value)}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors outline-none",
              "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.icon && <option.icon className="size-3.5" />}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export { SegmentedControl }
