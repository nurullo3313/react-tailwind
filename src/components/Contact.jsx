import React from 'react'

export default function Contact() {

  const contactInfo =[
    {
      id :1 ,
      name : "nurullo783313@gmail.com",
      icon : "mail"
    },
    {
      id :2 ,
      name : "nurullo33l3",
      icon : "call-outline"
    },
    {
      id :3 ,
      name : "+992918783313",
      icon : "logo-whatsapp"
    }
  ]
  return (
    <section id='contact' className='py-10 px-3 text-white'>

      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
        <div className='mt-16 text-center flex md:flex-row flex-col gap-6 max-w-6xl m-auto bg-gray-800 p-6 rounded-xl'>
          <form className='flex flex-col flex-1 gap-5'>
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='Your Email Address' />
            <textarea placeholder='Your message' rows={10}></textarea>
            <button className='btn-primary w-fit'>Send Message</button>

          </form>
          <div className='flex flex-col gap-5'>
            {
              contactInfo.map((e,i)=>(
                <div className='flex  w-fit items-center' key={i}>
              <div className='min-w-[3rem] min-h-[3rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full p-2'>
                <ion-icon name={e.icon}></ion-icon>
              </div>
              <p>{e.name}</p>
            </div>
              ))
            }
            
            
            
          </div>
        </div>


      </div>

    </section>
  )
}
