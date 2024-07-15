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
 * Need to make css variables. Pass your to this function, specify a prefix string, and for each token it will return
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
