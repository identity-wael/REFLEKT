"use client"

import { ApiReferenceReact } from "@scalar/api-reference-react"
import { useEffect, useState } from "react"
import "@scalar/api-reference-react/style.css"

export default function ApiReference() {
  const [isDark, setIsDark] = useState(false)
  const [activeSpec, setActiveSpec] = useState("console")

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark"
      setIsDark(isDarkMode)
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    })

    return () => observer.disconnect()
  }, [])

  const specs = {
    console: "/openapi/console-api.yaml",
    creditEngine: "/openapi/credit-engine-api.yaml",
    auth: "/openapi/auth-api.yaml",
  }

  const configuration = {
    spec: {
      url: specs[activeSpec] || specs.console,
    },
    theme: isDark ? "purple" : "default",
    darkMode: isDark,
    layout: "modern",
    customCss: `
      .scalar-api-reference {
        --scalar-background-1: ${isDark ? "#0a0a0a" : "#ffffff"};
        --scalar-background-2: ${isDark ? "#111111" : "#f9fafb"};
        --scalar-background-3: ${isDark ? "#1a1a1a" : "#f3f4f6"};
        --scalar-color-1: ${isDark ? "#ffffff" : "#000000"};
        --scalar-color-2: ${isDark ? "#a1a1aa" : "#6b7280"};
        --scalar-color-3: ${isDark ? "#71717a" : "#9ca3af"};
        --scalar-border-color: ${isDark ? "#27272a" : "#e5e7eb"};
        --scalar-button-1: ${isDark ? "#8b5cf6" : "#5865f2"};
        --scalar-button-1-hover: ${isDark ? "#a78bfa" : "#6b75f3"};
        --scalar-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      }

      .scalar-api-reference .dark-mode-toggle {
        display: none;
      }

      .references-header {
        background: ${isDark ? "#0a0a0a" : "#ffffff"};
        border-bottom: 1px solid ${isDark ? "#27272a" : "#e5e7eb"};
      }
    `,
    showSidebar: true,
    hiddenClients: [],
    searchHotKey: "k",
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development",
      },
      {
        url: "https://api.earna.ai",
        description: "Production",
      },
    ],
  }

  return (
    <div
      className="api-reference-wrapper"
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Vertical sidebar for API selection */}
      <div
        className="api-sidebar"
        style={{
          width: "240px",
          background: isDark ? "#111111" : "#f9fafb",
          borderRight: `1px solid ${isDark ? "#27272a" : "#e5e7eb"}`,
          padding: "24px 16px",
          overflowY: "auto",
          overflowX: "hidden",
          flexShrink: 0,
          height: "100%",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: isDark ? "#71717a" : "#9ca3af",
            marginBottom: "16px",
            paddingLeft: "8px",
          }}
        >
          API Services
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <button
            onClick={() => setActiveSpec("console")}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: activeSpec === "console" ? "600" : "400",
              background:
                activeSpec === "console"
                  ? isDark
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(88, 101, 242, 0.1)"
                  : "transparent",
              color:
                activeSpec === "console"
                  ? isDark
                    ? "#a78bfa"
                    : "#5865f2"
                  : isDark
                    ? "#e4e4e7"
                    : "#374151",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              position: "relative",
              paddingLeft: activeSpec === "console" ? "20px" : "12px",
            }}
            onMouseEnter={(e) => {
              if (activeSpec !== "console") {
                e.target.style.background = isDark
                  ? "rgba(139, 92, 246, 0.05)"
                  : "rgba(88, 101, 242, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              if (activeSpec !== "console") {
                e.target.style.background = "transparent"
              }
            }}
          >
            {activeSpec === "console" && (
              <span
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "16px",
                  background: isDark ? "#8b5cf6" : "#5865f2",
                  borderRadius: "2px",
                }}
              />
            )}
            Console API
          </button>
          <button
            onClick={() => setActiveSpec("creditEngine")}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: activeSpec === "creditEngine" ? "600" : "400",
              background:
                activeSpec === "creditEngine"
                  ? isDark
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(88, 101, 242, 0.1)"
                  : "transparent",
              color:
                activeSpec === "creditEngine"
                  ? isDark
                    ? "#a78bfa"
                    : "#5865f2"
                  : isDark
                    ? "#e4e4e7"
                    : "#374151",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              position: "relative",
              paddingLeft: activeSpec === "creditEngine" ? "20px" : "12px",
            }}
            onMouseEnter={(e) => {
              if (activeSpec !== "creditEngine") {
                e.target.style.background = isDark
                  ? "rgba(139, 92, 246, 0.05)"
                  : "rgba(88, 101, 242, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              if (activeSpec !== "creditEngine") {
                e.target.style.background = "transparent"
              }
            }}
          >
            {activeSpec === "creditEngine" && (
              <span
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "16px",
                  background: isDark ? "#8b5cf6" : "#5865f2",
                  borderRadius: "2px",
                }}
              />
            )}
            Credit Engine API
          </button>
          <button
            onClick={() => setActiveSpec("auth")}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: activeSpec === "auth" ? "600" : "400",
              background:
                activeSpec === "auth"
                  ? isDark
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(88, 101, 242, 0.1)"
                  : "transparent",
              color:
                activeSpec === "auth"
                  ? isDark
                    ? "#a78bfa"
                    : "#5865f2"
                  : isDark
                    ? "#e4e4e7"
                    : "#374151",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              position: "relative",
              paddingLeft: activeSpec === "auth" ? "20px" : "12px",
            }}
            onMouseEnter={(e) => {
              if (activeSpec !== "auth") {
                e.target.style.background = isDark
                  ? "rgba(139, 92, 246, 0.05)"
                  : "rgba(88, 101, 242, 0.05)"
              }
            }}
            onMouseLeave={(e) => {
              if (activeSpec !== "auth") {
                e.target.style.background = "transparent"
              }
            }}
          >
            {activeSpec === "auth" && (
              <span
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "16px",
                  background: isDark ? "#8b5cf6" : "#5865f2",
                  borderRadius: "2px",
                }}
              />
            )}
            Auth API
          </button>
        </div>
      </div>

      {/* Scalar API Reference */}
      <div style={{ flex: 1, height: "100%", overflow: "auto" }}>
        <ApiReferenceReact configuration={configuration} />
      </div>
    </div>
  )
}
