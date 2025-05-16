"use client"

import { LeaveRequestForm } from "@/components/core/LeaveRequestForm"
import { leaveTypes } from "@/lib/mock-data"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function ApplyLeavePage() {
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (data: any) => {
    // TODO: Implement API call to submit leave request
    console.log("Leave request data:", data)
    
    toast({
      title: "Leave Request Submitted",
      description: "Your leave request has been submitted successfully.",
    })

    router.push("/employee/leave")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Apply for Leave</h1>
        <p className="text-gray-500">Submit a new leave request</p>
      </div>

      <div className="max-w-2xl">
        <LeaveRequestForm
          leaveTypes={leaveTypes}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
} 