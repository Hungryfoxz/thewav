import React,{useState,useLayoutEffect} from 'react';
import { useRef } from 'react';

import YsBlack from '../images/blogs/ysblack.png';
import AwBlack from '../images/blogs/awblack.png';
import OlBlack from '../images/blogs/olblack.png';
import ZbBlack from '../images/blogs/zbblack.png';

import YsBlue from '../images/blogs/ysblue.png';
import AwBlue from '../images/blogs/awblue.png';
import OlBlue from '../images/blogs/olblue.png';
import ZbBlue from '../images/blogs/zbblue.png';

import CardOne from '../images/blogs/cardone.jpg';
import CardTwo from '../images/blogs/cardtwo.jpg';
import CardThree from '../images/blogs/cardthree.jpg';

// Gsap animations ::
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const BlogsAndArticles = () => {

    const data = [{id:'0', val:'img1', header:'TheWav Turned 2: Helping startups to turn into trusted brands', para:'1 YourStory India, November 2022'},
                  {id:'1', val:'img2', header:'TheWav Turned 2: Helping startups to turn into trusted brands', para:'2 Awwards India, November 2022'},
                  {id:'2', val:'img3', header:'TheWav Turned 2: Helping startups to turn into trusted brands', para:'3 Outlook India, November 2022'},
                  {id:'3', val:'img4', header:'TheWav Turned 2: Helping startups to turn into trusted brands', para:'4 ZeeBusiness India, November 2022'} ]


    // [=====================================================================================================================================]
    // ******************** Animation of the sliding text..
    const paraEaseRef = useRef(null)
    useLayoutEffect(() => {
        const para = paraEaseRef.current;
        gsap.fromTo(para.querySelector("#paraEase"),{y:70,opacity:0, duration: 1},{y:0,opacity:1,duration: 1,ease:'Power4.out'})
        // gsap.fromTo(para.querySelector("#headerEase"),{y:10,opacity:0, duration: 1},{y:0,opacity:1,duration: 1,ease:'Power1.out'})
        // !If you also want the header to animate , uncomment the above lines..("the wav turned 2....")

    })

    // *********************  Animation of the blog card..
    // To be done if the startup permits..


    // [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
    // Navigator/Slider ...  
    // This is for large screen...
    const navigatorRef = useRef(null);
    // console.log(navigatorRef.current.children)

    const funcCycle = (number) =>{
        for(let i=0;i<4;i++)
        {
            if(i===number){
                navigatorRef.current.children[i].classList.add("active")
                // addImg(i);
            }else{
                navigatorRef.current.children[i].classList.remove("active")
            }
        }
    }   
    

    const [img1, setImg1] = useState(true);
    const [img2, setImg2] = useState(false);
    const [img3, setImg3] = useState(false);
    const [img4, setImg4] = useState(false);

    const navigatorClick =(e) => {
        
            if(e.target.id){
                if(e.target.id === "img1"){
                    funcCycle(0);
                    setImg1(true);
                }else if(e.target.id === "img2"){
                    funcCycle(1);
                    setImg2(true);
                }else if(e.target.id === "img3"){
                    funcCycle(2);
                    setImg3(true);
                }else if(e.target.id === "img4"){
                    funcCycle(3);
                    setImg4(true);
                }else{
                    console.log("Is not suppose to happen...")
                }
            }

    }

    // [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
    // Navigator/Slider ....
    // This is for Small screen...
    const navigatorSsRef = useRef(null);
    // console.log(navigatorRef.current.children)
    const funcSsCycle = (number) =>{
        for(let i=0;i<4;i++)
        {
            if(i===number){
                navigatorSsRef.current.children[i].classList.add("active")
            }else{
                navigatorSsRef.current.children[i].classList.remove("active")
            }
        }
    } 



    const navigatorSsClick =(e) => {
        if(e.target.id){
            if(e.target.id === "img1"){
                funcSsCycle(0);
                setImg1(true);

            }else if(e.target.id === "img2"){
                funcSsCycle(1);
                setImg2(true);

            }else if(e.target.id === "img3"){
                funcSsCycle(2);
                setImg3(true);

            }else if(e.target.id === "img4"){
                funcSsCycle(3);
                setImg4(true);
            }
        }
    }




  return (
    <>
    <main className='w-[100vw] relative z-[40] bg-white pt-10 lg:pt-14'>
        {/* Thewav Turned 2 */}
    <div className='text-center md:pt-4 pt-10 relative' ref={paraEaseRef}>
        {
            (img1)?
                
                    (<>
                    <h2 className='text-lg px-10 lg:text-2xl text-[#080816] font-semibold' id='headerEase'>{data[0].header}</h2>
                    <p className='text-base text-[#5D5D5D] pt-2 paraEase' id='paraEase'>{data[0].para}</p>
                    </>)
                
            :(
                (img2)?
                
                    <>
                    <h2 className='text-lg px-10 lg:text-2xl text-[#080816] font-semibold' id='headerEase'>{data[1].header}</h2>
                    <p className='text-base text-[#5D5D5D] pt-2 paraEase' id='paraEase'>{data[1].para}</p>
                    </>
                
                :(
                        (img3)?
                
                            <>
                            <h2 className='text-lg px-10 lg:text-2xl text-[#080816] font-semibold' id='headerEase'>{data[2].header}</h2>
                            <p className='text-base text-[#5D5D5D] pt-2 paraEase' id='paraEase'>{data[2].para}</p>
                            </>
               
                        :(img4)?
                    
                            <>
                            <h2 className='text-lg px-10 lg:text-2xl text-[#080816] font-semibold' id='headerEase'>{data[3].header}</h2>
                            <p className='text-base text-[#5D5D5D] pt-2 paraEase' id='paraEase'>{data[3].para}</p>
                            </>:''
                    )
            )  
        }
    </div>


    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
    {/* ####################################################################### */}
    {/* 
    // !YOURSTORY logo for medium and large screens 
    */}
    {/* The slider is here */} 
    <div className="LBAAnavigtion_area md:block hidden pt-14 pb-10">
        <div className="LBAAnavigator">  
                
            <ul className="LBAAnavigation_list lg:px-[10%] md:px-[8.5%]" ref={navigatorRef}>

                <li className="LBAAlist_item first" onClick={(e)=>{navigatorClick(e);setImg4(false);setImg2(false);setImg3(false)}} id="0">
                    {(!img1)?
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]' src={YsBlack} id="img1" alt='navigator image'/>
                    :
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]' src={YsBlue} id="img1" alt='navigator image'/>
                    }
                </li>
                <li className="LBAAlist_item" onClick={(e)=>{navigatorClick(e);setImg1(false);setImg4(false);setImg3(false)}} id="1">
                    {(!img2)?
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[9rem]' src={AwBlack} id="img2" alt='navigator image'/>
                    :    
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[9rem]' src={AwBlue} id="img2" alt='navigator image'/>
                    }
                </li>
                <li className="LBAAlist_item" onClick={(e)=>{navigatorClick(e);setImg1(false);setImg2(false);setImg4(false)}} id="2">
                    {(!img3)?
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]' src={OlBlack} id="img3" alt='navigator image'/>
                    :
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]' src={OlBlue} id="img3" alt='navigator image'/>
                    }
                </li>
                <li className="LBAAlist_item" onClick={(e)=>{navigatorClick(e);setImg1(false);setImg2(false);setImg3(false)}} id="3">
                    {(img4)?
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[6.8rem] md:mr-[3px] lg:w-[8.3rem] lg:pr-[1px]' src={ZbBlue} id="img4" alt='navigator image'/>
                    :    
                    <img className='lg:h-[3.4rem] md:h-[2.7rem] md:w-[7rem] lg:w-[8.5rem]' src={ZbBlack} id="img4" alt='navigator image'/>
                    }
                </li>
                
                <div className="LBAAnavigator_slider"></div> 

            </ul>
        </div>
    </div>

    {/* ####################################################################### */}
    {/* 
    // ! YOURSTORY logo for xs and small screens 
    */}
    {/* The slider is here */} 
    <div className='LBAAnavigation_area_ss md:hidden'>
        <div className="LBAAnavigator_ss">
            <div className='LBAAnavigator_content_ss'>
            <ul className="LBAAnavigation_list_ss"  ref={navigatorSsRef}>

                <li className="LBAAlist_item_ss first pl-[24%]" onClick={(e)=>{navigatorSsClick(e);setImg4(false);setImg2(false);setImg3(false)}} id="0">
                    {(!img1)?
                    <img className='h-[2.5rem] w-[7rem]' src={YsBlack} id="img1" alt='navigator image'/>
                    :
                    <img className='h-[2.5rem] w-[7rem]' src={YsBlue} id="img1" alt='navigator image'/>
                    }
                </li>
                <li className="LBAAlist_item_ss second" onClick={(e)=>{navigatorSsClick(e);setImg4(false);setImg1(false);setImg3(false)}} id="1">
                    {(!img2)?
                    <img className='h-[2.5rem] w-[7rem]' src={AwBlack} id="img2" alt='navigator image'/>
                    :
                    <img className='h-[2.5rem] w-[7rem]' src={AwBlue} id="img2" alt='navigator image'/>
                    }
                </li>
                <li className="LBAAlist_item_ss third" onClick={(e)=>{navigatorSsClick(e);setImg4(false);setImg2(false);setImg1(false)}} id="2">
                    {(!img3)?
                    <img className='h-[2.5rem] w-[7rem]' src={OlBlack} id="img3" alt='navigator image'/>
                    :
                    <img className='h-[2.5rem] w-[7rem]' src={OlBlue} id="img3" alt='navigator image'/>
                }
                </li>
                <li className="LBAAlist_item_ss fourth pr-[35%]" onClick={(e)=>{navigatorSsClick(e);setImg1(false);setImg2(false);setImg3(false)}} id="3">
                    {(!img4)?
                    <img className='h-[2.5rem] w-[7rem]' src={ZbBlack} id="img4" alt='navigator image'/>
                    :
                    <img className='h-[2.5rem] w-[7rem]' src={ZbBlue} id="img4" alt='navigator image'/>
                }
                </li>

            </ul>

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
                <div className='flex flex-col py-4 lg:px-8 md:px-4 px-5'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Performance</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 md:pr-4 lg:pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
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

            {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
            {/* Card 02 :: Thewav revolutionizes the way startups grow */}
            <div className='flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200'>
                {/* Image */}
                <img src={CardTwo} alt="card one image" />
                {/* Text */}
                <div className='flex flex-col py-4 lg:px-8 md:px-4 px-5'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Web Design</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 md:pr-4 lg:pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
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
            <div  className='flex flex-col rounded-lg overflow-hidden md:max-w-[32.5vw] bg-[#F7F7F7] md:mx-2 my-4 mx-[1.9rem] lg:hover:shadow-lg ease-in-out duration-200'>
                {/* Image */}
                <img src={CardThree} alt="card one image" />
                {/* Text */}
                <div className='flex flex-col py-4 lg:px-8 md:px-4 px-5'>
                    <p className='text-xs text-[#000037] font-[600] pt-2'>Web Design</p>
                    <h1 className='text-lg md:text-sm lg:text-lg pt-4 md:pr-4 lg:pr-16 font-[700]'>Thewav revolutionizes the way startups grow</h1>
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