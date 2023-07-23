import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'poke-graph',
  description: 'technical test for poke-graph',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Pokebola-pokeball-png-0.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
