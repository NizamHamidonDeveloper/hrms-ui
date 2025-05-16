"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Sun, CalendarCheck, PlusCircle, List, Calendar, PieChart } from "lucide-react"
import { format } from "date-fns"
import { LeaveBalance, LeaveRequest, LeaveType, User } from "@/types"
import Link from "next/link"

interface EmployeeDashboardProps {
  leaveBalances: LeaveBalance[]
  leaveTypes: LeaveType[]
  recentLeaveRequests: LeaveRequest[]
  upcomingHolidays: { date: Date; name: string }[]
  user: User
}

export function EmployeeDashboard({
  leaveBalances,
  leaveTypes,
  recentLeaveRequests,
  upcomingHolidays,
  user
}: EmployeeDashboardProps) {
  const getLeaveTypeName = (leaveTypeId: string) => {
    return leaveTypes.find(type => type.id === leaveTypeId)?.name || "Unknown"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "leave":
        return <CalendarDays className="h-5 w-5 text-green-600" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-600" />
      case "holiday":
        return <CalendarCheck className="h-5 w-5 text-purple-600" />
      default:
        return <CalendarDays className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Here's what's happening with your leave applications</p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Available Leave Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Available Annual Leave</p>
                <p className="text-3xl font-bold text-blue-600">
                  {leaveBalances.find(b => b.leaveTypeId === "1")?.remainingDays || 0} Days
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Sun className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Link href="/employee/leave/balance" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Pending Applications Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Applications</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {recentLeaveRequests.filter(r => r.status === "pending").length} Applications
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <Clock className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Link href="/employee/leave/history" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Leave Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming Approved Leave</p>
                <p className="text-3xl font-bold text-green-600">
                  {recentLeaveRequests.filter(r => r.status === "approved").length} Days
                </p>
                <p className="text-xs text-gray-500">
                  {recentLeaveRequests.find(r => r.status === "approved")?.startDate && 
                    format(new Date(recentLeaveRequests.find(r => r.status === "approved")!.startDate), "dd MMM yyyy")}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CalendarCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Link href="/employee/calendar" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View calendar <span aria-hidden="true">→</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/employee/leave/apply" className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
              <PlusCircle className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-gray-900">Apply for Leave</p>
          </Link>
          <Link href="/employee/leave/history" className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mb-2">
              <List className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-gray-900">View Leave Summary</p>
          </Link>
          <Link href="/employee/calendar" className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mb-2">
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-gray-900">View Calendar</p>
          </Link>
          <Link href="/employee/leave/balance" className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-2">
              <PieChart className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-gray-900">Check Leave Balance</p>
          </Link>
        </div>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
            <Link href="/employee/calendar" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentLeaveRequests.map((request) => (
              <div key={request.id} className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  {getEventIcon(request.status === "pending" ? "pending" : "leave")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {getLeaveTypeName(request.leaveTypeId)} ({request.status})
                  </p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(request.startDate), "dd MMM yyyy")} - {format(new Date(request.endDate), "dd MMM yyyy")}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {getStatusBadge(request.status)}
                </div>
              </div>
            ))}

            {upcomingHolidays.map((holiday, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-purple-100 text-purple-600 mr-3">
                  {getEventIcon("holiday")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Public Holiday</p>
                  <p className="text-sm text-gray-500">
                    {format(holiday.date, "dd MMM yyyy")} ({holiday.name})
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Badge className="bg-purple-100 text-purple-800">Holiday</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 