/**
 * Tokens de couleur sémantiques extraits de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "🎨 1 Tokens/Color", mode "Cobalt").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * Chaque token référence une primitive (voir primitives-colors.ts) via un
 * alias Figma ; la primitive résolue est indiquée dans `primitive`.
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface ColorToken {
  name: string;
  group: string;
  subpath: string;
  description: string;
  primitive: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export const COLOR_TOKENS: ColorToken[] = [
  { name: "Surface/Base", group: "Surface", subpath: "Base", description: "Surface de fond neutre — canvas de base blanche. Utilisée comme fond par défaut pour conteneurs, inputs, cellules, popovers et surfaces papier.", primitive: "Cobalt/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Surface/Brand/Primary", group: "Surface", subpath: "Brand/Primary", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Surface/Brand/Secondary", group: "Surface", subpath: "Brand/Secondary", description: "", primitive: "Cobalt/000", r: 0, g: 0, b: 0, a: 1 },
  { name: "Surface/Brand/Tertiary", group: "Surface", subpath: "Brand/Tertiary", description: "", primitive: "Cobalt/980", r: 248, g: 249, b: 255, a: 1 },
  { name: "Surface/Neutral/Lighter", group: "Surface", subpath: "Neutral/Lighter", description: "", primitive: "Cobalt/990", r: 253, g: 252, b: 255, a: 1 },
  { name: "Surface/Neutral/Light", group: "Surface", subpath: "Neutral/Light", description: "", primitive: "Cobalt/980", r: 248, g: 249, b: 255, a: 1 },
  { name: "Surface/Neutral/Default", group: "Surface", subpath: "Neutral/Default", description: "", primitive: "Cobalt/950", r: 234, g: 241, b: 255, a: 1 },
  { name: "Surface/Neutral/Dark", group: "Surface", subpath: "Neutral/Dark", description: "", primitive: "Cobalt/900", r: 210, g: 228, b: 255, a: 1 },
  { name: "Surface/Neutral/Darker", group: "Surface", subpath: "Neutral/Darker", description: "", primitive: "Cobalt/800", r: 161, g: 201, b: 255, a: 1 },
  { name: "Surface/On-color/Enabled", group: "Surface", subpath: "On-color/Enabled", description: "", primitive: "Cobalt/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Surface/On-color/Hovered", group: "Surface", subpath: "On-color/Hovered", description: "", primitive: "Cobalt/950", r: 234, g: 241, b: 255, a: 1 },
  { name: "Surface/On-color/Pressed", group: "Surface", subpath: "On-color/Pressed", description: "", primitive: "Cobalt/900", r: 210, g: 228, b: 255, a: 1 },
  { name: "Surface/On-color/Subtle", group: "Surface", subpath: "On-color/Subtle", description: "", primitive: "Carbone/250", r: 59, g: 59, b: 61, a: 1 },
  { name: "Surface/On-color/Disabled", group: "Surface", subpath: "On-color/Disabled", description: "", primitive: "Carbone/900", r: 227, g: 226, b: 228, a: 1 },
  { name: "Surface/Disabled", group: "Surface", subpath: "Disabled", description: "", primitive: "Carbone/900", r: 227, g: 226, b: 228, a: 1 },
  { name: "Surface/Interactive/Enabled", group: "Surface", subpath: "Interactive/Enabled", description: "", primitive: "Cobalt/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Surface/Interactive/Hovered", group: "Surface", subpath: "Interactive/Hovered", description: "", primitive: "Cobalt/900", r: 210, g: 228, b: 255, a: 1 },
  { name: "Surface/Interactive/Selected", group: "Surface", subpath: "Interactive/Selected", description: "", primitive: "Cobalt/800", r: 161, g: 201, b: 255, a: 1 },
  { name: "Surface/Interactive/Loading", group: "Surface", subpath: "Interactive/Loading", description: "", primitive: "Carbone/900", r: 227, g: 226, b: 228, a: 1 },
  { name: "Surface/Interactive/Active/Enabled", group: "Surface", subpath: "Interactive/Active/Enabled", description: "", primitive: "Cobalt/400", r: 55, g: 96, b: 144, a: 1 },
  { name: "Surface/Interactive/Active/Hovered", group: "Surface", subpath: "Interactive/Active/Hovered", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Surface/Interactive/Active/Selected", group: "Surface", subpath: "Interactive/Active/Selected", description: "", primitive: "Cobalt/200", r: 0, g: 50, b: 90, a: 1 },
  { name: "Text/Heading", group: "Text", subpath: "Heading", description: "", primitive: "Cobalt/150", r: 0, g: 39, b: 73, a: 1 },
  { name: "Text/Body", group: "Text", subpath: "Body", description: "", primitive: "Carbone/000", r: 0, g: 0, b: 0, a: 1 },
  { name: "Text/Secondary", group: "Text", subpath: "Secondary", description: "", primitive: "Carbone/250", r: 59, g: 59, b: 61, a: 1 },
  { name: "Text/Tertiary", group: "Text", subpath: "Tertiary", description: "", primitive: "Carbone/350", r: 82, g: 82, b: 84, a: 1 },
  { name: "Text/Helper", group: "Text", subpath: "Helper", description: "", primitive: "Carbone/400", r: 94, g: 94, b: 96, a: 1 },
  { name: "Text/On-color", group: "Text", subpath: "On-color", description: "", primitive: "Carbone/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Text/Interactive/Enabled", group: "Text", subpath: "Interactive/Enabled", description: "", primitive: "Cobalt/400", r: 55, g: 96, b: 144, a: 1 },
  { name: "Text/Interactive/Hovered", group: "Text", subpath: "Interactive/Hovered", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Text/Interactive/Selected", group: "Text", subpath: "Interactive/Selected", description: "", primitive: "Cobalt/200", r: 0, g: 50, b: 90, a: 1 },
  { name: "Text/Interactive/Loading", group: "Text", subpath: "Interactive/Loading", description: "", primitive: "Carbone/400", r: 94, g: 94, b: 96, a: 1 },
  { name: "Text/Interactive/Subtle", group: "Text", subpath: "Interactive/Subtle", description: "", primitive: "Carbone/900", r: 227, g: 226, b: 228, a: 1 },
  { name: "Stroke/Primary", group: "Stroke", subpath: "Primary", description: "", primitive: "Cobalt/000", r: 0, g: 0, b: 0, a: 1 },
  { name: "Stroke/Secondary", group: "Stroke", subpath: "Secondary", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Stroke/Tertiary", group: "Stroke", subpath: "Tertiary", description: "", primitive: "Cobalt/600", r: 108, g: 147, b: 197, a: 1 },
  { name: "Stroke/Helper", group: "Stroke", subpath: "Helper", description: "", primitive: "Cobalt/150", r: 0, g: 39, b: 73, a: 1 },
  { name: "Stroke/Interactive/Enabled", group: "Stroke", subpath: "Interactive/Enabled", description: "", primitive: "Cobalt/400", r: 55, g: 96, b: 144, a: 1 },
  { name: "Stroke/Interactive/Hovered", group: "Stroke", subpath: "Interactive/Hovered", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Stroke/Interactive/Selected", group: "Stroke", subpath: "Interactive/Selected", description: "", primitive: "Cobalt/200", r: 0, g: 50, b: 90, a: 1 },
  { name: "Stroke/Interactive/Subtle", group: "Stroke", subpath: "Interactive/Subtle", description: "", primitive: "Carbone/250", r: 59, g: 59, b: 61, a: 1 },
  { name: "Stroke/Disabled", group: "Stroke", subpath: "Disabled", description: "", primitive: "Carbone/700", r: 171, g: 171, b: 173, a: 1 },
  { name: "Text/Disabled", group: "Text", subpath: "Disabled", description: "", primitive: "Carbone/700", r: 171, g: 171, b: 173, a: 1 },
  { name: "Text/Interactive/Danger", group: "Text", subpath: "Interactive/Danger", description: "", primitive: "Rouge/350", r: 168, g: 0, b: 43, a: 1 },
  { name: "Text/Link/Enabled", group: "Text", subpath: "Link/Enabled", description: "", primitive: "Cobalt/400", r: 55, g: 96, b: 144, a: 1 },
  { name: "Text/Link/Visited", group: "Text", subpath: "Link/Visited", description: "", primitive: "Violet/300", r: 125, g: 21, b: 121, a: 1 },
  { name: "Icon/Primary", group: "Icon", subpath: "Primary", description: "", primitive: "Carbone/000", r: 0, g: 0, b: 0, a: 1 },
  { name: "Icon/Interactive/Enabled", group: "Icon", subpath: "Interactive/Enabled", description: "", primitive: "Cobalt/400", r: 55, g: 96, b: 144, a: 1 },
  { name: "Icon/Interactive/Hovered", group: "Icon", subpath: "Interactive/Hovered", description: "", primitive: "Cobalt/300", r: 27, g: 72, b: 118, a: 1 },
  { name: "Icon/Interactive/Selected", group: "Icon", subpath: "Interactive/Selected", description: "", primitive: "Cobalt/200", r: 0, g: 50, b: 90, a: 1 },
  { name: "Icon/Interactive/Loading", group: "Icon", subpath: "Interactive/Loading", description: "", primitive: "Carbone/300", r: 70, g: 71, b: 73, a: 1 },
  { name: "Icon/Interactive/Subtle", group: "Icon", subpath: "Interactive/Subtle", description: "", primitive: "Carbone/200", r: 51, g: 51, b: 51, a: 1 },
  { name: "Stroke/Divider", group: "Stroke", subpath: "Divider", description: "", primitive: "Cobalt/800", r: 161, g: 201, b: 255, a: 1 },
  { name: "Stroke/On-color", group: "Stroke", subpath: "On-color", description: "", primitive: "Cobalt/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Icon/Secondary", group: "Icon", subpath: "Secondary", description: "", primitive: "Carbone/250", r: 59, g: 59, b: 61, a: 1 },
  { name: "Icon/Disabled", group: "Icon", subpath: "Disabled", description: "", primitive: "Carbone/700", r: 171, g: 171, b: 173, a: 1 },
  { name: "Icon/On-color", group: "Icon", subpath: "On-color", description: "", primitive: "Carbone/1000", r: 255, g: 255, b: 255, a: 1 },
  { name: "Surface/Error/Subtle", group: "Surface", subpath: "Error/Subtle", description: "Couleur de fond des erreurs", primitive: "Rouge/900", r: 255, g: 218, b: 218, a: 1 },
  { name: "Surface/Error/Default", group: "Surface", subpath: "Error/Default", description: "", primitive: "Rouge/500", r: 233, g: 25, b: 68, a: 1 },
  { name: "Surface/Error/Strong", group: "Surface", subpath: "Error/Strong", description: "", primitive: "Rouge/250", r: 125, g: 0, b: 30, a: 1 },
  { name: "Surface/Error/Interactive/Enabled", group: "Surface", subpath: "Error/Interactive/Enabled", description: "", primitive: "Rouge/400", r: 191, g: 0, b: 50, a: 1 },
  { name: "Surface/Error/Interactive/Hovered", group: "Surface", subpath: "Error/Interactive/Hovered", description: "", primitive: "Rouge/300", r: 146, g: 0, b: 36, a: 1 },
  { name: "Surface/Error/Interactive/Selected", group: "Surface", subpath: "Error/Interactive/Selected", description: "", primitive: "Rouge/200", r: 104, g: 0, b: 23, a: 1 },
  { name: "Surface/Error/Interactive/Loading", group: "Surface", subpath: "Error/Interactive/Loading", description: "Surface pour une action destructive en cours (spinner overlay). Alias par défaut vers Enabled pour maintenir la visibilité couleur.", primitive: "Rouge/900", r: 255, g: 218, b: 218, a: 1 },
  { name: "Surface/Warning/Subtle", group: "Surface", subpath: "Warning/Subtle", description: "", primitive: "Orange/950", r: 255, g: 237, b: 231, a: 1 },
  { name: "Surface/Warning/Default", group: "Surface", subpath: "Warning/Default", description: "", primitive: "Orange/600", r: 244, g: 98, b: 25, a: 1 },
  { name: "Surface/Warning/Strong", group: "Surface", subpath: "Warning/Strong", description: "", primitive: "Orange/400", r: 166, g: 59, b: 0, a: 1 },
  { name: "Surface/Success/Subtle", group: "Surface", subpath: "Success/Subtle", description: "", primitive: "Vert/950", r: 195, g: 255, b: 206, a: 1 },
  { name: "Surface/Success/Default", group: "Surface", subpath: "Success/Default", description: "", primitive: "Vert/600", r: 0, g: 166, b: 88, a: 1 },
  { name: "Surface/Success/Strong", group: "Surface", subpath: "Success/Strong", description: "", primitive: "Vert/400", r: 0, g: 109, b: 56, a: 1 },
  { name: "Surface/Info/Subtle", group: "Surface", subpath: "Info/Subtle", description: "", primitive: "Violet/950", r: 255, g: 235, b: 247, a: 1 },
  { name: "Surface/Overlay/Default", group: "Surface", subpath: "Overlay/Default", description: "", primitive: "LIVE IHM/Opacity/carbon/3", r: 51, g: 51, b: 51, a: 0.6 },
  { name: "Surface/Overlay/Light", group: "Surface", subpath: "Overlay/Light", description: "", primitive: "LIVE IHM/Opacity/Default", r: 0, g: 0, b: 0, a: 0.0275 },
  { name: "Surface/Info/Default", group: "Surface", subpath: "Info/Default", description: "", primitive: "Violet/400", r: 153, g: 51, b: 147, a: 1 },
  { name: "Surface/Info/Strong", group: "Surface", subpath: "Info/Strong", description: "", primitive: "Violet/250", r: 110, g: 0, b: 108, a: 1 },
  { name: "Text/Error/Subtle", group: "Text", subpath: "Error/Subtle", description: "", primitive: "Rouge/900", r: 255, g: 218, b: 218, a: 1 },
  { name: "Text/Error/Default", group: "Text", subpath: "Error/Default", description: "", primitive: "Rouge/350", r: 168, g: 0, b: 43, a: 1 },
  { name: "Text/Error/Strong", group: "Text", subpath: "Error/Strong", description: "", primitive: "Rouge/150", r: 84, g: 0, b: 17, a: 1 },
  { name: "Text/Warning/Subtle", group: "Text", subpath: "Warning/Subtle", description: "", primitive: "Orange/900", r: 255, g: 219, b: 206, a: 1 },
  { name: "Text/Warning/Default", group: "Text", subpath: "Warning/Default", description: "", primitive: "Orange/300", r: 126, g: 43, b: 0, a: 1 },
  { name: "Text/Warning/Strong", group: "Text", subpath: "Warning/Strong", description: "", primitive: "Orange/200", r: 89, g: 28, b: 0, a: 1 },
  { name: "Text/Success/Subtle", group: "Text", subpath: "Success/Subtle", description: "", primitive: "Vert/980", r: 234, g: 255, b: 234, a: 1 },
  { name: "Text/Success/Default", group: "Text", subpath: "Success/Default", description: "", primitive: "Vert/300", r: 0, g: 82, b: 40, a: 1 },
  { name: "Text/Success/Strong", group: "Text", subpath: "Success/Strong", description: "", primitive: "Vert/150", r: 0, g: 45, b: 19, a: 1 },
  { name: "Text/Info/Subtle", group: "Text", subpath: "Info/Subtle", description: "", primitive: "Violet/950", r: 255, g: 235, b: 247, a: 1 },
  { name: "Text/Info/Default", group: "Text", subpath: "Info/Default", description: "", primitive: "Violet/400", r: 153, g: 51, b: 147, a: 1 },
  { name: "Text/Info/Strong", group: "Text", subpath: "Info/Strong", description: "", primitive: "Violet/250", r: 110, g: 0, b: 108, a: 1 },
  { name: "Icon/Error/Subtle", group: "Icon", subpath: "Error/Subtle", description: "", primitive: "Rouge/900", r: 255, g: 218, b: 218, a: 1 },
  { name: "Icon/Error/Default", group: "Icon", subpath: "Error/Default", description: "", primitive: "Rouge/300", r: 146, g: 0, b: 36, a: 1 },
  { name: "Icon/Error/Strong", group: "Icon", subpath: "Error/Strong", description: "", primitive: "Rouge/150", r: 84, g: 0, b: 17, a: 1 },
  { name: "Icon/Warning/Subtle", group: "Icon", subpath: "Warning/Subtle", description: "", primitive: "Orange/900", r: 255, g: 219, b: 206, a: 1 },
  { name: "Icon/Warning/Default", group: "Icon", subpath: "Warning/Default", description: "", primitive: "Orange/300", r: 126, g: 43, b: 0, a: 1 },
  { name: "Icon/Warning/Strong", group: "Icon", subpath: "Warning/Strong", description: "", primitive: "Orange/200", r: 89, g: 28, b: 0, a: 1 },
  { name: "Icon/Success/Subtle", group: "Icon", subpath: "Success/Subtle", description: "", primitive: "Vert/950", r: 195, g: 255, b: 206, a: 1 },
  { name: "Icon/Success/Default", group: "Icon", subpath: "Success/Default", description: "", primitive: "Vert/600", r: 0, g: 166, b: 88, a: 1 },
  { name: "Icon/Success/Strong", group: "Icon", subpath: "Success/Strong", description: "", primitive: "Vert/400", r: 0, g: 109, b: 56, a: 1 },
  { name: "Icon/Info/Subtle", group: "Icon", subpath: "Info/Subtle", description: "", primitive: "Violet/950", r: 255, g: 235, b: 247, a: 1 },
  { name: "Icon/Info/Default", group: "Icon", subpath: "Info/Default", description: "", primitive: "Violet/400", r: 153, g: 51, b: 147, a: 1 },
  { name: "Icon/Info/Strong", group: "Icon", subpath: "Info/Strong", description: "", primitive: "Violet/200", r: 92, g: 0, b: 90, a: 1 },
  { name: "Stroke/Error/Subtle", group: "Stroke", subpath: "Error/Subtle", description: "", primitive: "Rouge/900", r: 255, g: 218, b: 218, a: 1 },
  { name: "Stroke/Error/Default", group: "Stroke", subpath: "Error/Default", description: "", primitive: "Rouge/350", r: 168, g: 0, b: 43, a: 1 },
  { name: "Stroke/Error/Strong", group: "Stroke", subpath: "Error/Strong", description: "", primitive: "Rouge/150", r: 84, g: 0, b: 17, a: 1 },
  { name: "Stroke/Warning/Subtle", group: "Stroke", subpath: "Warning/Subtle", description: "", primitive: "Orange/900", r: 255, g: 219, b: 206, a: 1 },
  { name: "Stroke/Warning/Default", group: "Stroke", subpath: "Warning/Default", description: "", primitive: "Orange/300", r: 126, g: 43, b: 0, a: 1 },
  { name: "Stroke/Warning/Strong", group: "Stroke", subpath: "Warning/Strong", description: "", primitive: "Orange/200", r: 89, g: 28, b: 0, a: 1 },
  { name: "Stroke/Success/Subtle", group: "Stroke", subpath: "Success/Subtle", description: "", primitive: "Vert/950", r: 195, g: 255, b: 206, a: 1 },
  { name: "Stroke/Success/Default", group: "Stroke", subpath: "Success/Default", description: "", primitive: "Vert/600", r: 0, g: 166, b: 88, a: 1 },
  { name: "Stroke/Success/Strong", group: "Stroke", subpath: "Success/Strong", description: "", primitive: "Vert/400", r: 0, g: 109, b: 56, a: 1 },
  { name: "Stroke/Info/Subtle", group: "Stroke", subpath: "Info/Subtle", description: "", primitive: "Violet/950", r: 255, g: 235, b: 247, a: 1 },
  { name: "Stroke/Info/Default", group: "Stroke", subpath: "Info/Default", description: "", primitive: "Violet/400", r: 153, g: 51, b: 147, a: 1 },
  { name: "Stroke/Info/Strong", group: "Stroke", subpath: "Info/Strong", description: "", primitive: "Violet/250", r: 110, g: 0, b: 108, a: 1 },
  { name: "Stroke/Error/Interactive/Enabled", group: "Stroke", subpath: "Error/Interactive/Enabled", description: "", primitive: "Rouge/400", r: 191, g: 0, b: 50, a: 1 },
];

export function toRgba(t: { r: number; g: number; b: number; a: number }): string {
  return `rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`;
}

export function toHex(t: { r: number; g: number; b: number }): string {
  const hex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${hex(t.r)}${hex(t.g)}${hex(t.b)}`;
}
