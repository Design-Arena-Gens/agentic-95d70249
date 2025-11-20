import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cinematic Morning Routine',
  description: 'A peaceful aesthetic morning routine in 4K cinematic quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
