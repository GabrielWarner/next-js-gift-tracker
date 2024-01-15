import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gift Tracker',
  description: 'Track Gifts for all Friends and Family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* TODO: CREATE SIDENAV */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
