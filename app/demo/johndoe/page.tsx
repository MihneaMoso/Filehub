import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, FileText, Github, Linkedin, Mail, Music, Twitter, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function JohnDoeDemoPage() {
  const files = [
    { id: 1, name: "Project Proposal.pdf", size: "2.4 MB", type: "document", date: "2023-05-12" },
    { id: 2, name: "Resume - 2023.pdf", size: "1.8 MB", type: "document", date: "2023-06-03" },
    { id: 3, name: "Portfolio.zip", size: "15.2 MB", type: "archive", date: "2023-04-28" },
    { id: 4, name: "Meeting Notes.docx", size: "0.5 MB", type: "document", date: "2023-05-30" },
    { id: 5, name: "Presentation.pptx", size: "8.7 MB", type: "document", date: "2023-06-10" },
    { id: 6, name: "Demo Track.mp3", size: "4.2 MB", type: "audio", date: "2023-06-15" },
    { id: 7, name: "Profile Photo.jpg", size: "1.1 MB", type: "image", date: "2023-06-08" },
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

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      {/* <header className="border-b">
        <div className="container mx-auto max-w-4xl flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to FileHub</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Demo Page</span>
            </div>
          </div>
        </div>
      </header> */}

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
          {/* Profile Section */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <User className="h-12 w-12" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold">John Doe</h1>
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

          {/* Files Section */}
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
                {files.map((file) => (
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
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="gap-2 flex-shrink-0">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
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
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto max-w-4xl flex h-16 items-center justify-center px-4 md:px-6">
          <div className="text-sm text-muted-foreground text-center">
            Powered by{" "}
            <Link href="/" className="font-medium text-foreground hover:underline">
              FileHub
            </Link>
            {" "}• Create your own file sharing page
          </div>
        </div>
      </footer>
    </div>
  )
}