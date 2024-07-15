export function hexToRgb(hex: string, alpha?: number) {
  // Remove the hash (#) if present
  const raw = hex.replace(/^#/, "")

  // Parse the hex value into three separate components (r, g, b)
  const bigint = parseInt(raw, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  const rgb = `${r}, ${g}, ${b}`

  // Return the RGB values as an object
  return alpha !== undefined
    ? `rgba(${rgb}, ${Math.min(alpha, 1)})`
    : `rgb(${rgb})`
}
