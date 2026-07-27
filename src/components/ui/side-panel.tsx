"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export interface SidePanelAction {
  label: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}

function SidePanel({
  open,
  onOpenChange,
  title,
  description,
  children,
  actions,
  className,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children?: React.ReactNode
  actions?: SidePanelAction[]
  className?: string
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        data-slot="side-panel"
        side="right"
        className={cn("w-full sm:max-w-md", className)}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children && <div className="flex-1 overflow-y-auto px-4">{children}</div>}
        {actions && actions.length > 0 && (
          <SheetFooter className="flex-row justify-end gap-2">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant === "secondary" ? "outline" : "default"}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                {action.label}
              </Button>
            ))}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export { SidePanel }
