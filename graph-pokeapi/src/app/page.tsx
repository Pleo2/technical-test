'use client'
import { useContext } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { LoadingSpiner } from './Components/Loading-spiner'
import { ErrorMessage } from './Components/Error-message'
import { TreeContext } from './Contexts/PokeDataContext'

export default function Home(): JSX.Element {
  const { error, loading, genData  } = useContext(TreeContext)
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-[#d7dcdd]">
        {error && !loading && <ErrorMessage/>}
        {loading && <LoadingSpiner />}
        {genData.nodes.length > 2 && !loading && (
          <ForceGraph2D
            width={screen.width}
            height={screen.height - screen.height * 0.2}
            backgroundColor="#d7dcdd"
            graphData={genData}
            nodeAutoColorBy="group"
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.name
              const fontSize = 14 / globalScale
              ctx.font = `${fontSize}px Sans-Serif`
              const textWidth = ctx.measureText(label).width
              const bckgDimensions = [textWidth, fontSize].map(
                n => n + fontSize * 0.8,
              ) // some padding

              ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
              ctx.fillRect(
                node?.x - bckgDimensions[0] / 2,
                node?.y - bckgDimensions[1] / 2,
                ...bckgDimensions,
              )

              ctx.textAlign = 'center'
              ctx.textBaseline = 'middle'
              ctx.fillStyle = node.typeColor
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
