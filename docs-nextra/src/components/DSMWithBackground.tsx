"use client"

import dynamic from "next/dynamic"
import React from "react"
import DSMInteractiveMatrix from "./DSMInteractiveMatrix"

// Dynamically import the background to avoid SSR issues
const DSMPeriodicBackground = dynamic(() => import("./DSMPeriodicBackground"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "100%", height: "800px", backgroundColor: "#030712" }}
    />
  ),
})

const DSMWithBackground: React.FC = () => {
  return (
    <>
      {/* Matrix Component */}
      <DSMInteractiveMatrix />

      {/* Animated Periodic Table */}
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>
          Technology Components Visualization
        </h3>
        <p style={{ marginBottom: "1rem", color: "#6b7280" }}>
          Explore our technology stack through an interactive 3D sphere of 70+
          interconnected components with smooth rotation.
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "800px", // Increased height for more viewing space
            backgroundColor: "#030712",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <DSMPeriodicBackground />

          {/* Info Panel */}
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              zIndex: 20,
              padding: "0.75rem",
              backgroundColor: "rgba(17, 24, 39, 0.95)",
              borderRadius: "0.375rem",
              border: "1px solid #374151",
              maxWidth: "300px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#8b5cf6",
                marginBottom: "0.25rem",
              }}
            >
              70+ Technology Components
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#9ca3af",
                lineHeight: "1.4",
                marginBottom: "0.5rem",
              }}
            >
              70+ technology components in a continuously rotating 3D sphere
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "#60a5fa",
                fontStyle: "italic",
              }}
            >
              🖱️ Use mouse wheel to zoom in/out
            </div>
          </div>

          {/* Zoom Controls */}
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                padding: "0.5rem",
                backgroundColor: "rgba(17, 24, 39, 0.95)",
                borderRadius: "0.375rem",
                border: "1px solid #374151",
                color: "#9ca3af",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              Scroll to Zoom
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DSMWithBackground
