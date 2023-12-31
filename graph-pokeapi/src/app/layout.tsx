import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PokeProvider } from './Contexts/PokeDataContext'

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
    <>
    <html lang="en" className='bg-[#d7dcdd]'>  
      <body className={`${inter.className} `}>
        <PokeProvider>
          {children}
        </PokeProvider>
      </body>
    </html>
    </>
  )
}
