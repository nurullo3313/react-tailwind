import React from 'react'

export default function About() {
  const info = [
    {text: "Years experience " , count : "04"},
    {text: "Completed Projects" , count : "10"},
    {text: "Companies Work" , count : "3"},

  ]
  return (
    <section id='about' className='py-10 text-white mt-6 text-center'> 
      <div className='md:ml-40' >
        <h3 className='text-4xl font-semibold'>About <span className='text-cyan-600'>Me</span></h3> 
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex md:flex-row  flex-col-reverse items-center md:gap-6 gap-12 max-w-6xl '>
          <div className='p-2'>
            <div className='text-gray-400 my-3 '>
              <p className='md:text-left text-justify w-11/12 m-auto'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores fugit nesciunt nobis natus, quas vel autem consectetur perspiciatis enim iure eaque facilis placeat atque cumque ea ipsam, commodi sed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis suscipit quasi earum, cum voluptatem reiciendis quas! 
              </p>
              <div className='flex mt-10 items-center gap-7 justify-center text-center'>
                {
                  info.map((e,i)=>(
                    <div key={i}>
                  <h3 className='md:text-4xl text-2xl font-bold text-white'>
                    {e.count}<span className='text-cyan-600'>+</span></h3>
                  <span className='md:text-base text-xs'>{e.text}</span>
                </div>
                  ))
                }
              </div>
              <br />
               <a href="./assets/CV Абдухоликов НУ.pdf" download>
               <button className='btn-primary'>Download CV</button>
               </a>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center'>
               <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12  max-w-sm '>
                  <img src="./assets/myPhoto.png" alt="" className='imgAbout w-full object-cover bg-cyan-600 rounded-xl relative' />
               </div>
          </div>
        </div>
      </div>

    </section>
  )
}
