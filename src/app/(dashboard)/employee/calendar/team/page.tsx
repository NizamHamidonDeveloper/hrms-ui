"use client"

import { leaveRequests, users } from "@/lib/mock-data"
import { CalendarView } from "@/components/calendar/CalendarView"

export default function TeamCalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Team Calendar</h1>
        <p className="text-gray-500">View your team's leave calendar and availability</p>
      </div>

      <CalendarView
        leaveRequests={leaveRequests}
        users={users}
        mode="team"
      />
    </div>
  )
} 