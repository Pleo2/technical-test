'use client'
import Header from './Components/Header'
import useGetPoke from './hooks/useGetPoke'
import ForceGraph2D from 'react-force-graph-2d';
import { fetchPoke } from './utils/fetch'

export default function Home(): JSX.Element {
  const { poke, error, loading } = useGetPoke()
  return (
    <>
      <Header />
      <main className="flex h-[75vh] flex-col items-center justify-between p-24">
      </main>
    </>
  )
}

