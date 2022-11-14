import React from 'react'
import Footer from '../../reusable/Footer/Footer'
import BlogsAndArticles from './Sections/BlogsAndArticles'
import GetFreeAudit from './Sections/GetFreeAudit'
import Hero from './Sections/Hero'
import WhatWeDo from './Sections/WhatWeDo'

const Landing = () => {
  return (
    <>
    <Hero></Hero>
    <WhatWeDo></WhatWeDo>
    <BlogsAndArticles></BlogsAndArticles>
    <GetFreeAudit></GetFreeAudit>
    <Footer></Footer>
    </>
  )
}

export default Landing