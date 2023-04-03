import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Screen from './Chair'

export default function WebDesign() {
  return (
    <>
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Screen/>
        </Stage>
        
        <OrbitControls enableZoom={false}>
        </OrbitControls>
    </Canvas>
    <p className='hidden md:block w-52 h-20 p-2 bg-white rounded absolute top-24 right-2 text-xs text-black font-thin'>We design products with a strong focus on both world class design and ensure your product is a market success.</p>
    </>
  )
}
