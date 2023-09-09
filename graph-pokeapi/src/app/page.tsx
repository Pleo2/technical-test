'use client'
import Header from './Components/Header'
import { genRandomTree } from './utils/genRandomTree'
import useGetPoke from './hooks/useGetPoke'
import ForceGraph2D from 'react-force-graph-2d'
import { PokeState } from './utils/types'
import { mocks } from './utils/mocks'

export default function Home(): JSX.Element {
  const { poke, error, loading } = useGetPoke()
  const genArr = (arrObj: any[]): string[] => {
    const newArr: string[] = []
    arrObj.map((item: { name: string }) => newArr.push(item.name))
    return newArr
  }
  const pokeArr = genArr(poke)

  console.log(genRandomTree({ reverse: false, pokeArr }))
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-white">
        {poke.length > 0 && (
            <ForceGraph2D
              width={screen.width}
              height={screen.height - screen.height * 0.2}
              backgroundColor='#d7dcdd'
              graphData={genRandomTree({ reverse: false, pokeArr })}
              nodeAutoColorBy="group"
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name
                const fontSize = 14 / globalScale
                ctx.font = `${fontSize}px Sans-Serif`
                const textWidth = ctx.measureText(label).width
                const bckgDimensions = [textWidth, fontSize].map(
                  n => n + fontSize * 0.8,
                ) // some padding

                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
                ctx.fillRect(
                  node.x - bckgDimensions[0] / 2,
                  node.y - bckgDimensions[1] / 2,
                  ...bckgDimensions,
                )

                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = node.color
                ctx.fillText(label, node?.x, node?.y)

                node.__bckgDimensions = bckgDimensions // to re-use in nodePointerAreaPaint
              }}
              nodePointerAreaPaint={(node, color, ctx) => {
                ctx.fillStyle = color
                const bckgDimensions = node.__bckgDimensions
                bckgDimensions &&
                  ctx.fillRect(
                    node?.x - bckgDimensions[0] / 2,
                    node?.y - bckgDimensions[1] / 2,
                    ...bckgDimensions,
                  )
              }}
            />
        )}
      </main>
    </>
  )
}
