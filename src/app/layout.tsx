import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salman Portfolio',
  description: 'Interactive portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}