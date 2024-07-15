import { useEffect, type DependencyList } from "react"

export default function useDebounceEffect(
  callback: () => void,
  waitTime: number,
  deps: DependencyList
) {
  useEffect(
    () => {
      const t = setTimeout(() => {
        callback(...(deps as []))
      }, waitTime)

      return () => {
        clearTimeout(t)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  )
}
