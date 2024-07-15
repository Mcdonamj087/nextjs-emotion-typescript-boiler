import type { Interpolation, Theme } from "@emotion/react"

declare global {
  interface EmotionProps {
    css?: Interpolation<Theme>
    className?: string
  }
}
