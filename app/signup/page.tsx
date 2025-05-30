"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  const [username, setUsername] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">FileHub</span>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500">
                Your URL will be: {username ? `${username}.filehub.com` : "username.filehub.com"}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Account</Button>
          </CardFooter>
          <div className="px-6 pb-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Log in
            </Link>
          </div>
        </Card>
      </main>
    </div>
  )
}
