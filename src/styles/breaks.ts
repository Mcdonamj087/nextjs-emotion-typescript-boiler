const breakpoints = {
  mobile: 576,
  tablet: 768,
  tabletLg: 992,
  desktop: 1200,
  desktopLg: 1400,
}

export const breaks = Object.entries(breakpoints).reduce(
  (acc, [breakpointName, value]) => {
    acc[breakpointName as keyof typeof breakpoints] =
      `@media screen and (min-width: ${value}px)`
    return acc
  },
  {} as Record<keyof typeof breakpoints, string>
)
