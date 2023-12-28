"use client";

import { DefaultTheme } from "styled-components";
import media from "./media";

const color = {
  white: "#ffffff",
  lightGray: "#E9E9E9",
  gray: "#8F8F8F",
  border: "#D7D7D7",
  primaryPink: "#FFE0E0",
  deepPink: "#FFCACA",
  pointPink: "#FF9E9E",
  black: "#000000",
};

export type ColorsTypes = typeof color;
export type MediaTypes = typeof media;

export const theme: DefaultTheme = {
  color,
  media,
} as const;
