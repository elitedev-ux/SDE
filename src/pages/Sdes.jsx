import { useMemo, useState } from 'react'
import { PageBanner, ProgrammeCard } from '../components'
import { programmes } from '../data'

export default function Sdes() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(programmes.map((programme) => programme.category))]
  const filtered = useMemo(() => programmes.filter((programme) => {
    const matchesSearch = `${programme.title} ${programme.summary}`.toLowerCase().includes(search.toLowerCase())
    return matchesSearch && (category === 'All' || programme.category === category)
  }), [search, category])

  return <>
    <PageBanner eyebrow="Skill development environments" title="Find the craft that moves you forward." text="Browse practical programmes designed to introduce useful techniques, equipment and an enterprise mindset." />
    <section className="section"><div className="container">
      <div className="programme-tools"><label><span>Search programmes</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “fashion” or “baking”" /></label><div className="filters" aria-label="Filter by category">{categories.map((item) => <button className={category === item ? 'is-active' : ''} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
      <div className="programme-results" aria-live="polite"><strong>{filtered.length}</strong><span>{filtered.length === 1 ? 'programme' : 'programmes'} showing{category !== 'All' ? ` in ${category}` : ''}</span>{(search || category !== 'All') && <button type="button" onClick={() => { setSearch(''); setCategory('All') }}>Clear filters</button>}</div>
      {filtered.length ? <div className="programme-grid programme-grid--listing">{filtered.map((programme) => <ProgrammeCard key={programme.slug} programme={programme} />)}</div> : <div className="empty-state"><p className="eyebrow">No match found</p><h2>Try a broader search.</h2><p>Clear the search or choose “All” to see every SDE programme.</p><button className="button button--outline" type="button" onClick={() => { setSearch(''); setCategory('All') }}>Show all SDEs</button></div>}
    </div></section>
  </>
}
