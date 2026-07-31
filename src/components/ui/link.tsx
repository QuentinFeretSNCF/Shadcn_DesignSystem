"use client"

import * as React from "react"
import { DownloadIcon, ExternalLinkIcon as ExternalLinkGlyph } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/** Lien interne : navigue vers un autre emplacement du site. Basé sur Button variant="link". */
function InternalLink({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="internal-link"
      className={cn(buttonVariants({ variant: "link" }), "h-auto w-fit p-0", className)}
      {...props}
    >
      {children}
    </a>
  )
}

/**
 * Lien externe : ouvre une nouvelle page/onglet. Icône obligatoire à droite du
 * label, tooltip obligatoire au survol ("<label> - nouvelle fenêtre").
 */
function ExternalLink({
  className,
  children,
  label,
  ...props
}: React.ComponentProps<"a"> & { label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            data-slot="external-link"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "link" }),
              "h-auto w-fit gap-1 p-0",
              className
            )}
            {...props}
          >
            {children}
            <ExternalLinkGlyph className="size-3.5" />
          </a>
        </TooltipTrigger>
        <TooltipContent>{label} - nouvelle fenêtre</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/**
 * Lien de téléchargement : label "Télécharger <fichier>", description
 * (format, volume, langue) et icône de téléchargement obligatoire à droite.
 */
function DownloadLink({
  className,
  fileName,
  format,
  size,
  lang,
  ...props
}: React.ComponentProps<"a"> & {
  fileName: string
  format: string
  size: string
  lang: string
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <a
        data-slot="download-link"
        download
        className={cn(buttonVariants({ variant: "link" }), "h-auto w-fit gap-1.5 p-0")}
        {...props}
      >
        Télécharger {fileName}
        <DownloadIcon className="size-3.5" />
      </a>
      <p className="text-muted-foreground text-xs">
        {format} — {size} — {lang}
      </p>
    </div>
  )
}

/**
 * Lien au fil du paragraphe : souligné, hérite de la typographie du texte
 * environnant. Si `external`, ajoute l'icône et le tooltip obligatoires.
 */
function InlineLink({
  className,
  children,
  external = false,
  label,
  ...props
}: React.ComponentProps<"a"> & { external?: boolean; label?: string }) {
  const linkClassName = cn(
    "text-primary underline underline-offset-4 hover:text-primary/80",
    external && "inline-flex items-center gap-0.5",
    className
  )

  if (external) {
    const tooltipLabel = label ?? (typeof children === "string" ? children : "Lien")
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              data-slot="inline-link"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              {...props}
            >
              {children}
              <ExternalLinkGlyph className="size-3 shrink-0" />
            </a>
          </TooltipTrigger>
          <TooltipContent>{tooltipLabel} - nouvelle fenêtre</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <a data-slot="inline-link" className={linkClassName} {...props}>
      {children}
    </a>
  )
}

export { InternalLink, ExternalLink, DownloadLink, InlineLink }
