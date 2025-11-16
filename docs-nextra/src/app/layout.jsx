/* eslint-env node */
import Image from "next/image"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { NavigationWithScalar } from "../components/NavigationWithScalar"
import "nextra-theme-docs/style.css"
import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://docs.reflekt.app"),
  title: {
    template: "%s - REFLEKT Documentation",
  },
  description: "REFLEKT: Modern multilingual website platform built with Next.js and React",
  applicationName: "REFLEKT",
  generator: "Next.js",
  appleWebApp: {
    title: "REFLEKT Docs",
  },
  other: {
    "msapplication-TileImage": "/reflekt-logo.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://reflekt.app",
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            }}
          >
            <span style={{ color: "var(--reflekt-color, #ffffff)" }}>REFLEKT</span>
          </span>
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "rgba(128,128,128,0.3)",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Image
              src="/reflekt-logo.svg"
              alt="REFLEKT"
              width={48}
              height={48}
              style={{
                height: "48px",
                width: "auto",
                display: "var(--light-logo-display, block)",
              }}
            />
            <Image
              src="/reflekt-logo-dark.svg"
              alt="REFLEKT"
              width={48}
              height={48}
              style={{
                height: "48px",
                width: "auto",
                display: "var(--dark-logo-display, none)",
              }}
            />
          </div>
        </div>
      }
      logoLink="https://reflekt.app"
      projectLink="https://github.com/identity-wael/REFLEKT"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/reflekt-logo.png" type="image/png" />
        <style>{`
          :root {
            --reflekt-color: #000000;
            --light-logo-display: block;
            --dark-logo-display: none;
          }
          [data-theme='dark'], .dark {
            --reflekt-color: #ffffff;
            --light-logo-display: none;
            --dark-logo-display: block;
          }
          /* Remove navbar border */
          nav.nx-sticky {
            border-bottom: none !important;
            box-shadow: none !important;
          }
          .nextra-nav-container {
            border-bottom: none !important;
          }
          nav.nx-sticky::after {
            display: none !important;
          }
          .nextra-nav-container::after {
            display: none !important;
          }
          /* Remove any border from the actual nav element */
          nav.nx-mx-auto {
            border-bottom: none !important;
          }
        `}</style>
      </Head>
      <body>
        <NavigationWithScalar />
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              {new Date().getFullYear()} © REFLEKT. All rights reserved.
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/identity-wael/REFLEKT/blob/main/docs-nextra"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
