import React,{useState,useLayoutEffect} from 'react'
import styles from './Hero.module.css';
import Navbar from '../../../reusable/Navbar/Navbar.js'
// import GetInTouch from '../../../reusable/Buttons/GetInTouch';

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
import { useRef } from 'react';
// import CustomerImage2 from '../images/customer2.png';
// import CustomerImage3 from '../images/customer3.png';

// Gsap
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {


    // Testimonials array..
    const testimonials = [{id:1,data:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui, adipiscing nisi blandit lacinia. Tempus, volutpat amet sed lacus. Egestas eget nec amet, volutpat amet bibendum nunc tortor, eu. Nisi, odio elit tellus sit risus. Tortor dui sit nisl, ut aenean nisl. Congue tempus quis pulvinar magnis risus nec.”',img: CustomerImage , name:'Jane Doe', about: 'CEO, Unacademy', },
    {id:2,data:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui, adipiscing nisi blandit lacinia. Tempus, volutpat amet sed lacus. Egestas eget nec amet, volutpat amet bibendum nunc tortor, eu. Nisi, odio elit tellus sit risus. Tortor dui sit nisl, ut aenean nisl. Congue tempus quis pulvinar magnis risus nec.”',img: CustomerImage , name:'Jane2 Doe', about: 'CEO, Unacademy2', },
    {id:3,data:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui, adipiscing nisi blandit lacinia. Tempus, volutpat amet sed lacus. Egestas eget nec amet, volutpat amet bibendum nunc tortor, eu. Nisi, odio elit tellus sit risus. Tortor dui sit nisl, ut aenean nisl. Congue tempus quis pulvinar magnis risus nec.”',img: CustomerImage , name:'Jane3 Doe', about: 'CEO, Unacademy3',} ]
    
    console.log(testimonials.length)

    const [testimonialId, setTestimonialId] = useState(1)

    // [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
    // ! Gsap (main) animation >>>>>
    // [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
    
    const { innerHeight, innerWidth} = window;
    console.log(innerHeight)

    const mainRef = useRef(null)


    useLayoutEffect(() => {

      const mainReference = mainRef.current;


        // const animateScrollDownOne = gsap.fromTo(card.querySelector("#cardone"),{x:-1400, duration: 1},{x:0,duration:1.5,ease:'Power2.out'})
        // !NOte => Perfect scroll animation is showing some problems..Show scroll with snap is used..
        const tl = gsap.timeline()
        tl.to(mainReference.querySelector("#AnimationArrow"), { y:-10, opacity:.989, duration:0.2})
          .to(mainReference.querySelector("#AnimationArrow"),{  scaleX: 15.5,scaleY: 11 , zIndex: 50, duration: 2, ease: 'Power2.out'})
          // .to(mainReference.querySelector("BigWave"),{y:-500,opacity:0},'-=3')
          .to("#Myself",{backgroundColor: 'white',duration:3})
          // .to(".finalLogos",{toggleClass:'block'})
          .to(mainReference.querySelector("#FinalLogos"),{zIndex:70},'-=3')
          .to(mainReference.querySelector("#LightSection"),{zIndex:60,opacity:1},'-=3')
          // .to(mainReference.querySelector("#AnimationArrow"),{opacity:0})
          // .to(mainReference.querySelector("#ViewPort"),{opacity:0, duration:.5},'-=1')
          .to(mainReference.querySelector("#ViewPort"),{y:-700, opacity:0},'-=2.5')
          // .to(mainReference.querySelector('#ViewPort'),{y:()=>`+=${innerHeight}`})
          // .fromTo(mainReference.querySelector("#LightSection"),{opacity:0, zIndex:50, y:0},
          //                                                       {zIndex:60, opacity:1, y:()=>`-=${innerHeight-innerHeight/20}`,delay:-2},'-=.2')
          .fromTo(mainReference.querySelector("#UncademyLogo"),{opacity:0}, {opacity:1},'+=1').pause()

        const tl2 = gsap.timeline()
        tl2.to(mainReference.querySelector("#AnimationArrow"),{duaration:3,delay:1,ease:'Power4.out'}).pause()

        ScrollTrigger.create({
          trigger: mainReference.querySelector("#AnimationArrow"),
          animation: tl.play(),
          start: 'center+=10 center+=120',
          end:'center+=300 center+=-60',
        //   start:'top bottom',
        //   // end:()=>`-=${innerHeight-innerHeight/12}`,
        //   end:'top center+=100',
          pin:"ViewPort",
          scrub: true,
          markers:true,
          snap:true,
          onEnter: ()=> tl2.play(),
          // onEnterBack: ()=> tl2.play(),
        })
        // const tl2 = gsap.timeline()
        //   .to(lightReference.querySelector("#LightSection"),{opacity:1, zIndex:100, y:-100}).play()

        // const scaleAnimations = gsap.to(darkRefeference.querySelector("#AnimationArrow"), {scaleY:3, scaleX:3, duration:8, delay:1,toggleActions:'play none none reverse'})       
        
        // gsap.to(darkRefeference.querySelector("#AnimationArrow"), {y:-140,opacity:1,delay:.5, duration:1, 
                // scrollTrigger:{trigger:'#AnimationArrow',markers:true,end:'bottom center',start:'bottom-=130 bottom',toggleActions: "play none none reverse"}})

    }, [])



  return (
    <>

    {/* ##############################################  This is the hero section of the Landing Page ...###############################################  */}
    
    {/* //////////////// This is the dark section  ////////////////////// */}
    <main className='realtive box-border bg-[#080816]' ref={mainRef} id="Myself">
    <div className='bg-[#080816] w-[100vw] h-[100vh] z-10 relative' id="ViewPort">
      <div className={styles.gradient}></div>
      {/* <div className='absolute hidden md:block top-[30.3vh] z-[1000] left-[3rem] cursor-pointer'>
        <GetInTouch/>
      </div> */}

      {/* Navbar */}
      {/* ##########################  The Navbar component is showing some problems with ScrollTrigger..So the actual code has been inserted here..untill further.. */}
      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
        {/* <Navbar/> */}
        <div className='absolute h-[6rem] left-0 right-0 -top-[0rem]'>
        <div className='text-white flex flex-row justify-between my-5 md:mx-[4rem] lg:mx-[8rem] mx-8'>

            {/*  Left Section <<<<<<<<< */}
            {/* ###################### Logo is Here...##################### */}
            {/* Desktop view */}
            <div >
                <svg className='hidden md:block h-10 w-35' width="144" height="43" viewBox="0 0 144 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.7759 21.813C41.7759 33.3505 32.4217 42.701 20.888 42.701C9.34932 42.701 0 33.3505 0 21.813C0 19.118 0.510559 16.5397 1.44051 14.1729C2.02765 13.7936 2.76796 13.4909 3.66509 13.4763C11.9836 13.4763 12.1076 39.4298 17.432 39.5963C21.6003 39.7312 17.7711 21.2684 21.8374 21.2684C24.1531 21.2684 27.4936 33.0283 29.6416 32.5652C31.3739 32.1932 31.2973 22.2993 34.2646 21.3888C35.7161 20.9475 36.9013 22.2421 37.4374 22.9715C37.7838 23.442 35.9094 13.2381 32.9773 13.486C30.4792 13.6976 30.5084 21.3013 28.2339 21.2903C26.5309 21.283 24.9664 17.4866 23.865 13.9893C22.4209 8.04615 21.2648 6.83175 20.4698 6.83905C18.5515 6.85363 16.8776 13.9978 16.2771 18.5382C15.5186 24.2929 16.5421 28.1294 15.4493 28.2412C12.7324 28.4856 15.07 7.11742 10.3729 3.76596C13.4618 1.96077 17.0539 0.928711 20.8892 0.928711C32.423 0.928711 41.7759 10.278 41.7759 21.813Z" fill="white"/>
                    <path d="M61.7612 18.2166V20.9408C61.7612 21.4051 61.4999 21.6653 61.0367 21.6653H59.4431V31.2589C59.4431 31.7233 59.1817 31.9835 58.7185 31.9835H55.8205C55.3561 31.9835 55.096 31.7221 55.096 31.2589V21.6653H53.4999C53.0355 21.6653 52.7754 21.4039 52.7754 20.9408V18.2166C52.7754 17.7522 53.0367 17.4921 53.4999 17.4921H55.0936V13.579C55.0936 13.1146 55.3549 12.8545 55.8181 12.8545H58.7161C59.1805 12.8545 59.4406 13.1158 59.4406 13.579V17.4921H61.0343C61.4999 17.4921 61.7612 17.7534 61.7612 18.2166Z" fill="white"/>
                    <path d="M76.5441 22.7958V31.259C76.5441 31.7233 76.2827 31.9835 75.8196 31.9835H72.9215C72.4572 31.9835 72.197 31.7221 72.197 31.259V23.1727C72.197 21.7237 71.357 21.0855 70.2545 21.0855C68.9501 21.0855 68.1381 21.81 68.1381 23.5204V31.259C68.1381 31.7233 67.8767 31.9835 67.4136 31.9835H64.5155C64.0512 31.9835 63.791 31.7221 63.791 31.259V12.4193C63.791 11.955 64.0524 11.6948 64.5155 11.6948H67.4136C67.8779 11.6948 68.1381 11.9562 68.1381 12.4193V18.8159C68.8188 17.8082 70.0527 17.0861 71.9065 17.0861C74.6015 17.0861 76.5441 19.1733 76.5441 22.7958Z" fill="white"/>
                    <path d="M93.7014 24.738C93.7014 25.1148 93.6722 25.4625 93.643 25.8102C93.5847 26.2745 93.2953 26.4763 92.8601 26.4763H89.3251H83.1814C83.7078 28.1989 85.0607 28.882 86.5705 28.882C87.3826 28.882 88.1934 28.5927 88.7149 28.1575C89.0042 27.9254 89.2364 27.7807 89.6132 27.7807L92.3958 27.7515C92.9173 27.7515 93.2078 28.0992 92.9756 28.5636C91.8451 31.0847 89.4686 32.3891 86.5122 32.3891C81.7008 32.3891 78.6289 29.0559 78.6289 24.7368C78.6289 20.4177 81.8175 17.0845 86.3967 17.0845C90.6295 17.0857 93.7014 20.3618 93.7014 24.738ZM89.3738 23.1735C88.9252 21.5239 87.6476 20.9416 86.3687 20.9416C84.7398 20.9416 83.6117 21.7281 83.1644 23.1735H89.3738Z" fill="white"/>
                    <path d="M114.25 17.4919C114.771 17.4919 115.003 17.8104 114.859 18.304L110.686 31.3755C110.57 31.7815 110.25 31.9845 109.846 31.9845H107.411H107.063C106.657 31.9845 106.339 31.7815 106.222 31.3755L104.683 26.5544L103.15 31.3755C103.034 31.7815 102.715 31.9845 102.31 31.9845H100.484H99.5274C99.1214 31.9845 98.8029 31.7815 98.6862 31.3755L94.513 18.304C94.3683 17.8116 94.6005 17.4919 95.122 17.4919H98.2522C98.6582 17.4919 98.9476 17.6658 99.0643 18.101L101.319 26.5045L102.963 21.174L102.046 18.3028C101.902 17.8104 102.132 17.4907 102.655 17.4907H104.916C105.322 17.4907 105.612 17.6937 105.728 18.0997L108.185 26.0134L110.309 18.0997C110.424 17.6646 110.686 17.4907 111.121 17.4907H114.25V17.4919Z" fill="white"/>
                    <path d="M128.044 22.854V31.26C128.044 31.7244 127.783 31.9845 127.32 31.9845H124.537C124.073 31.9845 123.812 31.7232 123.812 31.26V30.8467C123.036 31.756 121.894 32.3906 120.073 32.3906C117.523 32.3906 115.291 30.8832 115.291 27.8685C115.291 24.8537 117.523 23.3464 120.073 23.3464C121.894 23.3464 123.036 23.8606 123.812 24.4514V23.1434C123.812 21.7235 123.233 21.0853 122.016 21.0853C121.117 21.0853 120.567 21.433 120.335 21.9253C120.161 22.3313 120.016 22.5623 119.581 22.5623H116.74C116.276 22.5623 115.986 22.3009 116.016 21.8086C116.392 18.6784 119.059 17.0835 122.016 17.0835C125.204 17.0859 128.044 18.941 128.044 22.854ZM123.812 27.8685C123.812 26.9701 123.03 26.4194 121.61 26.4194C120.276 26.4194 119.639 27.0285 119.639 27.8685C119.639 28.7084 120.277 29.3175 121.61 29.3175C123.03 29.3175 123.812 28.7097 123.812 27.8685Z" fill="white"/>
                    <path d="M143.349 18.3332L138.625 31.4059C138.48 31.7828 138.219 31.9858 137.813 31.9858H135.378H134.683C134.276 31.9858 134.016 31.7828 133.87 31.4059L129.145 18.3332C128.972 17.8117 129.233 17.4932 129.754 17.4932H132.855C133.261 17.4932 133.551 17.6962 133.667 18.1022L136.247 26.4122L138.827 18.1022C138.942 17.6962 139.233 17.4932 139.639 17.4932H142.769C143.29 17.492 143.522 17.8104 143.349 18.3332Z" fill="white"/>
                </svg> 

            {/* Mobile view */}
 
            <svg width="97" height="29" viewBox="0 0 97 29" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:hidden'>
                <path d="M28.2571 14.214C28.2571 22.0179 21.93 28.3426 14.1286 28.3426C6.32385 28.3426 0 22.0179 0 14.214C0 12.3911 0.345341 10.6471 0.974355 9.04621C1.3715 8.78967 1.87224 8.58493 2.47906 8.57506C8.10565 8.57506 8.18952 26.1299 11.7909 26.2426C14.6104 26.3338 12.0203 13.8456 14.7707 13.8456C16.3371 13.8456 18.5966 21.8 20.0495 21.4867C21.2212 21.2351 21.1694 14.5429 23.1765 13.927C24.1583 13.6286 24.9599 14.5042 25.3226 14.9976C25.5569 15.3158 24.289 8.4139 22.3058 8.58164C20.616 8.72471 20.6358 13.8678 19.0974 13.8604C17.9454 13.8555 16.8872 11.2876 16.1422 8.92205C15.1654 4.90211 14.3835 4.08069 13.8457 4.08563C12.5482 4.09549 11.416 8.9278 11.0098 11.9989C10.4967 15.8914 11.1891 18.4864 10.4499 18.562C8.61215 18.7273 10.1933 4.27392 7.01618 2.007C9.1055 0.785973 11.5352 0.0878906 14.1294 0.0878906C21.9308 0.0878906 28.2571 6.41175 28.2571 14.214Z" fill="white"/>
                <path d="M41.7753 11.7812V13.6238C41.7753 13.9379 41.5985 14.1139 41.2852 14.1139H40.2073V20.603C40.2073 20.9171 40.0305 21.0931 39.7172 21.0931H37.757C37.4429 21.0931 37.2669 20.9163 37.2669 20.603V14.1139H36.1873C35.8732 14.1139 35.6973 13.9371 35.6973 13.6238V11.7812C35.6973 11.4671 35.874 11.2911 36.1873 11.2911H37.2653V8.64435C37.2653 8.33026 37.4421 8.1543 37.7553 8.1543H39.7156C40.0297 8.1543 40.2056 8.33108 40.2056 8.64435V11.2911H41.2836C41.5985 11.2911 41.7753 11.4679 41.7753 11.7812Z" fill="white"/>
                <path d="M51.7746 14.8778V20.6023C51.7746 20.9164 51.5978 21.0923 51.2845 21.0923H49.3243C49.0102 21.0923 48.8342 20.9156 48.8342 20.6023V15.1327C48.8342 14.1526 48.2661 13.721 47.5203 13.721C46.638 13.721 46.0888 14.211 46.0888 15.3679V20.6023C46.0888 20.9164 45.912 21.0923 45.5987 21.0923H43.6385C43.3244 21.0923 43.1484 20.9156 43.1484 20.6023V7.8592C43.1484 7.5451 43.3252 7.36914 43.6385 7.36914H45.5987C45.9128 7.36914 46.0888 7.54592 46.0888 7.8592V12.1858C46.5492 11.5042 47.3838 11.0158 48.6377 11.0158C50.4606 11.0158 51.7746 12.4276 51.7746 14.8778Z" fill="white"/>
                <path d="M63.3795 16.1922C63.3795 16.4471 63.3598 16.6823 63.3401 16.9174C63.3006 17.2315 63.1049 17.368 62.8105 17.368H60.4195H56.2639C56.6199 18.5331 57.535 18.9952 58.5563 18.9952C59.1055 18.9952 59.654 18.7995 60.0067 18.5052C60.2024 18.3481 60.3594 18.2503 60.6143 18.2503L62.4964 18.2305C62.8492 18.2305 63.0457 18.4657 62.8887 18.7798C62.124 20.4851 60.5165 21.3674 58.5168 21.3674C55.2624 21.3674 53.1846 19.1128 53.1846 16.1914C53.1846 13.27 55.3413 11.0154 58.4387 11.0154C61.3017 11.0162 63.3795 13.2321 63.3795 16.1922ZM60.4524 15.134C60.149 14.0182 59.2848 13.6244 58.4198 13.6244C57.318 13.6244 56.5549 14.1563 56.2524 15.134H60.4524Z" fill="white"/>
                <path d="M77.2779 11.2918C77.6307 11.2918 77.7877 11.5073 77.6899 11.8411L74.8671 20.6827C74.789 20.9573 74.5728 21.0946 74.2989 21.0946H72.652H72.4168C72.1422 21.0946 71.9268 20.9573 71.8478 20.6827L70.8069 17.4216L69.77 20.6827C69.6919 20.9573 69.4757 21.0946 69.2019 21.0946H67.9669H67.3198C67.0451 21.0946 66.8297 20.9573 66.7508 20.6827L63.928 11.8411C63.8302 11.5081 63.9872 11.2918 64.34 11.2918H66.4572C66.7319 11.2918 66.9276 11.4094 67.0065 11.7038L68.5317 17.3879L69.6434 13.7824L69.0234 11.8403C68.9256 11.5073 69.0818 11.291 69.4354 11.291H70.9648C71.2394 11.291 71.4351 11.4283 71.514 11.703L73.1758 17.0557L74.6122 11.703C74.6903 11.4086 74.8671 11.291 75.1615 11.291H77.2779V11.2918Z" fill="white"/>
                <path d="M86.6085 14.9168V20.6026C86.6085 20.9167 86.4318 21.0927 86.1185 21.0927H84.2364C83.9223 21.0927 83.7463 20.9159 83.7463 20.6026V20.3231C83.2209 20.9381 82.4488 21.3673 81.2171 21.3673C79.4921 21.3673 77.9824 20.3477 77.9824 18.3086C77.9824 16.2694 79.4921 15.2499 81.2171 15.2499C82.4488 15.2499 83.2209 15.5977 83.7463 15.9973V15.1125C83.7463 14.1522 83.3541 13.7205 82.5311 13.7205C81.9234 13.7205 81.5509 13.9556 81.3939 14.2887C81.2763 14.5633 81.1785 14.7195 80.8841 14.7195H78.9625C78.6484 14.7195 78.4527 14.5427 78.4725 14.2097C78.7274 12.0925 80.5314 11.0137 82.5311 11.0137C84.6878 11.0153 86.6085 12.2701 86.6085 14.9168ZM83.7463 18.3086C83.7463 17.701 83.2168 17.3285 82.2564 17.3285C81.3544 17.3285 80.9236 17.7404 80.9236 18.3086C80.9236 18.8768 81.3553 19.2887 82.2564 19.2887C83.2168 19.2887 83.7463 18.8776 83.7463 18.3086Z" fill="white"/>
                <path d="M96.9616 11.8592L93.7664 20.7016C93.6686 20.9565 93.4918 21.0938 93.2172 21.0938H91.5702H91.0999C90.8253 21.0938 90.6493 20.9565 90.5506 20.7016L87.3546 11.8592C87.237 11.5064 87.4138 11.291 87.7665 11.291H89.8641C90.1387 11.291 90.3344 11.4283 90.4133 11.703L92.1581 17.3238L93.9029 11.703C93.981 11.4283 94.1775 11.291 94.4522 11.291H96.5694C96.9222 11.2902 97.0792 11.5056 96.9616 11.8592Z" fill="white"/>
            </svg>

            </div>  


            {/* Right Section >>>>>>>> */}
            <div className='flex flex-row justify-evenly'>

                {/* ###################   Get a Free Audit Button ##################  */}
                <div className='border-[1px] items-center justify-center px-4 font-light rounded-[.140rem] mr-12 hidden md:block'>
                    <p className='px-[0.38rem] py-[.6rem] subpixel-antialiased text-[.9rem]'>Get A Free Audit </p>
                </div>

                {/* ##########################   Menu bars  ###########################  */}
                <div className='items-center justify-items-center flex h-8 w-8 mr-4'>
                    <svg className='p-1 md:p-0 md:mt-2' width="48" height="30" viewBox="0 0 46 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="40" y2="1" stroke="white" strokeWidth="2"/>
                        <line y1="13" x2="40" y2="13" stroke="white" strokeWidth="2"/>
                        <line y1="25" x2="40" y2="25" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>

            </div>

               

        </div>
      </div>

      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
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
      {/* ######################################################################################################################################################### */}
      {/* ........................................................................................................................................................... */}
      <div className='relative box-border'>
        {/* Arrow-01 :: (the big arrow) */}
        <div className='mt-[4rem] ml-4'>
          <svg className='z-[20]' width="270" height="440" viewBox="0 0 299 622" fill="none">
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

          {/* <svg id='AnimationArrow' className='z-[100] opacity-0 bg-green-400' width="270" height="440" viewBox="0 0 299 622" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M152.32 1.82141C150.597 -0.187804 147.488 -0.187799 145.764 1.82141L1.11715 170.441C-1.28584 173.242 0.704514 177.572 4.39522 177.572L73.6712 177.572C76.0565 177.572 77.9902 179.505 77.9902 181.89L77.9902 617.048C77.9902 619.433 79.9238 621.367 82.3091 621.367L215.775 621.367C218.16 621.367 220.094 619.433 220.094 617.048L220.094 181.89C220.094 179.505 222.028 177.571 224.413 177.571L293.689 177.571C297.38 177.571 299.37 173.242 296.967 170.441L152.32 1.82141Z"/>
          </svg> */}
        </div>
        {/* Arrow-04  :: (the right top arrow) */}
        <div className='absolute top-[1.3rem] right-[4.2rem]'>
          <svg className='-z-10' width="56" height="70" viewBox="0 0 60 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M29.6296 1.15279C29.8281 0.933951 30.172 0.933951 30.3704 1.15278L59.1137 32.8502C59.4051 33.1716 59.1771 33.6861 58.7433 33.6861L45.2988 33.6861C44.4703 33.6861 43.7988 34.3577 43.7988 35.1861L43.7988 73C43.7988 73.2761 43.5749 73.5 43.2988 73.5L16.7012 73.5C16.4251 73.5 16.2012 73.2761 16.2012 73L16.2012 35.1861C16.2012 34.3577 15.5297 33.6861 14.7012 33.6861L1.25672 33.6861C0.822946 33.6861 0.594946 33.1716 0.886329 32.8502L29.6296 1.15279Z" stroke="#0049FA"/>
          </svg>
        </div>
        {/* Arrow-05  :: (the left top arrow) */}
        <div className='absolute top-[8.5rem] left-[2rem]'>
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
        <div className='absolute top-64 lg:top-[18.5rem] left-[4.5rem]'>
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
        {/* [+++++++++++++++++++++++++++++++++++++++  This is the white arrow that comes along with the animation  ++++++++++++++++++++++++++++++++++++ ] */}

        {/* <svg id='AnimationArrow' className='z-[50] absolute top-[6rem] opacity-0 ml-[1.5px]' width="300" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M152.32 1.82141C150.597 -0.187804 147.488 -0.187799 145.764 1.82141L1.11715 170.441C-1.28584 173.242 0.704514 177.572 4.39522 177.572L73.6712 177.572C76.0565 177.572 77.9902 179.505 77.9902 181.89L77.9902 617.048C77.9902 619.433 79.9238 621.367 82.3091 621.367L215.775 621.367C218.16 621.367 220.094 619.433 220.094 617.048L220.094 181.89C220.094 179.505 222.028 177.571 224.413 177.571L293.689 177.571C297.38 177.571 299.37 173.242 296.967 170.441L152.32 1.82141Z"/>
        </svg> */}


        {/* [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ] */}
        

        {/* Learn more button...Shows only on large screen... */}
        {/* <div className='hidden lg:block absolute top-[30.3vh] z-[1000] left-[3rem] cursor-pointer'> */}
          {/* <div className='flex items-center justify-center box-border'> */}
            {/* <GetInTouch onClick={()=>{console.log('clicked')}}/> */}
          {/* </div> */}
        {/* </div> */}

      </div>

      {/* Presently using this arrow for animation.. */}
      <svg id='AnimationArrow' className='z-[10] absolute bottom-[1rem] opacity-0 ml-4 overflow-auto' width="270" height="440" viewBox="0 0 299 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M152.32 1.82141C150.597 -0.187804 147.488 -0.187799 145.764 1.82141L1.11715 170.441C-1.28584 173.242 0.704514 177.572 4.39522 177.572L73.6712 177.572C76.0565 177.572 77.9902 179.505 77.9902 181.89L77.9902 617.048C77.9902 619.433 79.9238 621.367 82.3091 621.367L215.775 621.367C218.16 621.367 220.094 619.433 220.094 617.048L220.094 181.89C220.094 179.505 222.028 177.571 224.413 177.571L293.689 177.571C297.38 177.571 299.37 173.242 296.967 170.441L152.32 1.82141Z" fill="white"/>
      </svg>

      </div>








        {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
      {/* ########################################################################  Wave  #################################################################  */}
        {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

      <div className='w-[100vw] absolute bottom-0 z-10' id="LogosBefore">
        {/* The wave passing from the bottom is here.. */}
        <div className='w-[105vw] relative'>
          {/* Large screen */}
          <svg id='BigWave' className='-mb-32 lg:-mb-28 hidden md:block' width="1920" height="340" viewBox="0 0 1920 283" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1882.5 53.5C1949.7 53.5 1961 37 1961 37V291H-41V39.5C93.5 39.5 127.5 3.5 194.5 3.5C261.5 3.5 322 39.5 432.5 39.5C543 39.5 575.5 1 663.5 1C731 1 788.5 39.5 900.5 39.5C1044 39.5 1052 4.5 1152.5 4.5C1229 4.5 1329 53.5 1435.5 53.5C1542 53.5 1582.5 11.5 1655 11.5C1727.5 11.5 1798.5 53.5 1882.5 53.5Z" fill="#080816"/>
            <path d="M1961 37H1961.89V34.1225L1960.27 36.4966L1961 37ZM-41 39.5V38.6091H-41.8909V39.5H-41ZM-41 291H-41.8909V291.891H-41V291ZM1961 291V291.891H1961.89V291H1961ZM1961 37C1960.27 36.4966 1960.27 36.4957 1960.27 36.4948C1960.27 36.4946 1960.27 36.4938 1960.27 36.4934C1960.27 36.4926 1960.27 36.492 1960.27 36.4917C1960.27 36.4911 1960.27 36.4914 1960.27 36.4928C1960.27 36.4955 1960.26 36.5021 1960.25 36.5126C1960.24 36.5335 1960.21 36.5697 1960.17 36.6202C1960.09 36.7211 1959.95 36.8794 1959.75 37.0868C1959.34 37.5016 1958.67 38.1142 1957.66 38.8597C1955.62 40.3508 1952.19 42.3761 1946.64 44.4138C1935.55 48.4912 1916.03 52.6091 1882.5 52.6091V54.3909C1916.17 54.3909 1935.9 50.2588 1947.26 46.0862C1952.94 43.9989 1956.53 41.8992 1958.71 40.2965C1959.8 39.4952 1960.55 38.8187 1961.02 38.3312C1961.26 38.0874 1961.43 37.8912 1961.55 37.7504C1961.6 37.6801 1961.65 37.6236 1961.68 37.5821C1961.69 37.5613 1961.71 37.5443 1961.72 37.5312C1961.72 37.5246 1961.72 37.519 1961.73 37.5143C1961.73 37.512 1961.73 37.5099 1961.73 37.5081C1961.73 37.5072 1961.73 37.506 1961.73 37.5056C1961.73 37.5044 1961.73 37.5034 1961 37ZM1882.5 52.6091C1840.64 52.6091 1802 42.1446 1764.68 31.6424C1727.4 21.1519 1691.4 10.6091 1655 10.6091V12.3909C1691.1 12.3909 1726.85 22.8481 1764.2 33.3576C1801.5 43.8554 1840.36 54.3909 1882.5 54.3909V52.6091ZM1655 10.6091C1618.58 10.6091 1590.18 21.1665 1557.73 31.6523C1525.26 42.1399 1488.62 52.6091 1435.5 52.6091V54.3909C1488.88 54.3909 1525.74 43.8601 1558.27 33.3477C1590.82 22.8335 1618.92 12.3909 1655 12.3909V10.6091ZM1435.5 52.6091C1382.37 52.6091 1330.85 40.3874 1282.97 28.1369C1235.15 15.9009 1190.89 3.60912 1152.5 3.60912V5.39088C1190.61 5.39088 1234.6 17.5991 1282.53 29.8631C1330.4 42.1126 1382.13 54.3909 1435.5 54.3909V52.6091ZM1152.5 3.60912C1102.12 3.60912 1074.89 12.3914 1042.39 21.1398C1009.95 29.8738 972.157 38.6091 900.5 38.6091V40.3909C972.343 40.3909 1010.3 31.6262 1042.86 22.8602C1075.36 14.1086 1102.38 5.39088 1152.5 5.39088V3.60912ZM900.5 38.6091C844.611 38.6091 802.32 29.0053 765.538 19.3881C728.784 9.7785 697.394 0.109124 663.5 0.109124V1.89088C697.106 1.89088 728.216 11.4715 765.087 21.1119C801.93 30.7447 844.389 40.3909 900.5 40.3909V38.6091ZM663.5 0.109124C619.355 0.109124 589.114 9.77314 556.188 19.3949C523.284 29.0101 487.627 38.6091 432.5 38.6091V40.3909C487.873 40.3909 523.716 30.7399 556.687 21.1051C589.636 11.4769 619.645 1.89088 663.5 1.89088V0.109124ZM432.5 38.6091C377.354 38.6091 334.683 29.6277 297.396 20.634C260.139 11.6473 228.134 2.60912 194.5 2.60912V4.39088C227.866 4.39088 259.611 13.3527 296.979 22.366C334.317 31.3723 377.146 40.3909 432.5 40.3909V38.6091ZM194.5 2.60912C160.85 2.60912 135.446 11.6592 101.833 20.6393C68.2027 29.6239 26.1562 38.6091 -41 38.6091V40.3909C26.3438 40.3909 68.5473 31.3761 102.292 22.3607C136.054 13.3408 161.15 4.39088 194.5 4.39088V2.60912ZM-41.8909 39.5V291H-40.1091V39.5H-41.8909ZM-41 291.891H1961V290.109H-41V291.891ZM1961.89 291V37H1960.11V291H1961.89Z" fill="#000037"/>
          </svg>
          {/* Small Screen */}
          <svg className='md:hidden -mb-[7.4rem] w-[100vw]' width="1000" height="390" viewBox="0 0 428 215" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M289 1C241.651 1 204.5 52.9999 127.5 16.5C50.5 -19.9999 44.5 37.4996 -15 11.4997V226.5H443V21.5C391.168 46.7622 340 1 289 1Z" fill="#080816" stroke="#000037"/>
          </svg>


          {/* Logos goes here for large screen and medium.... */}
          <div className='hidden lg:block absolute top-[5rem] w-[100vw]'>
            {/* Two lines of logos for large screen is divided into two rows. */}
            <div className='flex flex-col my-2 md:mx-[6rem] md:pr-4 lg:mx-[11rem] lg:pr-4'>
              {/* Six logos will come in here for large screen. */}

              {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
              {/* -----------------------  Before the animation starts these logos will be displayed -------------------- */}
              {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

              <div className='flex flex-row justify-between my-[1rem] initialLogos'>
                <img src={ImageOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageFive} alt="image20.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageSix} alt="image21.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
              </div>

              <div className='flex flex-row justify-between my-[0.75rem] initialLogos'>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageSix} alt="image21.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
                <img src={ImageTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem] '/>
              </div>
            

          {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
          {/* ---------------------  After the animation has ended these logos will be displayed -------------------- */}
          {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
              {/* First row */}
              {/* <div className='flex flex-row justify-between my-4 hidden finalLogos'>   
                <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkThree} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
              </div> */}

              {/* Second row */}
              {/* <div className='flex flex-row justify-between my-4 hidden finalLogos'>     
                <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkFour} alt="image19.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkThree} alt="image18.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkTwo} alt="image17.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
                <img src={ImageDarkOne} alt="image16.png" className='lg:h-[2.3rem] md:h-[1.85rem]'/>
              </div> */}



          </div>
        </div>

          {/* Logos goes here for small screen.. */}
          <div className='lg:hidden absolute top-28 w-[100vw] z-10'>
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
      {/* [+++++++++++++++++++++++++++++++++++++++  This is the white arrow that comes along with the animation  ++++++++++++++++++++++++++++++++++++ ] */}

      {/* <div className='absolute top-0 left-0 h-[100vh] w-[100vw] z-[100] flex items-center justify-center bg-pink-300'>
          <svg id='AnimationArrow' className='z-[100] opacity-1 bg-green-400 flex items-center justify-center' width="300" height="600" fill="none">
            <path fill="white" d="M152.32 1.82141C150.597 -0.187804 147.488 -0.187799 145.764 1.82141L1.11715 170.441C-1.28584 173.242 0.704514 177.572 4.39522 177.572L73.6712 177.572C76.0565 177.572 77.9902 179.505 77.9902 181.89L77.9902 617.048C77.9902 619.433 79.9238 621.367 82.3091 621.367L215.775 621.367C218.16 621.367 220.094 619.433 220.094 617.048L220.094 181.89C220.094 179.505 222.028 177.571 224.413 177.571L293.689 177.571C297.38 177.571 299.37 173.242 296.967 170.441L152.32 1.82141Z"/>
          </svg>
      </div> */}


      {/* [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ] */}

    </div>



    {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
    {/* ###################################              This will be the light hero section                 ################################## */}
    {/* [+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

    <div className=''>
    {/* For Large screen  */}
    <div className='hidden lg:block flex-col' id="LightSection">
      {/* The logos section.. */}
      <div className='flex flex-col -mt-[21vh] lg:mx-44 md:mx-[6rem]' id='FinalLogos'>

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

    {/* ================================================================================================================================================= */}
      {/* Unacademy + Product review section.. */}
      <div className='flex flex-row mt-20 pb-10'>
        {/* Unacademy Area.. */}
        <div className='flex lg:flex-col ml-20 lg:w-[35vw] md:w-[40vw]'>
           {/* Unacademy logo.. */}
           <div className='flex items-center justify-center mx-8 mb-20 md:block' id='UncademyLogo'>
            <img src={ImageUnacademy} alt="unacademy"/>
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
        <div className='flex flex-col w-[55vw] ml-20 overflow-hidden'>
          {/* Lorem ipsum.... */}
          {/* Testimonials data comes here.. */}

          {testimonials.map((current) =>{
                if(current.id===testimonialId){
                  return (
                    <div className='box-border pointer-events-none' key={current.id}>

                    <div className='ml-20 mt-2' key={current.id}>
                        <p className='text-[1.25rem] leading-normal'>{current.data}</p>
                    </div>

                    <div className='mx-20 mt-10'>
                      <a className="inline-flex items-center">
                        <img alt="customer_image" src={current.img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font text-gray-900">{current.name}</span>
                            <span className="text-gray-400 text-xs tracking-widest mt-0.5">{current.about}</span>
                          </span>
                      </a>
                    </div>

                  </div>

                  )

          }return null;

          })}
        </div>
        {/* End of customer review.. */}


        {/* previous + next button for reviews */}
        <div className='min-w-[6vw] mr-[11rem] flex items-end justify-between pb-4'>
          
        <svg className='cursor-pointer' width="25" height="25" viewBox="0 0 29 29" fill="none" onClick={()=>testimonialId>1?setTestimonialId(current => current-1):testimonialId===1?setTestimonialId(testimonials.length):''}>
          <path d="M15.4375 27.75L15.875 27.3125C16.1875 27 16.1875 26.5625 15.875 26.25L4.75 15.0625H28.25C28.625 15.0625 29 14.75 29 14.3125V13.6875C29 13.3125 28.625 12.9375 28.25 12.9375H4.75L15.875 1.8125C16.1875 1.5 16.1875 1.0625 15.875 0.75L15.4375 0.3125C15.125 0 14.6875 0 14.375 0.3125L1.1875 13.5C0.875 13.8125 0.875 14.25 1.1875 14.5625L14.375 27.75C14.6875 28.0625 15.125 28.0625 15.4375 27.75Z" fill="#BEBEBE" />
        </svg>
        <svg className='cursor-pointer' width="25" height="25" viewBox="0 0 29 29" fill="none" onClick={()=>testimonialId<testimonials.length?setTestimonialId(current => current+1):setTestimonialId(testimonials.length+1-testimonials.length)}>
          <path d="M13.5 0.3125L13.0625 0.75C12.75 1.0625 12.75 1.5 13.0625 1.8125L24.1875 12.9375H0.75C0.3125 12.9375 0 13.3125 0 13.6875V14.3125C0 14.75 0.3125 15.0625 0.75 15.0625H24.1875L13.0625 26.25C12.75 26.5625 12.75 27 13.0625 27.3125L13.5 27.75C13.8125 28.0625 14.25 28.0625 14.5625 27.75L27.75 14.5625C28.0625 14.25 28.0625 13.8125 27.75 13.5L14.5625 0.3125C14.25 0 13.8125 0 13.5 0.3125Z" fill="#080816"/>
        </svg>

        </div>
        


      </div>

    </div>

    {/* For small screen */}
    <div className='lg:hidden flex-col'>
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

    {/* [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}
    {/* !__________________________________________________ For medium screen only.. _____________________________________________________ */}
    {/* [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++] */}

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
        <div className='flex flex-col md:mx-10'>
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

    </main>
    
    </>
  )

}

export default Hero

