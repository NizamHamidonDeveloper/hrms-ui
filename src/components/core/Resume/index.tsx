"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { User } from "@/types"

interface ResumeProps {
  user: User
}

export function Resume({ user }: ResumeProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Employee Resume</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {/* Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-medium">{user.department}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Position</p>
                  <p className="font-medium">{user.position}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <Badge variant="secondary" className="mt-1">
                    {user.role}
                  </Badge>
                </div>
              </div>
            </section>

            <Separator />

            {/* Leave Balance */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Leave Balance</h2>
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Annual Leave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-xs text-muted-foreground">days remaining</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Sick Leave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">13</p>
                    <p className="text-xs text-muted-foreground">days remaining</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Unpaid Leave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">30</p>
                    <p className="text-xs text-muted-foreground">days remaining</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Recent Leave Requests */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Recent Leave Requests</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Annual Leave</p>
                        <p className="text-sm text-muted-foreground">Mar 15 - Mar 20, 2024</p>
                      </div>
                      <Badge variant="success">Approved</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Sick Leave</p>
                        <p className="text-sm text-muted-foreground">Mar 25 - Mar 26, 2024</p>
                      </div>
                      <Badge variant="warning">Pending</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Team Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Team Information</h2>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Engineering Team A</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Department: Engineering
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Team Members:</p>
                    <ul className="text-sm text-muted-foreground mt-1 list-disc list-inside">
                      <li>Sarah Chen</li>
                      <li>John Doe (Manager)</li>
                      <li>Emily Carter</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 