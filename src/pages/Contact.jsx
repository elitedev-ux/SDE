import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageBanner } from '../components'
import { programmes, university } from '../data'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialProgramme = programmes.some((item) => item.slug === searchParams.get('programme')) ? searchParams.get('programme') : ''
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ name: '', email: '', phone: '', programme: initialProgramme, message: '' })

  function updateField(event) { setForm({ ...form, [event.target.name]: event.target.value }) }
  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.programme) nextErrors.programme = 'Choose a programme.'
    if (form.message.trim().length < 10) nextErrors.message = 'Tell us a little more (at least 10 characters).'
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setSubmitted(true)
  }

  return <>
    <PageBanner eyebrow="Contact the directorate" title="Ask about your next practical step." text="Choose a programme and tell us what you would like to know about training, schedules or participation." />
    <section className="section"><div className="container contact-grid">
      <div className="contact-details"><p className="eyebrow">Visit or contact AFUED</p><h2>We are based in Ondo.</h2><dl><div><dt>Address</dt><dd>{university.address}</dd></div><div><dt>Telephone</dt><dd><a href={`tel:${university.phone.replaceAll(' ', '')}`}>{university.phone}</a></dd></div><div><dt>Email</dt><dd><a href={`mailto:${university.email}`}>{university.email}</a></dd></div><div><dt>Office hours</dt><dd>{university.hours}</dd></div></dl><aside className="notice"><strong>Contact note</strong><span>These are university-wide details. Directorate-specific contacts will replace them when supplied.</span></aside></div>
      <div className="form-panel">{submitted ? <div className="success-message" role="status"><span>✓</span><p className="eyebrow">Enquiry prepared</p><h2>Thank you, {form.name}.</h2><p>This frontend demonstration does not send messages. Your form passed validation successfully.</p><button className="button button--outline" type="button" onClick={() => setSubmitted(false)}>Edit enquiry</button></div> : <form noValidate onSubmit={handleSubmit}><div className="form-heading"><p className="eyebrow">Enquiry form</p><h2>What would you like to learn?</h2><p>Fields marked * are required.</p></div><div className="form-row"><Field label="Full name" name="name" value={form.name} onChange={updateField} error={errors.name} required /><Field label="Email address" name="email" type="email" value={form.email} onChange={updateField} error={errors.email} required /></div><div className="form-row"><Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={updateField} /><label><span>Programme *</span><select name="programme" value={form.programme} onChange={updateField} aria-invalid={Boolean(errors.programme)}><option value="">Select a programme</option>{programmes.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}</select>{errors.programme && <small className="field-error">{errors.programme}</small>}</label></div><label><span>Your question *</span><textarea name="message" rows="5" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} placeholder="Tell us what you would like to know…"></textarea>{errors.message && <small className="field-error">{errors.message}</small>}</label><button className="button" type="submit">Prepare enquiry</button></form>}</div>
    </div></section>
  </>
}

function Field({ label, name, type = 'text', value, onChange, error, required = false }) {
  return <label><span>{label}{required ? ' *' : ''}</span><input name={name} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error)} />{error && <small className="field-error">{error}</small>}</label>
}
