"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, FileText, Plus, Trash2, Upload } from "lucide-react"
import { useUser, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"

export default function DashboardPage() {
  const { user } = useUser()
  const [files, setFiles] = useState([
    { id: 1, name: "Project Proposal.pdf", size: "2.4 MB", date: "2023-05-12" },
    { id: 2, name: "Resume - 2023.pdf", size: "1.8 MB", date: "2023-06-03" },
    { id: 3, name: "Portfolio.zip", size: "15.2 MB", date: "2023-04-28" },
    { id: 4, name: "Meeting Notes.docx", size: "0.5 MB", date: "2023-05-30" },
    { id: 5, name: "Presentation.pptx", size: "8.7 MB", date: "2023-06-10" },
  ])

  const handleDelete = (id: number) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const username = user?.username || user?.firstName?.toLowerCase() || "user"
  const displayName = user?.fullName || user?.firstName || "User"

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">FileHub</span>
          </Link>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {displayName}!</h1>
              <p className="text-gray-500">Manage your files and profile</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 rounded-md border bg-gray-50 px-3 py-1 text-xs sm:text-sm">
                <span className="font-medium">Your URL:</span>
                <span className="text-gray-500 truncate">{username}.filehub.com</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => navigator.clipboard.writeText(`${username}.filehub.com`)}
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy URL</span>
                </Button>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link href={`/${username}`}>View Page</Link>
              </Button>
            </div>
          </div>
          <Tabs defaultValue="files">
            <TabsList className="mb-6">
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="files" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Files</CardTitle>
                  <CardDescription>
                    Upload files to your personal page. Supported formats: PDF, DOCX, XLSX, ZIP, JPG, PNG
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FileUploader />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Your Files</CardTitle>
                  <CardDescription>Manage the files on your personal page</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border overflow-x-auto">
                    <div className="grid grid-cols-12 border-b bg-gray-50 p-3 text-sm font-medium min-w-[600px]">
                      <div className="col-span-6">Name</div>
                      <div className="col-span-2">Size</div>
                      <div className="col-span-3">Date Added</div>
                      <div className="col-span-1"></div>
                    </div>
                    {files.length > 0 ? (
                      files.map((file) => (
                        <div
                          key={file.id}
                          className="grid grid-cols-12 items-center border-b p-3 text-sm last:border-0 min-w-[600px]"
                        >
                          <div className="col-span-6 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            <span className="truncate">{file.name}</span>
                          </div>
                          <div className="col-span-2">{file.size}</div>
                          <div className="col-span-3">{file.date}</div>
                          <div className="col-span-1 text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(file.id)}>
                              <Trash2 className="h-4 w-4 text-gray-500" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">
                        <div className="mb-2 flex justify-center">
                          <Upload className="h-8 w-8" />
                        </div>
                        <p>No files uploaded yet</p>
                        <p className="text-sm">Upload files to get started</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-500">
                    {files.length} {files.length === 1 ? "file" : "files"}
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Upload More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Your profile information is managed by Clerk</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Display Name</Label>
                    <Input value={displayName} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value={user?.primaryEmailAddress?.emailAddress || ""} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <div className="flex items-center gap-2">
                      <Input value={username} disabled />
                      <span className="text-sm text-gray-500">.filehub.com</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    To update your profile information, use the user menu in the top right corner.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Page Settings</CardTitle>
                  <CardDescription>Customize how your page looks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="page-title">Page Title</Label>
                    <Input id="page-title" defaultValue={`${displayName}'s Files`} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="page-description">Page Description</Label>
                    <Input id="page-description" defaultValue="Access my important files and documents" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
