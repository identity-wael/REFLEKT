"use client"

import Image from "next/image"
import Link from "next/link"

export function CustomNavbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "112px",
        background: "var(--nextra-bg)",
        borderBottom: "1px solid rgb(229, 231, 235)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* First row - Original navbar content */}
      <div
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://earna.sh"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "900",
                letterSpacing: "-0.02em",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
              }}
            >
              <span style={{ color: "var(--earna-color, #000000)" }}>
                EARNA
              </span>
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
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <input
            type="search"
            placeholder="Search documentation..."
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "1px solid var(--nextra-border)",
              background: "var(--nextra-bg-2)",
              color: "var(--nextra-text-1)",
              fontSize: "14px",
              width: "300px",
            }}
          />
          <a
            href="https://github.com/identity-wael/earna-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--nextra-text-1)",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second row - Console tab */}
      <div
        style={{
          height: "48px",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        <Link
          href="/"
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            color: "var(--nextra-text-1)",
            textDecoration: "none",
            borderBottom:
              "2px solid var(--nextra-primary-hue, rgb(79, 70, 229))",
            display: "inline-block",
          }}
        >
          Console
        </Link>
      </div>
    </div>
  )
}
