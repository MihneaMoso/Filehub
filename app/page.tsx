import Link from "next/link"
import { ArrowRight, FileText, Upload, User } from "lucide-react"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">FileHub</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <SignedOut>
              <SignInButton>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Your personal file sharing hub
                  </h1>
                  <p className="max-w-[600px] text-gray-500 text-lg md:text-xl lg:text-xl dark:text-gray-400">
                    Create your own personalized page with all your important files and documents. Share with a unique
                    URL.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <SignedOut>
                    <SignUpButton>
                      <Button size="lg" className="gap-2 w-full sm:w-auto">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button size="lg" className="gap-2 w-full sm:w-auto">
                        Go to Dashboard
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </SignedIn>
                  <Link href="/demo/johndoe">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] rounded-lg border bg-background p-4 shadow-lg">
                  <div className="mb-4 flex items-center gap-2 border-b pb-2">
                    <User className="h-8 w-8 rounded-full bg-gray-100 p-1" />
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-xs text-gray-500">johndoe.filehub.com</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {[
                      "Project Proposal.pdf",
                      "Resume - 2023.pdf",
                      "Portfolio.zip",
                      "Meeting Notes.docx",
                      "Presentation.pptx",
                    ].map((file, i) => (
                      <div key={i} className="flex items-center justify-between rounded-md border p-3 hover:bg-gray-50">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          <span className="text-sm truncate">{file}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="flex-shrink-0">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-50 py-12 dark:bg-gray-900 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-xl dark:text-gray-400">
                  Create your own file sharing page in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <User className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Create an account</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sign up for a free account and get your own unique subdomain
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Upload className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Upload your files</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Upload and organize your important files and documents
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Share your page</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Share your unique URL with anyone who needs access to your files
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="text-sm text-gray-500">© 2023 FileHub. All rights reserved.</div>
          <nav className="flex gap-2 sm:gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
