/* eslint-disable @typescript-eslint/no-explicit-any */

type DebounceFunction = (...args: any[]) => void

export function debounce(
  fn: DebounceFunction,
  delay: number
): DebounceFunction {
  let timeoutId: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
