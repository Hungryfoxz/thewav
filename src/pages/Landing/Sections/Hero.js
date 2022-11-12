import React from 'react'
import styles from './Hero.module.css';
import Navbar from '../../../reusable/Navbar/Navbar.js'

import ImageOne from '../images/light/image16.svg';
import ImageTwo from '../images/light/image17.svg';
import ImageThree from '../images/light/image18.svg';
import ImageFour from '../images/light/image19.svg';
import ImageFive from '../images/light/image20.svg';
import ImageSix from '../images/light/image21.svg';
import ImageDarkOne from '../images/dark/image16.svg';
import ImageDarkTwo from '../images/dark/image17.svg';
import ImageDarkThree from '../images/dark/image18.svg';
import ImageDarkFour from '../images/dark/image19.svg';
import ImageUnacademy from '../images/unacademyImg.svg';
import CustomerImage from '../images/customer.png';
// import GetInTouch from '../../../reusable/Buttons/GetInTouch';


const Hero = () => {

  return (
    <>
    {/* ##############################################  This is the hero section of the Landing Page ...################################## */}
    

    {/* //////////////// This is the dark section  ////////////////////// */}
    <div className='bg-[#080816] md:h-[100vh] h-[100vh] -z-10 relative overflow-hidden'>
      <div className={styles.gradient}></div>
      {/* <div className='absolute hidden md:block top-[30.3vh] z-[1000] left-[3rem] cursor-pointer'>
        <GetInTouch/>
      </div> */}

      {/* Navbar */}
      <Navbar/>
      {/* Navbar ends */}

      {/* Main Hero content.. */}
      <div className='pt-20 flex flex-col justify-center items-center'>

        <div className='px-12 mt-5'>
          <h1 className='text-4xl md:text-5xl font-medium md:font-semibold text-white mb-4 text-center pb-1'>We help startups become brands</h1>
        </div>

        <div className='px-6 md:px-48'>
          <p className='text-base md:text-sm text-white leading-tight md:leading-normal text-center lg:px-44 xl:px-72 font-[20] md:font-light lg:text-[1rem]'>The growth squad behind some of the world's most successful brands.If you want the best growth,you're at the right place.</p>
        </div>

      {/* Button for small screen only .*/}
      <div className='lg:hidden mt-10'>

        <button className='bg-[#0049FA] text-white rounded px-7 py-3 font-normal text-base flex flex-row items-center justify-center cursor-pointer'>
          <svg className='ml-2 hidden hover:block' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30318 0.118644L6.63317 0.719774C6.46566 0.877966 6.46566 1.13107 6.63317 1.25763L11.8258 6.16158H0.40201C0.167504 6.16158 0 6.35141 0 6.54124V7.42712C0 7.64859 0.167504 7.80678 0.40201 7.80678H11.8258L6.63317 12.7424C6.46566 12.8689 6.46566 13.122 6.63317 13.2802L7.30318 13.8814C7.43719 14.0395 7.70519 14.0395 7.8727 13.8814L14.8744 7.26893C15.0419 7.11073 15.0419 6.88927 14.8744 6.73107L7.8727 0.118644C7.70519 -0.039548 7.43719 -0.039548 7.30318 0.118644Z" fill="white"/>
          </svg>
            Get in Touch
          <svg className='ml-2 hover:opacity-0' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30318 0.118644L6.63317 0.719774C6.46566 0.877966 6.46566 1.13107 6.63317 1.25763L11.8258 6.16158H0.40201C0.167504 6.16158 0 6.35141 0 6.54124V7.42712C0 7.64859 0.167504 7.80678 0.40201 7.80678H11.8258L6.63317 12.7424C6.46566 12.8689 6.46566 13.122 6.63317 13.2802L7.30318 13.8814C7.43719 14.0395 7.70519 14.0395 7.8727 13.8814L14.8744 7.26893C15.0419 7.11073 15.0419 6.88927 14.8744 6.73107L7.8727 0.118644C7.70519 -0.039548 7.43719 -0.039548 7.30318 0.118644Z" fill="white"/>
          </svg>
          </button>
      </div>

      {/* ######################################################################################################################################################### */}
      {/*  ____________________________________________________             Arrows           ________________________________________________________________  */}
      {/* ........................................................................................................................................................... */}
      <div className='relative box-border'>
        {/* Arrow-01 :: (the big arrow) */}
        <div className='mt-[4rem]'>
          <svg className='z-[100]' width="270" height="440" viewBox="0 0 299 622" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.857 2.75872C148.006 1.41924 150.078 1.41924 151.227 2.75872L295.874 171.378C297.476 173.245 296.15 176.132 293.689 176.132L224.413 176.132C221.233 176.132 218.654 178.71 218.654 181.89L218.654 617.048C218.654 618.638 217.365 619.927 215.775 619.927L82.3091 619.927C80.7189 619.927 79.4298 618.638 79.4298 617.048L79.4298 181.89C79.4298 178.71 76.8516 176.132 73.6712 176.132L4.39522 176.132C1.93474 176.132 0.607848 173.245 2.20984 171.378L146.857 2.75872Z" fill="url(#paint0_linear_700_954)" stroke="url(#paint1_linear_700_954)" strokeWidth="2.87929"/>
            <defs>
            <linearGradient id="paint0_linear_700_954" x1="149.042" y1="-1.99995" x2="149.042" y2="434.213" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000044"/>
            <stop offset="0.828548" stopColor="#080816"/>
            </linearGradient>
            <linearGradient id="paint1_linear_700_954" x1="149.042" y1="-1.99994" x2="149.042" y2="477.402" gradientUnits="userSpaceOnUse">
            <stop stopColor="#004AFF"/>
            <stop offset="0.865776" stopColor="#080816"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Arrow-04  :: (the right top arrow) */}
        <div className='absolute top-[1.3rem] right-[4.2rem]'>
          <svg className='-z-10' width="56" height="70" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M29.6296 1.15279C29.8281 0.933951 30.172 0.933951 30.3704 1.15278L59.1137 32.8502C59.4051 33.1716 59.1771 33.6861 58.7433 33.6861L45.2988 33.6861C44.4703 33.6861 43.7988 34.3577 43.7988 35.1861L43.7988 73C43.7988 73.2761 43.5749 73.5 43.2988 73.5L16.7012 73.5C16.4251 73.5 16.2012 73.2761 16.2012 73L16.2012 35.1861C16.2012 34.3577 15.5297 33.6861 14.7012 33.6861L1.25672 33.6861C0.822946 33.6861 0.594946 33.1716 0.886329 32.8502L29.6296 1.15279Z" stroke="#0049FA"/>
          </svg>
        </div>
        {/* Arrow-05  :: (the left top arrow) */}
        <div className='absolute top-[8.5rem] left-[1rem]'>
        <svg className='-z-10' width="48" height="50" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M21.6263 1.17284C21.8252 0.949126 22.1748 0.949126 22.3737 1.17284L43.1466 24.5383C43.4332 24.8608 43.2043 25.3706 42.7729 25.3706L33.6088 25.3706C32.7803 25.3706 32.1088 26.0421 32.1088 26.8706L32.1088 55C32.1088 55.2761 31.8849 55.5 31.6088 55.5L12.3912 55.5C12.1151 55.5 11.8912 55.2761 11.8912 55L11.8912 26.8706C11.8912 26.0421 11.2197 25.3706 10.3912 25.3706L1.2271 25.3706C0.795653 25.3706 0.566756 24.8608 0.853421 24.5384L21.6263 1.17284Z" stroke="#0049FA"/>
        </svg>
        </div>
        {/* Arrow-06  :: (the right center arrow) */}
        <div className='absolute top-[9.85rem] right-[1.2rem]'>
        <svg width="38" height="49" viewBox="0 0 38 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M18.6253 1.17926C18.8243 0.954002 19.1757 0.954005 19.3747 1.17926L37.1568 21.3057C37.442 21.6285 37.2128 22.1367 36.7821 22.1367L29.225 22.1367C28.3966 22.1367 27.725 22.8083 27.725 23.6367L27.725 48C27.725 48.2761 27.5011 48.5 27.225 48.5L10.775 48.5C10.4989 48.5 10.275 48.2761 10.275 48L10.275 23.6367C10.275 22.8083 9.60342 22.1367 8.775 22.1367L1.21791 22.1367C0.787201 22.1367 0.558029 21.6285 0.843212 21.3057L18.6253 1.17926Z" stroke="#0049FA"/>
        </svg>
        </div>
        {/* Arrow-03  :: (the bottom left arrow) */}
        <div className='absolute top-64 lg:top-[18.5rem] left-[3.5rem]'>
        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M16.6257 1.17691C16.8246 0.95222 17.1754 0.95222 17.3743 1.17692L33.1531 18.9954C33.4388 19.3181 33.2097 19.8269 32.7788 19.8269L26.3025 19.8269C25.4741 19.8269 24.8025 20.4984 24.8025 21.3269L24.8025 43C24.8025 43.2761 24.5786 43.5 24.3025 43.5L9.6975 43.5C9.42135 43.5 9.1975 43.2761 9.1975 43L9.1975 21.3269C9.1975 20.4984 8.52593 19.8269 7.6975 19.8269L1.22125 19.8269C0.790274 19.8269 0.5612 19.3181 0.846923 18.9954L16.6257 1.17691Z" stroke="#0049FA"/>
        </svg>
        </div>
        {/* Arrow-02  :: (the right buttom arrow) */}
        <div className='absolute top-64 lg:top-[17.5rem] right-[3.3rem]'>
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M10.622 1.20042C10.8214 0.970132 11.1786 0.970132 11.378 1.20041L21.1894 12.5319C21.4698 12.8558 21.2397 13.3592 20.8114 13.3592L17.535 13.3592C16.7066 13.3592 16.035 14.0308 16.035 14.8592L16.035 29C16.035 29.2761 15.8111 29.5 15.535 29.5L6.465 29.5C6.18886 29.5 5.965 29.2761 5.965 29L5.965 14.8592C5.965 14.0308 5.29342 13.3592 4.465 13.3592L1.18861 13.3592C0.760253 13.3592 0.530221 12.8558 0.810609 12.5319L10.622 1.20042Z" stroke="#0049FA"/>
        </svg>
        </div>
        {/* Learn more button...Shows only on large screen... */}
        {/* <div className='hidden lg:block absolute top-[30.3vh] z-[1000] left-[3rem] cursor-pointer'> */}
          {/* <div className='flex items-center justify-center box-border'> */}
            {/* <GetInTouch onClick={()=>{console.log('clicked')}}/> */}
          {/* </div> */}
        {/* </div> */}

      </div>

      </div>

      <div className='w-[100vw] absolute bottom-0'>
        {/* The wave passing from the bottom is here.. */}
        <div className='w-[105vw] relative'>
          {/* Large screen */}
          <svg className='-mb-28 hidden md:block' width="1920" height="340" viewBox="0 0 1920 283" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1882.5 53.5C1949.7 53.5 1961 37 1961 37V291H-41V39.5C93.5 39.5 127.5 3.5 194.5 3.5C261.5 3.5 322 39.5 432.5 39.5C543 39.5 575.5 1 663.5 1C731 1 788.5 39.5 900.5 39.5C1044 39.5 1052 4.5 1152.5 4.5C1229 4.5 1329 53.5 1435.5 53.5C1542 53.5 1582.5 11.5 1655 11.5C1727.5 11.5 1798.5 53.5 1882.5 53.5Z" fill="#080816"/>
            <path d="M1961 37H1961.89V34.1225L1960.27 36.4966L1961 37ZM-41 39.5V38.6091H-41.8909V39.5H-41ZM-41 291H-41.8909V291.891H-41V291ZM1961 291V291.891H1961.89V291H1961ZM1961 37C1960.27 36.4966 1960.27 36.4957 1960.27 36.4948C1960.27 36.4946 1960.27 36.4938 1960.27 36.4934C1960.27 36.4926 1960.27 36.492 1960.27 36.4917C1960.27 36.4911 1960.27 36.4914 1960.27 36.4928C1960.27 36.4955 1960.26 36.5021 1960.25 36.5126C1960.24 36.5335 1960.21 36.5697 1960.17 36.6202C1960.09 36.7211 1959.95 36.8794 1959.75 37.0868C1959.34 37.5016 1958.67 38.1142 1957.66 38.8597C1955.62 40.3508 1952.19 42.3761 1946.64 44.4138C1935.55 48.4912 1916.03 52.6091 1882.5 52.6091V54.3909C1916.17 54.3909 1935.9 50.2588 1947.26 46.0862C1952.94 43.9989 1956.53 41.8992 1958.71 40.2965C1959.8 39.4952 1960.55 38.8187 1961.02 38.3312C1961.26 38.0874 1961.43 37.8912 1961.55 37.7504C1961.6 37.6801 1961.65 37.6236 1961.68 37.5821C1961.69 37.5613 1961.71 37.5443 1961.72 37.5312C1961.72 37.5246 1961.72 37.519 1961.73 37.5143C1961.73 37.512 1961.73 37.5099 1961.73 37.5081C1961.73 37.5072 1961.73 37.506 1961.73 37.5056C1961.73 37.5044 1961.73 37.5034 1961 37ZM1882.5 52.6091C1840.64 52.6091 1802 42.1446 1764.68 31.6424C1727.4 21.1519 1691.4 10.6091 1655 10.6091V12.3909C1691.1 12.3909 1726.85 22.8481 1764.2 33.3576C1801.5 43.8554 1840.36 54.3909 1882.5 54.3909V52.6091ZM1655 10.6091C1618.58 10.6091 1590.18 21.1665 1557.73 31.6523C1525.26 42.1399 1488.62 52.6091 1435.5 52.6091V54.3909C1488.88 54.3909 1525.74 43.8601 1558.27 33.3477C1590.82 22.8335 1618.92 12.3909 1655 12.3909V10.6091ZM1435.5 52.6091C1382.37 52.6091 1330.85 40.3874 1282.97 28.1369C1235.15 15.9009 1190.89 3.60912 1152.5 3.60912V5.39088C1190.61 5.39088 1234.6 17.5991 1282.53 29.8631C1330.4 42.1126 1382.13 54.3909 1435.5 54.3909V52.6091ZM1152.5 3.60912C1102.12 3.60912 1074.89 12.3914 1042.39 21.1398C1009.95 29.8738 972.157 38.6091 900.5 38.6091V40.3909C972.343 40.3909 1010.3 31.6262 1042.86 22.8602C1075.36 14.1086 1102.38 5.39088 1152.5 5.39088V3.60912ZM900.5 38.6091C844.611 38.6091 802.32 29.0053 765.538 19.3881C728.784 9.7785 697.394 0.109124 663.5 0.109124V1.89088C697.106 1.89088 728.216 11.4715 765.087 21.1119C801.93 30.7447 844.389 40.3909 900.5 40.3909V38.6091ZM663.5 0.109124C619.355 0.109124 589.114 9.77314 556.188 19.3949C523.284 29.0101 487.627 38.6091 432.5 38.6091V40.3909C487.873 40.3909 523.716 30.7399 556.687 21.1051C589.636 11.4769 619.645 1.89088 663.5 1.89088V0.109124ZM432.5 38.6091C377.354 38.6091 334.683 29.6277 297.396 20.634C260.139 11.6473 228.134 2.60912 194.5 2.60912V4.39088C227.866 4.39088 259.611 13.3527 296.979 22.366C334.317 31.3723 377.146 40.3909 432.5 40.3909V38.6091ZM194.5 2.60912C160.85 2.60912 135.446 11.6592 101.833 20.6393C68.2027 29.6239 26.1562 38.6091 -41 38.6091V40.3909C26.3438 40.3909 68.5473 31.3761 102.292 22.3607C136.054 13.3408 161.15 4.39088 194.5 4.39088V2.60912ZM-41.8909 39.5V291H-40.1091V39.5H-41.8909ZM-41 291.891H1961V290.109H-41V291.891ZM1961.89 291V37H1960.11V291H1961.89Z" fill="#000037"/>
          </svg>
          {/* Small Screen */}
          <svg className='md:hidden -mb-[7.4rem] w-[100vw]' width="1000" height="390" viewBox="0 0 428 215" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M289 1C241.651 1 204.5 52.9999 127.5 16.5C50.5 -19.9999 44.5 37.4996 -15 11.4997V226.5H443V21.5C391.168 46.7622 340 1 289 1Z" fill="#080816" stroke="#000037"/>
          </svg>


          {/* Logos goes here for large screen and medium.... */}
          <div className='hidden md:block absolute top-[5rem] w-[100vw]'>
            {/* Two lines of logos for large screen is divided into two rows. */}
            <div className='flex flex-col my-2 lg:mx-[11rem]'>
              {/* Six logos will come in here for large screen. */}
              <div className='flex flex-row justify-between my-[1rem]'>
                <img src={ImageOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageFive} alt="image20.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageSix} alt="image21.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
              </div>

              <div className='flex flex-row justify-between my-[0.75rem]'>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageSix} alt="image21.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
              </div>
            </div>
          </div>

          {/* Logos goes here for small screen.. */}
          <div className='md:hidden absolute top-28 w-[100vw] z-10'>
            {/* Two lines of logos for large screen is divided into two rows. */}
            <div className='flex flex-col my-1 mx-10 mb-1 md:mx-16'>
              {/* Six logos will come in here for large screen. */}
              <div className='flex flex-row justify-between my-4'>
                <img src={ImageOne} alt="image16.png" className='h-7 '/>
                <img src={ImageTwo} alt="image17.png" className='h-7 '/>
                <img src={ImageThree} alt="image18.png" className='h-7 '/>
                <img src={ImageFour} alt="image19.png" className='h-7 '/>
              </div>

              <div className='flex flex-row justify-between my-2'>
                <img src={ImageTwo} alt="image17.png" className='h-7 '/>
                <img src={ImageOne} alt="image16.png" className='h-7 '/>
                <img src={ImageFour} alt="image19.png" className='h-7 '/>
                <img src={ImageThree} alt="image18.png" className='h-7 '/>
              </div>

              <div className='flex flex-row justify-between my-2'>
                <img src={ImageThree} alt="image18.png" className='h-7 '/>
                <img src={ImageFour} alt="image19.png" className='h-7 '/>
                <img src={ImageTwo} alt="image17.png" className='h-7 '/>
                <img src={ImageOne} alt="image16.png" className='h-7 '/>
              </div>

            </div>
          </div>


        </div>
      </div>

    </div>



    {/* ////////////////////////  This will be the light hero section    //////////////////////////////// */}

    <div className=''>
    {/* For Large screen  */}
    <div className='hidden lg:block flex-col'>
      {/* The logos section.. */}
      <div className='flex flex-col mt-[5rem] lg:mx-44 md:mx-[6rem]'>

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

    {/* ============================================================================ */}
      {/* Unacademy + Product review section.. */}
      <div className='flex flex-row mt-20 mb-10'>
        {/* Unacademy Area.. */}
        <div className='flex lg:flex-col ml-20 lg:w-[35vw] md:w-[40vw]'>
           {/* Unacademy logo.. */}
           <div className='flex items-center justify-center mx-8 mb-20 md:block'>
            <img src={ImageUnacademy} alt="unacademy" />
           </div>

           {/* Percentages.. */}
           <div className='flex flex-row justify-evenly mb-20 relative'>
            {/* Arrow 1 */}
              <div className='relaitve mx-2'>
                <svg width="69" height="84" viewBox="0 0 69 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.1287 1.15821C34.3273 0.938048 34.6727 0.93804 34.8713 1.15821L67.6227 37.471C67.9128 37.7926 67.6846 38.3058 67.2514 38.3058L51.6438 38.3058C50.8153 38.3058 50.1438 38.9774 50.1438 39.8058L50.1438 83C50.1438 83.2761 49.9199 83.5 49.6438 83.5L19.3562 83.5C19.0801 83.5 18.8562 83.2761 18.8562 83L18.8562 39.8058C18.8562 38.9774 18.1847 38.3058 17.3562 38.3058L1.74858 38.3058C1.31544 38.3058 1.08719 37.7926 1.37728 37.471L34.1287 1.15821Z" stroke="url(#paint0_linear_221_801)"/>
                  <defs>
                  <linearGradient id="paint0_linear_221_801" x1="34.5" y1="-7.22443e-09" x2="34.5" y2="101.348" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#004AFF"/>
                  <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>16%</h1>
                  <p className='text-sm'>Increase in</p>
                  <p className='text-sm'>Growth</p>
                </div>

              </div>

              {/* Arrow 2 */}
              <div className='relaitve mx-2'>
                <svg width="69" height="84" viewBox="0 0 69 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.1287 1.15821C34.3273 0.938048 34.6727 0.93804 34.8713 1.15821L67.6227 37.471C67.9128 37.7926 67.6846 38.3058 67.2514 38.3058L51.6438 38.3058C50.8153 38.3058 50.1438 38.9774 50.1438 39.8058L50.1438 83C50.1438 83.2761 49.9199 83.5 49.6438 83.5L19.3562 83.5C19.0801 83.5 18.8562 83.2761 18.8562 83L18.8562 39.8058C18.8562 38.9774 18.1847 38.3058 17.3562 38.3058L1.74858 38.3058C1.31544 38.3058 1.08719 37.7926 1.37728 37.471L34.1287 1.15821Z" stroke="url(#paint0_linear_221_801)"/>
                  <defs>
                  <linearGradient id="paint0_linear_221_801" x1="34.5" y1="-7.22443e-09" x2="34.5" y2="101.348" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#004AFF"/>
                  <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>20%</h1>
                  <p className='text-sm'>Increase in</p>
                  <p className='text-sm'>CTR</p>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className='relaitve mx-2'>
                <svg width="69" height="84" viewBox="0 0 69 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.1287 1.15821C34.3273 0.938048 34.6727 0.93804 34.8713 1.15821L67.6227 37.471C67.9128 37.7926 67.6846 38.3058 67.2514 38.3058L51.6438 38.3058C50.8153 38.3058 50.1438 38.9774 50.1438 39.8058L50.1438 83C50.1438 83.2761 49.9199 83.5 49.6438 83.5L19.3562 83.5C19.0801 83.5 18.8562 83.2761 18.8562 83L18.8562 39.8058C18.8562 38.9774 18.1847 38.3058 17.3562 38.3058L1.74858 38.3058C1.31544 38.3058 1.08719 37.7926 1.37728 37.471L34.1287 1.15821Z" stroke="url(#paint0_linear_221_801)"/>
                  <defs>
                  <linearGradient id="paint0_linear_221_801" x1="34.5" y1="-7.22443e-09" x2="34.5" y2="101.348" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#004AFF"/>
                  <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>15%</h1>
                  <p className='text-sm'>Reduction in</p>
                  <p className='text-sm'>in CAC</p>
                </div>
              </div>
           </div>

        </div>


        {/* Customer Review */}
        <div className='flex flex-col w-[55vw] ml-20'>
          {/* Lorem ipsum.... */}
          <div className='ml-20 mt-2'>
            <p className='text-[1.25rem] leading-normal'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui, adipiscing nisi blandit lacinia. Tempus, volutpat amet sed lacus. Egestas eget nec amet, volutpat amet bibendum nunc tortor, eu. Nisi, odio elit tellus sit risus. Tortor dui sit nisl, ut aenean nisl. Congue tempus quis pulvinar magnis risus nec.”</p>
          </div>
          {/* Customer profile  */}
          <div className='mx-20 mt-10'>
            <a className="inline-flex items-center">
            <img alt="blog" src={CustomerImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font text-gray-900">Jane Doe</span>
              <span className="text-gray-400 text-xs tracking-widest mt-0.5">CEO, Unacademy</span>
            </span>
            </a>
          </div>

        </div>
        {/* End of customer review.. */}


        {/* previous + next button for reviews */}
        <div className='min-w-[6vw] mr-[11rem] flex items-end justify-between pb-4'>
          
        <svg className='' width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4375 27.75L15.875 27.3125C16.1875 27 16.1875 26.5625 15.875 26.25L4.75 15.0625H28.25C28.625 15.0625 29 14.75 29 14.3125V13.6875C29 13.3125 28.625 12.9375 28.25 12.9375H4.75L15.875 1.8125C16.1875 1.5 16.1875 1.0625 15.875 0.75L15.4375 0.3125C15.125 0 14.6875 0 14.375 0.3125L1.1875 13.5C0.875 13.8125 0.875 14.25 1.1875 14.5625L14.375 27.75C14.6875 28.0625 15.125 28.0625 15.4375 27.75Z" fill="#BEBEBE"/>
        </svg>
        <svg className='' width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" fill="#080816"/>
        </svg>

        </div>
        


      </div>

    </div>

    {/* For small screen */}
    <div className='lg:hidden flex-col relative'>
      {/* Navbar */}
      {/* <Navbar/>  *?Have to create a dark navbar for this part */}
      {/* Navbar ends */}

      {/* The logos section.. */}
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

    {/* *?For medium screen only.. */}
      <div className='hidden md:block lg:hidden flex-col mt-[5rem] lg:mx-44 md:mx-[6rem]'>

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

    {/* ============================================================================ */}
      {/* Unacademy + Product review section.. */}
      <div className='flex flex-col mt-20 mb-10'>
        {/* Unacademy Area.. */}
        <h3 className='font-medium text-2xl ml-7 md:ml-[5rem]'>Our Success Stories</h3>
        <div className='flex flex-col mx-2'>
           
           {/* Unacademy logo.. */}
           <div className='flex items-center justify-center mx-8 mb-2 mt-10'>
            <img className='h-9' src={ImageUnacademy} alt="unacademy logo" />
           </div>

           {/* Percentages.. */}
           <div className='flex flex-row justify-evenly mb-20 mt-10 relative'>
            {/* Arrow 1 */}
              <div className='relaitve mx-2'>
                <svg width="60" height="74" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.6296 1.15279C29.8281 0.933951 30.172 0.933951 30.3704 1.15278L59.1137 32.8502C59.4051 33.1716 59.1771 33.6861 58.7433 33.6861L45.2988 33.6861C44.4703 33.6861 43.7988 34.3577 43.7988 35.1861L43.7988 73C43.7988 73.2761 43.5749 73.5 43.2988 73.5L16.7012 73.5C16.4251 73.5 16.2012 73.2761 16.2012 73L16.2012 35.1861C16.2012 34.3577 15.5297 33.6861 14.7012 33.6861L1.25672 33.6861C0.822946 33.6861 0.594946 33.1716 0.886329 32.8502L29.6296 1.15279Z" stroke="url(#paint0_linear_221_1229)"/>
                  <defs>
                  <linearGradient id="paint0_linear_221_1229" x1="30" y1="-1.36497e-08" x2="30" y2="89.2826" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#004AFF"/>
                  <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>16%</h1>
                  <p className='text-sm'>Increase in</p>
                  <p className='text-sm'>Growth</p>
                </div>

              </div>

              {/* Arrow 2 */}
              <div className='relaitve mx-2'>
              <svg width="60" height="74" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.6296 1.15279C29.8281 0.933951 30.172 0.933951 30.3704 1.15278L59.1137 32.8502C59.4051 33.1716 59.1771 33.6861 58.7433 33.6861L45.2988 33.6861C44.4703 33.6861 43.7988 34.3577 43.7988 35.1861L43.7988 73C43.7988 73.2761 43.5749 73.5 43.2988 73.5L16.7012 73.5C16.4251 73.5 16.2012 73.2761 16.2012 73L16.2012 35.1861C16.2012 34.3577 15.5297 33.6861 14.7012 33.6861L1.25672 33.6861C0.822946 33.6861 0.594946 33.1716 0.886329 32.8502L29.6296 1.15279Z" stroke="url(#paint0_linear_221_1229)"/>
                <defs>
                <linearGradient id="paint0_linear_221_1229" x1="30" y1="-1.36497e-08" x2="30" y2="89.2826" gradientUnits="userSpaceOnUse">
                <stop stopColor="#004AFF"/>
                <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                </linearGradient>
                </defs>
              </svg>

                <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>20%</h1>
                  <p className='text-sm'>Increase in</p>
                  <p className='text-sm'>CTR</p>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className='relaitve mx-2'>
                <svg width="60" height="74" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.6296 1.15279C29.8281 0.933951 30.172 0.933951 30.3704 1.15278L59.1137 32.8502C59.4051 33.1716 59.1771 33.6861 58.7433 33.6861L45.2988 33.6861C44.4703 33.6861 43.7988 34.3577 43.7988 35.1861L43.7988 73C43.7988 73.2761 43.5749 73.5 43.2988 73.5L16.7012 73.5C16.4251 73.5 16.2012 73.2761 16.2012 73L16.2012 35.1861C16.2012 34.3577 15.5297 33.6861 14.7012 33.6861L1.25672 33.6861C0.822946 33.6861 0.594946 33.1716 0.886329 32.8502L29.6296 1.15279Z" stroke="url(#paint0_linear_221_1229)"/>
                  <defs>
                  <linearGradient id="paint0_linear_221_1229" x1="30" y1="-1.36497e-08" x2="30" y2="89.2826" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#004AFF"/>
                  <stop offset="0.685417" stopColor="#004AFF" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                  <div className='absolute top-12 flex flex-col items-center justify-center'>
                  <h1 className='text-lg font-bold'>15%</h1>
                  <p className='text-sm'>Reduction in</p>
                  <p className='text-sm'>in CAC</p>
                </div>
              </div>
           </div>

        </div>


        {/* Customer Review */}
        <div className='flex flex-col'>
          {/* Lorem ipsum.... */}
          <div className='mx-16 md:mx-20 mt-2'>
            <p className='text-lg leading-normal'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at. Et massa in eu, scelerisque adipiscing imperdiet egestas sed.”</p>
          </div>
          {/* Customer profile  */}
          <div className='mx-14 md:mx-[5rem] mt-10 flex flex-row justify-between items-center mb-24'>
            
            <div className="inline-flex items-center">
              <img alt="blog" src={CustomerImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="font-medium text-gray-900 text-sm">Jane Doe</span>
                <span className="text-[#5E5E5E] text-xs tracking-tight mt-0.5">CEO, Unacademy</span>
              </span>
            </div>

            {/* previous + next button for reviews */}
            <div className='flex items-end justify-between'>
            
            <svg className='mx-5' width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4375 27.75L15.875 27.3125C16.1875 27 16.1875 26.5625 15.875 26.25L4.75 15.0625H28.25C28.625 15.0625 29 14.75 29 14.3125V13.6875C29 13.3125 28.625 12.9375 28.25 12.9375H4.75L15.875 1.8125C16.1875 1.5 16.1875 1.0625 15.875 0.75L15.4375 0.3125C15.125 0 14.6875 0 14.375 0.3125L1.1875 13.5C0.875 13.8125 0.875 14.25 1.1875 14.5625L14.375 27.75C14.6875 28.0625 15.125 28.0625 15.4375 27.75Z" fill="#BEBEBE"/>
            </svg>
            <svg className='mx-5' width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" fill="#080816"/>
            </svg>
    
            </div>
            {/* End of arrow buttons.. */}

            </div>

          </div>
        {/* End of customer review.. */}
    


      </div>

    </div>

    </div>
    
    </>
  )

}

export default Hero

