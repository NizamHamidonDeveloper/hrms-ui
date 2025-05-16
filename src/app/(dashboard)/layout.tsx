"use client"

import { Navigation } from "@/components/core/Navigation"
import { Header } from "@/components/core/Header"
import { Footer } from "@/components/core/Footer"
import { Sidebar } from "@/components/core/Sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar userRole={user.role} />
      <div className="flex-1 flex flex-col">
        <Header userRole={user.role} userName={user.name} />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  )
} 