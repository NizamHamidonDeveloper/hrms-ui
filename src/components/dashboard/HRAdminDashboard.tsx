"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { LeaveRequest, User, Team } from "@/types"

interface HRAdminDashboardProps {
  totalUsers: number
  totalTeams: number
  recentLeaveRequests: LeaveRequest[]
  teams: Team[]
  users: User[]
}

export function HRAdminDashboard({
  totalUsers,
  totalTeams,
  recentLeaveRequests,
  teams,
  users,
}: HRAdminDashboardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* System Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Users</span>
              <span className="font-medium">{totalUsers}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Teams</span>
              <span className="font-medium">{totalTeams}</span>
            </div>
            <div className="flex justify-between">
              <span>Active Leave Requests</span>
              <span className="font-medium">
                {recentLeaveRequests.filter(
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

      {/* Recent Leave Requests Card */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {recentLeaveRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      {users.find((user) => user.id === request.userId)?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(request.startDate, "MMM dd")} -{" "}
                      {format(request.endDate, "MMM dd")}
                    </p>
                  </div>
                  <Badge
                    variant={
                      request.status === "approved"
                        ? "success"
                        : request.status === "rejected"
                        ? "destructive"
                        : "warning"
                    }
                  >
                    {request.status}
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Team Overview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {teams.map((team) => (
                <div key={team.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {team.members.length} members
                    </p>
                  </div>
                  <Badge variant="outline">{team.department}</Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
} 