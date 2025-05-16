"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Mail, Phone, MapPin, User, Building2, Briefcase, Banknote, FileText } from "lucide-react"

const profileData = {
  name: "Sarah Chen",
  position: "Senior Software Engineer",
  employeeId: "EMP00123",
  email: "sarah.chen@example.com",
  department: "Engineering",
  manager: "John Doe",
  joinDate: "15 March 2022",
  phone: "+6012-3456789",
  address: "123 Jalan ABC, Taman DEF, 55100 Kuala Lumpur, Malaysia",
  emergencyContact: {
    name: "Michael Chen",
    relationship: "Father",
    phone: "+6012-9876543"
  },
  bankDetails: {
    bankName: "Maybank",
    accountNumber: "1234567890",
    accountType: "Savings"
  },
  taxInfo: {
    taxId: "123456-78-9012",
    taxCategory: "Single",
    epfNumber: "A12345678"
  },
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
}

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">View and manage your personal information</p>
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback>{profileData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{profileData.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{profileData.position}</p>
              <Badge variant="secondary" className="mt-1">{profileData.department}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Personal Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Employee ID:</span>
                  <span className="text-sm">{profileData.employeeId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <span className="text-sm">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Department:</span>
                  <span className="text-sm">{profileData.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Reporting Manager:</span>
                  <span className="text-sm">{profileData.manager}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Date Joined:</span>
                  <span className="text-sm">{profileData.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Phone:</span>
                  <span className="text-sm">{profileData.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <span className="text-sm text-muted-foreground">Address:</span>
                    <p className="text-sm whitespace-pre-line">{profileData.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <span className="text-sm text-muted-foreground">Emergency Contact:</span>
                    <p className="text-sm">
                      {profileData.emergencyContact.name} ({profileData.emergencyContact.relationship})<br />
                      {profileData.emergencyContact.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Banknote className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium">Bank Account Details</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm">Bank Name: {profileData.bankDetails.bankName}</p>
                <p className="text-sm">Account Number: {profileData.bankDetails.accountNumber}</p>
                <p className="text-sm">Account Type: {profileData.bankDetails.accountType}</p>
              </div>
            </div>

            {/* Tax Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium">Tax Information</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm">Tax ID: {profileData.taxInfo.taxId}</p>
                <p className="text-sm">Tax Category: {profileData.taxInfo.taxCategory}</p>
                <p className="text-sm">EPF Number: {profileData.taxInfo.epfNumber}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Edit Profile</Button>
      </div>
    </div>
  )
} 