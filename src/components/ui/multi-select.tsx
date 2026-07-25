"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface MultiSelectOption {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

function MultiSelect({
  options,
  value,
  onValueChange,
  placeholder = "Sélectionner...",
  searchPlaceholder = "Rechercher...",
  emptyText = "Aucun résultat.",
  maxCount = 3,
  disabled,
  className,
}: {
  options: MultiSelectOption[]
  value: string[]
  onValueChange: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  maxCount?: number
  disabled?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  const toggleValue = (val: string) => {
    onValueChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val])
  }

  const clear = (event: React.MouseEvent) => {
    event.stopPropagation()
    onValueChange([])
  }

  const removeOne = (event: React.MouseEvent, val: string) => {
    event.stopPropagation()
    onValueChange(value.filter((v) => v !== val))
  }

  const selected = options.filter((option) => value.includes(option.value))
  const visible = selected.slice(0, maxCount)
  const overflowCount = selected.length - visible.length

  return (
    <Popover open={open} onOpenChange={disabled ? undefined : setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          data-slot="multi-select-trigger"
          className={cn(
            "h-auto min-h-9 w-full justify-between gap-2 px-3 py-1.5 font-normal",
            className
          )}
        >
          <div className="flex flex-1 flex-wrap items-center gap-1">
            {selected.length === 0 && (
              <span className="text-muted-foreground font-normal">{placeholder}</span>
            )}
            {visible.map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className="gap-1 rounded-sm pr-1 font-normal"
              >
                {option.icon && <option.icon className="size-3" />}
                {option.label}
                <span
                  role="button"
                  tabIndex={-1}
                  className="hover:bg-muted-foreground/20 rounded-xs"
                  onClick={(e) => removeOne(e, option.value)}
                >
                  <XIcon className="size-3" />
                </span>
              </Badge>
            ))}
            {overflowCount > 0 && (
              <Badge variant="secondary" className="rounded-sm font-normal">
                +{overflowCount}
              </Badge>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {selected.length > 0 && !disabled && (
              <span
                role="button"
                tabIndex={-1}
                className="text-muted-foreground hover:text-foreground"
                onClick={clear}
              >
                <XIcon className="size-4" />
              </span>
            )}
            <ChevronsUpDownIcon className="text-muted-foreground size-4 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const active = value.includes(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => toggleValue(option.value)}
                  >
                    <div
                      className={cn(
                        "border-primary flex size-4 items-center justify-center rounded-sm border",
                        active ? "bg-primary text-primary-foreground" : "opacity-50"
                      )}
                    >
                      <CheckIcon className={cn("size-3", !active && "invisible")} />
                    </div>
                    {option.icon && <option.icon className="text-muted-foreground size-4" />}
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { MultiSelect }
