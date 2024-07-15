import type { Metadata } from "next"
import EmotionStyleRegistry from "@/app/EmotionStyleRegistry"
import GlobalStyles from "@/context/GlobalStyles"
import { inter } from "@/styles/fonts"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.variable}>
        <GlobalStyles />
        <EmotionStyleRegistry>
          <>{children}</>
        </EmotionStyleRegistry>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "NextJS Emotion Typescript Boiler",
  description:
    "A boilerplate for bootstrapping projects with NextJS, Emotion and Typescript",
}
