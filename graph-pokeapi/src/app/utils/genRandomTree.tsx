'use client'
export function genRandomTree({
  reverse = false,
  names,
}: {
  reverse: boolean
  names: string[]
}): {
  nodes: { id: number; name: string }[]
  links: { [x: string]: number }[]
} {
  const N = names.length
  console.log(names)
  return {
    nodes: names?.slice(0, N).map((name, id) => ({ id, name, group: Math.round(Math.random() * (id - 1))})),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  }
}
