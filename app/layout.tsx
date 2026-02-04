import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GitLaw UI - Component Library",
  description: "GitLaw UI Component Library - A collection of React components for legal document editing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Text:ital@0;1&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-page-background text-foreground">
        {children}
      </body>
    </html>
  )
}
