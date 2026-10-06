/**
 * Primitives de couleur extraites de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "Primitives/Colors — NewSNCF").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * 8 familles de 18 paliers chacune (1000 = blanc → 000 = noir).
 * "Carbone/200" est un alias Figma vers Branding/Neutre/1 (autre collection) ;
 * sa valeur a été résolue lors de l'extraction.
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

const STEPS = [
  "1000",
  "990",
  "980",
  "950",
  "900",
  "800",
  "700",
  "600",
  "500",
  "400",
  "350",
  "300",
  "250",
  "200",
  "150",
  "100",
  "050",
  "000",
] as const;

function family(name: string, rgb: [number, number, number][]): PrimitiveColorFamily {
  return {
    name,
    colors: STEPS.map((step, i) => ({
      name: step,
      figmaVariable: `${name}/${step}`,
      r: rgb[i][0],
      g: rgb[i][1],
      b: rgb[i][2],
      a: 1,
    })),
  };
}

export const PRIMITIVE_COLOR_FAMILIES: PrimitiveColorFamily[] = [
  family("Aubergine", [
    [255, 255, 255],
    [255, 251, 255],
    [255, 247, 255],
    [249, 236, 255],
    [239, 219, 255],
    [215, 188, 242],
    [187, 161, 213],
    [160, 134, 185],
    [133, 109, 158],
    [107, 85, 132],
    [95, 73, 119],
    [83, 61, 106],
    [71, 50, 94],
    [60, 39, 82],
    [48, 28, 71],
    [38, 17, 60],
    [26, 5, 49],
    [0, 0, 0],
  ]),
  family("Carbone", [
    [255, 255, 255],
    [253, 252, 254],
    [250, 249, 251],
    [242, 240, 243],
    [227, 226, 228],
    [199, 198, 200],
    [171, 171, 173],
    [145, 144, 147],
    [119, 119, 121],
    [94, 94, 96],
    [82, 82, 84],
    [70, 71, 73],
    [59, 59, 61],
    [51, 51, 51], // alias -> Branding/Neutre/1
    [37, 38, 40],
    [27, 28, 30],
    [16, 17, 19],
    [0, 0, 0],
  ]),
  family("Cobalt", [
    [255, 255, 255],
    [253, 252, 255],
    [248, 249, 255],
    [234, 241, 255],
    [210, 228, 255],
    [161, 201, 255],
    [134, 174, 226],
    [108, 147, 197],
    [81, 121, 170],
    [55, 96, 144],
    [42, 84, 131],
    [27, 72, 118],
    [9, 61, 106],
    [0, 50, 90],
    [0, 39, 73],
    [0, 28, 55],
    [0, 17, 38],
    [0, 0, 0],
  ]),
  family("Forêt", [
    [255, 255, 255],
    [244, 255, 246],
    [232, 255, 240],
    [200, 252, 225],
    [186, 238, 211],
    [159, 210, 184],
    [132, 182, 157],
    [106, 155, 131],
    [81, 129, 106],
    [56, 104, 83],
    [43, 91, 71],
    [31, 79, 60],
    [17, 68, 49],
    [1, 56, 38],
    [0, 44, 29],
    [0, 33, 21],
    [0, 21, 12],
    [0, 0, 0],
  ]),
  family("Orange", [
    [255, 255, 255],
    [255, 251, 255],
    [255, 248, 246],
    [255, 237, 231],
    [255, 219, 206],
    [255, 181, 152],
    [255, 140, 91],
    [244, 98, 25],
    [207, 76, 0],
    [166, 59, 0],
    [146, 51, 0],
    [126, 43, 0],
    [108, 36, 0],
    [89, 28, 0],
    [72, 21, 0],
    [55, 14, 0],
    [37, 7, 0],
    [0, 0, 0],
  ]),
  family("Rouge", [
    [255, 255, 255],
    [255, 251, 255],
    [255, 248, 247],
    [255, 237, 236],
    [255, 218, 218],
    [255, 179, 180],
    [255, 136, 141],
    [255, 81, 100],
    [233, 25, 68],
    [191, 0, 50],
    [168, 0, 43],
    [146, 0, 36],
    [125, 0, 30],
    [104, 0, 23],
    [84, 0, 17],
    [64, 0, 11],
    [44, 0, 5],
    [0, 0, 0],
  ]),
  family("Violet", [
    [255, 255, 255],
    [255, 251, 255],
    [255, 247, 249],
    [255, 235, 247],
    [255, 215, 244],
    [255, 171, 241],
    [243, 130, 231],
    [212, 103, 202],
    [183, 77, 174],
    [153, 51, 147],
    [139, 37, 134],
    [125, 21, 121],
    [110, 0, 108],
    [92, 0, 90],
    [74, 0, 72],
    [56, 0, 55],
    [38, 0, 37],
    [0, 0, 0],
  ]),
  family("Vert", [
    [255, 255, 255],
    [245, 255, 243],
    [234, 255, 234],
    [195, 255, 206],
    [110, 253, 159],
    [78, 224, 133],
    [39, 195, 109],
    [0, 166, 88],
    [0, 137, 71],
    [0, 109, 56],
    [0, 96, 48],
    [0, 82, 40],
    [0, 69, 33],
    [0, 57, 26],
    [0, 45, 19],
    [0, 33, 13],
    [0, 21, 6],
    [0, 0, 0],
  ]),
];

export function toRgba({ r, g, b, a }: PrimitiveColor): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function toHex({ r, g, b }: PrimitiveColor): string {
  const hex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}
