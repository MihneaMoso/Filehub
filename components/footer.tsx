"use client"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="mt-16 border-t pt-8 pb-8">
            <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
                <div className="text-sm text-muted-foreground">© 2025 FileHub. All rights reserved.</div>
                <div className="text-sm text-muted-foreground text-center">
                    Powered by{" "}
                    <Link href="/" className="font-medium text-foreground hover:underline">
                        FileHub
                    </Link>
                    {" "}• Create your own file sharing page
                </div>
                <nav className="flex gap-2 sm:gap-4 text-sm">
                    <Link href="#" className="text-muted-foreground hover:underline">
                        Terms
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline">
                        Privacy
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:underline">
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    )
}