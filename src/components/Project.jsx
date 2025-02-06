import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Основные стили Swiper
import 'swiper/css/navigation'; // Стили для кнопок навигации
import 'swiper/css/pagination'; // Стили для пагинации
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Project() {


  const myProjects = [
    {
      id :1 ,
      nameProject : "Burger Builder",
      img : "./assets/project-1.png",
      liveDemo : "https://frabjous-maamoul-0ba3d5.netlify.app",
      github : "#",

    },
    {
      id :2 ,
      nameProject : "Admin Dashboard",
      img : "./assets/project-2.png",
      liveDemo : "https://react-dashboard-nurullo.netlify.app/#/admin/dashboard",
      github : "#",

    },
    {
      id :3 ,
      nameProject : "Todo App",
      img : "./assets/project-3.png",
      liveDemo : "https://lively-crisp-dae873.netlify.app/",
      github : "#",

    },
    {
      id :1 ,
      nameProject : "Online Shop",
      img : "./assets/project-4.png",
      liveDemo : "https://singular-boba-d70fe4.netlify.app/",
      github : "#",

    },
  ]





  return (
    <section id="projects" className='py-10 text-white'>
      <div className='text-center'>
      <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Projects</span></h3>
      <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br />
      <div className=' block md:flex max-w-6xl px-5 mx-auto items-center relative justify-between'>
        <div className='lg:w-2/4 w-full '>
       <Swiper slidesPerView={1.3} spaceBetween={60} breakpoints={{ 768:{
        slidesPerView: 1.3,
       }}} loop={true} navigation={true} autoplay={{delay:3000}} pagination={{clickable:true}} modules={[Navigation, Pagination , Autoplay]} className='mySwiper'>
        {
          myProjects?.map((p,i)=>(
            <SwiperSlide key={i} className='cursor-pointer'>
          <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
            <img src={p.img} alt="" className='rounded-tr-xl rounded-tl-xl' />
            <p className='py-3 px-2 text-2xl font-bold'>{p.nameProject}</p>
            <div className='flex gap-3'>
              <a href={p.liveDemo} target='_blank' className='text-cyan-600 bg-gray-800 p-2 inline-block rounded-xl'>Live Demo</a>
              <a href="#"  className='text-cyan-600 bg-gray-800 p-2 inline-block rounded-xl'>GitHub</a>
            </div>
          </div>
        </SwiperSlide>
          ))
        }
       </Swiper>

        </div>

        <div className='w-2/6 md:block hidden'>
          <img src="./assets/myPhoto.png" alt="" width={300} height={400} className='rounded-3xl'/>
        </div>

      </div>
    </section>
  )
}
