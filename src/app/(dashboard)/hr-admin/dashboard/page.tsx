import { HRAdminDashboard } from "@/components/dashboard/HRAdminDashboard"
import { users, teams, leaveRequests } from "@/lib/mock-data"

export default function HRAdminDashboardPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">HR Admin Dashboard</h1>
      <HRAdminDashboard
        totalUsers={users.length}
        totalTeams={teams.length}
        recentLeaveRequests={leaveRequests.slice(0, 5)}
        teams={teams}
        users={users}
      />
    </div>
  )
} 