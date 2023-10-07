'use client'
import Header from '../Components/Header'
import * as THREE from 'three'
import ForceGraph3D from 'react-force-graph-3d'
import { useContext } from 'react'
import { TreeContext } from '../Contexts/PokeDataContext'
import { ErrorMessage } from '../Components/Error-message'
import { LoadingSpiner } from '../Components/Loading-spiner'

export default function ImagesPoke(): JSX.Element {
  const { error, loading, genData  } = useContext(TreeContext)
  return (
      <>
        <main className="flex flex-col items-center justify-center bg-[#d7dcdd]">
        {error && !loading && <ErrorMessage />}
        {loading && <LoadingSpiner />}
        {genData.nodes.length > 2 && !loading &&  <ForceGraph3D
          backgroundColor="#d7dcdd"
          linkWidth={2}
          nodeAutoColorBy="group"
          linkOpacity={1}
          linkCurvature={0.2}
          nodeOpacity={1}
          width={screen.width}
          height={screen.height - screen.height * 0.2}
          graphData={genData}
          nodeThreeObject={({ img }) => {
            const imgTexture = new THREE.TextureLoader().load(`${img}`);
            imgTexture.colorSpace = THREE.SRGBColorSpace;
            const material = new THREE.SpriteMaterial({ map: imgTexture });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(60, 60, 60);
            return sprite;
          }}
          />}
        </main>
      </>
  )
} 
