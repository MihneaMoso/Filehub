import type React from "react"
import type { Metadata } from "next"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
// import { Geist, Geist_Mono } from 'next/font/google'
// 
// const geistSans = Geist({
  // variable: '--font-geist-sans',
  // subsets: ['latin'],
// })
// 
// const geistMono = Geist_Mono({
  // variable: '--font-geist-mono',
  // subsets: ['latin'],
// })

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
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}