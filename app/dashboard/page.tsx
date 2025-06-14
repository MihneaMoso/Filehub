import { currentUser } from "@clerk/nextjs/server"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Eye, Download, Trash2, Plus } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const user = await currentUser()

  // Mock data - replace with real data from your database
  const files = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      downloads: 12,
    },
    {
      id: 2,
      name: "Resume - 2024.pdf",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      downloads: 8,
    },
  ]

  const stats = {
    totalFiles: files.length,
    totalDownloads: files.reduce((sum, file) => sum + file.downloads, 0),
    storageUsed: "19.4 MB",
    storageLimit: "1 GB",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.firstName || 'User'}!
          </h1>
          <p className="text-muted-foreground">
            Manage your files and track your sharing activity
          </p>
        </div>
        <Link href="/dashboard/upload">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Upload File
          </Button>
        </Link>
      </div>

      {/* Rest of your dashboard content remains the same */}
      {/* Stats Cards - Simplified */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Total Files</h3>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.totalFiles}</div>
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Total Downloads</h3>
            <Download className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.totalDownloads}</div>
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Storage Used</h3>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{stats.storageUsed}</div>
          <p className="text-xs text-muted-foreground">of {stats.storageLimit}</p>
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="text-sm font-medium">Page Views</h3>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">47</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </div>
      </div>

      {/* Files Section - Simplified */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Files</h3>
          <p className="text-sm text-muted-foreground mt-1.5">
            Manage and organize your uploaded files
          </p>
        </div>
        <div className="p-6 pt-0">
          {files.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No files uploaded yet</h3>
              <p className="text-muted-foreground mb-4">
                Start by uploading your first file to share with others
              </p>
              <Link href="/dashboard/upload">
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First File
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • Uploaded {file.uploadDate} • {file.downloads} downloads
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
