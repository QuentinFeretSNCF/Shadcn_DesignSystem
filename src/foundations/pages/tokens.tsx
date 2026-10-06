import { PageHeader, Section, Callout } from "../ui";
import { cn } from "@/lib/utils";
import { COLOR_TOKENS, toRgba as tokenToRgba, toHex as tokenToHex, type ColorToken } from "../data/tokens-color";

interface Swatch {
  name: string;
  cssVar: string;
  usage: string;
  border?: boolean;
}

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {swatches.map((s) => (
        <div key={s.cssVar} className="flex flex-col gap-2">
          <div
            className={cn("h-16 rounded-md", s.border && "border-border border")}
            style={{ background: `var(${s.cssVar})` }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{s.name}</span>
            <code className="text-muted-foreground font-mono text-xs">{s.cssVar}</code>
            <span className="text-muted-foreground mt-0.5 text-xs">{s.usage}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function TokenCard({ token }: { token: ColorToken }) {
  return (
    <div
      className="flex flex-col gap-1.5"
      title={token.description || undefined}
    >
      <div className="border-border h-12 rounded-md border" style={{ background: tokenToRgba(token) }} />
      <div className="flex flex-col">
        <code className="text-foreground font-mono text-[11px]">{token.subpath}</code>
        <span className="text-muted-foreground font-mono text-[10px]">
          {token.a < 1 ? tokenToRgba(token) : tokenToHex(token)}
        </span>
        <span className="text-muted-foreground/70 font-mono text-[10px]">→ {token.primitive}</span>
      </div>
    </div>
  );
}

function TokenGroup({ group }: { group: string }) {
  const tokens = COLOR_TOKENS.filter((t) => t.group === group);
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium">
        {group} <span className="text-muted-foreground font-normal">({tokens.length})</span>
      </span>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {tokens.map((t) => (
          <TokenCard key={t.name} token={t} />
        ))}
      </div>
    </div>
  );
}

const BASE: Swatch[] = [
  { name: "Background", cssVar: "--background", usage: "Fond de page" },
  { name: "Foreground", cssVar: "--foreground", usage: "Texte principal" },
  { name: "Card", cssVar: "--card", usage: "Fond des cartes", border: true },
  { name: "Card foreground", cssVar: "--card-foreground", usage: "Texte sur carte" },
  { name: "Popover", cssVar: "--popover", usage: "Fond des popovers/menus", border: true },
  { name: "Popover foreground", cssVar: "--popover-foreground", usage: "Texte sur popover" },
];

const BRAND: Swatch[] = [
  { name: "Primary", cssVar: "--primary", usage: "Actions principales" },
  { name: "Primary foreground", cssVar: "--primary-foreground", usage: "Texte sur primary" },
  { name: "Secondary", cssVar: "--secondary", usage: "Actions secondaires" },
  { name: "Secondary foreground", cssVar: "--secondary-foreground", usage: "Texte sur secondary" },
  { name: "Accent", cssVar: "--accent", usage: "Survol / sélection" },
  { name: "Accent foreground", cssVar: "--accent-foreground", usage: "Texte sur accent" },
];

const FEEDBACK: Swatch[] = [
  { name: "Muted", cssVar: "--muted", usage: "Fonds discrets" },
  { name: "Muted foreground", cssVar: "--muted-foreground", usage: "Texte secondaire" },
  { name: "Destructive", cssVar: "--destructive", usage: "Erreurs, actions destructives" },
  { name: "Destructive foreground", cssVar: "--destructive-foreground", usage: "Texte sur destructive" },
];

const STRUCTURE: Swatch[] = [
  { name: "Border", cssVar: "--border", usage: "Bordures" },
  { name: "Input", cssVar: "--input", usage: "Bordures de champs" },
  { name: "Ring", cssVar: "--ring", usage: "Anneau de focus" },
];

const CHARTS: Swatch[] = [
  { name: "Chart 1", cssVar: "--chart-1", usage: "Série de données 1" },
  { name: "Chart 2", cssVar: "--chart-2", usage: "Série de données 2" },
  { name: "Chart 3", cssVar: "--chart-3", usage: "Série de données 3" },
  { name: "Chart 4", cssVar: "--chart-4", usage: "Série de données 4" },
  { name: "Chart 5", cssVar: "--chart-5", usage: "Série de données 5" },
];

const SIDEBAR: Swatch[] = [
  { name: "Sidebar", cssVar: "--sidebar", usage: "Fond de la sidebar" },
  { name: "Sidebar foreground", cssVar: "--sidebar-foreground", usage: "Texte de la sidebar" },
  { name: "Sidebar primary", cssVar: "--sidebar-primary", usage: "Item actif" },
  { name: "Sidebar accent", cssVar: "--sidebar-accent", usage: "Item survolé" },
  { name: "Sidebar border", cssVar: "--sidebar-border", usage: "Séparateurs de la sidebar" },
];

const BREADCRUMB_TOKENS: Swatch[] = [
  { name: "Text default", cssVar: "--breadcrumb-text-default", usage: "Texte/Secondaire" },
  { name: "Text hover", cssVar: "--breadcrumb-text-hover", usage: "Texte/Interactif/Survolé" },
  { name: "Text current", cssVar: "--breadcrumb-text-current", usage: "Texte/Interactif/Sélectionné" },
  { name: "Focus ring", cssVar: "--breadcrumb-focus-ring", usage: "Contour/Interactif/Sélectionné" },
  { name: "Icon", cssVar: "--breadcrumb-icon", usage: "Icône/Primaire" },
];

const TOKEN_GROUPS = ["Surface", "Text", "Stroke", "Icon"];

function TokensPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Tokens"
        description="Couche sémantique : chaque token porte un nom d'usage (Surface, Text, Stroke, Icon…) et pointe vers une Primitive. Deux sources cohabitent ici : les tokens cibles définis dans Figma, et les tokens réellement câblés dans le code aujourd'hui."
      />

      <Section
        title="Tokens Figma (mode Cobalt)"
        description="Extraits de la collection de variables « 🎨 1 Tokens/Color » de la librairie Fondamentaux v0.1, résolus pour le mode Cobalt — le même mode que les primitives NewSNCF. Survolez un swatch pour voir sa description quand elle existe."
      >
        <div className="flex flex-col gap-8">
          {TOKEN_GROUPS.map((g) => (
            <TokenGroup key={g} group={g} />
          ))}
        </div>
        <Callout>
          Source :{" "}
          <code className="text-foreground font-mono text-xs">
            figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
          </code>{" "}
          — collection <code className="text-foreground font-mono text-xs">🎨 1 Tokens/Color</code>,
          mode <code className="text-foreground font-mono text-xs">Cobalt</code>. 112 tokens, chacun
          résolu jusqu'à sa primitive ({" "}
          <code className="text-foreground font-mono text-xs">
            src/foundations/data/tokens-color.ts
          </code>
          ). Pas (encore) câblés dans globals.css — voir la section « Tokens actuels (code) »
          ci-dessous pour ce qui est réellement en place.
        </Callout>
      </Section>

      <Section
        title="Tokens actuels (code)"
        description="Ce qui est réellement défini dans globals.css aujourd'hui — la palette shadcn/ui générique, pas encore alignée sur les tokens Figma ci-dessus. Lus en live via var(--token) : basculez le thème clair/sombre dans la barre latérale."
        className="gap-6"
      >
        <Section title="Base" description="Fonds et textes génériques (OKLCH, échelle de gris shadcn/ui par défaut).">
          <SwatchGrid swatches={BASE} />
        </Section>

        <Section title="Marque & actions" description="Couleurs d'accentuation utilisées par les boutons, liens et éléments sélectionnés.">
          <SwatchGrid swatches={BRAND} />
        </Section>

        <Section title="États & retours" description="Fonds discrets et signalisation d'erreur.">
          <SwatchGrid swatches={FEEDBACK} />
        </Section>

        <Section title="Structure" description="Bordures, champs de saisie et anneau de focus.">
          <SwatchGrid swatches={STRUCTURE} />
        </Section>

        <Section title="Graphiques" description="Palette dédiée aux composants Chart (5 séries).">
          <SwatchGrid swatches={CHARTS} />
        </Section>

        <Section title="Sidebar" description="Jeu de tokens dédié à la navigation latérale.">
          <SwatchGrid swatches={SIDEBAR} />
        </Section>

        <Section
          title="Tokens en migration (Breadcrumb)"
          description="Palette de marque réelle (rose/magenta), introduite localement pour Breadcrumb en attendant la migration des tokens partagés ci-dessus. Ne pas réutiliser ailleurs sans migrer le composant concerné."
        >
          <SwatchGrid swatches={BREADCRUMB_TOKENS} />
          <Callout tone="warning">
            Ces 5 tokens ne font pas (encore) partie du thème global : ils sont déclarés en dur dans{" "}
            <code className="text-foreground font-mono text-xs">globals.css</code> et consommés
            uniquement par <code className="text-foreground font-mono text-xs">breadcrumb.tsx</code>.
            Ils proviennent de l'ancienne collection Figma{" "}
            <code className="text-foreground font-mono text-xs">Primitives/Colors — Legacy</code>{" "}
            (namespace <code className="text-foreground font-mono text-xs">LIVE IHM/*</code>), pas de
            la collection NewSNCF / des tokens Cobalt affichés plus haut sur cette page.
          </Callout>
        </Section>
      </Section>
    </div>
  );
}

export { TokensPage };
