"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeaveRequest, User, PublicHoliday } from "@/types"
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isToday,
  isWeekend
} from "date-fns"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { publicHolidays } from "@/lib/mock-data"

interface CalendarViewProps {
  leaveRequests: LeaveRequest[]
  users: User[]
  mode?: "personal" | "team"
}

export function CalendarView({ leaveRequests, users, mode = "personal" }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
  const [viewMode, setViewMode] = React.useState<"month" | "week" | "day">("month")
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())

  const getLeaveRequestsForDate = (date: Date) => {
    return leaveRequests.filter(
      (request) =>
        new Date(request.startDate) <= date &&
        new Date(request.endDate) >= date
    )
  }

  const getPublicHolidayForDate = (date: Date) => {
    return publicHolidays.find(holiday => isSameDay(new Date(holiday.date), date))
  }

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const handleToday = () => {
    const today = new Date()
    setCurrentMonth(today)
    setSelectedDate(today)
  }

  const renderMonthView = () => {
    const days = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    })

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="bg-gray-100 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const requests = getLeaveRequestsForDate(day)
          const holiday = getPublicHolidayForDate(day)
          return (
            <div
              key={day.toISOString()}
              className={`h-32 p-2 overflow-y-auto cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${
                day.getMonth() === currentMonth.getMonth() ? "bg-white" : "bg-gray-50 text-gray-400"
              } ${isToday(day) ? "bg-blue-50" : ""}`}
              onClick={() => setSelectedDate(day)}
            >
              <div className="flex justify-end text-sm">{format(day, "d")}</div>
              {holiday && (
                <div className="text-[10px] bg-purple-100 text-purple-700 px-1 py-0.5 rounded mb-1 truncate">
                  {holiday.name}
                </div>
              )}
              {requests.map((request) => (
                <div
                  key={request.id}
                  className={`mt-1 text-xs p-1 rounded ${
                    request.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : request.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {users.find((user) => user.id === request.userId)?.name}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    )
  }

  const renderWeekView = () => {
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 })
    const weekDays = eachDayOfInterval({
      start: weekStart,
      end: endOfWeek(selectedDate, { weekStartsOn: 0 }),
    })

    return (
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        <div className="bg-gray-100 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Time
        </div>
        {weekDays.map((day) => (
          <div
            key={day.toISOString()}
            className={`bg-gray-100 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ${
              isToday(day) ? "bg-blue-50" : ""
            }`}
          >
            {format(day, "EEE dd")}
          </div>
        ))}

        {/* Time slots */}
        {Array.from({ length: 9 }, (_, i) => i + 8).map((hour) => (
          <React.Fragment key={hour}>
            <div className="bg-gray-50 p-2 text-xs text-gray-500">
              {hour}:00
            </div>
            {weekDays.map((day) => {
              const requests = getLeaveRequestsForDate(day)
              const holiday = getPublicHolidayForDate(day)
              return (
                <div
                  key={`${day.toISOString()}-${hour}`}
                  className={`bg-white p-2 ${
                    isWeekend(day) ? "bg-gray-50" : ""
                  }`}
                >
                  {holiday && (
                    <div className="text-[10px] bg-purple-100 text-purple-700 px-1 py-0.5 rounded mb-1 truncate">
                      {holiday.name}
                    </div>
                  )}
                  {requests.map((request) => (
                    <div
                      key={request.id}
                      className={`text-xs p-1 rounded ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : request.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {users.find((user) => user.id === request.userId)?.name}
                    </div>
                  ))}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    )
  }

  const renderDayView = () => {
    const requests = getLeaveRequestsForDate(selectedDate)
    const holiday = getPublicHolidayForDate(selectedDate)

    return (
      <div className="space-y-4">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">
            {format(selectedDate, "EEEE, MMMM dd, yyyy")}
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div
                key={request.id}
                className={`p-4 ${
                  request.status === "approved"
                    ? "bg-green-50"
                    : request.status === "pending"
                    ? "bg-yellow-50"
                    : "bg-red-50"
                }`}
              >
                <div className="text-sm font-medium">
                  {users.find((user) => user.id === request.userId)?.name}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  {format(new Date(request.startDate), "MMM dd")} -{" "}
                  {format(new Date(request.endDate), "MMM dd")}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No leave requests for this day
            </div>
          )}
          {holiday && (
            <div className="p-4 text-center text-gray-500">
              {holiday.name}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" onClick={handlePrevMonth}>
              ←
            </Button>
            <h2 className="text-xl font-semibold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              →
            </Button>
            <Button variant="outline" onClick={handleToday}>
              Today
            </Button>
          </div>
          <Select value={viewMode} onValueChange={(value: "month" | "week" | "day") => setViewMode(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month View</SelectItem>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="day">Day View</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          {viewMode === "month" && renderMonthView()}
          {viewMode === "week" && renderWeekView()}
          {viewMode === "day" && renderDayView()}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-100 border border-green-300 mr-2"></div>
              <span className="text-sm text-gray-700">Approved Leave</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-100 border border-yellow-300 mr-2"></div>
              <span className="text-sm text-gray-700">Pending Leave</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-100 border border-red-300 mr-2"></div>
              <span className="text-sm text-gray-700">Rejected Leave</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-100 border border-purple-300 mr-2"></div>
              <span className="text-sm text-gray-700">Public Holiday</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 