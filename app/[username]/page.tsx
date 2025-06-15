import Link from "next/link"
import { FileText } from "lucide-react"
import { notFound } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UserPageProps {
  params: Promise<{
    username: string
  }>
}

// Mock function - replace with your actual user lookup
async function getUserByUsername(username: string) {
  // This should query your database to check if user exists
  const validUsers = ['johndoe', 'janedoe', 'demo'] // Replace with actual DB query
  return validUsers.includes(username.toLowerCase()) ? { username } : null
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params
  
  // Check if user exists
  const user = await getUserByUsername(username)
  
  if (!user) {
    notFound() // This will show your 404 page
  }

  // Rest of your component for valid users
  const userData = {
    name: "John Doe",
    username: username,
    files: [
      {
        id: 1,
        name: "Project Proposal.pdf",
        size: "2.4 MB",
        downloads: 12,
      },
      // ... more files
    ]
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto max-w-7xl flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">FileHub</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl p-6">
          <div className="mb-6 flex items-center gap-4 border-b pb-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold">{userData.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-muted-foreground">@{userData.username}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Files</h2>
            {userData.files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{file.name}</h3>
                  <p className="text-sm text-muted-foreground">{file.size} • {file.downloads} downloads</p>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-sm text-gray-500">Powered by FileHub</footer>
    </div>
  )
}