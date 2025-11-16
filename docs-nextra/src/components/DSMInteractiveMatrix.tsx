"use client"

import React, { useCallback, useMemo, useState } from "react"

const DSMInteractiveMatrix: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{
    i: number
    j: number
  } | null>(null)
  const [selectedNode, setSelectedNode] = useState<{
    from: string
    to: string
  } | null>(null)
  const [showLabels, setShowLabels] = useState(true)

  // Earna AI Financial Platform Components (shortened names for matrix)
  const components = useMemo(
    () => [
      // Core Financial Infrastructure
      { name: "TigerBeetle", full: "TigerBeetle Ledger", category: "core" },
      { name: "Accounting", full: "Double-Entry System", category: "core" },
      { name: "Transactions", full: "Transaction Engine", category: "core" },
      { name: "Audit Trail", full: "Audit Trail", category: "core" },

      // Banking Integration Layer
      { name: "Plaid API", full: "Plaid API", category: "banking" },
      { name: "Aggregation", full: "Account Aggregation", category: "banking" },
      { name: "Sync", full: "Transaction Sync", category: "banking" },
      {
        name: "Reconciliation",
        full: "Reconciliation Engine",
        category: "banking",
      },

      // Payment Processing
      { name: "Hyperswitch", full: "Hyperswitch", category: "payment" },
      { name: "Stripe", full: "Stripe Integration", category: "payment" },
      { name: "ACH", full: "ACH Processing", category: "payment" },
      { name: "Wire Transfer", full: "Wire Transfers", category: "payment" },
      { name: "FedNow", full: "FedNow Instant", category: "payment" },
      { name: "Bill Pay", full: "Bill Pay System", category: "payment" },
      { name: "P2P", full: "Peer-to-Peer", category: "payment" },
      {
        name: "International",
        full: "International Transfers",
        category: "payment",
      },

      // AI/ML Services
      { name: "GPT-4o", full: "GPT-4o Engine", category: "ai" },
      { name: "Claude 3", full: "Claude 3 Opus", category: "ai" },
      { name: "Gemini", full: "Gemini Pro", category: "ai" },
      { name: "ML Pipeline", full: "ML Pipeline", category: "ai" },
      { name: "Categorization", full: "Categorization AI", category: "ai" },
      { name: "Insights", full: "Insights Engine", category: "ai" },
      { name: "Predictions", full: "Prediction Models", category: "ai" },
      { name: "NLP", full: "Natural Language", category: "ai" },

      // Data Platform
      { name: "Supabase", full: "Supabase Backend", category: "data" },
      { name: "PostgreSQL", full: "PostgreSQL DB", category: "data" },
      { name: "Redis", full: "Redis Cache", category: "data" },
      { name: "ClickHouse", full: "ClickHouse Analytics", category: "data" },
      { name: "Kafka", full: "Kafka Streaming", category: "data" },
      { name: "BigQuery", full: "BigQuery Warehouse", category: "data" },
      { name: "Elasticsearch", full: "Elasticsearch", category: "data" },
      { name: "S3", full: "Cloud Storage", category: "data" },

      // Security & Auth
      { name: "Auth", full: "Auth System", category: "security" },
      { name: "JWT", full: "JWT Tokens", category: "security" },
      { name: "OAuth", full: "OAuth 2.0", category: "security" },
      { name: "MFA", full: "Multi-Factor Auth", category: "security" },
      { name: "Encryption", full: "Encryption Service", category: "security" },
      { name: "PCI DSS", full: "PCI DSS Compliance", category: "security" },
      { name: "SOC 2", full: "SOC 2 Type II", category: "security" },
      { name: "HSM", full: "Hardware Security", category: "security" },

      // API Infrastructure
      { name: "REST", full: "REST API Gateway", category: "api" },
      { name: "GraphQL", full: "GraphQL Layer", category: "api" },
      { name: "WebSockets", full: "WebSockets", category: "api" },
      { name: "Webhooks", full: "Webhooks System", category: "api" },
      { name: "Gateway", full: "API Gateway", category: "api" },
      { name: "Rate Limiting", full: "Rate Limiting", category: "api" },
      { name: "CDN", full: "CDN Distribution", category: "api" },
      { name: "Load Balancer", full: "Load Balancer", category: "api" },

      // Frontend Applications
      { name: "Console", full: "Next.js Console", category: "frontend" },
      { name: "Mobile", full: "React Native App", category: "frontend" },
      { name: "PWA", full: "Progressive Web App", category: "frontend" },
      { name: "Admin", full: "Admin Dashboard", category: "frontend" },
      { name: "Merchant", full: "Merchant Portal", category: "frontend" },
      { name: "SDK", full: "Developer SDK", category: "frontend" },

      // Credit & Investment
      { name: "Credit Engine", full: "Credit Engine", category: "credit" },
      { name: "Bureau APIs", full: "Bureau APIs", category: "credit" },
      { name: "Score Optimizer", full: "Score Optimizer", category: "credit" },
      { name: "Investment", full: "Investment Tracker", category: "credit" },
      { name: "Robo-Advisor", full: "Robo-Advisor", category: "credit" },
      { name: "Portfolio", full: "Portfolio Manager", category: "credit" },
      { name: "Risk Analysis", full: "Risk Analysis", category: "credit" },
      { name: "Tax-Loss", full: "Tax-Loss Harvesting", category: "credit" },

      // Tax Services
      { name: "Tax Engine", full: "Tax Engine", category: "tax" },
      { name: "1099", full: "1099 Processing", category: "tax" },
      { name: "Tax Filing", full: "Tax Filing System", category: "tax" },
      { name: "Estimated Taxes", full: "Estimated Taxes", category: "tax" },
      { name: "Deductions", full: "Deduction Finder", category: "tax" },
      { name: "Tax Planning", full: "Tax Planning AI", category: "tax" },

      // Business Services
      {
        name: "Business Banking",
        full: "Business Banking",
        category: "business",
      },
      { name: "Invoicing", full: "Invoicing System", category: "business" },
      { name: "Payroll", full: "Payroll Processing", category: "business" },
      { name: "Expenses", full: "Expense Management", category: "business" },
      {
        name: "Accounting Sync",
        full: "Accounting Sync",
        category: "business",
      },
      { name: "Reports", full: "Financial Reports", category: "business" },
    ],
    []
  )

  // Generate dependency matrix for Earna AI
  const generateDSMMatrix = useCallback(() => {
    const size = components.length
    const matrix = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0))

    // Define dependencies (indexes based on component position)
    const dependencies: Record<string, string[]> = {
      // Core Financial Infrastructure
      TigerBeetle: ["Accounting", "Transactions", "Audit Trail"],
      Accounting: ["TigerBeetle"],
      Transactions: ["TigerBeetle", "Accounting", "Audit Trail"],
      "Audit Trail": ["TigerBeetle", "Transactions"],

      // Banking Integration
      "Plaid API": ["Aggregation", "Sync", "Reconciliation"],
      Aggregation: ["Plaid API", "TigerBeetle"],
      Sync: ["Plaid API", "TigerBeetle", "Reconciliation"],
      Reconciliation: ["Sync", "TigerBeetle"],

      // Payment Processing
      Hyperswitch: ["Stripe", "ACH", "Wire Transfer", "FedNow"],
      Stripe: ["Hyperswitch", "TigerBeetle", "Auth"],
      ACH: ["Hyperswitch", "TigerBeetle"],
      "Wire Transfer": ["Hyperswitch", "TigerBeetle"],
      FedNow: ["Hyperswitch", "TigerBeetle"],
      "Bill Pay": ["Hyperswitch", "TigerBeetle"],
      P2P: ["Hyperswitch", "TigerBeetle"],
      International: ["Hyperswitch", "TigerBeetle"],

      // AI/ML Services
      "GPT-4o": ["ML Pipeline", "REST", "Supabase"],
      "Claude 3": ["ML Pipeline", "REST", "Supabase"],
      Gemini: ["ML Pipeline", "REST", "Supabase"],
      "ML Pipeline": ["GPT-4o", "Claude 3", "Gemini", "ClickHouse", "Redis"],
      Categorization: ["ML Pipeline", "NLP"],
      Insights: ["ML Pipeline", "Predictions"],
      Predictions: ["ML Pipeline", "ClickHouse"],
      NLP: ["GPT-4o", "Claude 3", "Gemini"],

      // Data Platform
      Supabase: ["PostgreSQL", "Auth", "Redis"],
      PostgreSQL: ["Supabase"],
      Redis: ["Supabase", "REST", "GraphQL"],
      ClickHouse: ["ML Pipeline", "BigQuery"],
      Kafka: ["PostgreSQL", "ClickHouse"],
      BigQuery: ["ClickHouse", "S3"],
      Elasticsearch: ["Supabase", "REST"],
      S3: ["BigQuery", "Supabase"],

      // Security & Auth
      Auth: ["JWT", "OAuth", "MFA", "Supabase"],
      JWT: ["Auth", "REST", "GraphQL"],
      OAuth: ["Auth"],
      MFA: ["Auth"],
      Encryption: ["Auth", "HSM"],
      "PCI DSS": ["Encryption", "HSM"],
      "SOC 2": ["Auth", "Encryption"],
      HSM: ["Encryption", "PCI DSS"],

      // API Infrastructure
      REST: ["Gateway", "Auth", "Supabase", "Redis"],
      GraphQL: ["Gateway", "Auth", "Supabase", "Redis"],
      WebSockets: ["Gateway", "Auth"],
      Webhooks: ["Gateway", "REST"],
      Gateway: [
        "REST",
        "GraphQL",
        "WebSockets",
        "Rate Limiting",
        "Load Balancer",
      ],
      "Rate Limiting": ["Gateway", "Redis"],
      CDN: ["Load Balancer"],
      "Load Balancer": ["Gateway", "CDN"],

      // Frontend Applications
      Console: ["REST", "GraphQL", "WebSockets", "Auth"],
      Mobile: ["REST", "Auth", "SDK"],
      PWA: ["REST", "Auth", "SDK"],
      Admin: ["REST", "GraphQL", "Auth"],
      Merchant: ["REST", "Auth", "SDK"],
      SDK: ["REST", "Auth"],

      // Credit & Investment
      "Credit Engine": ["Bureau APIs", "ML Pipeline", "TigerBeetle"],
      "Bureau APIs": ["Credit Engine", "REST"],
      "Score Optimizer": ["Credit Engine", "ML Pipeline"],
      Investment: ["Portfolio", "Robo-Advisor"],
      "Robo-Advisor": ["Investment", "ML Pipeline", "Risk Analysis"],
      Portfolio: ["Investment", "Tax-Loss"],
      "Risk Analysis": ["Credit Engine", "ML Pipeline"],
      "Tax-Loss": ["Portfolio", "Tax Engine"],

      // Tax Services
      "Tax Engine": ["1099", "Tax Filing", "Tax Planning"],
      "1099": ["Tax Engine", "TigerBeetle"],
      "Tax Filing": ["Tax Engine", "Deductions"],
      "Estimated Taxes": ["Tax Engine", "ML Pipeline"],
      Deductions: ["Tax Filing", "NLP"],
      "Tax Planning": ["Tax Engine", "ML Pipeline"],

      // Business Services
      "Business Banking": ["TigerBeetle", "Plaid API"],
      Invoicing: ["Business Banking", "Hyperswitch"],
      Payroll: ["Business Banking", "TigerBeetle"],
      Expenses: ["Business Banking", "Categorization"],
      "Accounting Sync": ["TigerBeetle", "Business Banking"],
      Reports: ["ClickHouse", "Business Banking"],
    }

    // Create component index map
    const nameToIndex: Record<string, number> = {}
    components.forEach((comp, idx) => {
      nameToIndex[comp.name] = idx
    })

    // Fill matrix based on dependencies
    Object.entries(dependencies).forEach(([source, targets]) => {
      const sourceIdx = nameToIndex[source]
      if (sourceIdx !== undefined) {
        targets.forEach((target) => {
          const targetIdx = nameToIndex[target]
          if (targetIdx !== undefined && matrix[sourceIdx] !== undefined) {
            matrix[sourceIdx][targetIdx] = 1
          }
        })
      }
    })

    return matrix
  }, [components])

  const dsmMatrix = useMemo(() => generateDSMMatrix(), [generateDSMMatrix])

  // Category colors
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      core: "#10b981", // green
      banking: "#06b6d4", // cyan
      ai: "#8b5cf6", // purple
      payment: "#eab308", // yellow
      data: "#f97316", // orange
      security: "#ec4899", // pink
      api: "#3b82f6", // blue
      frontend: "#22d3ee", // light cyan
      credit: "#f59e0b", // amber
      tax: "#ef4444", // red
      business: "#a855f7", // purple-500
    }
    return colors[category] || "#6b7280"
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#111827",
        borderRadius: "0.5rem",
        padding: "1rem",
        overflow: "auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1rem" }}>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#f3f4f6",
            marginBottom: "0.5rem",
          }}
        >
          Interactive Technology Dependency Matrix
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
          Hover over cells to highlight dependencies. Click green cells for
          details.
        </p>
        <button
          onClick={() => setShowLabels(!showLabels)}
          style={{
            marginTop: "0.5rem",
            padding: "0.25rem 0.75rem",
            backgroundColor: "#374151",
            color: "#d1d5db",
            borderRadius: "0.25rem",
            border: "none",
            fontSize: "0.75rem",
            cursor: "pointer",
          }}
        >
          {showLabels ? "Hide" : "Show"} Labels
        </button>
      </div>

      {/* Matrix Container */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "auto",
          maxHeight: "750px",
          border: "1px solid #374151",
          borderRadius: "0.25rem",
          padding: "0.5rem",
          backgroundColor: "#030712",
        }}
      >
        <table style={{ borderSpacing: "1px" }}>
          <thead>
            <tr>
              <th style={{ width: showLabels ? "120px" : "30px" }}></th>
              {components.map((comp, j) => (
                <th
                  key={j}
                  style={{
                    padding: "2px",
                    minWidth: "20px",
                    height: showLabels ? "80px" : "20px",
                    position: "relative",
                    verticalAlign: "bottom",
                  }}
                >
                  {showLabels && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        left: "15px",
                        transform: "rotate(-90deg)",
                        transformOrigin: "left bottom",
                        whiteSpace: "nowrap",
                        fontSize: "10px",
                        color: getCategoryColor(comp.category) + "cc",
                        width: "70px",
                        textAlign: "left",
                      }}
                    >
                      {comp.name}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {components.map((comp, i) => (
              <tr key={i}>
                <td
                  style={{
                    textAlign: "right",
                    paddingRight: "0.5rem",
                    fontSize: "11px",
                    color: getCategoryColor(comp.category) + "cc",
                    whiteSpace: "nowrap",
                  }}
                >
                  {showLabels ? comp.name : ""}
                </td>
                {components.map((_, j) => (
                  <td
                    key={`${i}-${j}`}
                    style={{
                      width: "20px",
                      height: "20px",
                      padding: "0",
                      cursor: dsmMatrix[i]?.[j] === 1 ? "pointer" : "default",
                      border:
                        hoveredCell?.i === i || hoveredCell?.j === j
                          ? "2px solid #06b6d4"
                          : "1px solid #1f2937",
                      backgroundColor:
                        i === j
                          ? "#374151"
                          : dsmMatrix[i]?.[j] === 1
                            ? getCategoryColor(components[i]?.category || "") +
                              "99"
                            : "transparent",
                      position: "relative",
                    }}
                    onMouseEnter={() => setHoveredCell({ i, j })}
                    onMouseLeave={() => setHoveredCell(null)}
                    onClick={() => {
                      if (dsmMatrix[i]?.[j] === 1) {
                        setSelectedNode({
                          from: components[i]?.full || "",
                          to: components[j]?.full || "",
                        })
                      }
                    }}
                  >
                    {dsmMatrix[i]?.[j] === 1 && (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: getCategoryColor(
                              components[i]?.category || ""
                            ),
                            borderRadius: "2px",
                          }}
                        ></div>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Dependency Info */}
      {selectedNode && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            backgroundColor: "#1f2937",
            borderRadius: "0.375rem",
            border: "1px solid #374151",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#06b6d4",
                  marginBottom: "0.25rem",
                }}
              >
                Dependency Relationship
              </div>
              <div style={{ fontSize: "0.875rem", color: "#e5e7eb" }}>
                <span style={{ fontWeight: "500" }}>{selectedNode.from}</span>
                <span style={{ margin: "0 0.5rem", color: "#9ca3af" }}>
                  depends on
                </span>
                <span style={{ fontWeight: "500" }}>{selectedNode.to}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              style={{
                color: "#9ca3af",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.25rem",
                lineHeight: "1",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div
        style={{
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid #374151",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.5rem",
          fontSize: "11px",
        }}
      >
        {[
          { name: "Financial Core", color: "#10b981" },
          { name: "Banking", color: "#06b6d4" },
          { name: "AI/ML", color: "#8b5cf6" },
          { name: "Payments", color: "#eab308" },
          { name: "Data Platform", color: "#f97316" },
          { name: "Security", color: "#ec4899" },
          { name: "API Layer", color: "#3b82f6" },
          { name: "Frontend", color: "#22d3ee" },
          { name: "Monitoring", color: "#a855f7" },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: item.color,
                borderRadius: "2px",
              }}
            ></div>
            <span style={{ color: "#9ca3af" }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DSMInteractiveMatrix
