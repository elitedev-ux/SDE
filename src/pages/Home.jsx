import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, ProgrammeCard, SectionHeading, TeamGrid } from '../components'
import { heroSlides, mission, programmes, team, vision } from '../data'

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 7000)
    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]
  return (
    <section className="hero-slider" aria-roledescription="carousel" aria-label="Directorate introduction">
      <img key={slide.image} className="hero-slider__image" src={slide.image} alt={slide.alt} />
      <div className="hero-slider__shade"></div>
      <div className="container hero-slider__content">
        <p className="eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p>{slide.text}</p>
        <div className="button-row"><Link className="button" to="/sdes">Explore SDEs</Link><Link className="button button--ghost-light" to="/about">Meet the directorate</Link></div>
      </div>
      <div className="container hero-slider__controls">
        <span>{String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
        <div className="hero-progress" aria-hidden="true"><span style={{ width: `${((activeSlide + 1) / heroSlides.length) * 100}%` }}></span></div>
        <button className="slider-button slider-button--previous" type="button" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"><ArrowIcon direction="previous" /></button>
        <button className="slider-button slider-button--next" type="button" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next slide"><ArrowIcon direction="next" /></button>
      </div>
    </section>
  )
}

export default function Home() {
  return <>
    <HeroSlider />
    <section className="section intro-section"><div className="container intro-grid"><SectionHeading eyebrow="The directorate" title="Practical ability belongs beside academic knowledge." /><div className="intro-copy"><p className="lead">The SDE Directorate creates room for students to practise useful skills, understand enterprise and build confidence through hands-on learning.</p><p>This demonstration presents the directorate’s intended services while official programme and staff information is being confirmed.</p><Link className="text-link" to="/about">Learn about our purpose <span>→</span></Link></div></div></section>

    <section className="section"><div className="container director-preview"><div className="director-mark"><img src={team[0].image} alt={team[0].alt} /><small>Illustrative portrait</small></div><div><p className="eyebrow">From the directorate</p><blockquote>“Our purpose is to help learners move from knowing to doing—and from doing to creating opportunities for themselves and others.”</blockquote><p><strong>Director profile awaiting confirmation</strong><br />The latest published tenure ended on 31 July 2026.</p><Link className="text-link" to="/about">Read the directorate story <span>→</span></Link></div></div></section>

    <section className="section section--soft"><div className="container"><div className="values-grid"><article><p className="eyebrow">Our mission</p><h2>Useful learning, applied well.</h2><p>{mission}</p></article><article><p className="eyebrow">Our vision</p><h2>Knowledge with practical confidence.</h2><p>{vision}</p></article></div></div></section>

    <section className="section"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Learning environments" title="Choose a skill to explore." text="Browse verified skill titles from AFUED’s published 2024/2025 selection list. Availability varies by session." /><Link className="button button--outline" to="/sdes">View all SDEs</Link></div><div className="programme-grid">{programmes.slice(0, 4).map((programme) => <ProgrammeCard key={programme.slug} programme={programme} />)}</div></div></section>

    <section className="section section--soft"><div className="container"><div className="heading-row"><SectionHeading eyebrow="Directorate staff" title="The people supporting your practical journey." /><Link className="text-link" to="/about">About the team <span>→</span></Link></div><TeamGrid people={team} /></div></section>

    <section className="cta-panel"><div className="container"><p className="eyebrow">Your next practical step</p><h2>Found a skill that fits your direction?</h2><p>Tell the directorate what you want to learn and ask about the next available session.</p><Link className="button button--light" to="/contact">Make an enquiry</Link></div></section>
  </>
}
