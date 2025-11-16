"use client"

import { useEffect } from "react"

export function NavigationWithScalar() {
  useEffect(() => {
    // Wait for the navigation to render, then inject the Scalar icon
    const injectScalarIcon = () => {
      const nav = document.querySelector("nav")
      if (!nav) return

      // Find the GitHub link
      const githubLink = nav.querySelector(
        'a[href*="github.com/identity-wael/earna-ai"]'
      )
      if (!githubLink) return

      // Check if we already added the Scalar icon
      if (nav.querySelector(".scalar-api-icon")) return

      // Create the Scalar link
      const scalarLink = document.createElement("a")
      scalarLink.href = "/api-reference"
      scalarLink.className = "scalar-api-icon nx-p-2 nx-text-current"
      scalarLink.title = "API Reference"
      scalarLink.style.cssText =
        "display: flex; align-items: center; margin-right: 8px;"

      scalarLink.innerHTML = `
        <svg viewBox="0 0 593 593" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
          <path d="M347 0c6 0 12 5 12 12v134l94-95c5-5 13-5 17 0l72 72c4 4 5 12 0 16v1l-95 94h134c7 0 12 5 12 12v101c0 7-5 12-12 12H447l95 94c4 5 5 13 0 17l-72 72c-4 4-12 5-16 0h-1l-94-95v134c0 7-5 12-12 12H246c-7 0-12-5-12-12v-70c0-22 9-43 24-59l130-130c14-14 14-37 0-51L259 142a84 84 0 0 1-25-59V12c0-7 5-12 12-12zM138 52h1l219 219c14 14 14 37 0 51L139 542c-4 5-12 5-17 0l-71-70c-4-5-5-12 0-17l95-96H12c-7 0-12-5-12-12V246c0-7 5-12 12-12h134l-95-94c-4-5-4-12 0-17l71-71c4-5 12-5 16 0" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
      `

      // Insert before GitHub link
      githubLink.parentNode.insertBefore(scalarLink, githubLink)
    }

    // Try to inject immediately
    injectScalarIcon()

    // Also observe for changes in case the nav is dynamically rendered
    const observer = new MutationObserver(() => {
      injectScalarIcon()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return null
}
