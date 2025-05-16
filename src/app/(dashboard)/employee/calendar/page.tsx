"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-gray-500">View your personal and team calendars</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/employee/calendar/personal">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Personal Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                View your personal leave calendar and upcoming holidays
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/employee/calendar/team">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                View your team's leave calendar and availability
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
} 