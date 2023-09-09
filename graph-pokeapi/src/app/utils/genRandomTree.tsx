'use client'

import { typesPokemonWithColor } from "./typesPokemonMock"

export function genRandomTree({
  reverse = false,
  poke,
}: {
  reverse: boolean
  poke: {
    name: string,
    id: number,
    type: string,
    img: string
  }[]
}): {
  nodes: { id: number; name: string }[]
  links: { [x: string]: number }[]
} {
  const N = poke?.length
  return {
    nodes: poke?.slice(0, N).map(({name, type, img}, index) => ({ id: index, name, type, typeColor: typesPokemonWithColor[type], img, group: type})),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  }
}


  // const genArr = (arrObj: any[]): string[] => {
  //   const newArr: string[] = []
  //   arrObj.map((item: { name: string }) => newArr.push(item.name))
  //   return newArr
  // }
  // const pokeArr = genArr(poke)
// export function genRandomTree({
//   reverse = false,
//   pokeArr,
// }: {
//   reverse: boolean
//   pokeArr: string[]
// }): {
//   nodes: { id: number; name: string }[]
//   links: { [x: string]: number }[]
// } {
//   const N = pokeArr?.length
//   return {
//     nodes: pokeArr?.slice(0, N).map((name, index) => ({ id: index, name, group: Math.round(Math.random() * (index - 1))})),
//     links: [...Array(N).keys()]
//       .filter(id => id)
//       .map(id => ({
//         [reverse ? 'target' : 'source']: id,
//         [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
//       })),
//   }
// }
