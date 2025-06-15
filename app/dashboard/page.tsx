import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, FileText, Github, Linkedin, Mail, Music, Twitter, User, Plus, Eye, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function DashboardPage() {
  const user = await currentUser()

  // Mock data - replace with real data from your database
  const files = [
    { id: 1, name: "Project Proposal.pdf", size: "2.4 MB", type: "document", date: "2023-05-12", downloads: 12 },
    { id: 2, name: "Resume - 2024.pdf", size: "1.8 MB", type: "document", date: "2023-06-03", downloads: 8 },
    { id: 3, name: "Portfolio.zip", size: "15.2 MB", type: "archive", date: "2023-04-28", downloads: 5 },
    { id: 4, name: "Meeting Notes.docx", size: "0.5 MB", type: "document", date: "2023-05-30", downloads: 3 },
    { id: 5, name: "Presentation.pptx", size: "8.7 MB", type: "document", date: "2023-06-10", downloads: 7 },
    { id: 6, name: "Demo Track.mp3", size: "4.2 MB", type: "audio", date: "2023-06-15", downloads: 2 },
    { id: 7, name: "Profile Photo.jpg", size: "1.1 MB", type: "image", date: "2023-06-08", downloads: 4 },
  ]

  const socialLinks = [
    { name: "Email", url: "mailto:john@example.com", icon: Mail, color: "bg-red-500" },
    { name: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: Linkedin, color: "bg-blue-600" },
    { name: "GitHub", url: "https://github.com/johndoe", icon: Github, color: "bg-gray-800 dark:bg-gray-700" },
    { name: "Twitter", url: "https://twitter.com/johndoe", icon: Twitter, color: "bg-blue-400" },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "audio":
        return <Music className="h-5 w-5 text-purple-500" />
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case "document":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "audio":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "image":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "archive":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  // Generate username from user data
  const username = user?.username || user?.firstName?.toLowerCase() || 'user'

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      {/* Dashboard Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your FileHub page</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/${username}`} target="_blank">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              View Public Page
            </Button>
          </Link>
          <Link href="/dashboard/upload">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Upload File
            </Button>
          </Link>
        </div>
      </div>

      {/* Profile Section - Matching Demo Style */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <User className="h-12 w-12" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold">{user?.firstName} {user?.lastName}</h1>
                <p className="text-lg text-muted-foreground">Full Stack Developer & Designer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Welcome to my personal file hub! Here you'll find my latest projects, documents, and creative work.
                  Feel free to download anything you need or get in touch through my social links below.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.name}
                      asChild
                      size="sm"
                      className={`${social.color} hover:opacity-90 text-white gap-2`}
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4" />
                        {social.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Files Section - Matching Demo Style */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            My Files
          </CardTitle>
          <CardDescription>
            Download my latest documents, projects, and creative work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {files.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No files uploaded yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start by uploading your first file to share with others
                </p>
                <Link href="/dashboard/upload">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Your First File
                  </Button>
                </Link>
              </div>
            ) : (
              files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {getFileIcon(file.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium truncate">{file.name}</span>
                        <Badge variant="secondary" className={`text-xs ${getFileTypeColor(file.type)}`}>
                          {file.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{file.size}</span>
                        <span>Added {file.date}</span>
                        <span>{file.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                    <Button variant="ghost" size="sm" title="Preview">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stats - Matching Demo Style */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{files.length}</div>
              <div className="text-sm text-muted-foreground">Total Files</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {files.filter(f => f.type === 'document').length}
              </div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {files.filter(f => f.type === 'audio').length}
              </div>
              <div className="text-sm text-muted-foreground">Audio Files</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">32.7 MB</div>
              <div className="text-sm text-muted-foreground">Total Size</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
