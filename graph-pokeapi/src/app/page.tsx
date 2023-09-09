'use client'

import Header from './Components/Header'
import useGetPoke from './hooks/useGetPoke'
<<<<<<< HEAD
import ForceGraph2D from 'react-force-graph-2d'
import { typesPokemon } from './utils/type'

export default function Home(): JSX.Element {
  const type = typesPokemon
=======
import ForceGraph2D from 'react-force-graph-2d';
import { fetchPoke } from './utils/fetch'

export default function Home(): JSX.Element {
>>>>>>> parent of 973d8b1... feat(Name-2D): :sparkles: add graph NAME 2D and style changes in the header
  const { poke, error, loading } = useGetPoke()
  return (
    <>
      <Header />
      <main className="flex h-[75vh] flex-col items-center justify-between p-24">
      </main>
    </>
  )
}

