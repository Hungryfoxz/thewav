import React from 'react';
import ImageYourStoryActive from '../images/blogs/yourstory.svg';
import ImageHalfAwwards from '../images/blogs/halfAwwards.svg';
import ImageYourStory from '../images/blogs/blackYourstory.svg';
import ImageAwwards from '../images/blogs/awwards.svg';
import ImageOutlook from '../images/blogs/outlook.jpg';
import ZeeBusiness from '../images/blogs/zeebusiness.svg';
import CardOne from '../images/blogs/cardone.jpg';
import CardTwo from '../images/blogs/cardtwo.jpg';
import CardThree from '../images/blogs/cardthree.jpg';


const BlogsAndArticles = () => {
  return (
    <>
    <main className='w-[100vw] relative z-[40] bg-white pt-10 lg:pt-14'>
        {/* Thewav Turned 2 */}
    <div className='text-center py-12 md:pt-4 pt-10'>
        <h2 className='text-lg px-10 lg:text-2xl text-[#080816] font-semibold'>TheWav Turned 2: Helping startups to turn into trusted brands</h2>
        <p className='text-base text-[#5D5D5D] pt-2'>Outlook India, November 2021</p>
    </div>


    {/*  ///////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
    <div className='w-[100vw] flex flex-col justify-center pb-20 '>

        {/* Horizontal line */}
        <div className='w-[100vw] relative'>
            <div className='bg-[#0049FA] h-[1px] w-[100vw]'/>
            <div className='bg-white z-10 translate-y-[3%] border-r-[1px] border-b-[1px] rotate-45 h-8 w-8 border-[#0049FA] absolute -top-4 left-[50%] -translate-x-[50%]
                                md:left-[62%] md:-translate-x-[62%]'>
            </div>
        </div>
        {/* <svg className='w-[100%]' width="428" height="22" viewBox="0 0 428 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="196" y2="0.5" stroke="#0049FA"/>
            <line x1="233" y1="0.5" x2="428" y2="0.500017" stroke="#0049FA"/>
            <path d="M196 0.999999L214.5 21L233 0.999999" stroke="#0049FA"/>
        </svg> */}

        {/* YOURSTORY logo for small screens */}
        <div className='w-[100vw] relative pt-8 md:hidden'>
            <img className='absolute left-[50%] -translate-x-[50%]' src={ImageYourStoryActive} alt="image" />
            <img className='absolute right-0 h-12' src={ImageHalfAwwards} alt="awwards logo"/>
        </div>

        {/* YOURSTORY logo for medium and large screens */}
        <div className='hidden md:block w-[100vw] pt-14'>
            <div className='w-[100vw] flex flex-row justify-between sm:px-[10%] lg:px-[10rem]'>
                <img className='h-[3.2rem] md:h-[2.5rem]' src={ImageYourStory}/>
                <img className='h-[3.2rem] md:h-[2.5rem]' src={ImageAwwards}/>
                <img className='h-[3.2rem] md:h-[2.5rem]' src={ImageOutlook}/>
                <img className='h-[3.2rem] md:h-[2.5rem]' src={ZeeBusiness}/>
            </div>
        </div>

    </div>

    {/* ^^^^^^^^^^^   These logos were above the blogs and articles section   ^^^^^^^^^^^^ */}

    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* [+++++++++++++++++++++++++++++++]   Blogs and Articles  [+++++++++++++++++++++++++++++++++++] */}

        <div className='flex flex-col w-[100vw] md:mt-6 pb-16 pt-16'>
            {/* Heading */}
            <div className='text-left'>
                <h1 className='px-[1.9rem] md:pl-[5rem] lg:pl-[10rem] md:text-5xl text-4xl font-[600]'>Blogs and Articles</h1>
            </div>

            {/*  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* Cards */}
            <div className='flex flex-col md:flex-row py-10 md:px-[4rem] lg:px-[10rem] md:p-8 lg:p-20 md:pb-8 pb-5 justify-between'>

            {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
            {/* Card 01 :: Thewav revolutionizes the way startups grow */}
            <div className='flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200'>
                {/* Image */}
                <img src={CardOne} alt="card one image" />
                {/* Text */}
                <div className='flex flex-col py-4 px-5 md:px-8'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Performance</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
                    <p className='text-[#5E5E5E] text-sm leading-[155%] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at. Et massa in eu, scelerisque adipiscing imperdiet egestas sed.</p>
                    {/* Read more */}
                    <div className='pt-6 pb-4'>
                        <button className='flex flex-row justify-center items-center text-[#0049FA] text-sm font-[500]'>
                        Read More 
                        <svg className='mx-2' width="13" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* End of card 01 */}

            {/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
            {/* Card 02 :: Thewav revolutionizes the way startups grow */}
            <div className='flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200'>
                {/* Image */}
                <img src={CardTwo} alt="card one image" />
                {/* Text */}
                <div className='flex flex-col py-4 px-8'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Web Design</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
                    <p className='text-[#5E5E5E] text-sm leading-[155%] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at. Et massa in eu, scelerisque adipiscing imperdiet egestas sed.</p>
                    {/* Read more */}
                    <div className='pt-6 pb-4'>
                        <button className='flex flex-row justify-center items-center text-[#0049FA] text-sm font-[500]'>
                        Read More 
                        <svg className='mx-2' width="13" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* End of card 02 */}

            {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
            {/* Card 03 :: Thewav revolutionizes the way startups grow */}
            <div className='flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200'>
                {/* Image */}
                <img src={CardThree} alt="card one image" />
                {/* Text */}
                <div className='flex flex-col py-4 px-8'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Web Design</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
                    <p className='text-[#5E5E5E] text-sm leading-[155%] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at. Et massa in eu, scelerisque adipiscing imperdiet egestas sed.</p>
                    {/* Read more */}
                    <div className='pt-6 pb-4'>
                        <button className='flex flex-row justify-center items-center text-[#0049FA] text-sm font-[500]'>
                        Read More 
                        <svg className='mx-2' width="13" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* End of card 03 */}


            </div>
            {/* End of cards */}

            {/* ===================== All Blogs button ====================== */}
            <div className='w-[100vw] flex flex-row justify-center items-center'>
            <div className='pb-4'>
                        <button className='flex flex-row justify-center items-center text-[#0049FA] text-sm font-[500]'>
                        All Blogs 
                        <svg className='mx-2' width="13" height="14" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.76562 0.945312L7.98438 1.6875C7.78906 1.88281 7.78906 2.19531 7.98438 2.35156L14.0391 8.40625H0.71875C0.445312 8.40625 0.25 8.64062 0.25 8.875V9.96875C0.25 10.2422 0.445312 10.4375 0.71875 10.4375H14.0391L7.98438 16.5312C7.78906 16.6875 7.78906 17 7.98438 17.1953L8.76562 17.9375C8.92188 18.1328 9.23438 18.1328 9.42969 17.9375L17.5938 9.77344C17.7891 9.57812 17.7891 9.30469 17.5938 9.10938L9.42969 0.945312C9.23438 0.75 8.92188 0.75 8.76562 0.945312Z" fill="#0049FA"/>
                        </svg>
                        </button>
                    </div>
            </div>
            {/* All blogs button ends here... */}

        </div>


    </main>
    </>
  )
}

export default BlogsAndArticles;