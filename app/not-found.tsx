import Link from "next/link"
import { FileText, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header without authentication */}
      <header className="border-b">
        <div className="container mx-auto max-w-7xl flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">FileHub</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 p-8">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}