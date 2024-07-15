/** @jsxImportSource @emotion/react */
"use client"

import { rem } from "@/utils/text"
import { vars } from "@/styles/variables"

export default function Homepage() {
  return (
    <div
      css={{
        height: "100vh",
        minHeight: 600,
        background: vars.colors.violet,
        color: vars.colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        gap: rem(32),
        padding: rem(32),
        textAlign: "center",
      }}>
      <h1>NextJS Emotion Typescript Boiler</h1>
      <p>
        A boilerplate for bootstrapping projects with NextJS, Emotion and
        Typescript
      </p>
    </div>
  )
}
