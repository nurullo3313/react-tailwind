import React from 'react'



export default function Hero() {
  const local_meadia =["logo-instagram","logo-facebook","logo-linkedin","logo-twitter","logo-github"]
  return (
    <section id='home' className='min-h-screen flex py-10  md:flex-row flex-col items-center top-20 '>
      <div className='flex-1 items-center justify-center h-full mt-10' >
        <img src="./assets/myPhoto.png" alt="my photo" className='md:w-11/12 h-full object-cover'  />
      </div>
      <div className='flex-1'>
        <div>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span>
              Hello
              <br />
            </span>
            My name is <span className=''>Nurullo Abdukholiqov</span>
          </h1>
          <h4>Frontend Developer</h4>
          <button>Contact Me</button>
          <div>
              {local_meadia.map((icon,i)=>(
                <div key={i}>
                  <ion-icon key={i} name={icon} class=""></ion-icon>
                </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  )
}
