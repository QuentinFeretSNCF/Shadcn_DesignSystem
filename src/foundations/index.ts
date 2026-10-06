import type { FoundationPage } from "./types";
import { TypographyPage } from "./pages/typography";
import { PrimitivesPage } from "./pages/primitives";
import { TokensPage } from "./pages/tokens";
import { SpacingPage } from "./pages/spacing";
import { MockupsPage } from "./pages/mockups";
import { ImageRatiosPage } from "./pages/image-ratios";

export const foundations: FoundationPage[] = [
  {
    slug: "fondamentaux-typographie",
    name: "Typographie",
    description: "Police, échelle de tailles et graisses disponibles.",
    render: TypographyPage,
  },
  {
    slug: "fondamentaux-primitives",
    name: "Primitives",
    description: "Nuancier de marque brut (Figma NewSNCF).",
    render: PrimitivesPage,
  },
  {
    slug: "fondamentaux-tokens",
    name: "Tokens",
    description: "Couche sémantique : tokens Figma (Cobalt) et tokens du code.",
    render: TokensPage,
  },
  {
    slug: "fondamentaux-espacements",
    name: "Espacements",
    description: "Échelle d'espacement et rayons de bordure.",
    render: SpacingPage,
  },
  {
    slug: "fondamentaux-mockups",
    name: "Mockups",
    description: "Seuils de rupture et cadres d'appareils de référence.",
    render: MockupsPage,
  },
  {
    slug: "fondamentaux-ratios-image",
    name: "Ratios d'image",
    description: "Formats d'image universels recommandés.",
    render: ImageRatiosPage,
  },
];

export type { FoundationPage };
