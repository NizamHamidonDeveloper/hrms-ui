"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { leaveRequests, leaveTypes } from "@/lib/mock-data"
import { LeaveHistory } from "@/components/core/LeaveHistory"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function LeaveSummaryPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredRequests = statusFilter === "all"
    ? leaveRequests
    : leaveRequests.filter(request => request.status === statusFilter)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leave Summary</h1>
        <p className="text-gray-500">View your leave request history and status</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Leave Requests</CardTitle>
          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <LeaveHistory 
            leaveRequests={filteredRequests}
            leaveTypes={leaveTypes}
          />
        </CardContent>
      </Card>
    </div>
  )
} 