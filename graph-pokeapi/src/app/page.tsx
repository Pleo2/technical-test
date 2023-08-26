'use client'

import Header from './Components/Header'
import { genRandomTree } from './utils/genRandomTree'
import useGetPoke from './hooks/useGetPoke'
import ForceGraph2D from 'react-force-graph-2d'
import { typesPokemon } from './utils/type'

export default function Home(): JSX.Element {
  const type = typesPokemon
  const { poke, error, loading } = useGetPoke()
  const names = poke?.map(p => p.name)
  return (
    <>
      <Header />
      <main className="flex h-auto w-full flex-col items-center">
        <ForceGraph2D
          width={window.innerWidth}
          height={window.innerHeight - 65}
          backgroundColor='white'
          graphData={genRandomTree({ reverse: false, names })}
          nodeAutoColorBy="group"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.name
            const fontSize = 17 / globalScale
            ctx.font = `${fontSize}px Trebuchet MS`
            const textWidth = ctx.measureText(label).width
            const bckgDimensions = [textWidth, fontSize].map(
              n => n + fontSize * 0.8,
            ) // some padding
            ctx.fillStyle = '#FFFFFF80'
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              ...bckgDimensions,
            )

            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillStyle = node.color
            ctx.fillText(label, node.x, node.y)

            node.__bckgDimensions = bckgDimensions // to re-use in nodePointerAreaPaint
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color
            const bckgDimensions = node.__bckgDimensions
            bckgDimensions &&
              ctx.fillRect(
                node.x - bckgDimensions[0] / 2,
                node.y - bckgDimensions[1] / 2,
                ...bckgDimensions,
              )
          }}
        />
      </main>
    </>
  )
}

