import React from 'react'

export default function Navbar() {
  return (
    <div className='md:w-[850px] lg:w-[1400px] md:px-2.5 h-fit  flex gap-24 md:justify-between items-center'>
        <div className='flex items-center gap-12'>
            <img className='h-11 md:h-16 ' src="./img/logo-removebg-preview.png" alt="" />
            <ul className='hidden md:flex gap-5 text-lg'>
                <li className='cursor-pointer'>Studio</li>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Works</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <img className='w-5 h-5 cursor-pointer' src="./img/search.png" alt="" />
            <button className='w-24 h-8 flex items-center justify-center rounded-md cursor-pointer bg-pink-500 p-2.5'>Hire Now</button>
        </div>
    </div>
  )
}
