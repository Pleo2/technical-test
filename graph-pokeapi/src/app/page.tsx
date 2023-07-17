'use client'
import useGetPoke from './hooks/useGetPoke'
import { fetchPoke } from './utils/fetch'

export default function Home() {
  const { poke, error, loading } = useGetPoke()
  return (
    <>
      <header className="flex h-[1vh] flex-col items-center justify-between p-24">
        
      </header>
      <main className="flex h-[75vh] flex-col items-center justify-between p-24"></main>
    </>
  )
}
