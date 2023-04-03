import React, {useRef} from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import {  useFrame } from '@react-three/fiber'


export default function Cube() {
    const textRef = useRef()
    useFrame(
        (state) =>
          (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
      );
  return (
    <mesh scale={[1.7, 1.7, 1.7]}>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}


