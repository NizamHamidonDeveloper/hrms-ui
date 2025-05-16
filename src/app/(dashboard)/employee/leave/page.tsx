"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ClipboardList, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function EmployeeLeavePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leave Management</h1>
        <p className="text-gray-500">Manage your leave requests and view your leave balance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Apply Leave Card */}
        <Link href="/employee/leave/apply">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-blue-100">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Apply for Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Submit a new leave request and track its status
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Leave Balance Card */}
        <Link href="/employee/leave/balance">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-green-100">
                <ClipboardList className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Leave Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                View your available leave days and usage history
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Leave Summary Card */}
        <Link href="/employee/leave/summary">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-full bg-purple-100">
                <BarChart2 className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Leave Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                View detailed reports of your leave history
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
} 