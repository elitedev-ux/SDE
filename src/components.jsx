import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from './assets/adeyemi logo.png'
import { university } from './data'

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['SDEs', '/sdes'],
  ['Contact', '/contact'],
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" to="/" aria-label="SDE Directorate home">
          <img src={logo} alt="AFUED crest" />
          <span><strong>AFUED SDE</strong><small>Skill Development & Entrepreneurship</small></span>
        </Link>
        <button className={menuOpen ? 'menu-button is-open' : 'menu-button'} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>
          <span></span><span></span><span></span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
          ))}
          <Link className="button button--small" to="/sdes">Explore SDEs</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  const [mapOpen, setMapOpen] = useState(false)

  useEffect(() => {
    if (!mapOpen) return undefined

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') setMapOpen(false)
    }

    document.addEventListener('keydown', closeWithEscape)
    document.body.classList.add('modal-open')

    return () => {
      document.removeEventListener('keydown', closeWithEscape)
      document.body.classList.remove('modal-open')
    }
  }, [mapOpen])

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="" />
            <div><strong>{university.shortName} SDE</strong><p>{university.directorate}</p></div>
          </div>
          <div><h2>Quick links</h2>{navItems.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div>
          <div className="footer-location"><h2>Visit us</h2><p>{university.address}</p><button type="button" className="footer-map-button" onClick={() => setMapOpen(true)}><span>View location on map</span><span aria-hidden="true">↗</span></button><a href={`tel:${university.phone.replaceAll(' ', '')}`}>{university.phone}</a><a href={`mailto:${university.email}`}>{university.email}</a></div>
          <div><h2>Connect</h2><a href="#instagram" aria-label="Instagram placeholder">Instagram</a><a href="#facebook" aria-label="Facebook placeholder">Facebook</a><a href="#youtube" aria-label="YouTube placeholder">YouTube</a><small>Social links are placeholders.</small></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} AFUED SDE Directorate</span></div>
      </footer>

      {mapOpen && (
        <div className="map-modal" role="dialog" aria-modal="true" aria-labelledby="map-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setMapOpen(false) }}>
          <div className="map-modal__panel">
            <div className="map-modal__header">
              <div><p className="eyebrow">Find the directorate</p><h2 id="map-modal-title">AFUED SDE location</h2></div>
              <button type="button" className="map-modal__close" onClick={() => setMapOpen(false)} aria-label="Close map">×</button>
            </div>
            <iframe
              title="Map showing the SDE Directorate location at AFUED"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d304.49928438901907!2d4.823695934635039!3d7.072852447418573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1787868191934!5m2!1sen!2sng"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="map-modal__footer"><span>{university.address}</span><button type="button" onClick={() => setMapOpen(false)}>Close map</button></div>
          </div>
        </div>
      )}
    </>
  )
}

export function PageBanner({ eyebrow, title, text }) {
  return <section className="page-banner"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-banner__text">{text}</p></div></section>
}

export function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className={`section-heading${light ? ' section-heading--light' : ''}`}><div className="measure-line" aria-hidden="true"></div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

export function ProgrammeCard({ programme }) {
  return (
    <article className="programme-card">
      <Link className="programme-card__image" to={`/sdes/${programme.slug}`}><img src={programme.image} alt={programme.alt} /></Link>
      <div className="programme-card__body"><span className="equipment-tag">{programme.category}</span><h3>{programme.title}</h3><p>{programme.summary}</p><Link className="text-link" to={`/sdes/${programme.slug}`}>View programme <span>→</span></Link></div>
    </article>
  )
}

export function TeamGrid({ people }) {
  return <div className="team-grid">{people.map((person) => <article className="team-card" key={`${person.role}-${person.initials}`}><div className="team-card__portrait"><img src={person.image} alt={person.alt} loading="lazy" /><small>Illustrative portrait</small></div><p className="equipment-tag">Staff profile</p><h3>{person.name}</h3><strong>{person.role}</strong><p>{person.note}</p></article>)}</div>
}

export function ArrowIcon({ direction }) {
  const points = direction === 'previous' ? '15 18 9 12 15 6' : '9 6 15 12 9 18'

  return <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points={points}></polyline></svg>
}

export function Carousel({ items, renderItem, label }) {
  const [index, setIndex] = useState(0)
  const showPrevious = () => setIndex((current) => (current - 1 + items.length) % items.length)
  const showNext = () => setIndex((current) => (current + 1) % items.length)

  return (
    <div className="content-carousel" aria-label={label}>
      <div className="content-carousel__item">{renderItem(items[index], index)}</div>
      <div className="carousel-controls">
        <span><strong>{String(index + 1).padStart(2, '0')}</strong> / {String(items.length).padStart(2, '0')}</span>
        <div><button className="slider-button slider-button--previous" type="button" onClick={showPrevious} aria-label="Show previous item"><ArrowIcon direction="previous" /></button><button className="slider-button slider-button--next" type="button" onClick={showNext} aria-label="Show next item"><ArrowIcon direction="next" /></button></div>
      </div>
    </div>
  )
}

export function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.section-heading, .cta-panel, .team-card, .detail-aside')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => {
      element.classList.add('reveal-ready')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" key={location.pathname}>{children}</main><Footer /></>
}
