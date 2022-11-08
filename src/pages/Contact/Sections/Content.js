import React from 'react'
import Form from './Form.js'
import CustomerImage from '../../Landing/images/customer.png';

const Content = () => {
  return (
    <>
    <main className='w-[100vw] h-[100%] flex flex-col lg:flex-row pb-[4.5rem] lg:pb-6rem'>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ...........Text section "Lorem ipsum etc.....+ the Jane Doe/CEO/Unacademy"......... */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className='flex flex-col flex-1 justify-center xl:pl-[10rem] lg:pl-[8rem] md:pl-[5rem] pl-[2rem]'>
            
            {/* ........Heading for Large screen ....... */}
            <div className='w-[18rem] hidden lg:block'>
                <h1 className='text-[2.5rem] leading-tight font-semibold'>Tell us about your project</h1>
            </div>

            <div className='pt-[.75rem] hidden lg:block'>
                <p className='text-xs text-[#5D5D5D]'>Fill up the form and we\'ll get back to you.</p>
            </div>
            
            {/* ////////////////////////////////////////// */}
            {/* .......Lorem ipsum + Jane Doe.... */}
            <div className='flex flex-col mt-[4.75rem] mr-[4rem] ml-[1rem] lg:ml-[1rem] md:mr-[10rem] lg:mr-[8rem] lg:px-0 sm:ml-[4rem] sm:mr-[6rem] md:ml-[3rem]'>
            {/* Lorem ipsum.... */}
            <div className='mt-2'>
                <p className='text-sm leading-normal italic'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui, adipiscing nisi blandit lacinia. Tempus, volutpat amet sed lacus. Egestas eget nec amet, volutpat amet bibendum nunc tortor, eu. Nisi, odio elit tellus sit risus. Tortor dui sit nisl, ut aenean nisl. Congue tempus quis pulvinar magnis risus nec.”</p>
            </div>
            {/* Customer profile  */}
            <div className='mt-10 flex flex-row justify-between items-center mb-[4rem]'>
                
                <div className="inline-flex items-center">
                <img alt="blog" src={CustomerImage} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="font-medium text-gray-900 text-sm">Jane Doe</span>
                    <span className="text-[#5E5E5E] text-xs tracking-tight mt-0.5">CEO, Unacademy</span>
                </span>
                </div>

                </div>

          </div>

          {/* ........Heading for small screen ....... */}
          <div className='w-[18rem] lg:hidden sm:ml-[2rem] md:ml-0 mt-4'>
                <h1 className='text-[1.45rem] leading-tight font-semibold'>Tell us about your project</h1>
            </div>

            <div className='pt-[.75rem] lg:hidden mb-8 sm:ml-[2rem]  md:ml-0'>
                <p className='text-xs text-[#5D5D5D]'>Fill up the form and we\'ll get back to you.</p>
            </div>

        </div>
        {/* ........End of the text section........ */}



        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* .....................Form section................... */}
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className='flex flex-1 xl:pr-[10rem] lg:pr-[8rem] md:px-[5rem] px-[1.5rem] sm:px-[4rem] '>
            <Form></Form>
        </div>
        {/* ........... End of the form section ........... */}
        
    </main>
    </>
  )
}

export default Content