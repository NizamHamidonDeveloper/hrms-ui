"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="text-sm font-medium">Leave Request Approved</p>
          <p className="text-xs text-gray-500">Your leave request has been approved by John Doe</p>
          <p className="text-xs text-gray-400">2 hours ago</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="text-sm font-medium">New Team Member</p>
          <p className="text-xs text-gray-500">Sarah Chen has joined your team</p>
          <p className="text-xs text-gray-400">1 day ago</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-col items-start gap-1">
          <p className="text-sm font-medium">Policy Update</p>
          <p className="text-xs text-gray-500">New leave policy has been updated</p>
          <p className="text-xs text-gray-400">2 days ago</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 