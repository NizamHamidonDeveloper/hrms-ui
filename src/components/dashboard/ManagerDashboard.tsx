"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { LeaveRequest, User } from "@/types"

interface ManagerDashboardProps {
  teamMembers: User[]
  pendingApprovals: LeaveRequest[]
  teamLeaveRequests: LeaveRequest[]
}

export function ManagerDashboard({
  teamMembers,
  pendingApprovals,
  teamLeaveRequests,
}: ManagerDashboardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Team Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Team Members</span>
              <span className="font-medium">{teamMembers.length}</span>
            </div>
            <div className="flex justify-between">
              <span>On Leave Today</span>
              <span className="font-medium">
                {teamLeaveRequests.filter(
                  (request) =>
                    request.status === "approved" &&
                    new Date(request.startDate) <= new Date() &&
                    new Date(request.endDate) >= new Date()
                ).length}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pending Approvals Card */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {pendingApprovals.map((request) => (
                <div key={request.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      {teamMembers.find((member) => member.id === request.userId)?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(request.startDate, "MMM dd")} -{" "}
                      {format(request.endDate, "MMM dd")}
                    </p>
                  </div>
                  <Badge variant="warning">Pending</Badge>
                </div>
              ))}
              {pendingApprovals.length === 0 && (
                <p className="text-sm text-muted-foreground text-center">
                  No pending approvals
                </p>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Team Calendar Card */}
      <Card>
        <CardHeader>
          <CardTitle>Team Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {teamLeaveRequests
                .filter((request) => request.status === "approved")
                .map((request) => (
                  <div key={request.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        {teamMembers.find((member) => member.id === request.userId)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {format(request.startDate, "MMM dd")} -{" "}
                        {format(request.endDate, "MMM dd")}
                      </p>
                    </div>
                    <Badge variant="success">Approved</Badge>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
} 