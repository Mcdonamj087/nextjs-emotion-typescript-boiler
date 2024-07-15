import type { Metadata } from "next"
import { Inter } from "next/font/google"
import EmotionStyleRegistry from "@/app/EmotionStyleRegistry"
import GlobalStyles from "@/context/GlobalStyles"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-family",
  display: "swap",
})

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
