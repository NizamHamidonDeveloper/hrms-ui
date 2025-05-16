import { Bell, Search } from "lucide-react"
import { Notifications } from "./Notifications"
import { UserMenu } from "./UserMenu"

interface HeaderProps {
  userRole: "employee" | "manager" | "hr_admin"
  userName: string
}

export function Header({ userRole, userName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-white px-4 shadow-sm">
      <div className="flex flex-1 items-center gap-4">
        <form className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-8 pr-3 text-sm outline-none focus:border-gray-400"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <Notifications />
        <UserMenu userRole={userRole} userName={userName} />
      </div>
    </header>
  )
} 