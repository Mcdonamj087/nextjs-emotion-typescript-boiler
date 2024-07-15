/** @jsxImportSource @emotion/react */
"use client"

import { useEffect } from "react"

export const useFormPrompt = (hasUnsavedChanges: boolean) => {
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        return (e.returnValue =
          "Are you sure you want to leave? Unsaved changes will be lost.")
      }
    }
    window.addEventListener("beforeunload", onBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload)
    }
  }, [hasUnsavedChanges])
}
