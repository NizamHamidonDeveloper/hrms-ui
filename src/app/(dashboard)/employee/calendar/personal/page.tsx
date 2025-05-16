"use client"

import { leaveRequests, users } from "@/lib/mock-data"
import { CalendarView } from "@/components/calendar/CalendarView"

export default function PersonalCalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Personal Calendar</h1>
        <p className="text-gray-500">View your scheduled leaves and public holidays</p>
      </div>

      <CalendarView
        leaveRequests={leaveRequests}
        users={users}
        mode="personal"
      />
    </div>
  )
} 