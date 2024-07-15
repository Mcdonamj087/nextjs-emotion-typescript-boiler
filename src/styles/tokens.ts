import { hexToRgb } from "@/utils/color"

export const colors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#0F4D86",
  green: "#0F863F",
  yellow: "#B4A30C",
  orange: "#B4520C",
  red: "#8A0E0E",
  purple: "#5A0A67",
  pink: "#A3066E",
}

// We're using Next Font with
export const fonts = {
  bodyFontStack: `var(--font-family), -apple-system, 'Helvetica Neue', Arial, sans-serif`,
  headingFontStack: `var(--font-heading)`,
}

export const utils = {
  focusRing: `2px solid ${hexToRgb(colors.black)}`,
  radiusSm: 6,
  radius: 16,
  radiusLg: 24,
}

export const shadows = {
  nav: `0 4px 8px -3px ${hexToRgb(colors.black, 0.1)}`,
}

export const constants = {
  headerHeight: 54,
}

export default {
  colors,
  fonts,
  utils,
  shadows,
  constants,
}
