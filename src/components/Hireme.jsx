import React from 'react'

export default function Hireme() {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
      <div className='text-center md:text-center'>
        <h3 className='text-4xl font-semibold'>Hire <span className='text-cyan-600'>Me</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
        <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center justify-between'>
          <div className='md:text-left text-center '>
            <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
            <p className='max-w-lg text-sm mt-4 text-gray-200 leading-6 text-justify'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, saepe, alias autem, iusto delectus impedit numquam quae nesciunt blanditiis dolorem at totam quisquam dolorum animi mollitia vitae a libero itaque.
            </p>
            <button className=' btn-primary mt-3  '>Say Hello</button>
          </div>
        <img src="./assets/myPhoto.png" alt="" width={"200"} height={"80px"} className="rounded-3xl"/>
        </div>
      </div>
    </section>
  )
}
