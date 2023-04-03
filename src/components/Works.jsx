import React from 'react'
import styled from "styled-components";
import WebDesign from './WebDesign';
import ReactLogo from './React';
import Boot from './Boot';
import { useState } from 'react';
const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
]
const ListItem = styled.li`

  position: relative;

  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
          hight: 100%
        }
      }
    }
  }
`;

export default function Works() {
  const [work, setWork] = useState("Web Design")
  
  return (
    <div className=' md:h-screen snap-center relative'>
      <div className='md:w-[1400px] mx-auto md:h-screen md:flex items-center justify-between'>
            <div className='md:w-1/2 '>
                {data.map((item)=>(
                  <ul className='flex flex-col items-center gap-2.5'>
                    <ListItem onClick={()=> setWork(item)} className='text-3xl md:text-7xl my-1.5 font-bold cursor-pointer text-transparent [-webkit-text-stroke:1px_white] ListItem' key={item} text={item} >{item}</ListItem>
                  </ul>
                ))}
            </div>
            <div className='md:w-1/2 h-[250px] md:h-full '>
                {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<ReactLogo/>) : <Boot/>}
            </div>
        </div>
    </div>
  )
}
