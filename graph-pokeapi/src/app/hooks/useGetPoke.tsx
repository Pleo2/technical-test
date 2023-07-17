'use client'
import { useEffect, useState } from 'react'
import { fetchPoke } from '../utils/fetch'

export default function useGetPoke() {
  const [poke, setPoke] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetchPoke()
      .then(res => {
        setPoke(res)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { poke, loading, error }
}
