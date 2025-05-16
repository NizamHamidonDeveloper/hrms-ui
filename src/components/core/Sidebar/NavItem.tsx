"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NavItem as NavItemType } from "@/lib/navigation"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface NavItemProps {
  item: NavItemType
  isCollapsed: boolean
}

export function NavItem({ item, isCollapsed }: NavItemProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className="relative">
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100",
          isActive ? "bg-gray-100 text-gray-900" : "text-gray-600",
          isCollapsed && "justify-center"
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <item.icon className="h-5 w-5" />
        {!isCollapsed && (
          <>
            <span>{item.title}</span>
            {hasChildren && (
              <ChevronDown
                className={cn(
                  "ml-auto h-4 w-4 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            )}
          </>
        )}
      </Link>
      {hasChildren && !isCollapsed && isOpen && item.children && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100",
                pathname === child.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600"
              )}
            >
              <child.icon className="h-4 w-4" />
              <span>{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 