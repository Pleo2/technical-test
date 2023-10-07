'use client'
import { TypeGenTree } from '../Interfaces/TypeGenTree'
import { typesPokemonWithColor } from './typesPokemonMock'

export function genRandomTree({
  reverse = false,
  poke,
}: {
  reverse: boolean
  poke: {
    name: string
    id: number
    type: string
    img: string
  }[]
}): TypeGenTree {
  const N = poke?.length
  return {
    nodes: poke?.slice(0, N).map(({ name, type, img }, index) => ({
      id: index,
      name,
      type,
      typeColor: typesPokemonWithColor[type],
      img,
      group: type,
    })),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  }
}
