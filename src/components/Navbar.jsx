import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const memuLinks =
    [
      {
        name: "Home",
        link: "#home"
      },
      {
        name: "About",
        link: "#about"
      },
      {
        name: "Skills",
        link: "#skills"
      },
      {
        name: "Projects",
        link: "#projects"
      },
      {
        name: "Contact",
        link: "#contact"
      },
    ]


  const [sticky, setSticky] = useState(false)
  const [onpenNav, setOpenNav] = useState(false)



  useEffect(() => {
    window.addEventListener("scroll", () => {

      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  })
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'bg-white/60 text-gray-900' : 'text-white'} `}>
      <div className='flex justify-between items-center'>
        <div className='mx-7'>
          <h4 className='text-3xl uppercase font-bold cursor-pointer'>N<span className='text-cyan-600'>uru</span>llo</h4>
        </div>
        <div className={`${sticky ? "md: bg-white " : "bg-white"} text-gray-900 md:block hidden font-medium rounded-bl-full px-7 py-2`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {
              memuLinks.map((e, i) => (
                <li key={i} className='px-6 hover:text-cyan-600 transition-1' >
                  <a href={e.link}>{e.name}</a>
                </li>
              ))
            }
          </ul>
        </div>


        <div className={`z-[998] ${onpenNav ? "text-gray-800" : "text-gray-100"}  md:hidden  text-3xl m-5 cursor-pointer`} onClick={() => setOpenNav(prev => !prev)} >
          <ion-icon name={`${onpenNav ? "close-outline" : "menu"}`}></ion-icon>

        </div>

        <div className={`md:hidden text-gray-900 absolute w2/3  h-screen px-7 py-2 font-medium bg-white top-0 ${onpenNav ? "right-0" : "right-[-100%]"} duration-300`}>
          <ul className='flex flex-col justify-center h-full gap-10 text-lg'>

            {memuLinks.map((e, i) => (
              <li key={i} className='px-6 hover:text-cyan-600'>
                <a href={e.link}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
