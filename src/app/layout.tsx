import "@/src/styles/globals.css"
import { Metadata } from "next"
import { SiteHeader } from "@/src/components/site-header"
import { ThemeProvider } from "@/src/components/theme-provider"
import { fontSans } from "@/src/lib/fonts"
import { cn } from "@/src/lib/utils"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  
  openGraph: {
    title: "Arham Mastery",
    description:
      "Arham Mastery, as described, is a five-year-experienced web developer with proficiency in HTML, CSS, JavaScript, and React. They also have a solid understanding of C++. Arham is passionate about creating user-friendly web interfaces and staying updated with the latest trends in web development. They are ready to tackle diverse development challenges, reflecting a strong commitment to continuous learning and problem-solving in the field of web development.",
    url: "https://www.arhammastery.dev/",
    siteName: "Arham Mastery",
    images: [
      {
        url: "https://www.arhammastery.dev/og.png",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon",
  },
  manifest: "https://www.arhammastery.dev/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Arham Mastery",
    description:
      "Arham Mastery, as described, is a five-year-experienced web developer with proficiency in HTML, CSS, JavaScript, and React. They also have a solid understanding of C++. Arham is passionate about creating user-friendly web interfaces and staying updated with the latest trends in web development. They are ready to tackle diverse development challenges, reflecting a strong commitment to continuous learning and problem-solving in the field of web development.",
    creator: "@arhammastery",
    images: ["https://www.arhammastery.dev/og.png"],
  },
  generator: "Arham Mastery",
  applicationName: "Arham Mastery",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ArhamMastery",
    "Arham Mastery",
    "Arhammastery",
    "arhammastery",
    "Syed Arham Raza",
    "Arham Raza",
    "SyedArhamRaza",
    "ArhamRaza",
  ],
  authors: [
    { name: "Syed Arham Raza" },
    { name: "ArhamMastery", url: "https://www.arhammastery.dev/" },
  ],
  creator: "Syed Arham Raza",
  publisher: "Syed Arham Raza",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
