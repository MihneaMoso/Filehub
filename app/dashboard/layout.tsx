import Link from "next/link"
import { FileText, Upload, Settings, User } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/20">
        <div className="flex h-full flex-col">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Manage your files and settings</p>
          </div>
          <nav className="flex-1 space-y-1 px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <FileText className="h-4 w-4" />
              My Files
            </Link>
            <Link
              href="/dashboard/upload"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Upload className="h-4 w-4" />
              Upload Files
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="p-4 border-t">
            <div className="rounded-lg bg-muted p-3">
              <h3 className="text-sm font-medium">Your Page</h3>
              <p className="text-xs text-muted-foreground mb-2">Share your files with this URL:</p>
              <code className="text-xs bg-background px-2 py-1 rounded border">
                filehub.com/username
              </code>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-6xl p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
