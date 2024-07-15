import type { Entries } from "@/types/helpers"

type VariableDef<Prefix extends string> = `--${Prefix}-${string}`

type CSSVariableConfig<
  T extends Record<keyof T, string | number>,
  Prefix extends string,
> = Array<{
  name: keyof T
  variableDef: Record<VariableDef<Prefix>, T[keyof T]>
  variable: string
}>

/**
 * CSSVariableGenerator is a helper class that creates definitions and their
 * variable counterparts (with fallbacks). To use it, pass an object of css
 * tokens and specify a unique prefix for your variables.
 *
 * ex:
 * ```ts
 * // Example color tokens
 * const colors = {
 *   white: "#fff",
 *   black: "#000",
 * }
 *
 * // Then create your variable config using the constructor
 * const cssColorVariablesConfig = new CSSVariableGenerator(colors, "color")
 *
 * // Next, create definitions using the getVariableDefs method:
 * const colorVariableDefs = cssColorVariablesConfig.getVariableDefs()
 *
 * // ...which gives you
 * // { --color-white: "#fff", --color-black: "#000" }
 * // that you can now spread onto :root or elsewhere
 *
 * // You could stop there if you wanted and use the variables in css, however
 * // it's easier to create an exportable set of variables to use in code, since
 * // remembering them and assigning fallbacks each time can be cumbersome.
 *
 * // Create a variables constant instead:
 * const colorVariables = cssColorVariablesConfig.getVariables()
 *
 * // Now you have a fully typed set of variables with autocomplete:
 * // ex:
 * // { background: colorVariables.white, color: colorVariables.black }
 * //
 * // ...will compile to:
 * // { background: var(--color-white, #fff), color: var(--color-black, #000) }
 * ```
 */
export class CSSVariableGenerator<
  T extends Record<keyof T, string | number>,
  Prefix extends string,
> {
  tokens: T
  varPrefix: Prefix
  config: CSSVariableConfig<T, Prefix>

  constructor(tokens: T, varPrefix: Prefix) {
    this.tokens = tokens
    this.varPrefix = varPrefix
    this.config = this.createCSSVariableConfig(tokens, varPrefix)
  }

  /**
   * Creates a configuration for each token that it receives, using the custom
   * prefix you define to classify each variable. It runs in the class constructor
   * and does not need to be accessed as a method.
   *
   * ex:
   * ```ts
   * const config = createCSSVariableConfig({ white: "#fff" }, "color")
   *
   * console.log(config)
   * // {
   * //   name: "white",
   * //   variableDef: "--color-white: #fff",
   * //   variable: "var(--color-white, #fff)",
   * // }
   * ```
   */
  private createCSSVariableConfig<
    T extends Record<keyof T, string | number>,
    Prefix extends string,
  >(tokens: T, varPrefix: Prefix): CSSVariableConfig<T, Prefix> {
    const d = [] as CSSVariableConfig<T, Prefix>
    for (const [name, value] of Object.entries(tokens) as Entries<T>) {
      d.push({
        name,
        variableDef: {
          [`--${varPrefix}-${String(name)}`]: value,
        } as Record<VariableDef<Prefix>, T[keyof T]>,
        variable: `var(--${varPrefix}-${String(name)}, ${value})`,
      })
    }
    return d
  }

  getVariables() {
    const variables = {} as Record<(typeof this.config)[number]["name"], string>
    for (const { name, variable } of this.config) {
      variables[name] = variable
    }
    return variables
  }

  getVariableDefs() {
    const variables = {} as Record<VariableDef<Prefix>, string>
    for (const { variableDef } of this.config) {
      variables[Object.keys(variableDef)[0] as VariableDef<Prefix>] =
        Object.values<string>(variableDef as typeof variables)[0]
    }
    return variables
  }
}
