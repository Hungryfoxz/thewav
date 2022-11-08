import React,{useState} from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');

    // Checkbox inputs....

    var [array, setArray] = useState([]);

    const checkValue = (e) => {
        var value = e.target.value;
        if(!array.includes(value)){
            setArray(array=>[...array, value]);
            console.log(array)
        }
        if(array.includes(value)){
            removeValue(array,value);
            console.log(array)
        }
        console.log("You selected " + value);
      }

      const removeValue = (array,value) => {
        return array.filter(ele=>{
            return ele !== value;
        })
      }

      

  return (
    <>
    <form className="w-[100%]" action="#">
        {/* Your name Field... */}
        <div className="pt-[0rem]">
            <label htmlFor="large-input" className="block mb-2 text-lg font-normal text-[#080816]">Your Name</label>
            <input type="text" id="name" className="bg-[#FFFFFF] border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        {/* Email Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-lg font-normal text-[#080816]">Email Address</label>
            <input type="email" id="" className="bg-[#FFFFFF] border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black" placeholder='Enter your email address' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>

        {/* Phone Number Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-lg font-normal text-[#080816]">Phone Number</label>
            <input type="tel" id="" className="bg-[#FFFFFF] border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black" placeholder='Enter your phone number' value={phone} onChange={e=>setPhone(e.target.value)}/>
        </div>

        {/* Company Website Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-lg font-normal text-[#080816]">Company Website</label>
            <input type="text" id="" className="bg-[#FFFFFF] border border-[#EEEEEE] text-[#717175] text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] hover:border-[#717175] focus:text-black" placeholder='Enter your Company&#8217;s website' value={companyWebsite} onChange={e=>setCompanyWebsite(e.target.value)}/>
        </div>

        {/* Check Box.... */}
        <div className="pt-[2.2rem]">


            <div className="flex justify-center flex-col">
                <h2 className='mb-3 text-lg'>What service(s) are you interested in?</h2>

                {/* Checkbox 01 */}
                        <label className="pl-4 border py-[.8rem] inline-block text-gray-800 text active:text-[#0049FA] rounded mb-[.375rem] hover:text-[#0049FA] hover:border-[#0049FA] duration-500 ease-in-out checked:bg-green-400" htmlFor="checkbox1">
                            Performance Marketing
                            <input  className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition-colors duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="checkbox1" id="checkbox1" onChange={checkValue}/>
                        </label>

                {/* Checkbox 02 */}
                        <label className="pl-4 border py-[.8rem] inline-block text-gray-800 text active:text-[#0049FA] rounded mb-[.375rem] hover:text-[#0049FA] hover:border-[#0049FA] duration-300 ease-in-out" htmlFor="checkbox2">
                            Social Media Marketing
                            <input className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="checkbox2" id="checkbox2" onChange={checkValue}/>
                        </label>
                {/* Checkbox 03 */}
                        <label className="pl-4 border py-[.8rem] inline-block text-gray-800 text active:text-[#0049FA] rounded mb-[.375rem] hover:text-[#0049FA] hover:border-[#0049FA] duration-300 ease-in-out" htmlFor="checkbox3">
                            SEO
                            <input className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="checkbox3" id="checkbox3" onChange={checkValue}/>
                        </label>
                {/* Checkbox 04 */}
                        <label className="pl-4 border py-[.8rem] inline-block text-gray-800 text active:text-[#0049FA] rounded mb-[.375rem] hover:text-[#0049FA] hover:border-[#0049FA] duration-300 ease-in-out" htmlFor="checkbox4">
                            Web Design
                            <input className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="checkbox4" id="checkbox4" onChange={checkValue}/>
                        </label>
                {/* Checkbox 05 */}
                        <label className="pl-4 border py-[.8rem] inline-block text-gray-800 text active:text-[#0049FA] rounded mb-[.375rem] hover:text-[#0049FA] hover:border-[#0049FA] duration-300 ease-in-out" htmlFor="checkbox5">
                            Branding
                            <input className="mr-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checked checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="checkbox5" id="checkbox5" onChange={checkValue}/>
                        </label>

                
            </div>
        </div>

        {/* large Screen */}
        <div className="hidden lg:block text-white pt-[3rem]">
            <button className="text-base flex flex-row items-center bg-[#0049FA] py-4 px-7 rounded-sm">Get in Touch
                {/* Arrow */}
                <svg className="mx-2" width="16" height="16" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2305 0.804688L9.29297 1.69531C9.05859 1.92969 9.05859 2.30469 9.29297 2.49219L16.5586 9.75781H0.574219C0.246094 9.75781 0.0117188 10.0391 0.0117188 10.3203V11.6328C0.0117188 11.9609 0.246094 12.1953 0.574219 12.1953H16.5586L9.29297 19.5078C9.05859 19.6953 9.05859 20.0703 9.29297 20.3047L10.2305 21.1953C10.418 21.4297 10.793 21.4297 11.0273 21.1953L20.8242 11.3984C21.0586 11.1641 21.0586 10.8359 20.8242 10.6016L11.0273 0.804688C10.793 0.570312 10.418 0.570312 10.2305 0.804688Z" fill="white"/>
                </svg>
            </button>
        </div>

        {/* Small Screen */}
        <div className="lg:hidden text-white pt-[2.5rem]">
            <button className="text-base flex flex-row items-center justify-center bg-[#0049FA] w-full rounded-sm py-4">Get in Touch
            {/* Arrow */}
            <svg className="mx-2" width="16" height="16" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2305 0.804688L9.29297 1.69531C9.05859 1.92969 9.05859 2.30469 9.29297 2.49219L16.5586 9.75781H0.574219C0.246094 9.75781 0.0117188 10.0391 0.0117188 10.3203V11.6328C0.0117188 11.9609 0.246094 12.1953 0.574219 12.1953H16.5586L9.29297 19.5078C9.05859 19.6953 9.05859 20.0703 9.29297 20.3047L10.2305 21.1953C10.418 21.4297 10.793 21.4297 11.0273 21.1953L20.8242 11.3984C21.0586 11.1641 21.0586 10.8359 20.8242 10.6016L11.0273 0.804688C10.793 0.570312 10.418 0.570312 10.2305 0.804688Z" fill="white"/>
                </svg>
            </button>
        </div>


    </form>
    </>
  )
}

export default Form