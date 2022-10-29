/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Armchair(props) {
  const { nodes, materials } = useGLTF('armchair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChairPart5.geometry}
        material={materials.KedeMat}
        scale={3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Untitled003.geometry}
        material={materials.ChairClothMat}
        scale={3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Untitled003_1.geometry}
        material={materials.ChairClothMatPipes}
        scale={3}
      />
    </group>
  )
}

useGLTF.preload('armchair.glb')
