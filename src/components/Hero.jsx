import React from 'react'
import { OrbitControls, Sphere , MeshDistortMaterial} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className=' h-screen snap-center flex flex-col items-center'>
        <Navbar/>
        <div className='md:w-[1400px] h-screen block md:flex items-center justify-between'>
            <div className='md:w-2/5 flex flex-col px-10 md:px-0   gap-5'>
                <h2 className='pt-10 md:pt-0 text-3xl md:text-7xl '>Think. Make. Solve</h2>
                <div className='flex  items-center gap-2.5'>
                    <img className='h-[5px]' src="./img/line.png" alt="" />
                    <h2 className='text-pink-500'>What we Do</h2>
                </div>
                <p className='text-gray-400 text-lg '>We enjoy delightful, human-centered digital experiences.</p>
                <button className='w-[120px] font-thin rounded-md cursor-pointer bg-pink-500 p-2.5'>Learn More</button>
            </div>
            <div className='md:w-3/5 h-[400px]  md:h-full relative'>
                <Canvas >
                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3,2,1]} />
                    <Sphere args={[1,100,200]} scale={2.7}>
                    <    MeshDistortMaterial color={"#3d1c56"} attach="material" distort={0.5} speed={2}/>
                    </Sphere>
                </Canvas>
                <img className='md:w-[800px] md:h-[600px] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto astro' src="./img/moon5.png" alt="" />
            </div>
        </div>
    </div>
  )
}
