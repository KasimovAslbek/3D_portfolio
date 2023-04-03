import React , { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';


export default function Who() {
  return (
    <div className=' md:h-screen snap-center'>
        <div className='md:w-[1400px] mx-auto md:h-screen md:flex items-center justify-between'>
            <div className='hidden md:block md:w-1/2 h-full '>
                <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                    <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 2, 1]} />
                    <Cube />
                    <OrbitControls enableZoom={false} autoRotate />
                    </Suspense>
                </Canvas>
            </div>
            <div className='md:w-1/2 p-10 md:p-0 flex flex-col   gap-5'>
                <h2 className=' text-3xl md:text-7xl '>Think outside the squere space</h2>
                <div className='flex  items-center gap-2.5'>
                    <img className='h-[5px]' src="./img/line.png" alt="" />
                    <h2 className='text-pink-500'>Who we Are</h2>
                </div>
                <p className='text-gray-400 text-lg '>a creative group of designers and developers with a passion for the arts</p>
                <button className='w-[120px] font-thin rounded-md cursor-pointer bg-pink-500 p-2.5'>See our works</button>
            </div>
        </div>
    </div>
  )
}
