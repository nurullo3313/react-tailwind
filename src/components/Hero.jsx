import React from 'react'


 
export default function Hero() {
  const local_meadia =["logo-instagram","logo-facebook","logo-linkedin","logo-twitter","logo-github"]
  return (
    <section id='home' className='min-h-screen flex md:ml-32 pt-10 md:justify-center   md:flex-row flex-col items-center top-20 '>
      <div className='flex-1 items-center justify-center h-full mt-10' >
        <img src="./assets/myPhoto.png" alt="my photo" className='md:w-11/12 h-full object-cover'  />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center mt-10'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello!!
              <br />
            </span>
            My name is <span className=''>Nurullo Abdukholiqov</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Frontend Developer</h4>
          <button className='btn-primary mt-6'>Contact Me</button>
          <div className='mt-8 text-3xl flex justify-center md:justify-start items-center gap-5'>
              {local_meadia.map((icon,i)=>(
                <div key={i} className='text-gray-600 hover:text-white cursor-pointer gap-5'>
                  <ion-icon key={i} name={icon} ></ion-icon>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  )
}
