export type User = {
  id: string
  name: string
  email: string
  password: string
  role: "employee" | "manager" | "hr_admin"
  department: string
  position: string
  avatar?: string
  teamId?: string
}

export type LeaveType = {
  id: string
  name: string
  description: string
  maxDays: number
  requiresApproval: boolean
}

export type LeaveRequest = {
  id: string
  userId: string
  leaveTypeId: string
  startDate: Date
  endDate: Date
  reason: string
  status: "pending" | "approved" | "rejected"
  approvedBy?: string
  approvedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export type LeaveBalance = {
  userId: string
  leaveTypeId: string
  totalDays: number
  usedDays: number
  remainingDays: number
  year: number
}

export type Notification = {
  id: string
  userId: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: Date
}

export type Team = {
  id: string
  name: string
  managerId: string
  members: string[]
  department: string
} 