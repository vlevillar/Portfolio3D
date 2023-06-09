/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 brain.gltf --transform
Author: tkkjee ​🥀 (https://sketchfab.com/tkkjee)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/brain-3d-logo-693bd17e5772492c94d74d0a2351cbb8
Title: Brain 3D Logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/brain-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 3, 0]}>
        <group position={[0.01, 0.01, -0.02]} scale={0.89}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['blue_11.002']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['blue_11.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/brain-transformed.glb')
