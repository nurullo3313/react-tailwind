import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const memuLinks = 
  [
    {
      name:"Home",
      link : "#home"
    },
    {
      name:"About",
      link : "#about"
    },
    {
      name:"Skills",
      link : "#skills"
    },
    {
      name:"Projects",
      link : "#projects"
    },
    {
      name:"Contact",
      link : "#contact"
    },
  ]


  const [sticky , setSticky]= useState(false)



  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav = document.querySelector("nav")
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  })
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'md: bg-white/60 text-gray-900' : 'text-white'} `}>
        <div className='flex justify-between items-center'>
            <div className='mx-7'>
                <h4 className='text-3xl uppercase font-bold cursor-pointer'>N<span className='text-cyan-600'>uru</span>llo</h4>
            </div>
            <div className='text-gray-900 md:block hidden font-medium bg-white rounded-bl-full'>
              <ul className='flex items-center gap-1 py-2 text-lg'>
                {
                  memuLinks.map((e,i)=>(
                    <li key={i} className='px-6 hover:text-cyan-600 transition-1' >
                      <a href={e.link}>{e.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <h1 className='text-white md:hidden block px-2'>hello</h1>
        </div>
    </nav>
  )
}
