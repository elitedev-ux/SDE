import { Link, useParams } from 'react-router-dom'
import { ProgrammeCard, SectionHeading } from '../components'
import { programmes } from '../data'

export default function SdeDetail() {
  const { slug } = useParams()
  const programme = programmes.find((item) => item.slug === slug)
  if (!programme) return <section className="section"><div className="container empty-state"><p className="eyebrow">Programme not found</p><h1>This SDE is not in the current list.</h1><Link className="button" to="/sdes">Browse all SDEs</Link></div></section>
  const related = programmes.filter((item) => item.slug !== programme.slug && item.category === programme.category).slice(0, 3)

  return <>
    <section className="detail-hero"><img src={programme.image} alt={programme.alt} /><div className="detail-hero__shade"></div><div className="container"><p className="eyebrow">{programme.category} · SDE programme</p><h1>{programme.title}</h1><p>{programme.summary}</p></div></section>
    <section className="section"><div className="container detail-layout"><article className="detail-main"><SectionHeading eyebrow="What you will learn" title="Build the foundations through guided practice." /><p className="lead">The programme moves from safe tool handling and core techniques to consistent finishing and a basic understanding of serving customers.</p><div className="detail-list">{programme.skills.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, '0')}</span><p>{skill}</p></div>)}</div></article><aside className="detail-aside"><p className="equipment-tag">Programme information</p><h2>Training format</h2><p>{programme.schedule}</p><hr /><div className="trainer-profile"><div className="trainer-profile__photo"><img src={programme.trainer.image} alt={programme.trainer.alt} /><span>Illustrative profile</span></div><p className="equipment-tag">Meet the trainer</p><h2>{programme.trainer.name}</h2><strong>{programme.trainer.specialty}</strong><p>{programme.trainer.bio}</p><div className="trainer-profile__contacts"><a href={`tel:${programme.trainer.phone.replace(/\s/g, '')}`}><span>Call</span>{programme.trainer.phone}</a><a href={`mailto:${programme.trainer.email}`}><span>Email</span>{programme.trainer.email}</a></div><small>Sample trainer profile and contact details.</small></div><Link className="button" to={`/contact?programme=${programme.slug}`}>Make an enquiry</Link></aside></div></section>
    <section className="section section--soft"><div className="container"><SectionHeading eyebrow="Equipment" title="Tools you may work with." text="The final inventory will be updated after verification." /><div className="tool-list">{programme.equipment.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Continue exploring" title="Other practical environments." /><div className="programme-grid">{related.map((item) => <ProgrammeCard key={item.slug} programme={item} />)}</div></div></section>
  </>
}
