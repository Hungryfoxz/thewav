import React from 'react';
import Logos from './Sections/Logos';
import { Hero } from './Sections/Hero';
import Content from './Sections/Content';
import End from './Sections/End';
import Footer from '../../reusable/Footer/Footer.js'


const Contact = () => {
  return (
    <>
    <Hero/>
    <Logos/>
    <Content/>
    <End/>
    <Footer/>
    </>
  )
}

export default Contact