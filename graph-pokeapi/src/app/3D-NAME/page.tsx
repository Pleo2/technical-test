'use client'
import Header from '../Components/Header'
import { useContext } from 'react'
import { TreeContext } from '../Contexts/PokeDataContext'
import ForceGraph3D from 'react-force-graph-3d'
import SpriteText from 'three-spritetext'
import { ErrorMessage } from '../Components/Error-message'
import { LoadingSpiner } from '../Components/Loading-spiner'


export default function Names3D(): JSX.Element {
  const { error, loading, genData  } = useContext(TreeContext)
  return (
      <>
        <main className="flex flex-col items-center justify-center bg-[#d7dcdd]">
          {error && !loading && <ErrorMessage />}
          {loading && <LoadingSpiner />}
          {genData.nodes.length > 2 && !loading && 
            <ForceGraph3D
            graphData={genData}
            height={screen.height - screen.height * 0.2}
            backgroundColor="#d7dcdd"
            linkWidth={2}
            nodeAutoColorBy="group"
            linkOpacity={1}
            linkCurvature={0.2}
            nodeOpacity={1}
            nodeThreeObject={node => {
              const sprite = new SpriteText(node.name);
              sprite.color = node.color;
              sprite.textHeight = 10;
              return sprite;
            }}
          />
          }
        </main>
      </>
  )
}
