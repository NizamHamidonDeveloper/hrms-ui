"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeaveRequest, LeaveType } from "@/types"

interface LeaveHistoryProps {
  leaveRequests: LeaveRequest[]
  leaveTypes: LeaveType[]
}

export function LeaveHistory({ leaveRequests, leaveTypes }: LeaveHistoryProps) {
  const getLeaveTypeName = (leaveTypeId: string) => {
    const leaveType = leaveTypes.find((type) => type.id === leaveTypeId)
    return leaveType?.name || "Unknown"
  }

  const getStatusBadge = (status: LeaveRequest["status"]) => {
    switch (status) {
      case "approved":
        return <Badge variant="success">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "pending":
        return <Badge variant="warning">Pending</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{getLeaveTypeName(request.leaveTypeId)}</TableCell>
                <TableCell>
                  {format(request.startDate, "MMM dd, yyyy")}
                </TableCell>
                <TableCell>
                  {format(request.endDate, "MMM dd, yyyy")}
                </TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {request.reason}
                </TableCell>
              </TableRow>
            ))}
            {leaveRequests.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No leave requests found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
} 