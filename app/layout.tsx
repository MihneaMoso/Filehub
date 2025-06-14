import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { FileText } from "lucide-react"
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import "./globals.css"

export const metadata: Metadata = {
  title: "FileHub: Personal File Sharing Platform",
  description: "Create your own personalized page with all your important files and documents",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}