/* eslint-disable @typescript-eslint/no-explicit-any */

// https://stackoverflow.com/questions/60114191/typescript-union-type-to-deep-intersection-of-optional-values-difficulty-leve
type AllKeys<T> = T extends any ? keyof T : never

export type RequireKeys<T, K extends keyof T> = {
  [P in keyof T]-?: P extends K ? Exclude<T[P], null | undefined> : T[P]
}

export type OptionalKeys<T> = T extends any
  ? {
      [K in keyof T]-?: NonNullable<unknown> extends Pick<T, K> ? K : never
    }[keyof T]
  : never

type Idx<T, K extends PropertyKey, D = never> = T extends any
  ? K extends keyof T
    ? T[K]
    : D
  : never

export type PartialKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>> extends infer O
  ? { [P in keyof O]: O[P] }
  : never

/**
 * Takes a union of object types and merges them into a single type.
 *
 * ```ts
 * type FooBaz = { foo: string, baz: true }
 * type BarBaz = { bar: number, baz: false}
 *
 * type FooBarBaz = Widen<FooBaz | BarBaz>
 * ```
 *
 * where `FooBarBaz` would then be:
 * ```
 * { foo?: string; bar?: number; baz: boolean }
 * ```
 */
export type Widen<T> = [T] extends [Array<unknown>]
  ? { [K in keyof T]: Widen<T[K]> }
  : [T] extends [object]
    ? PartialKeys<
        { [K in AllKeys<T>]: Widen<Idx<T, K>> },
        Exclude<AllKeys<T>, keyof T> | OptionalKeys<T>
      >
    : T

/**
 * Transform a string to pascal case (e.g. "Heading Text -> "HeadingText")
 */
export type Pascalize<T extends string> = T extends `${infer A} ${infer B}`
  ? `${Capitalize<A>}${Capitalize<B>}`
  : T

/**
 * A utility type that captures the type of the entries of an object, mimicking the
 * return type of `Object.entries`. It maps each property of a given object type `T`
 * to a tuple containing the property name and its value, resulting in an array of these tuples.
 *
 * ```ts
 * const example = {
 *   foo: 42,
 *   bar: "hello",
 * }
 *
 * type Example = Entries<typeof example>
 * // The resulting type would look like:
 * // (["foo", number] | ["bar", string])[]
 */
export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]
