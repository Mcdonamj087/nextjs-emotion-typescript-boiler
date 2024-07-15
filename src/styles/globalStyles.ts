import type { CSSObject, Interpolation, Theme } from "@emotion/react"
import tokens from "@/styles/index"
import { cssVariableDefinitions } from "@/styles/variables"

const reset: Interpolation<Theme> = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "100%",
      verticalAlign: "baseline",
    },
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section":
    {
      display: "block",
    },
  html: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  body: {
    lineHeight: 1,
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: `""`,
  },
  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
  sup: {
    verticalAlign: "super",
    fontSize: "smaller",
    lineHeight: "1",
  },

  "::selection": {
    background: tokens.vars.colors.black,
    color: tokens.vars.colors.black,
  },
}

const variables: CSSObject = {
  ":root": cssVariableDefinitions,
}

const globalStyles: Interpolation<Theme> = {
  ...reset,
  ...variables,

  "*": {
    boxSizing: "border-box",
  },

  body: {
    fontFamily: tokens.fonts.fontStack,
  },

  button: {
    fontFamily: tokens.fonts.fontStack,
  },

  input: {
    font: "inherit",

    "&:autofill, input:autofill:hover, input:autofill:focus, input:autofill:active":
      {
        transition: "background-color 10000s",
      },
  },

  a: {
    fontWeight: 600,
    color: tokens.vars.colors.black,
    cursor: "pointer",
    textDecoration: "underline",
    textDecorationThickness: 2,
    textUnderlineOffset: 2,
  },

  "h1, .h1": tokens.typography.h1,
  "h2, .h2": tokens.typography.h2,
  "h3, .h3": tokens.typography.h3,
  "h4, .h4": tokens.typography.h4,
  "h5, .h5": tokens.typography.h5,
  "h6, .h6": tokens.typography.h6,
}

export default globalStyles
