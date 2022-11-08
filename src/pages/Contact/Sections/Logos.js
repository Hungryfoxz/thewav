import React from 'react';
import ImageDarkOne from '../../Landing/images/dark/image16.svg';
import ImageDarkTwo from '../../Landing/images/dark/image17.svg';
import ImageDarkThree from '../../Landing/images/dark/image18.svg';
import ImageDarkFour from '../../Landing/images/dark/image19.svg';

const Logos = () => {
  return (
    <>
    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    {/* .............................................  Large Screen  .................................................. */}
    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    <main className='hidden md:block'>

    {/* ...Below the Hero section......  */}

        {/* Logos */}
        <div className='flex flex-col my-[5rem] lg:mx-[11.5rem] xl:mx-[15rem] md:mx-[6rem]'>

        <div className='flex flex-row justify-between my-4'>   {/* First row */}
          <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkThree} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
        </div>

        <div className='flex flex-row justify-between my-4'>     {/* Second row */}
          <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
          <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
        </div>

      </div>

    </main>

    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    {/* .............................................  Small Screen  .................................................. */}
    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
    <main className='md:hidden'>
    <div className='flex flex-col mt-14 mx-10 md:mx-20 pt-10 md:hidden'>

    <div className='flex flex-row justify-between my-4'>   {/* First row */}
    <img src={ImageDarkOne} alt="image16.png" className='h-8 '/>
    <img src={ImageDarkTwo} alt="image17.png" className='h-8 '/>
    <img src={ImageDarkThree} alt="image18.png" className='h-8 '/>
    </div>

    <div className='flex flex-row justify-between my-4'>     {/* Second row */}
    <img src={ImageDarkTwo} alt="image17.png" className='h-8 '/>
    <img src={ImageDarkOne} alt="image16.png" className='h-8 '/>
    <img src={ImageDarkFour} alt="image19.png" className='h-8 '/>
    </div>

    <div className='flex flex-row justify-between my-4'>     {/* Third row */}
    <img src={ImageDarkOne} alt="image16.png" className='h-8 '/>
    <img src={ImageDarkFour} alt="image19.png" className='h-8 '/>
    <img src={ImageDarkTwo} alt="image17.png" className='h-8 '/>
    </div>

    <div className='flex flex-row justify-between my-4'>     {/* Fourth row */}
    <img src={ImageDarkThree} alt="image18.png" className='h-8 '/>
    <img src={ImageDarkTwo} alt="image17.png" className='h-8 '/>
    <img src={ImageDarkOne} alt="image16.png" className='h-8 '/>
    </div>

    </div>
    </main>
    </>
  )
}

export default Logos