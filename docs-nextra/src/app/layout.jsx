/* eslint-env node */
import Image from "next/image"
import { Footer, Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import { NavigationWithScalar } from "../components/NavigationWithScalar"
import "nextra-theme-docs/style.css"
import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://docs.earna.ai"),
  title: {
    template: "%s - Earna AI Documentation",
  },
  description: "Earna AI: AI-Powered Canadian Credit Score Advisor",
  applicationName: "Earna AI",
  generator: "Next.js",
  appleWebApp: {
    title: "Earna AI Docs",
  },
  other: {
    "msapplication-TileImage": "/earna-logo.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://earna.ai",
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
            <span style={{ color: "var(--earna-color, #ffffff)" }}>EARNA</span>
            <span style={{ color: "#4185f4" }}> AI</span>
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
              src="/brain-finance-logo.svg"
              alt="Brain Finance"
              width={48}
              height={48}
              style={{
                height: "48px",
                width: "auto",
                display: "var(--light-logo-display, block)",
              }}
            />
            <Image
              src="/brain-finance-logo-dark.svg"
              alt="Brain Finance"
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
      logoLink="https://earna.sh"
      projectLink="https://github.com/identity-wael/earna-ai"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/earna-logo.png" type="image/png" />
        <style>{`
          :root {
            --earna-color: #000000;
            --light-logo-display: block;
            --dark-logo-display: none;
          }
          [data-theme='dark'], .dark {
            --earna-color: #ffffff;
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
              {new Date().getFullYear()} © Earna AI. All rights reserved.
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/identity-wael/earna-ai/blob/main/docs-nextra"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
