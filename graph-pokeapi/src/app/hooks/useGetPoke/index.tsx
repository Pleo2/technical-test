'use client'
import { useEffect, useState } from 'react'
import { fetchPoke } from '../../services/fetch'
import { type PokeState } from '../../utils/types'

const initialData = [{ id: 0, name: '', img: '', type: '' }]

export default function useGetPoke() {
  const [poke, setPoke] = useState<PokeState[]>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    fetchPoke()
      .then((res): void => {
        setPoke(res)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { poke, loading, error }
}
