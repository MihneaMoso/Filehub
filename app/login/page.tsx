import Link from "next/link"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
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
            <CardTitle className="text-2xl">Log in</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-primary underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Log In</Button>
          </CardFooter>
          <div className="px-6 pb-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary underline">
              Sign up
            </Link>
          </div>
        </Card>
      </main>
    </div>
  )
}
