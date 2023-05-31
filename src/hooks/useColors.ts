type ColorName =
  | "darkpurple"
  | "bluegray"
  | "lightgray"
  | "white"
  | "blue"
  | "lightblue"
  | "mintgreen"
  | "crimson"
  | "green";

export type Colors = {
  [colorName in ColorName]: string;
};

const colors: Colors = {
  darkpurple: "#8A36CE",
  bluegray: "#a0adbc",
  lightgray: "#EEF4FD",
  white: "#ffffff",
  blue: "#2f3bad",
  lightblue: "#566dfb",
  mintgreen: "#5edbae",
  crimson: "#e24e58",
  green: "#34b549",
};

export const useColors = (): Colors => colors;
