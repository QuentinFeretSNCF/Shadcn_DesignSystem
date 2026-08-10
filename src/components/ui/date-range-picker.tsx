"use client"

import * as React from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatRange(range: DateRange | undefined, placeholder: string) {
  if (!range?.from) return placeholder
  if (!range.to) return format(range.from, "d MMM yyyy", { locale: fr })
  return `${format(range.from, "d MMM yyyy", { locale: fr })} – ${format(range.to, "d MMM yyyy", { locale: fr })}`
}

function DateRangePicker({
  value,
  onValueChange,
  placeholder = "Sélectionner une période",
  numberOfMonths = 2,
  disabled,
  className,
}: {
  value?: DateRange
  onValueChange: (range: DateRange | undefined) => void
  placeholder?: string
  numberOfMonths?: number
  disabled?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          data-slot="date-range-picker-trigger"
          className={cn(
            "w-full justify-start gap-2 font-normal",
            !value?.from && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          {formatRange(value, placeholder)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onValueChange}
          defaultMonth={value?.from}
          numberOfMonths={numberOfMonths}
          locale={fr}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DateRangePicker }
