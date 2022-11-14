import React from 'react';
import Navbar from '../../../reusable/Navbar/Navbar.js';
import Styles from './Hero.module.css';
import Arrow from '../images/arrow.svg';
import Arrow02 from '../images/arrow02.svg';


export const Hero = () => {


  return (
    <>
    {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/* ........................................................... For large Screen .............................................................. */}
    {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <main className='bg-[#080816] h-[100vh]  box-border relative hidden md:block'>
        <div className={Styles.gradient}></div>
        
        {/* .......... Navbar Import  .......... */}
        <Navbar/>


        {/* Main Hero content.. */}
      <div className='pt-[11rem] flex flex-col justify-center items-center'>

        <div className='px-12'>
        <h1 className='text-4xl md:text-[3.3rem] leading-[1.25rem] font-medium md:font-semibold text-white mb-4 text-center pb-2'>Grow your business today, right now.</h1>
        </div>

        <div className='px-6 md:px-48 pt-[1rem]'>
        <p className='text-base md:text-lg text-white leading-tight md:leading-normal text-center lg:px-44 xl:px-72 font-[20] md:font-light md:text-[0.95rem]'>The growth squad behind some of the world's most successful brands.If you want the best growth,you're at the right place.</p>
        </div>

        {/* Button for large screen only .*/}
        <div className='mt-[8.2rem] z-10'>
            <button className='bg-[#0049FA] text-white rounded-sm px-[2.4rem] py-4 font-normal text-[1.5rem] flex flex-row items-center justify-center'>
            Get in Touch
            <svg className='ml-2' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.30318 0.118644L6.63317 0.719774C6.46566 0.877966 6.46566 1.13107 6.63317 1.25763L11.8258 6.16158H0.40201C0.167504 6.16158 0 6.35141 0 6.54124V7.42712C0 7.64859 0.167504 7.80678 0.40201 7.80678H11.8258L6.63317 12.7424C6.46566 12.8689 6.46566 13.122 6.63317 13.2802L7.30318 13.8814C7.43719 14.0395 7.70519 14.0395 7.8727 13.8814L14.8744 7.26893C15.0419 7.11073 15.0419 6.88927 14.8744 6.73107L7.8727 0.118644C7.70519 -0.039548 7.43719 -0.039548 7.30318 0.118644Z" fill="white"/>
            </svg>
            </button>
        </div>

        </div>
        <div className='lg:h-[32%] xl:h-[35%] md:h-[28%] relative'>
            {/* Arrow 06 from figma file....The left arrow.. */}
            <img className='absolute h-[2.4rem] w-[3.2rem] bottom-[.2rem] left-[7rem]' src={Arrow} alt="Arrow at the left" />
            {/* Arrow 05 from figma file....The second left arrow.. */}
            <img className='absolute h-[2.6rem] w-[3.6rem] -top-[.5rem] left-[21%]' src={Arrow} alt="Arrow at the left" />
            {/* Arrow 03 from figma file....The center left arrow.. */}
            <img className='absolute h-[2.2rem] w-[3rem] bottom-[1.4rem] left-[40%]' src={Arrow} alt="Arrow at the left" />
            {/* Arrow 02 from figma file....The center right arrow.. */}
            <img className='absolute h-[1.5rem] w-[2.2rem] bottom-[4rem] left-[58%]' src={Arrow02} alt="Arrow at the left" />
            {/* Arrow 06 from figma file....The second right arrow.. */}
            <img className='absolute h-[2.4rem] w-[3.4rem] -top-[2.7rem] right-[19%]' src={Arrow} alt="Arrow at the left" />
            {/* Arrow 04 from figma file....The right most arrow.. */}
            <img className='absolute h-[4rem] w-[4.6rem] bottom-[.1rem] right-[10%]' src={Arrow} alt="Arrow at the left" />
        </div>

    </main>


        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* .......................................................... For Small Screen ................................................... */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Main Hero content.. */}

        <main className='bg-[#080816] h-[60vh] w-[100vw] box-border relative md:hidden overflow-hidden'>
          <div className={Styles.gradient}></div>
          
          {/* .......... Navbar Import  .......... */}
          <Navbar/>


          {/* Main Hero content.. */}
        <div className='pt-[8.4rem] flex flex-col justify-center items-center'>

          <div className='px-12'>
          <h1 className='text-3xl font-semibold text-white text-center'>Grow your business today, right now.</h1>
          </div>

          <div className='px-6 md:px-48 pt-[1.8rem]'>
          <p className='text-base md:text-lg text-white leading-tight md:leading-normal text-center lg:px-44 xl:px-72 font-[20] md:font-light md:text-[0.95rem]'>The growth squad behind some of the world's most successful brands.If you want the best growth,you're at the right place.</p>
          </div>

          {/* Button for small screen only .*/}
          <div className='mt-[4rem] z-10'>
              <button className='bg-[#0049FA] text-white rounded-sm px-[1.6rem] py-3 font-normal text-[1rem] flex flex-row items-center justify-center'>
              Get in Touch
              <svg className='ml-2' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.30318 0.118644L6.63317 0.719774C6.46566 0.877966 6.46566 1.13107 6.63317 1.25763L11.8258 6.16158H0.40201C0.167504 6.16158 0 6.35141 0 6.54124V7.42712C0 7.64859 0.167504 7.80678 0.40201 7.80678H11.8258L6.63317 12.7424C6.46566 12.8689 6.46566 13.122 6.63317 13.2802L7.30318 13.8814C7.43719 14.0395 7.70519 14.0395 7.8727 13.8814L14.8744 7.26893C15.0419 7.11073 15.0419 6.88927 14.8744 6.73107L7.8727 0.118644C7.70519 -0.039548 7.43719 -0.039548 7.30318 0.118644Z" fill="white"/>
              </svg>
              </button>
          </div>

          </div>
          <div className='h-[20%] relative'>
              {/* Arrow 06 from figma file....The left arrow.. */}
              <img className='absolute h-[3.4rem] w-[4.2rem] -bottom-[.2rem] left-[1rem]' src={Arrow} alt="Arrow at the left" />
              {/* Arrow 05 from figma file....The second left arrow.. */}
              <img className='absolute h-[3.6rem] w-[4.6rem] -top-[2.3rem] left-[12%]' src={Arrow} alt="Arrow at the left" />
              {/* Arrow 03 from figma file....The center left arrow.. */}
              <img className='absolute h-[3.2rem] w-[4rem] bottom-[1.4rem] left-[35%]' src={Arrow} alt="Arrow at the left" />
              {/* Arrow 02 from figma file....The center right arrow.. */}
              <img className='absolute h-[2.2rem] w-[3rem] bottom-[5.5rem] left-[54%]' src={Arrow02} alt="Arrow at the left" />
              {/* Arrow 06 from figma file....The second right arrow.. */}
              <img className='absolute h-[3.4rem] w-[4.4rem] -top-[4rem] right-[9%]' src={Arrow} alt="Arrow at the left" />
              {/* Arrow 04 from figma file....The right most arrow.. */}
              <img className='absolute h-[5rem] w-[5.6rem] -bottom-[1.5rem] right-[3%]' src={Arrow} alt="Arrow at the left" />
          </div>

    </main>
    </>
  )
}
