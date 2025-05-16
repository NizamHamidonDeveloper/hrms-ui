import { User, LeaveType, LeaveRequest, LeaveBalance, Notification, Team } from "@/types"

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@company.com",
    password: "password123",
    role: "manager",
    department: "Engineering",
    position: "Engineering Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    password: "123",
    role: "employee",
    department: "Engineering",
    position: "Senior Developer",
    teamId: "1",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "3",
    name: "Emily Carter",
    email: "emily.carter@company.com",
    password: "password123",
    role: "hr_admin",
    department: "Human Resources",
    position: "HR Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
]

export const leaveTypes: LeaveType[] = [
  {
    id: "1",
    name: "Annual Leave",
    description: "Regular annual leave",
    maxDays: 20,
    requiresApproval: true,
  },
  {
    id: "2",
    name: "Sick Leave",
    description: "Medical leave",
    maxDays: 15,
    requiresApproval: true,
  },
  {
    id: "3",
    name: "Unpaid Leave",
    description: "Leave without pay",
    maxDays: 30,
    requiresApproval: true,
  },
]

export const leaveRequests: LeaveRequest[] = [
  {
    id: "1",
    userId: "2",
    leaveTypeId: "1",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-05-05"),
    reason: "Family vacation",
    status: "approved",
    approvedBy: "2",
    approvedAt: new Date("2025-05-01"),
    createdAt: new Date("2025-04-29"),
    updatedAt: new Date("2025-04-30"),
  },
  {
    id: "2",
    userId: "2",
    leaveTypeId: "2",
    startDate: new Date("2025-05-10"),
    endDate: new Date("2025-05-15"),
    reason: "Medical appointment",
    status: "pending",
    createdAt: new Date("2025-04-20"),
    updatedAt: new Date("2025-04-20"),
  },
]

export const leaveBalances: LeaveBalance[] = [
  {
    userId: "1",
    leaveTypeId: "1",
    totalDays: 20,
    usedDays: 5,
    remainingDays: 15,
    year: 2025,
  },
  {
    userId: "1",
    leaveTypeId: "2",
    totalDays: 15,
    usedDays: 2,
    remainingDays: 13,
    year: 2025,
  },
]

export const notifications: Notification[] = [
  {
    id: "1",
    userId: "1",
    title: "Leave Request Approved",
    message: "Your leave request has been approved by John Doe",
    type: "success",
    read: false,
    createdAt: new Date("2025-03-10"),
  },
  {
    id: "2",
    userId: "1",
    title: "New Team Member",
    message: "Sarah Chen has joined your team",
    type: "info",
    read: false,
    createdAt: new Date("2025-03-15"),
  },
  {
    id: "3",
    userId: "1",
    title: "Policy Update",
    message: "New leave policy has been updated",
    type: "warning",
    read: false,
    createdAt: new Date("2025-03-18"),
  },
]

export const teams: Team[] = [
  {
    id: "1",
    name: "Engineering Team A",
    managerId: "2",
    members: ["1", "4", "5"],
    department: "Engineering",
  },
] 