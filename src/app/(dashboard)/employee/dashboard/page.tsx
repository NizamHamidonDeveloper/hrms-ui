"use client"

import { EmployeeDashboard } from "@/components/dashboard/EmployeeDashboard"
import { leaveBalances, leaveTypes, leaveRequests, users } from "@/lib/mock-data"

// Mock upcoming holidays
const upcomingHolidays = [
  {
    date: new Date("2024-05-24"),
    name: "Wesak Day"
  },
  {
    date: new Date("2024-06-01"),
    name: "Hari Raya Haji"
  }
]

export default function EmployeeDashboardPage() {
  // Get Sarah Chen's user data (id: "2")
  const user = users.find(u => u.id === "2")!

  return (
    <EmployeeDashboard
      leaveBalances={leaveBalances}
      leaveTypes={leaveTypes}
      recentLeaveRequests={leaveRequests}
      upcomingHolidays={upcomingHolidays}
      user={user}
    />
  )
} 