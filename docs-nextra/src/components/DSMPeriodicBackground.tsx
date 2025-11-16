"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const DSMPeriodicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const objectsRef = useRef<THREE.Object3D[]>([])
  const targetsRef = useRef<{
    table: THREE.Object3D[]
    sphere: THREE.Object3D[]
    helix: THREE.Object3D[]
    grid: THREE.Object3D[]
  }>({ table: [], sphere: [], helix: [], grid: [] })
  const tweensRef = useRef<Array<{ update: () => boolean; stop: () => void }>>(
    []
  )
  const currentFormationRef = useRef<"table" | "sphere" | "helix" | "grid">(
    "helix"
  )

  useEffect(() => {
    if (!containerRef.current) return

    // Earna AI Financial Platform Elements
    const table = [
      // Core Financial Infrastructure
      {
        code: "TBL",
        name: "TigerBeetle Ledger",
        category: "Financial Core",
        col: 1,
        row: 1,
      },
      {
        code: "DEN",
        name: "Double-Entry System",
        category: "Financial Core",
        col: 2,
        row: 1,
      },
      {
        code: "TXN",
        name: "Transaction Engine",
        category: "Financial Core",
        col: 3,
        row: 1,
      },
      {
        code: "AUD",
        name: "Audit Trail",
        category: "Financial Core",
        col: 4,
        row: 1,
      },

      // Banking Integration
      { code: "PLD", name: "Plaid API", category: "Banking", col: 5, row: 1 },
      {
        code: "AGG",
        name: "Account Aggregation",
        category: "Banking",
        col: 6,
        row: 1,
      },
      {
        code: "SYN",
        name: "Transaction Sync",
        category: "Banking",
        col: 7,
        row: 1,
      },
      {
        code: "REC",
        name: "Reconciliation Engine",
        category: "Banking",
        col: 8,
        row: 1,
      },

      // Payment Processing
      {
        code: "HYP",
        name: "Hyperswitch",
        category: "Payments",
        col: 1,
        row: 2,
      },
      {
        code: "STR",
        name: "Stripe Integration",
        category: "Payments",
        col: 2,
        row: 2,
      },
      {
        code: "ACH",
        name: "ACH Processing",
        category: "Payments",
        col: 3,
        row: 2,
      },
      {
        code: "WIR",
        name: "Wire Transfers",
        category: "Payments",
        col: 4,
        row: 2,
      },
      {
        code: "FED",
        name: "FedNow Instant",
        category: "Payments",
        col: 5,
        row: 2,
      },
      {
        code: "BLP",
        name: "Bill Pay System",
        category: "Payments",
        col: 6,
        row: 2,
      },
      {
        code: "P2P",
        name: "Peer-to-Peer",
        category: "Payments",
        col: 7,
        row: 2,
      },
      {
        code: "INT",
        name: "International Transfers",
        category: "Payments",
        col: 8,
        row: 2,
      },

      // AI/ML Services
      { code: "GPT", name: "GPT-4o Engine", category: "AI/ML", col: 9, row: 1 },
      {
        code: "CLD",
        name: "Claude 3 Opus",
        category: "AI/ML",
        col: 10,
        row: 1,
      },
      { code: "GEM", name: "Gemini Pro", category: "AI/ML", col: 11, row: 1 },
      { code: "MLP", name: "ML Pipeline", category: "AI/ML", col: 12, row: 1 },
      {
        code: "CAT",
        name: "Categorization AI",
        category: "AI/ML",
        col: 13,
        row: 1,
      },
      {
        code: "INS",
        name: "Insights Engine",
        category: "AI/ML",
        col: 14,
        row: 1,
      },
      {
        code: "PRD",
        name: "Prediction Models",
        category: "AI/ML",
        col: 15,
        row: 1,
      },
      {
        code: "NLP",
        name: "Natural Language",
        category: "AI/ML",
        col: 16,
        row: 1,
      },

      // Data Platform
      {
        code: "SUP",
        name: "Supabase Backend",
        category: "Data",
        col: 1,
        row: 3,
      },
      { code: "PGS", name: "PostgreSQL DB", category: "Data", col: 2, row: 3 },
      { code: "RDS", name: "Redis Cache", category: "Data", col: 3, row: 3 },
      {
        code: "CLK",
        name: "ClickHouse Analytics",
        category: "Data",
        col: 4,
        row: 3,
      },
      {
        code: "KFK",
        name: "Kafka Streaming",
        category: "Data",
        col: 5,
        row: 3,
      },
      {
        code: "BQR",
        name: "BigQuery Warehouse",
        category: "Data",
        col: 6,
        row: 3,
      },
      { code: "ELS", name: "Elasticsearch", category: "Data", col: 7, row: 3 },
      { code: "S3", name: "Cloud Storage", category: "Data", col: 8, row: 3 },

      // Security & Compliance
      {
        code: "AUT",
        name: "Auth System",
        category: "Security",
        col: 9,
        row: 2,
      },
      {
        code: "JWT",
        name: "JWT Tokens",
        category: "Security",
        col: 10,
        row: 2,
      },
      { code: "OA2", name: "OAuth 2.0", category: "Security", col: 11, row: 2 },
      {
        code: "MFA",
        name: "Multi-Factor Auth",
        category: "Security",
        col: 12,
        row: 2,
      },
      {
        code: "ENC",
        name: "Encryption Service",
        category: "Security",
        col: 13,
        row: 2,
      },
      {
        code: "PCI",
        name: "PCI DSS Compliance",
        category: "Security",
        col: 14,
        row: 2,
      },
      {
        code: "SOC",
        name: "SOC 2 Type II",
        category: "Security",
        col: 15,
        row: 2,
      },
      {
        code: "HSM",
        name: "Hardware Security",
        category: "Security",
        col: 16,
        row: 2,
      },

      // API Infrastructure
      {
        code: "RST",
        name: "REST API Gateway",
        category: "API",
        col: 1,
        row: 4,
      },
      { code: "GQL", name: "GraphQL Layer", category: "API", col: 2, row: 4 },
      { code: "WSK", name: "WebSockets", category: "API", col: 3, row: 4 },
      { code: "WHK", name: "Webhooks System", category: "API", col: 4, row: 4 },
      { code: "GRW", name: "API Gateway", category: "API", col: 5, row: 4 },
      { code: "RTL", name: "Rate Limiting", category: "API", col: 6, row: 4 },
      {
        code: "CDN",
        name: "CDN Distribution",
        category: "API",
        col: 7,
        row: 4,
      },
      { code: "LDB", name: "Load Balancer", category: "API", col: 8, row: 4 },

      // Frontend Applications
      {
        code: "NXC",
        name: "Next.js Console",
        category: "Frontend",
        col: 9,
        row: 3,
      },
      {
        code: "RNA",
        name: "React Native App",
        category: "Frontend",
        col: 10,
        row: 3,
      },
      {
        code: "PWA",
        name: "Progressive Web App",
        category: "Frontend",
        col: 11,
        row: 3,
      },
      {
        code: "ADM",
        name: "Admin Dashboard",
        category: "Frontend",
        col: 12,
        row: 3,
      },
      {
        code: "MER",
        name: "Merchant Portal",
        category: "Frontend",
        col: 13,
        row: 3,
      },
      {
        code: "SDK",
        name: "Developer SDK",
        category: "Frontend",
        col: 14,
        row: 3,
      },

      // Credit & Investment
      {
        code: "CRE",
        name: "Credit Engine",
        category: "Credit",
        col: 1,
        row: 5,
      },
      { code: "BUR", name: "Bureau APIs", category: "Credit", col: 2, row: 5 },
      {
        code: "SCR",
        name: "Score Optimizer",
        category: "Credit",
        col: 3,
        row: 5,
      },
      {
        code: "INV",
        name: "Investment Tracker",
        category: "Credit",
        col: 4,
        row: 5,
      },
      { code: "ROB", name: "Robo-Advisor", category: "Credit", col: 5, row: 5 },
      {
        code: "PTF",
        name: "Portfolio Manager",
        category: "Credit",
        col: 6,
        row: 5,
      },
      {
        code: "RSK",
        name: "Risk Analysis",
        category: "Credit",
        col: 7,
        row: 5,
      },
      {
        code: "TLH",
        name: "Tax-Loss Harvesting",
        category: "Credit",
        col: 8,
        row: 5,
      },

      // Tax Services
      { code: "TAX", name: "Tax Engine", category: "Tax", col: 9, row: 4 },
      {
        code: "109",
        name: "1099 Processing",
        category: "Tax",
        col: 10,
        row: 4,
      },
      {
        code: "FIL",
        name: "Tax Filing System",
        category: "Tax",
        col: 11,
        row: 4,
      },
      {
        code: "EST",
        name: "Estimated Taxes",
        category: "Tax",
        col: 12,
        row: 4,
      },
      {
        code: "DED",
        name: "Deduction Finder",
        category: "Tax",
        col: 13,
        row: 4,
      },
      {
        code: "PLN",
        name: "Tax Planning AI",
        category: "Tax",
        col: 14,
        row: 4,
      },

      // Business Services
      {
        code: "BUS",
        name: "Business Banking",
        category: "Business",
        col: 9,
        row: 5,
      },
      {
        code: "INO",
        name: "Invoicing System",
        category: "Business",
        col: 10,
        row: 5,
      },
      {
        code: "PAY",
        name: "Payroll Processing",
        category: "Business",
        col: 11,
        row: 5,
      },
      {
        code: "EXP",
        name: "Expense Management",
        category: "Business",
        col: 12,
        row: 5,
      },
      {
        code: "ACC",
        name: "Accounting Sync",
        category: "Business",
        col: 13,
        row: 5,
      },
      {
        code: "REP",
        name: "Financial Reports",
        category: "Business",
        col: 14,
        row: 5,
      },
    ]

    const init = () => {
      const container = containerRef.current
      if (!container) return

      const scene = new THREE.Scene()
      const width = container.clientWidth
      const height = container.clientHeight
      const camera = new THREE.PerspectiveCamera(40, width / height, 1, 15000)
      camera.position.z = 6000 // Optimal distance for sphere view
      camera.position.y = 500 // Higher angle to see sphere better

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0) // Transparent background
      container.appendChild(renderer.domElement)

      sceneRef.current = scene
      cameraRef.current = camera
      rendererRef.current = renderer

      const objects: THREE.Object3D[] = []
      const targets: {
        table: THREE.Object3D[]
        sphere: THREE.Object3D[]
        helix: THREE.Object3D[]
        grid: THREE.Object3D[]
      } = { table: [], sphere: [], helix: [], grid: [] }

      // Create HTML elements container
      const elementsContainer = document.createElement("div")
      elementsContainer.style.position = "absolute"
      elementsContainer.style.top = "0"
      elementsContainer.style.left = "0"
      elementsContainer.style.width = "100%"
      elementsContainer.style.height = "100%"
      elementsContainer.style.transformStyle = "preserve-3d"
      elementsContainer.style.pointerEvents = "none"
      elementsContainer.style.perspective = "2000px"
      if (containerRef.current) {
        containerRef.current.appendChild(elementsContainer)
      }

      // Color mapping for categories
      const categoryColors: Record<string, string> = {
        "Financial Core": "rgba(16, 185, 129, ",
        Banking: "rgba(6, 182, 212, ",
        Payments: "rgba(234, 179, 8, ",
        "AI/ML": "rgba(139, 92, 246, ",
        Data: "rgba(249, 115, 22, ",
        Security: "rgba(236, 72, 153, ",
        API: "rgba(59, 130, 246, ",
        Frontend: "rgba(34, 211, 238, ",
        Credit: "rgba(245, 158, 11, ",
        Tax: "rgba(239, 68, 68, ",
        Business: "rgba(168, 85, 247, ",
      }

      // Create elements
      table.forEach((element, i) => {
        // Create HTML element
        const elementDiv = document.createElement("div")
        elementDiv.className = "dsm-element"
        elementDiv.style.width = "150px" // Slightly wider
        elementDiv.style.height = "180px" // Taller for better content spacing
        elementDiv.style.position = "absolute"
        elementDiv.style.left = "0"
        elementDiv.style.top = "0"
        elementDiv.style.transformOrigin = "center center"

        const baseColor =
          categoryColors[element.category] || "rgba(107, 114, 128, "
        elementDiv.style.background = `linear-gradient(135deg,
          ${baseColor}0.15) 0%,
          ${baseColor}0.25) 50%,
          ${baseColor}0.35) 100%)`

        elementDiv.style.border = `1px solid ${baseColor}0.4)`
        elementDiv.style.boxShadow = `0px 0px 20px ${baseColor}0.3)`
        elementDiv.style.textAlign = "center"
        elementDiv.style.cursor = "default"
        elementDiv.style.pointerEvents = "none"
        elementDiv.style.fontFamily = "system-ui, -apple-system, sans-serif"
        elementDiv.style.backdropFilter = "blur(8px)"
        // @ts-expect-error - webkitBackdropFilter is not in TypeScript types
        elementDiv.style.webkitBackdropFilter = "blur(8px)"
        elementDiv.style.borderRadius = "8px"

        const number = document.createElement("div")
        number.className = "number"
        number.textContent = (i + 1).toString()
        number.style.position = "absolute"
        number.style.top = "10px"
        number.style.right = "10px"
        number.style.fontSize = "10px"
        number.style.color = "rgba(255, 255, 255, 0.5)"
        elementDiv.appendChild(number)

        const symbol = document.createElement("div")
        symbol.className = "symbol"
        symbol.textContent = element.code
        symbol.style.position = "absolute"
        symbol.style.top = "35px" // Adjusted for taller card
        symbol.style.left = "0px"
        symbol.style.right = "0px"
        symbol.style.fontSize = "22px" // Larger font for better visibility
        symbol.style.fontWeight = "bold"
        symbol.style.color = "rgba(255, 255, 255, 0.9)"
        symbol.style.textShadow = `0 0 10px ${baseColor}0.8)`
        elementDiv.appendChild(symbol)

        const details = document.createElement("div")
        details.className = "details"
        details.innerHTML =
          element.name +
          '<br><span style="font-size: 8px; opacity: 0.7">' +
          element.category +
          "</span>"
        details.style.position = "absolute"
        details.style.bottom = "20px" // More padding from bottom
        details.style.left = "0px"
        details.style.right = "0px"
        details.style.fontSize = "10px" // Slightly larger for readability
        details.style.color = "rgba(255, 255, 255, 0.8)"
        details.style.padding = "0 5px"
        details.style.lineHeight = "1.2"
        elementDiv.appendChild(details)

        elementsContainer.appendChild(elementDiv)

        // Create 3D object wrapper
        const object = new THREE.Object3D()
        // Store element reference on object
        Object.assign(object, { element: elementDiv })
        object.position.x = Math.random() * 4000 - 2000
        object.position.y = Math.random() * 4000 - 2000
        object.position.z = Math.random() * 4000 - 2000
        scene.add(object)
        objects.push(object)

        // Sphere formation
        const phi = Math.acos(-1 + (2 * i) / table.length)
        const theta = Math.sqrt(table.length * Math.PI) * phi
        const radius = 2500 // Large sphere radius for better spacing

        const sphereObject = new THREE.Object3D()
        sphereObject.position.setFromSphericalCoords(radius, phi, theta)

        // Add slight random variation for organic feel
        sphereObject.position.x += (Math.random() - 0.5) * 100
        sphereObject.position.y += (Math.random() - 0.5) * 100
        sphereObject.position.z += (Math.random() - 0.5) * 100

        targets.grid.push(sphereObject)

        // Keep empty arrays for compatibility
        targets.table.push(sphereObject)
        targets.sphere.push(sphereObject)
        targets.helix.push(sphereObject)
      })

      objectsRef.current = objects
      targetsRef.current = targets

      // CSS3D-like rendering
      const render = () => {
        objects.forEach((object) => {
          const element = (
            object as THREE.Object3D & { element: HTMLDivElement }
          ).element

          // Get world position
          const vector = new THREE.Vector3()
          vector.setFromMatrixPosition(object.matrixWorld)

          // Project to screen coordinates
          const projectedVector = vector.clone()
          projectedVector.project(camera)

          // Calculate screen position
          const container = containerRef.current
          if (!container) return
          const width = container.clientWidth
          const height = container.clientHeight
          const x = projectedVector.x * width * 0.5 + width * 0.5
          const y = -projectedVector.y * height * 0.5 + height * 0.5

          // Calculate scale based on distance
          const distance = vector.distanceTo(camera.position)
          const scale = Math.max(0.1, Math.min(1, 2500 / distance))

          // Apply transform (adjusted for larger element size)
          element.style.transform = `translate(${x - 75}px, ${y - 90}px) scale(${scale})`

          // Hide elements behind camera
          if (projectedVector.z > 1) {
            element.style.display = "none"
          } else {
            element.style.display = "block"
            // Enhanced opacity based on depth for better 3D effect
            const depthFactor = 1 - distance / 8000
            element.style.opacity = Math.max(
              0.2,
              Math.min(0.6, depthFactor)
            ).toString()
          }

          // Set z-index for proper layering
          element.style.zIndex = Math.floor(
            (1 - projectedVector.z) * 1000
          ).toString()
        })
      }

      // Initial transform to expanded grid
      transform(targets.grid, 1500)
      currentFormationRef.current = "grid"

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)

        // Update tweens
        tweensRef.current = tweensRef.current.filter((tween) => tween.update())

        // Gentle continuous rotation
        scene.rotation.y += 0.001 // Slower rotation for better 3D depth perception

        // Update element positions
        scene.updateMatrixWorld()
        render()

        renderer.render(scene, camera)
      }

      animate()

      // Window resize
      const onWindowResize = () => {
        const container = containerRef.current
        if (!container) return
        const width = container.clientWidth
        const height = container.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        render()
      }
      window.addEventListener("resize", onWindowResize)

      // Mouse wheel zoom
      const onWheel = (event: WheelEvent) => {
        event.preventDefault()
        const camera = cameraRef.current
        if (!camera) return

        // Zoom in/out with limits
        const zoomSpeed = 0.15
        const minZ = 3000
        const maxZ = 9000

        camera.position.z += event.deltaY * zoomSpeed
        camera.position.z = Math.max(minZ, Math.min(maxZ, camera.position.z))
        render()
      }
      container.addEventListener("wheel", onWheel, { passive: false })

      // Touch pinch-to-zoom support
      let touchDistance = 0
      const onTouchStart = (event: TouchEvent) => {
        if (event.touches.length === 2) {
          const dx = event.touches[0]!.clientX - event.touches[1]!.clientX
          const dy = event.touches[0]!.clientY - event.touches[1]!.clientY
          touchDistance = Math.sqrt(dx * dx + dy * dy)
        }
      }

      const onTouchMove = (event: TouchEvent) => {
        if (event.touches.length === 2) {
          event.preventDefault()
          const camera = cameraRef.current
          if (!camera) return

          const dx = event.touches[0]!.clientX - event.touches[1]!.clientX
          const dy = event.touches[0]!.clientY - event.touches[1]!.clientY
          const newDistance = Math.sqrt(dx * dx + dy * dy)

          if (touchDistance > 0) {
            const scale = newDistance / touchDistance
            const minZ = 3000
            const maxZ = 9000

            camera.position.z /= scale
            camera.position.z = Math.max(
              minZ,
              Math.min(maxZ, camera.position.z)
            )
            render()
          }

          touchDistance = newDistance
        }
      }

      container.addEventListener("touchstart", onTouchStart, { passive: true })
      container.addEventListener("touchmove", onTouchMove, { passive: false })

      // Cleanup function
      return () => {
        window.removeEventListener("resize", onWindowResize)
        container.removeEventListener("wheel", onWheel)
        container.removeEventListener("touchstart", onTouchStart)
        container.removeEventListener("touchmove", onTouchMove)
        containerRef.current?.removeChild(renderer.domElement)
        containerRef.current?.removeChild(elementsContainer)
        renderer.dispose()
      }
    }

    const transform = (targets: THREE.Object3D[], duration: number) => {
      // Cancel existing tweens
      tweensRef.current.forEach((tween) => {
        if (tween.stop) tween.stop()
      })
      tweensRef.current = []

      const objects = objectsRef.current
      const camera = cameraRef.current

      // Fixed camera distance for sphere
      const targetCameraZ = 6000 // Optimal for sphere formation

      // Animate camera position
      if (!camera) return
      const cameraStartZ = camera.position.z
      const cameraStartTime = Date.now()

      const cameraAnimation = {
        update: () => {
          const elapsed = Date.now() - cameraStartTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)

          camera.position.z =
            cameraStartZ + (targetCameraZ - cameraStartZ) * eased

          return progress < 1
        },
        stop: () => {},
      }
      tweensRef.current.push(cameraAnimation)

      objects.forEach((object, i) => {
        const target = targets[i]
        const startPos = {
          x: object.position.x,
          y: object.position.y,
          z: object.position.z,
          rx: object.rotation.x,
          ry: object.rotation.y,
          rz: object.rotation.z,
        }

        const startTime = Date.now()
        const randomDelay = Math.random() * duration * 0.4

        const tween = {
          update: () => {
            const elapsed = Date.now() - startTime - randomDelay
            if (elapsed < 0) return true

            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)

            object.position.x =
              startPos.x + (target!.position.x - startPos.x) * eased
            object.position.y =
              startPos.y + (target!.position.y - startPos.y) * eased
            object.position.z =
              startPos.z + (target!.position.z - startPos.z) * eased
            object.rotation.x =
              startPos.rx + (target!.rotation.x - startPos.rx) * eased
            object.rotation.y =
              startPos.ry + (target!.rotation.y - startPos.ry) * eased
            object.rotation.z =
              startPos.rz + (target!.rotation.z - startPos.rz) * eased

            return progress < 1
          },
          stop: () => {},
        }

        tweensRef.current.push(tween)
      })
    }

    const cleanup = init()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  )
}

export default DSMPeriodicBackground
