import Link from "next/link"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UserPageProps {
  params: Promise<{
    username: string
  }>
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } =  await params

  // In a real app, you would fetch user data and files based on the username
  const userData = {
    displayName: username === "johndoe" ? "John Doe" : username.charAt(0).toUpperCase() + username.slice(1),
    bio: "Product Designer & Developer",
    files: [
      { id: 1, name: "Project Proposal.pdf", size: "2.4 MB" },
      { id: 2, name: "Resume - 2023.pdf", size: "1.8 MB" },
      { id: 3, name: "Portfolio.zip", size: "15.2 MB" },
      { id: 4, name: "Meeting Notes.docx", size: "0.5 MB" },
      { id: 5, name: "Presentation.pptx", size: "8.7 MB" },
    ],
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
        <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold">{userData.displayName}</h1>
            <p className="text-gray-500 text-lg">{userData.bio}</p>
            <p className="text-sm text-gray-400">{username}.filehub.com</p>
          </div>
          <Card className="overflow-hidden">
            <div className="grid gap-2 p-4">
              {userData.files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between rounded-md border p-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <FileText className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{file.name}</div>
                      <div className="text-xs text-gray-500">{file.size}</div>
                    </div>
                  </div>
                  <Button size="sm" className="flex-shrink-0 ml-2">
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-sm text-gray-500">Powered by FileHub</footer>
    </div>
  )
}
