import React from 'react';
import Styles from './End.module.css';
import MessageIcon from '../images/end/envelope.svg'
import HelloIcon from '../images/end/phone.svg'
import BuildingIcon from '../images/end/building.svg'

const End = () => {
  return (
    <>
    {/* ###################################################################################################################### */}
    {/* ...............  This area contains the Drop a message, say Hello and Visit us sections  .................. */}
    {/* ###################################################################################################################### */}
    <main className='relative w-[100vw] bg-[#080816] overflow-hidden'>
        <div className={Styles.gradient}></div>


        {/* ................................................The three sections...................................... */}
        {/* ######################################################################################################### */}
        {/* .........................................Medium to large,xl screens ..................................... */}
        <div className='hidden md:block w-[100vw]'>
        <div className='flex flex-col md:flex-row justify-between pt-[3rem] lg:px-[15rem] xl:px-[19rem] md:px-[8rem] md:pb-12 lg:pb-6'>

            {/* Drop a message.. */}
            <div className='flex flex-col items-center py-8'>
                <img className='mb-4' src={MessageIcon} alt="message" />
                <h3 className='text-white text-lg'>Drop a message</h3>
                <p className='text-[#BEBEBE] text-sm'>info@thewavco</p>
            </div>
            {/* Say Hello.. */}
            <div className='flex flex-col items-center py-8'>
                <img className='mb-4' src={HelloIcon} alt="message" />
                <h3 className='text-white text-lg'>Say Hello</h3>
                <p className='text-[#BEBEBE] text-sm'>+919876500000</p>
            </div>
            {/* Visit Us.. */}
            <div className='flex flex-col items-center py-8'>
                <img className='mb-4' src={BuildingIcon} alt="message" />
                <h3 className='text-white text-lg'>Visit Us</h3>
                <p className='text-[#BEBEBE] text-sm leading-tight'>123 Street</p>
                <p className='text-[#BEBEBE] text-sm leading-tight'>Banglore 123456</p>
            </div>


        </div>
        </div>

        {/* ########################################################################################## */}
        {/* .................................for small screens........................................ */}

        <div className='flex flex-col justify-between pt-[3rem] w-[100vw] md:hidden pb-12 pl-6'>

            {/* Drop a message.. */}
            <div className='flex flex-row items-start py-8 pl-[2rem]'>
                <img className='mb-4' src={MessageIcon} alt="message" />
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-xl pb-2'>Drop a message</h3>
                    <p className='text-[#BEBEBE] text-sm'>info@thewavco</p>
                </div>
            </div>
            {/* Say Hello.. */}
            <div className='flex flex-row items-center py-8 pl-[2rem]'>
                <img className='mb-4' src={HelloIcon} alt="message" />
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-xl pb-2'>Say Hello</h3>
                    <p className='text-[#BEBEBE] text-sm'>+919876500000</p>
                </div>
            </div>
            {/* Visit Us.. */}
            <div className='flex flex-row items-center py-8 pl-[2rem]'>
                <img className='mb-4' src={BuildingIcon} alt="message" />
                <div className='flex flex-col pl-[1rem]'>
                    <h3 className='text-white text-xl pb-2'>Visit Us</h3>
                    <p className='text-[#BEBEBE] text-sm leading-'>123 Street</p>
                    <p className='text-[#BEBEBE] text-sm leading-'>Banglore 123456</p>
                </div>
            </div>


        </div>


    </main>
    </>
  )
}

export default End