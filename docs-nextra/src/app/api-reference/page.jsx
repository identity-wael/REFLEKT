"use client"

import dynamic from "next/dynamic"

const ApiReference = dynamic(() => import("../../components/ApiReference"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
        <p className="text-gray-600 dark:text-gray-400">
          Loading API Documentation...
        </p>
      </div>
    </div>
  ),
})

export default function ApiReferencePage() {
  return <ApiReference />
}
