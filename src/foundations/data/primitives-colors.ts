/**
 * Primitives de couleur extraites de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "Primitives/Colors — Legacy", namespace "LIVE IHM/*").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * Namespace choisi car déjà consommé par ce projet : les tokens locaux de
 * Breadcrumb (globals.css, --breadcrumb-*) correspondent exactement à ces
 * valeurs (ex. --breadcrumb-text-current: #3e001a === LIVE IHM/Prune/1).
 *
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface PrimitiveColor {
  name: string;
  figmaVariable: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface PrimitiveColorFamily {
  name: string;
  colors: PrimitiveColor[];
}

export const PRIMITIVE_COLOR_FAMILIES: PrimitiveColorFamily[] = [
  {
    name: "Prune",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Prune/1", r: 62, g: 0, b: 26, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Prune/2", r: 110, g: 0, b: 64, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Prune/3", r: 161, g: 0, b: 107, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Prune/4", r: 217, g: 153, b: 196, a: 1 },
      { name: "5", figmaVariable: "LIVE IHM/Prune/5", r: 236, g: 204, b: 225, a: 1 },
      { name: "6", figmaVariable: "LIVE IHM/Prune/6", r: 246, g: 229, b: 240, a: 1 },
    ],
  },
  {
    name: "Gris",
    colors: [
      { name: "black-carbone", figmaVariable: "LIVE IHM/Gris/black-carbone", r: 51, g: 51, b: 51, a: 1 },
      { name: "8", figmaVariable: "LIVE IHM/Gris/8", r: 77, g: 79, b: 83, a: 1 },
      { name: "7", figmaVariable: "LIVE IHM/Gris/7", r: 92, g: 92, b: 92, a: 1 },
      { name: "6", figmaVariable: "LIVE IHM/Gris/6", r: 133, g: 133, b: 133, a: 1 },
      { name: "5", figmaVariable: "LIVE IHM/Gris/5", r: 160, g: 160, b: 160, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Gris/4", r: 185, g: 185, b: 185, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Gris/3", r: 215, g: 215, b: 215, a: 1 },
      { name: "warm-grey", figmaVariable: "LIVE IHM/Gris/warm-grey", r: 224, g: 222, b: 216, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Gris/2", r: 235, g: 235, b: 235, a: 1 },
      { name: "1", figmaVariable: "LIVE IHM/Gris/1", r: 242, g: 242, b: 242, a: 1 },
      { name: "white-alt", figmaVariable: "LIVE IHM/Gris/white-alt", r: 252, g: 252, b: 252, a: 1 },
      { name: "0", figmaVariable: "LIVE IHM/Gris/0", r: 255, g: 255, b: 255, a: 1 },
    ],
  },
  {
    name: "Bleu",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Bleu/1", r: 0, g: 100, b: 171, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Bleu/2", r: 0, g: 115, b: 188, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Bleu/3", r: 0, g: 140, b: 230, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Bleu/4", r: 64, g: 207, b: 255, a: 1 },
    ],
  },
  {
    name: "Vert",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Vert/1", r: 24, g: 121, b: 54, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Vert/2", r: 88, g: 164, b: 112, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Vert/3", r: 0, g: 170, b: 80, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Vert/4", r: 51, g: 255, b: 175, a: 1 },
    ],
  },
  {
    name: "Rouge",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Rouge/1", r: 170, g: 10, b: 53, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Rouge/2", r: 199, g: 35, b: 79, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Rouge/3", r: 220, g: 24, b: 77, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Rouge/4", r: 232, g: 86, b: 92, a: 1 },
      { name: "5", figmaVariable: "LIVE IHM/Rouge/5", r: 251, g: 232, b: 232, a: 1 },
    ],
  },
  {
    name: "Orange",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Orange/1", r: 218, g: 122, b: 44, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Orange/2", r: 255, g: 115, b: 80, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Orange/3", r: 255, g: 145, b: 80, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Orange/4", r: 255, g: 173, b: 80, a: 1 },
      { name: "5", figmaVariable: "LIVE IHM/Orange/5", r: 255, g: 245, b: 234, a: 1 },
    ],
  },
  {
    name: "Teal",
    colors: [
      { name: "1", figmaVariable: "LIVE IHM/Teal/1", r: 155, g: 172, b: 32, a: 1 },
      { name: "2", figmaVariable: "LIVE IHM/Teal/2", r: 172, g: 191, b: 35, a: 1 },
      { name: "3", figmaVariable: "LIVE IHM/Teal/3", r: 202, g: 218, b: 88, a: 1 },
      { name: "4", figmaVariable: "LIVE IHM/Teal/4", r: 249, g: 251, b: 235, a: 1 },
    ],
  },
  {
    name: "Opacité",
    colors: [
      { name: "Default", figmaVariable: "LIVE IHM/Opacity/Default", r: 0, g: 0, b: 0, a: 0.0275 },
      { name: "carbon/1", figmaVariable: "LIVE IHM/Opacity/carbon/1", r: 51, g: 51, b: 51, a: 0.2 },
      { name: "carbon/2", figmaVariable: "LIVE IHM/Opacity/carbon/2", r: 51, g: 51, b: 51, a: 0.4 },
      { name: "carbon/3", figmaVariable: "LIVE IHM/Opacity/carbon/3", r: 51, g: 51, b: 51, a: 0.6 },
    ],
  },
];

export function toRgba({ r, g, b, a }: PrimitiveColor): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function toHex({ r, g, b }: PrimitiveColor): string {
  const hex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}
