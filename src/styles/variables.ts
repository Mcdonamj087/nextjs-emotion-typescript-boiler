import { CSSVariableGenerator } from "@/utils/CSSVariableGenerator"
import { colors, utils } from "@/styles/tokens"

// Read about CSSVariableGenerator in /src/utils/CSSVariableGenerator.ts. You
// don't need to use it and could instead opt to hard-code your variables in
// this file, but the class and methods can be helpful and reduce the need for
// hard-coding them every time you add a new token.
const colorVariablesConfig = new CSSVariableGenerator(colors, "color")
const utilVariablesConfig = new CSSVariableGenerator(utils, "util")

/**
 * Compile all variable configs into definitions to be used in :root
 *
 * ex:
 * ```ts
 * {
 *   --color-white: #FFFFFF;
 *   --color-black: #000000;
 * }
 * ```
 */
export const cssVariableDefinitions = {
  ...colorVariablesConfig.getVariableDefs(),
  ...utilVariablesConfig.getVariableDefs(),
}

/**
 * Get the variables with fallbacks
 *
 * ex:
 * ```ts
 * {
 *   white: var(--color-white, #ffffff)
 *   black: var(--color-black, #000000)
 * }
 */
export const vars = {
  colors: colorVariablesConfig.getVariables(),
  utils: utilVariablesConfig.getVariables(),
}
