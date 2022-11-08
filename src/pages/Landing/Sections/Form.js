import React,{ useState } from "react"


const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [adSpends, setAddSpends] = useState('');



  return (
    <form className="lg:px-[2rem]" action="#">
        {/* Your name Field... */}
        <div className="pt-[0rem]">
            <label htmlFor="large-input" className="block mb-2 text-base font-normal text-white">Your Name</label>
            <input type="text" id="name" className="bg-[#24243B] border border-[#383854] text-[#646493] focus:text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202]" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        {/* Email Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-base font-normal text-white">Email Address</label>
            <input type="email" id="" className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] " placeholder='Enter your email address' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>

        {/* Phone Number Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-base font-normal text-white">Phone Number</label>
            <input type="tel" id="" className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] " placeholder='Enter your phone number' value={phone} onChange={e=>setPhone(e.target.value)}/>
        </div>

        {/* Company Website Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-base font-normal text-white">Company Website</label>
            <input type="text" id="" className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text " placeholder='Enter your Company&#8217;s website' value={companyWebsite} onChange={e=>setCompanyWebsite(e.target.value)}/>
        </div>

        {/* Monthly ad spends Field... */}
        <div className="pt-[2.2rem]">
            <label htmlFor="large-input" className="block mb-2 text-base font-normal text-white">Monthly Ad Spends(INR)</label>
            <input type="number" id="" className="bg-[#24243B] border border-[#383854] text-white text-sm rounded-[4px] focus:ring-0 focus:outline-none focus:border-[#0049FA] active:border-[#0049FA] block w-full px-2.5 py-5 lg:py-4 cursor-text invalid:border-[#CE0202] " placeholder='Enter your Monthly Ad Spends(INR)' value={adSpends} onChange={e=>setAddSpends(e.target.value)}/>
        </div>

        {/* large Screen */}
        <div className="hidden lg:block text-white pt-[3rem]">
            <button className="text-base flex flex-row items-center bg-[#0049FA] py-4 px-5 rounded-sm">Get Free Audit
                {/* Arrow */}
                <svg className="mx-2" width="16" height="16" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2305 0.804688L9.29297 1.69531C9.05859 1.92969 9.05859 2.30469 9.29297 2.49219L16.5586 9.75781H0.574219C0.246094 9.75781 0.0117188 10.0391 0.0117188 10.3203V11.6328C0.0117188 11.9609 0.246094 12.1953 0.574219 12.1953H16.5586L9.29297 19.5078C9.05859 19.6953 9.05859 20.0703 9.29297 20.3047L10.2305 21.1953C10.418 21.4297 10.793 21.4297 11.0273 21.1953L20.8242 11.3984C21.0586 11.1641 21.0586 10.8359 20.8242 10.6016L11.0273 0.804688C10.793 0.570312 10.418 0.570312 10.2305 0.804688Z" fill="white"/>
                </svg>
            </button>
        </div>

        {/* Small Screen */}
        <div className="lg:hidden text-white pt-[3rem]">
            <button className="text-base flex flex-row items-center justify-center bg-[#0049FA] w-full rounded-sm py-4">Get Free Audit</button>
        </div>


    </form>
  )
}

export default Form