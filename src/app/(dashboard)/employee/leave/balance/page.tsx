"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { leaveBalances, leaveTypes } from "@/lib/mock-data"
import { Progress } from "@/components/ui/progress"

export default function LeaveBalancePage() {
  const getLeaveTypeName = (leaveTypeId: string) => {
    return leaveTypes.find(type => type.id === leaveTypeId)?.name || "Unknown"
  }

  const getLeaveTypeDescription = (leaveTypeId: string) => {
    return leaveTypes.find(type => type.id === leaveTypeId)?.description || ""
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leave Balance</h1>
        <p className="text-gray-500">View your available leave days and usage history</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {leaveBalances.map((balance) => {
          const percentage = (balance.usedDays / balance.totalDays) * 100
          return (
            <Card key={balance.leaveTypeId}>
              <CardHeader>
                <CardTitle className="text-xl">
                  {getLeaveTypeName(balance.leaveTypeId)}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {getLeaveTypeDescription(balance.leaveTypeId)}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Used: {balance.usedDays} days</span>
                  <span>Total: {balance.totalDays} days</span>
                </div>
                <Progress value={percentage} className="h-2" />
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {balance.remainingDays} days
                  </span>
                  <span className="text-sm text-gray-500">remaining</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
} 