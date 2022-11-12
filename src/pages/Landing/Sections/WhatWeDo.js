import React,{useLayoutEffect,useRef} from 'react';
import ImagePerformace from '../images/whatwedo/performance_marketing.png';
import ImageUiUx from '../images/whatwedo/ui_ux_design.png';
import EnPreTar from '../images/whatwedo/ept.svg';
import CreComDem from '../images/whatwedo/ccd.svg';
import DatDriOpr from '../images/whatwedo/ddo.svg';
import ArrowRight from '../images/arrow_right.svg'
// Our Partners Logos[images]...
import Shopify from '../images/whatwedo/Partners/shopify.svg'
import SearchTap from '../images/whatwedo/Partners/searchtap.svg'
import Wigzo from '../images/whatwedo/Partners/wigzo.svg'
import BiteSpeed from '../images/whatwedo/Partners/bitespeed.svg'

// Gsap animations ::
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




const WhatWeDo = () => {

    // Card hover animation..
    const wwdCardOne = useRef(null)
    const wwdCardTwo = useRef(null)
    const wwdCardThree = useRef(null)
    
    // const cardArray = ['wwdCardOne','wwdCardTwo','wwdCardThree']
    // const [ cardW, setCardW ] = useState('cardOne')
    const cardSelected = (e) => {
        
        if(e.target.id){
            if(e.target.id === 'wwdCardThree'){
                wwdCardThree.current.classList.add('active');
                wwdCardOne.current.classList.remove('active');
                wwdCardTwo.current.classList.remove('active');

            }else if(e.target.id === 'wwdCardTwo'){
                wwdCardTwo.current.classList.add('active');
                wwdCardOne.current.classList.remove('active');
                wwdCardThree.current.classList.remove('active');
            }else{
                wwdCardOne.current.classList.add('active');
                wwdCardThree.current.classList.remove('active');
                wwdCardTwo.current.classList.remove('active');
            }
        }
    }
    

    // Scroll animations using gsap...
    const cardRef = useRef(null);
    useLayoutEffect(() => {
        const card = cardRef.current;

        const animateScrollDownOne = gsap.fromTo(card.querySelector("#cardone"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out'})
        const animateScrollDownTwo = gsap.fromTo(card.querySelector("#cardtwo"),{x:1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out'})
        const animateScrollDownThree = gsap.fromTo(card.querySelector("#cardthree"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out'})
        // Card one
        ScrollTrigger.create({
            trigger: card.querySelector("#cardone"),
            onEnter: () => animateScrollDownOne.restart()
            }); 

            ScrollTrigger.create({
            trigger: card.querySelector("#cardone"),
            markers: false,
            onEnterBack: () => animateScrollDownOne.restart()
            });
            
       // Card Two 
        ScrollTrigger.create({
            trigger: card.querySelector("#cardtwo"),
            onEnter: () => animateScrollDownTwo.restart()
            }); 

            ScrollTrigger.create({
            trigger: card.querySelector("#cardtwo"),
            markers: false,
            onEnterBack: () => animateScrollDownTwo.restart()
            }); 

        // Card three
        ScrollTrigger.create({
            trigger: card.querySelector("#cardthree"),
            onEnter: () => animateScrollDownThree.restart()
            }); 

            ScrollTrigger.create({
            trigger: card.querySelector("#cardthree"),
            markers: false,
            onEnterBack: () => animateScrollDownThree.restart()
            }); 


        // Below is the scrub animation,elements are scrolled to view according to the scroll length..Looks more natural and beautiful..If you want it ,uncommnet the below line and comment the above line from 'const animateScrollDownOne'.... 

        // gsap.fromTo(card.querySelector("#cardone"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
        //     trigger:card.querySelector("#cardone"),
        //     end: 'bottom+500 center',
        //     scrub:false,
        //     markers:true,
        //     toggleActions: "play none none reverse" 
        // }})
        // gsap.fromTo(card.querySelector("#cardtwo"),{x:1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
        //     trigger:card.querySelector("#cardtwo"),
        //     end: 'bottom+500 center',
        //     scrub:2 
        // }})
        // gsap.fromTo(card.querySelector("#cardthree"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out', scrollTrigger:{
        //     trigger:card.querySelector("#cardthree"),
        //     end: 'bottom+500 center',
        //     scrub:2 
        // }})
    }, [])
    


  return (

    <>
    <main className='bg-[#F6F6FF] m-0 p-0 box-border w-[100vw] relative z-50'>


    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/*  ###########################..........................  Large screen (<LG,XL) ...................###########################################  */}
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


    <div className='hidden lg:block box-border w-[100%] h-[100%]'>
    <div className='flex flex-row lg:px-[8rem] xl:px-[10rem] py-20'>
        
        {/* Heading */}
        <div className='min-w-[20vw] xl:pl-2 pt-3'>
            <h1 className='text-[2.1rem] font-medium'>What</h1>
            <h1 className='text-[2.1rem] font-medium'>We Do</h1>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* ......................................................................Cards ..................................................................... */}
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* wwd  === 'What we do' */}
        <div className='flex flex-row box-border'>
   
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* card 1 */}
            <div className={`card active flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem] active:border-l-[8px] border-[#0049FA]`} onMouseEnter={(e)=>cardSelected(e)} id="wwdCardOne" ref={wwdCardOne}>
                <div className='box-border'>
                  <img className='card-image' src={ImagePerformace} alt="Performance Design image" />
                </div>
                <div className='flex flex-col items-start justify-start w-[100%] my-3 px-3'>
                    <h3 className='font-medium text-2xl'>Performance Marketing</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                        <div className='flex flex-row justify-start'>
                            <p className='text-sm leading-tight text-[#5E5E5E]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                        </div>
                        <div className='card-item-button flex flex-row  items-center'>
                          <button className='border-none ring-0 text-[#0049FA] text-sm font-medium'>Get in Touch</button>
                          <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                        </div>
                </div>
            </div>

            {/* card 2 */}
            <div className='card flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem]' onMouseEnter={(e)=>cardSelected(e)} id="wwdCardTwo" ref={wwdCardTwo}>
                <img className='card-image' src={ImageUiUx} alt="Performance Design image" />
                <div className='flex flex-col items-start justify-start w-[100%] my-3 px-3'>
                    <h3 className='font-medium text-2xl'>UI/UX Design</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                        <div className='flex flex-row justify-start'>
                            <p className='text-sm leading-tight text-[#5E5E5E]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                        </div>
                        <div className='card-item-button flex flex-row mt-6 items-center'>
                            <button className='border-none ring-0 text-[#0049FA] text-sm font-medium'>Get in Touch</button>
                            <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                        </div>
                </div>
            </div>

            {/* card 3 */}
            <div className='card flex flex-col justify-between bg-white my-5 items-center box-border rounded-md h-[54vh] mx-[.35rem]' onMouseEnter={(e)=>cardSelected(e)} id="wwdCardThree" ref={wwdCardThree}>
                <img className='card-image' src={ImagePerformace} alt="Performance Design image" />
                <div className='flex flex-col items-start justify-start w-[100%] my-3 px-3'>
                    <h3 className='font-medium text-2xl'>Visual Branding</h3>
                </div>
                <div className="card-item px-3 box-border mb-6">
                        <div className='flex flex-row justify-start'>
                            <p className='text-sm leading-tight text-[#5E5E5E]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                        </div>
                        <div className='card-item-button flex flex-row mt-6 items-center'>
                        <button className='border-none ring-0 text-[#0049FA] text-sm font-medium'>Get in Touch</button>
                        <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                        </div>
                </div>
            </div>

            {/* End of the card.... */}
        </div>
        
        </div>

    </div>
    {/* End of large screen.... */}


    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/* ##################################.......................   Small and medium screen ...................................################################  */}
    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    
    
    {/* Heading */}

    <div className='flex flex-row items-start lg:hidden pt-20 ml-10'>
        <h1 className='text-2xl font-medium'>What We Do</h1>
    </div>

    <div className='lg:hidden flex flex-col items-center mt-4 pb-24'>
        

        {/* Cards */}
        <div className='flex flex-col box-border'>

            {/* Performance Marketing */}
            <div className='flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]'>
                <img src={ImagePerformace} alt="performance_marketing_image" />
                <h3 className='font-medium text-lg'>Performance Marketing</h3>
                <div className='flex flex-row items-center justify-center text-center pt-2'>
                    <p className='text-sm md:text-base leading-tight px-4 md:px-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibul sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                </div>
                <div className='flex flex-row my-6 items-center'>
                    <button className='border-none ring-0 text-[#0049FA] text-sm'>Read More</button>
                    <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                </div>

            </div>
            {/* End of the card.... */}

            {/* UI/UX Design */}
            <div className='flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]'>
                <img src={ImageUiUx} alt="UI/UX Design image" />
                <h3 className='font-medium text-lg'>UX/UI Design</h3>
                <div className='flex flex-row items-center justify-center text-center pt-2'>
                    <p className='text-sm md:text-base leading-tight px-4 md:px-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibul sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                </div>
                <div className='flex flex-row my-6 items-center'>
                    <button className='border-none ring-0 text-[#0049FA] text-sm'>Read More</button>
                    <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                </div>

            </div>
            {/* End of the card.... */}

            {/* Visual Branding */}
            <div className='flex flex-col bg-white my-5 items-center box-border w-[85vw] border-b-[4px] rounded-md border-[#0049FA]'>
                <img src={ImagePerformace} alt="performance_marketing_image" />
                <h3 className='font-medium text-lg'>Visual Branding</h3>
                <div className='flex flex-row items-center justify-center text-center pt-2'>
                    <p className='text-sm md:text-base leading-tight px-4 md:px-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibul sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                </div>
                <div className='flex flex-row my-6 items-center'>
                    <button className='border-none ring-0 text-[#0049FA] text-sm'>Read More</button>
                    <img className='ml-2 h-3' src={ArrowRight} alt="arrow_right" />
                </div>

            </div>
            {/* End of the card.... */}
        </div>



    </div>

    {/* ========================================  Below the Cards ===================================================== */}


    {/* ###################################   Small and Medium Screen only - for the Dark part ####################################### */}
    <div className='lg:hidden box-border bg-[#080816] '>
        {/* Cards */}
        <div className='flex flex-col pt-20 pb-20 md:px-[4rem]'>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 1 :: Enhanced Precision Targeting At Scale. */}
            <div className='flex flex-col items-center justify-end text-[#BEBEBE] md:pb-[2.2rem] pb-6 mb-10'>

                {/* Logo is Here. */}
                <img className='w-[10.75rem] h-[10.75rem]' src={EnPreTar} alt="Enhanced Precision Targeting At Scale"/>

                {/* Text */}
                <div className='flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-xl font-semibold text-white'>
                        <h1>Enhanced Precision Targeting.</h1>
                        <h1>At Scale.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-sm leading-relaxed  '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-6 px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* End of card 1 */}

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 2 :: Creatives and Communication.On Demand. */}
            <div className='flex flex-col items-center justify-end text-[#BEBEBE] pb-4 my-10'>

                {/* Logo is Here. */}
                <img className='w-[11.375rem] h-[9.2rem]' src={CreComDem} alt="Creatives and Communication.On Demand."/>

                {/* Text */}
                <div className='flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-xl font-semibold text-white'>
                        <h1>Creatives and Communication.</h1>
                        <h1>On Demand.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-sm leading-relaxed '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-6 px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* End of card 2 */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 3 :: Data Driven Optimization.At Ease. */}
            <div className='flex flex-col items-center justify-end text-[#BEBEBE] pb-4 mt-10'>

                {/* Logo is Here. */}
                <img className='w-[10.75rem] h-[10.7rem]' src={DatDriOpr} alt="Data Driven Optimization.At Ease."/>

                {/* Text */}
                <div className='flex flex-col justify-start pl-10 pr-10 mt-[1.9rem]'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-xl font-semibold text-white'>
                        <h1>Data Driven Optimization.</h1>
                        <h1>At Ease.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-sm leading-relaxed '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-6 px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* End of card 3 */}

        </div>
        {/* End of cards...... */}
    </div>
    {/* End of small screen dark part...... */}





    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/* ###################################   Large Screen only - for the Dark part ####################################### */}
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


    <div className='hidden lg:block pb-6'>

        <div className='flex flex-col' ref={cardRef}>
            {/* Cards Goes here... */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 1 :: Enhanced Precision Targeting At Scale. */}
            <div className='cards flex flex-row items-center justify-between text-[#BEBEBE] pb-4 mb-10 mr-[10rem] bg-[#080816] rounded-r-lg border-r-8 border-[#0049FA]' id="cardone">

                {/* Logo is Here. */}
                <div className='flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]'>
                 <img className='p-6 w-[15.625rem] h-[15.625]' src={EnPreTar} alt="Enhanced Precision Targeting At Scale"/>
                </div>


                {/* Text */}
                <div className='flex flex-1 pt-[2rem] pb-[2rem]'>
                <div className='flex flex-col justify-start pl-2 py-16 pr-36'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-2xl font-semibold text-white'>
                        <h1>Enhanced Precision Targeting.</h1>
                        <h1>At Scale.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-base leading-relaxed  '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-[2rem] px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

            </div>
            </div>
            {/* End of card 1 */}


            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 2 :: Creatives and Communication.On Demand. */}
            <div className='flex flex-row justify-end my-12'>
            <div className='cards flex flex-row-reverse items-center justify-between text-[#BEBEBE] pb-4 mb-10 bg-[#080816] ml-[10rem] rounded-l-lg border-l-8 border-[#0049FA] ' id="cardtwo">

                {/* Logo is Here. */}
                <div className='flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]'>
                <img className='p-6 w-[19.3rem] h-[15.625rem]' src={CreComDem} alt="Creatives and Communication.On Demand."/>
                </div>


                {/* Text */}
                <div className='flex flex-1 pt-[2rem] pb-[2rem]'>
                <div className='flex flex-col justify-start pl-24 py-16 pr-16'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-2xl font-semibold text-white'>
                        <h1>Creatives and Communication.</h1>
                        <h1>On Demand.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-base leading-relaxed  '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-[2rem] px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

                </div>
                </div>
                </div>
            {/* End of card 2 */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CARD 3 :: Data Driven Optimization.At Ease. */}
            <div className='flex flex-row items-center justify-between text-[#BEBEBE] pb-4 mb-10 bg-[#080816] mr-[10rem] rounded-r-lg border-r-8 border-[#0049FA]' id="cardthree">

                {/* Logo is Here. */}
                <div className='flex flex-1 justify-center items-center mt-[2rem] mb-[2rem]'>
                 <img className='p-6 w-[15.625rem] h-[15.625]' src={DatDriOpr} alt="Data Driven Optimization.At Ease."/>
                </div>


                {/* Text */}
                <div className='flex flex-1 pt-[2rem] pb-[2rem]'>
                <div className='flex flex-col justify-start pl-2 py-16 pr-36'>

                    {/* Heading */}
                    <div className='flex flex-col justify-start text-2xl font-semibold text-white'>
                        <h1>Data Driven Optimization.</h1>
                        <h1>At Ease.</h1>
                    </div>

                    {/* Paragraph ( Relating to Enhancement precision targeting.. ) */}
                    <div className='pt-4 text-base leading-relaxed  '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus id risus eros. Fames ut non in purus at.</p>
                    </div>
                    {/* Percentages.. */}
                    <div className='flex flex-row justify-between items-center mt-[2rem] px-4'>

                        {/* First % box */}
                        <div className=' flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>16%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>Growth</p>
                        </div>

                        {/* Second % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>20%</h1>
                            <p className='text-sm'>Increase in</p>
                            <p className='text-sm'>CTR</p>
                        </div>

                        {/* Third % box */}
                        <div className='flex flex-col items-center justify-center font-normal'>
                            <h1 className='text-xl font-normal text-white'>15%</h1>
                            <p className='text-sm'>Reduction in</p>
                            <p className='text-sm'>CAC</p>
                        </div>

                    </div>
                </div>

            </div>
            </div>
            {/* End of card 3 */}



        </div>
        
    
    </div>



    {/* =========================================  Below the Dark Cards  ==================================   */}

    {/* ###################################   Platforms and Tools  ######################################  */}
    <div className='flex flex-col justify-center items-center pt-16 lg:pt-0'>
        {/* Text */}
        <div className='flex flex-col justify-center items-center lg:pb-4 lg:pt-2 md:px-28 px-16'>
            <h2 className='text-lg lg:text-3xl lg:font-medium leading-tight text-[#080816] text-center'>Platforms and tools that help us enhance your performance</h2>
            <p className='text-[#5D5D5D] pt-4 lg:pt-1 lg:text-sm leading-normal text-center text-xs'>Lorem sit amet, consectetur adipiscing elit. Eu vestibulum sollicitudin nibh enim lectus.</p>
        </div>
        {/* Logos (Social Media) lg-screen */}
        <div className='hidden lg:block'>
          <div className='flex flex-row justify-evenly py-6 w-[100vw]'>
            {/* FaceBook */}
            <svg className='w-[3.2rem] h-[4rem]' width="40" height="40" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.5 31C62.5 13.875 48.625 0 31.5 0C14.375 0 0.5 13.875 0.5 31C0.5 46.5 11.75 59.375 26.625 61.625V40H18.75V31H26.625V24.25C26.625 16.5 31.25 12.125 38.25 12.125C41.75 12.125 45.25 12.75 45.25 12.75V20.375H41.375C37.5 20.375 36.25 22.75 36.25 25.25V31H44.875L43.5 40H36.25V61.625C51.125 59.375 62.5 46.5 62.5 31Z" fill="#5D5D5D"/>
            </svg>
            {/* Twitter */}
            <svg className='w-[3.2rem] h-[4rem]' width="40" height="40" viewBox="0 0 65 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.875 13C60.375 11.125 62.625 8.875 64.375 6.25C62.125 7.25 59.5 8 56.875 8.25C59.625 6.625 61.625 4.125 62.625 1C60.125 2.5 57.25 3.625 54.375 4.25C51.875 1.625 48.5 0.125 44.75 0.125C37.5 0.125 31.625 6 31.625 13.25C31.625 14.25 31.75 15.25 32 16.25C21.125 15.625 11.375 10.375 4.875 2.5C3.75 4.375 3.125 6.625 3.125 9.125C3.125 13.625 5.375 17.625 9 20C6.875 19.875 4.75 19.375 3 18.375V18.5C3 24.875 7.5 30.125 13.5 31.375C12.5 31.625 11.25 31.875 10.125 31.875C9.25 31.875 8.5 31.75 7.625 31.625C9.25 36.875 14.125 40.625 19.875 40.75C15.375 44.25 9.75 46.375 3.625 46.375C2.5 46.375 1.5 46.25 0.5 46.125C6.25 49.875 13.125 52 20.625 52C44.75 52 57.875 32.125 57.875 14.75C57.875 14.125 57.875 13.625 57.875 13Z" fill="#5D5D5D"/>
            </svg>
            {/* Linked_In */}
            <svg className='w-[3.2rem] h-[4rem]' width="35" height="35" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5 0H4.375C2.25 0 0.5 1.875 0.5 4.125V52C0.5 54.25 2.25 56 4.375 56H52.5C54.625 56 56.5 54.25 56.5 52V4.125C56.5 1.875 54.625 0 52.5 0ZM17.375 48H9.125V21.375H17.375V48ZM13.25 17.625C10.5 17.625 8.375 15.5 8.375 12.875C8.375 10.25 10.5 8 13.25 8C15.875 8 18 10.25 18 12.875C18 15.5 15.875 17.625 13.25 17.625ZM48.5 48H40.125V35C40.125 32 40.125 28 35.875 28C31.5 28 30.875 31.375 30.875 34.875V48H22.625V21.375H30.5V25H30.625C31.75 22.875 34.5 20.625 38.5 20.625C46.875 20.625 48.5 26.25 48.5 33.375V48Z" fill="#5D5D5D"/>
            </svg>
            {/* Youtube */}
            <svg className='w-[3.2rem] h-[4rem]' width="40" height="40" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.125 7.625C66.375 4.625 64 2.25 61.125 1.5C55.75 0 34.5 0 34.5 0C34.5 0 13.125 0 7.75 1.5C4.875 2.25 2.5 4.625 1.75 7.625C0.25 12.875 0.25 24.125 0.25 24.125C0.25 24.125 0.25 35.25 1.75 40.625C2.5 43.625 4.875 45.875 7.75 46.625C13.125 48 34.5 48 34.5 48C34.5 48 55.75 48 61.125 46.625C64 45.875 66.375 43.625 67.125 40.625C68.625 35.25 68.625 24.125 68.625 24.125C68.625 24.125 68.625 12.875 67.125 7.625ZM27.5 34.25V14L45.25 24.125L27.5 34.25Z" fill="#5D5D5D"/>
            </svg>
            {/* SnapChat */}
            <svg className='w-[3.2rem] h-[4rem]' width="40" height="40" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 0C14.375 0 0.5 13.875 0.5 31C0.5 48.125 14.375 62 31.5 62C48.625 62 62.5 48.125 62.5 31C62.5 13.875 48.625 0 31.5 0ZM52.625 42.375C52.25 43.375 50.375 44.125 47 44.75C46.875 44.875 46.75 45.875 46.5 46.625C46.375 47.125 46 47.375 45.5 47.375C44.625 47.375 43.875 47 42.25 47C40 47 39.25 47.5 37.5 48.75C35.75 50 34 51.125 31.375 51C28.75 51.25 26.625 49.625 25.375 48.75C23.625 47.5 22.875 47 20.625 47C19.125 47 18.125 47.5 17.5 47.5C16.75 47.5 16.5 47 16.375 46.75C16.125 45.875 16 44.875 15.875 44.75C14.125 44.375 10.25 43.75 10.125 42C10.125 41.625 10.5 41.125 10.875 41.125C16.75 40.125 19.25 34.25 19.375 34C19.375 34 19.375 33.875 19.5 33.875C19.75 33.25 19.875 32.75 19.625 32.375C19.25 31.375 17.375 31 16.625 30.75C14.625 29.875 14.375 29 14.5 28.375C14.75 27.375 16.375 26.75 17.25 27.125C18 27.5 18.625 27.625 19.25 27.625C19.625 27.625 19.875 27.5 20 27.5C19.875 24.5 19.5 20.25 20.5 17.875C23.375 11.5 29.25 11 31 11C31.125 11 31.75 11 31.875 11C36.25 11 40.375 13.25 42.375 17.875C43.5 20.25 43 24.5 42.875 27.5C43 27.5 43.25 27.625 43.625 27.625C44.125 27.625 44.75 27.5 45.375 27.125C45.875 26.875 46.625 26.875 47.125 27.125C47.875 27.375 48.375 28 48.375 28.625C48.5 29.375 47.75 30.125 46.25 30.625C46.125 30.75 45.875 30.875 45.625 30.875C44.875 31.125 43.625 31.5 43.25 32.375C43.125 32.75 43.25 33.25 43.5 33.875C43.625 34.125 46.25 40.125 52 41.125C52.5 41.25 52.875 41.75 52.625 42.375Z" fill="#5D5D5D"/>
            </svg>
            {/* Google */}
            <svg className='w-[3.2rem] h-[4rem]' width="40" height="40" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.5 31.75C61.5 29.75 61.25 28.25 61 26.625H31.5V37.25H49C48.375 41.875 43.75 50.625 31.5 50.625C20.875 50.625 12.25 41.875 12.25 31C12.25 13.625 32.75 5.625 43.75 16.25L52.25 8.125C46.875 3.125 39.75 0 31.5 0C14.25 0 0.5 13.875 0.5 31C0.5 48.25 14.25 62 31.5 62C49.375 62 61.5 49.5 61.5 31.75Z" fill="#5D5D5D"/>
            </svg>
            {/* Instagram */}
            <svg className='w-[3.2rem] h-[4rem]' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 13.625C21 13.625 14.625 20.125 14.625 28C14.625 36 21 42.375 29 42.375C36.875 42.375 43.375 36 43.375 28C43.375 20.125 36.875 13.625 29 13.625ZM29 37.375C23.875 37.375 19.625 33.25 19.625 28C19.625 22.875 23.75 18.75 29 18.75C34.125 18.75 38.25 22.875 38.25 28C38.25 33.25 34.125 37.375 29 37.375ZM47.25 13.125C47.25 11.25 45.75 9.75 43.875 9.75C42 9.75 40.5 11.25 40.5 13.125C40.5 15 42 16.5 43.875 16.5C45.75 16.5 47.25 15 47.25 13.125ZM56.75 16.5C56.5 12 55.5 8 52.25 4.75C49 1.5 45 0.5 40.5 0.25C35.875 0 22 0 17.375 0.25C12.875 0.5 9 1.5 5.625 4.75C2.375 8 1.375 12 1.125 16.5C0.875 21.125 0.875 35 1.125 39.625C1.375 44.125 2.375 48 5.625 51.375C9 54.625 12.875 55.625 17.375 55.875C22 56.125 35.875 56.125 40.5 55.875C45 55.625 49 54.625 52.25 51.375C55.5 48 56.5 44.125 56.75 39.625C57 35 57 21.125 56.75 16.5ZM50.75 44.5C49.875 47 47.875 48.875 45.5 49.875C41.75 51.375 33 51 29 51C24.875 51 16.125 51.375 12.5 49.875C10 48.875 8.125 47 7.125 44.5C5.625 40.875 6 32.125 6 28C6 24 5.625 15.25 7.125 11.5C8.125 9.125 10 7.25 12.5 6.25C16.125 4.75 24.875 5.125 29 5.125C33 5.125 41.75 4.75 45.5 6.25C47.875 7.125 49.75 9.125 50.75 11.5C52.25 15.25 51.875 24 51.875 28C51.875 32.125 52.25 40.875 50.75 44.5Z" fill="#5D5D5D"/>
            </svg>

          </div>
                  
        {/* ///////////////////////............................  Newly added section  ...........................///////////////////////////// */}
        {/* ...................................................  Our Partners Section  ....................................................... */}

            <div className='bg-[#080816] flex flex-col mt-[6.5rem]'>
                <h1 className='text-3xl text-center text-white pt-[5.5rem]'>Our Partners</h1>
                {/*...... Partner logos........ */}
                <div className='flex justify-between mx-[10rem] pb-[4rem] pt-[2.7rem]'>
                    <img className='lg:w-[9.5rem] lg:h-[6rem] xl:w-[11rem] xl:h-[7rem]' src={Shopify} alt="shopify Logo" />
                    <img className='lg:w-[12rem] lg:h-[7rem] xl:w-[14rem] xl:h-[8rem]' src={SearchTap} alt="SearchTap Logo" />
                    <img className='lg:w-[8.4rem] lg:h-[5.5rem] xl:w-[10.3rem] xl:h-[6.5rem]' src={Wigzo} alt="Wigzo Logo" />
                    <img className='lg:w-[12.5rem] lg:h-[6.5rem] xl:w-[15rem] xl:h-[7.5rem]' src={BiteSpeed} alt="BiteSpeed Logo" />
                </div>
            </div>
        </div>

        {/* Small Mediium Screen */}
        <div className='lg:hidden pt-2'>
        <div className='flex flex-row justify-evenly pt-6 pb-16 w-[100vw] overflow-auto'>
            {/* FaceBook */}
            <svg className='w-[2.2rem] h-[3rem]' width="40" height="40" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.5 31C62.5 13.875 48.625 0 31.5 0C14.375 0 0.5 13.875 0.5 31C0.5 46.5 11.75 59.375 26.625 61.625V40H18.75V31H26.625V24.25C26.625 16.5 31.25 12.125 38.25 12.125C41.75 12.125 45.25 12.75 45.25 12.75V20.375H41.375C37.5 20.375 36.25 22.75 36.25 25.25V31H44.875L43.5 40H36.25V61.625C51.125 59.375 62.5 46.5 62.5 31Z" fill="#5D5D5D"/>
            </svg>
            {/* Twitter */}
            <svg className='w-[2.2rem] h-[3rem]' width="40" height="40" viewBox="0 0 65 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.875 13C60.375 11.125 62.625 8.875 64.375 6.25C62.125 7.25 59.5 8 56.875 8.25C59.625 6.625 61.625 4.125 62.625 1C60.125 2.5 57.25 3.625 54.375 4.25C51.875 1.625 48.5 0.125 44.75 0.125C37.5 0.125 31.625 6 31.625 13.25C31.625 14.25 31.75 15.25 32 16.25C21.125 15.625 11.375 10.375 4.875 2.5C3.75 4.375 3.125 6.625 3.125 9.125C3.125 13.625 5.375 17.625 9 20C6.875 19.875 4.75 19.375 3 18.375V18.5C3 24.875 7.5 30.125 13.5 31.375C12.5 31.625 11.25 31.875 10.125 31.875C9.25 31.875 8.5 31.75 7.625 31.625C9.25 36.875 14.125 40.625 19.875 40.75C15.375 44.25 9.75 46.375 3.625 46.375C2.5 46.375 1.5 46.25 0.5 46.125C6.25 49.875 13.125 52 20.625 52C44.75 52 57.875 32.125 57.875 14.75C57.875 14.125 57.875 13.625 57.875 13Z" fill="#5D5D5D"/>
            </svg>
            {/* Linked_In */}
            <svg className='w-[2.2rem] h-[3rem]' width="35" height="35" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5 0H4.375C2.25 0 0.5 1.875 0.5 4.125V52C0.5 54.25 2.25 56 4.375 56H52.5C54.625 56 56.5 54.25 56.5 52V4.125C56.5 1.875 54.625 0 52.5 0ZM17.375 48H9.125V21.375H17.375V48ZM13.25 17.625C10.5 17.625 8.375 15.5 8.375 12.875C8.375 10.25 10.5 8 13.25 8C15.875 8 18 10.25 18 12.875C18 15.5 15.875 17.625 13.25 17.625ZM48.5 48H40.125V35C40.125 32 40.125 28 35.875 28C31.5 28 30.875 31.375 30.875 34.875V48H22.625V21.375H30.5V25H30.625C31.75 22.875 34.5 20.625 38.5 20.625C46.875 20.625 48.5 26.25 48.5 33.375V48Z" fill="#5D5D5D"/>
            </svg>
            {/* Youtube */}
            <svg className='w-[2.2rem] h-[3rem]' width="40" height="40" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.125 7.625C66.375 4.625 64 2.25 61.125 1.5C55.75 0 34.5 0 34.5 0C34.5 0 13.125 0 7.75 1.5C4.875 2.25 2.5 4.625 1.75 7.625C0.25 12.875 0.25 24.125 0.25 24.125C0.25 24.125 0.25 35.25 1.75 40.625C2.5 43.625 4.875 45.875 7.75 46.625C13.125 48 34.5 48 34.5 48C34.5 48 55.75 48 61.125 46.625C64 45.875 66.375 43.625 67.125 40.625C68.625 35.25 68.625 24.125 68.625 24.125C68.625 24.125 68.625 12.875 67.125 7.625ZM27.5 34.25V14L45.25 24.125L27.5 34.25Z" fill="#5D5D5D"/>
            </svg>
            {/* SnapChat */}
            <svg className='w-[2.2rem] h-[3rem]' width="40" height="40" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 0C14.375 0 0.5 13.875 0.5 31C0.5 48.125 14.375 62 31.5 62C48.625 62 62.5 48.125 62.5 31C62.5 13.875 48.625 0 31.5 0ZM52.625 42.375C52.25 43.375 50.375 44.125 47 44.75C46.875 44.875 46.75 45.875 46.5 46.625C46.375 47.125 46 47.375 45.5 47.375C44.625 47.375 43.875 47 42.25 47C40 47 39.25 47.5 37.5 48.75C35.75 50 34 51.125 31.375 51C28.75 51.25 26.625 49.625 25.375 48.75C23.625 47.5 22.875 47 20.625 47C19.125 47 18.125 47.5 17.5 47.5C16.75 47.5 16.5 47 16.375 46.75C16.125 45.875 16 44.875 15.875 44.75C14.125 44.375 10.25 43.75 10.125 42C10.125 41.625 10.5 41.125 10.875 41.125C16.75 40.125 19.25 34.25 19.375 34C19.375 34 19.375 33.875 19.5 33.875C19.75 33.25 19.875 32.75 19.625 32.375C19.25 31.375 17.375 31 16.625 30.75C14.625 29.875 14.375 29 14.5 28.375C14.75 27.375 16.375 26.75 17.25 27.125C18 27.5 18.625 27.625 19.25 27.625C19.625 27.625 19.875 27.5 20 27.5C19.875 24.5 19.5 20.25 20.5 17.875C23.375 11.5 29.25 11 31 11C31.125 11 31.75 11 31.875 11C36.25 11 40.375 13.25 42.375 17.875C43.5 20.25 43 24.5 42.875 27.5C43 27.5 43.25 27.625 43.625 27.625C44.125 27.625 44.75 27.5 45.375 27.125C45.875 26.875 46.625 26.875 47.125 27.125C47.875 27.375 48.375 28 48.375 28.625C48.5 29.375 47.75 30.125 46.25 30.625C46.125 30.75 45.875 30.875 45.625 30.875C44.875 31.125 43.625 31.5 43.25 32.375C43.125 32.75 43.25 33.25 43.5 33.875C43.625 34.125 46.25 40.125 52 41.125C52.5 41.25 52.875 41.75 52.625 42.375Z" fill="#5D5D5D"/>
            </svg>
            {/* Instagram */}
            <svg className='w-[2.2rem] h-[3rem]' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 13.625C21 13.625 14.625 20.125 14.625 28C14.625 36 21 42.375 29 42.375C36.875 42.375 43.375 36 43.375 28C43.375 20.125 36.875 13.625 29 13.625ZM29 37.375C23.875 37.375 19.625 33.25 19.625 28C19.625 22.875 23.75 18.75 29 18.75C34.125 18.75 38.25 22.875 38.25 28C38.25 33.25 34.125 37.375 29 37.375ZM47.25 13.125C47.25 11.25 45.75 9.75 43.875 9.75C42 9.75 40.5 11.25 40.5 13.125C40.5 15 42 16.5 43.875 16.5C45.75 16.5 47.25 15 47.25 13.125ZM56.75 16.5C56.5 12 55.5 8 52.25 4.75C49 1.5 45 0.5 40.5 0.25C35.875 0 22 0 17.375 0.25C12.875 0.5 9 1.5 5.625 4.75C2.375 8 1.375 12 1.125 16.5C0.875 21.125 0.875 35 1.125 39.625C1.375 44.125 2.375 48 5.625 51.375C9 54.625 12.875 55.625 17.375 55.875C22 56.125 35.875 56.125 40.5 55.875C45 55.625 49 54.625 52.25 51.375C55.5 48 56.5 44.125 56.75 39.625C57 35 57 21.125 56.75 16.5ZM50.75 44.5C49.875 47 47.875 48.875 45.5 49.875C41.75 51.375 33 51 29 51C24.875 51 16.125 51.375 12.5 49.875C10 48.875 8.125 47 7.125 44.5C5.625 40.875 6 32.125 6 28C6 24 5.625 15.25 7.125 11.5C8.125 9.125 10 7.25 12.5 6.25C16.125 4.75 24.875 5.125 29 5.125C33 5.125 41.75 4.75 45.5 6.25C47.875 7.125 49.75 9.125 50.75 11.5C52.25 15.25 51.875 24 51.875 28C51.875 32.125 52.25 40.875 50.75 44.5Z" fill="#5D5D5D"/>
            </svg>
          </div>

        {/* ///////////////////////............................  Newly added section  ...........................///////////////////////////// */}
        {/* ...................................................  Our Partners Section  ....................................................... */}

        <div className='bg-[#080816] flex flex-col'>
                <h1 className='text-2xl text-center text-white pt-[6rem]'>Our Partners</h1>
                {/*...... Partner logos........ */}
                <div className='flex flex-col justify-between pb-[3.4rem] pt-[2.6rem] px-[3rem] md:px-[10rem] sm:px-[8rem]'>
                    <div className='flex justify-between -mb-6'>
                        <img className='w-[7rem] h-[7rem] md:w-[8rem]' src={Shopify} alt="shopify Logo" />
                        <img className='w-[7rem] h-[5rem] mt-2 md:w-[8rem]' src={Wigzo} alt="Wigzo Logo" />
                    </div>
                    <div className='flex justify-between -mt-6'>
                        <img className='w-[7rem] h-[8rem] md:w-[8rem]' src={SearchTap} alt="SearchTap Logo" />
                        <img className='w-[7rem] h-[7.5rem] md:w-[8rem]' src={BiteSpeed} alt="BiteSpeed Logo" />
                    </div>
                </div>
            </div>
        </div>

    </div>

    </main>
    </>
  )
}

export default WhatWeDo;