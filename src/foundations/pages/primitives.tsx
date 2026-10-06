import { PageHeader, Section, Callout } from "../ui";
import { PRIMITIVE_COLOR_FAMILIES, toRgba, toHex, type PrimitiveColorFamily } from "../data/primitives-colors";

function PrimitiveFamilyRow({ family }: { family: PrimitiveColorFamily }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">{family.name}</span>
      <div className="flex flex-wrap gap-3">
        {family.colors.map((c) => (
          <div key={c.figmaVariable} className="flex w-20 flex-col gap-1.5">
            <div className="border-border h-12 rounded-md border" style={{ background: toRgba(c) }} />
            <div className="flex flex-col">
              <code className="text-foreground font-mono text-[11px]">{c.name}</code>
              <span className="text-muted-foreground font-mono text-[10px]">
                {c.a < 1 ? toRgba(c) : toHex(c)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrimitivesPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Primitives"
        description="Nuancier de marque brut : les valeurs de couleur elles-mêmes, avant toute signification d'usage. C'est la matière première dans laquelle les Tokens puisent — voir la page Tokens pour la couche sémantique (Surface, Text, Stroke, Icon)."
      />

      <Section
        title="Couleurs (NewSNCF)"
        description="Nuancier extrait de la librairie Figma « Fondamentaux v0.1 » (collection de variables Primitives/Colors — NewSNCF). 8 familles de 18 paliers chacune (1000 = blanc → 000 = noir)."
      >
        <div className="flex flex-col gap-6">
          {PRIMITIVE_COLOR_FAMILIES.map((family) => (
            <PrimitiveFamilyRow key={family.name} family={family} />
          ))}
        </div>
        <Callout>
          Source :{" "}
          <code className="text-foreground font-mono text-xs">
            figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
          </code>
          . Valeurs figées lors de l'extraction (
          <code className="text-foreground font-mono text-xs">
            src/foundations/data/primitives-colors.ts
          </code>
          ) — à resynchroniser manuellement si la librairie évolue.
        </Callout>
      </Section>
    </div>
  );
}

export { PrimitivesPage };
