import React from 'react'

export default function Skills() {

  const skillsData = [
    {logo :"logo-html5", count :100, level:"Expert"},
    {logo :"logo-css3", count :100, level:"Expert"},
    {logo :"logo-react", count :55, level:"Intermediate "},
    {logo :"logo-nodejs", count :70, level:"Expert"},
  ]



  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold '>My <span className='text-cyan-600'>Skills</span></h3>
        <p className='text-gray-400 mt-3 text-lg' >My knowledge</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skillsData.map((e,i)=>(
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900   p-10 rounded-xl'>

            <div
              style={{ background: `conic-gradient(rgb(8,145,170)  ${e.count}%, #ddd ${e.count}% )` }}
              className="w-36 h-36 flex items-center justify-center rounded-full "
            >
              <div className="text-6xl w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center ">
                <ion-icon name={e.logo}></ion-icon>
              </div>
            </div>

            <p className='text-xl mt-3'>{e.level}</p>
          </div>
            ))
          }

        </div>
      </div>

    </section>
  )
}
