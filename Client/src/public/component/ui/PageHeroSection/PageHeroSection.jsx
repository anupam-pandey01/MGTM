import React from 'react'
import "./PageHeroSection.css"

const PageHeroSection = ({eyeBrow, pageHeroTitle, pageHeroIntro}) => {
  return (
    <div className='page-hero-section container section'>
      <p className="page-hero-label">{eyeBrow}</p>
      <h1 className='page-hero-title'>{pageHeroTitle}</h1>
      <p className='page-hero-intro'>{pageHeroIntro}</p>
    </div>
  )
}

export default PageHeroSection