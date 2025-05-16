import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  User,
  ClipboardList,
  BarChart2,
  Shield
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

export type UserRole = "employee" | "manager" | "hr_admin"

export const navigation: Record<UserRole, NavItem[]> = {
  employee: [
    {
      title: "Dashboard",
      href: "/employee/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Leave",
      href: "/employee/leave",
      icon: Calendar,
    },
    {
      title: "Calendar",
      href: "/employee/calendar",
      icon: Calendar,
    },
    {
      title: "Profile",
      href: "/employee/profile",
      icon: User,
    },
  ],
  manager: [
    {
      title: "Dashboard",
      href: "/manager/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Team",
      href: "/manager/team",
      icon: Users,
    },
    {
      title: "Approvals",
      href: "/manager/approvals",
      icon: ClipboardList,
    },
    {
      title: "Calendar",
      href: "/manager/calendar",
      icon: Calendar,
    },
    {
      title: "Profile",
      href: "/manager/profile",
      icon: User,
    },
  ],
  hr_admin: [
    {
      title: "Dashboard",
      href: "/hr-admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/hr-admin/users",
      icon: Users,
    },
    {
      title: "Policies",
      href: "/hr-admin/policies",
      icon: Shield,
    },
    {
      title: "Reports",
      href: "/hr-admin/reports",
      icon: BarChart2,
    },
    {
      title: "Profile",
      href: "/hr-admin/profile",
      icon: User,
    },
  ],
} 