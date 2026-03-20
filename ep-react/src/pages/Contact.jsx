import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './Contact.css'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

const offices = [
  { city: 'Abuja', country: 'Nigeria', hq: true, address: '15, Sfax Street, Zone 4 Wuse, Abuja', hours: 'Mon–Fri: 9:00 AM – 5:00 PM\nSat: 10:00 AM – 2:00 PM\nSunday: Closed' },
  { city: 'Lagos', country: 'Nigeria', address: '5 Simpson Street, Lagos', hours: 'Mon–Fri: 9:00 AM – 5:00 PM' },
  { city: 'London', country: 'United Kingdom', address: '38 Barnet Lane, Barnet EN5 2DN', hours: 'Mon–Fri: 9:00 AM – 5:00 PM' },
]

/* ─────────────────────────────────────────────────────
   EMAILJS CONFIGURATION
   To enable live email delivery:
   1. Create a free account at https://www.emailjs.com
   2. Add a new Service (Gmail or any SMTP)
   3. Create an Email Template with variables:
         {{from_name}}, {{from_email}}, {{phone}},
         {{practice_area}}, {{message}}
      Set "To Email" to: info@ezeobiandpartners.com
   4. Replace the placeholders below with your IDs
──────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'      // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // e.g. 'abcDEFghiJKL123'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  function validate(data) {
    const errs = {}
    if (!data.from_name.trim()) errs.from_name = 'Name is required'
    if (!data.from_email.trim()) errs.from_email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) errs.from_email = 'Enter a valid email'
    if (!data.message.trim()) errs.message = 'Message is required'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    const data = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      phone: form.phone.value,
      practice_area: form.practice_area.value,
      message: form.message.value,
      to_email: 'info@ezeobiandpartners.com',
    }
    const errs = validate(data)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <PageTransition variant="fadeScale">
      <div className="contact-page">

        {/* Hero */}
        <div className="contact-hero">
          <div className="contact-hero-bg" />
          <div className="contact-hero-content container">
            <div className="page-hero-breadcrumb">Home / <span>Contact Us</span></div>
            <motion.h1 className="page-hero-title"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              Get In Touch
            </motion.h1>
          </div>
        </div>

        {/* Main contact grid */}
        <section className="contact-main section-shell">
          <div className="container">
            <div className="contact-grid">

              {/* Left – info */}
              <div className="contact-info-col">
                <Reveal>
                  <span className="section-tag section-tag-dark">Reach Us</span>
                  <h2 className="section-title dark">
                    Let's Discuss <span className="accent-dark">Your Matter</span>
                  </h2>
                  <div className="contact-rule" />
                  <p className="contact-intro">
                    Whether you are an individual, corporation, or government entity, our team of
                    expert lawyers is ready to provide legal guidance tailored to your specific matter.
                  </p>
                </Reveal>

                <div className="contact-details">
                  <Reveal delay={0.05}>
                    <a href="tel:+2348177744009" className="contact-detail-card glass-light">
                      <div className="cdc-icon"><Phone size={20} strokeWidth={1.5} color="var(--teal)" /></div>
                      <div>
                        <div className="cdc-label">Phone</div>
                        <div className="cdc-value">+234 (817) 774 4009</div>
                      </div>
                    </a>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <a href="mailto:info@ezeobiandpartners.com" className="contact-detail-card glass-light">
                      <div className="cdc-icon"><Mail size={20} strokeWidth={1.5} color="var(--teal)" /></div>
                      <div>
                        <div className="cdc-label">Email</div>
                        <div className="cdc-value">info@ezeobiandpartners.com</div>
                      </div>
                    </a>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <div className="contact-detail-card glass-light">
                      <div className="cdc-icon"><MapPin size={20} strokeWidth={1.5} color="var(--teal)" /></div>
                      <div>
                        <div className="cdc-label">Head Office</div>
                        <div className="cdc-value">15, Sfax Street, Zone 4 Wuse, Abuja</div>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="contact-detail-card glass-light">
                      <div className="cdc-icon"><Clock size={20} strokeWidth={1.5} color="var(--teal)" /></div>
                      <div>
                        <div className="cdc-label">Office Hours</div>
                        <div className="cdc-value">Mon – Fri: 9:00 AM – 5:00 PM<br />Saturday: 10:00 AM – 2:00 PM</div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Right – form */}
              <Reveal delay={0.1} className="contact-form-col">
                <div className="contact-form-wrap glass-light">
                  <div className="form-header">
                    <h3>Send Us a Message</h3>
                    <p>We'll get back to you within one business day.</p>
                  </div>

                  {status === 'success' && (
                    <div className="form-success-msg">
                      <CheckCircle size={22} color="#2a9d8f" />
                      <div>
                        <strong>Message sent successfully!</strong>
                        <p>Thank you for reaching out. A member of our team will contact you shortly.</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form-error-msg">
                      <AlertCircle size={22} color="#e05656" />
                      <div>
                        <strong>Failed to send message.</strong>
                        <p>Please try again or email us directly at info@ezeobiandpartners.com</p>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form">
                    <div className="form-row">
                      <div className={`form-group${errors.from_name ? ' has-error' : ''}`}>
                        <label htmlFor="from_name">Full Name *</label>
                        <input type="text" id="from_name" name="from_name"
                          placeholder="e.g. Emeka Okafor" onChange={() => setErrors(e => ({ ...e, from_name: '' }))} />
                        {errors.from_name && <span className="field-error">{errors.from_name}</span>}
                      </div>
                      <div className={`form-group${errors.from_email ? ' has-error' : ''}`}>
                        <label htmlFor="from_email">Email Address *</label>
                        <input type="email" id="from_email" name="from_email"
                          placeholder="your@email.com" onChange={() => setErrors(e => ({ ...e, from_email: '' }))} />
                        {errors.from_email && <span className="field-error">{errors.from_email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+234 000 000 0000" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="practice_area">Practice Area</label>
                        <select id="practice_area" name="practice_area">
                          <option value="">Select area of interest</option>
                          <option value="General Practice">General Practice</option>
                          <option value="Business / Commercial Law">Business / Commercial Law</option>
                          <option value="Energy & Natural Resources">Energy &amp; Natural Resources</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className={`form-group${errors.message ? ' has-error' : ''}`}>
                      <label htmlFor="message">Your Message *</label>
                      <textarea id="message" name="message" rows={5}
                        placeholder="Please briefly describe your legal matter or enquiry..."
                        onChange={() => setErrors(e => ({ ...e, message: '' }))} />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    {/* Hidden field for recipient */}
                    <input type="hidden" name="to_email" value="info@ezeobiandpartners.com" />

                    <button type="submit" className="btn btn-primary form-submit-btn"
                      disabled={status === 'loading'}>
                      {status === 'loading' ? (
                        <>Sending… <span className="spinner" /></>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>

                    <p className="form-privacy">
                      By submitting this form, you agree that your information will be handled
                      in strict confidence and used solely to respond to your enquiry.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="contact-offices section-shell">
          <div className="contact-offices-bg" />
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '52px' }}>
              <span className="section-tag">Our Offices</span>
              <h2 className="section-title light">
                Find Us <span className="accent">Anywhere</span>
              </h2>
            </Reveal>
            <div className="contact-offices-grid">
              {offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.1}>
                  <div className="contact-office glass">
                    <div className="co-country">{o.country}</div>
                    <h3 className="co-city">
                      {o.city}
                      {o.hq && <span className="co-hq">HQ</span>}
                    </h3>
                    <div className="co-info">
                      <MapPin size={14} color="var(--teal-light)" />
                      <span>{o.address}</span>
                    </div>
                    <div className="co-info">
                      <Clock size={14} color="var(--teal-light)" />
                      <span style={{ whiteSpace: 'pre-line' }}>{o.hours}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
