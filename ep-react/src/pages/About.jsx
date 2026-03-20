import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Target, TrendingUp, Award, Globe, Users, Cpu } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './About.css'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

const missionItems = [
  'Remain a leading law firm committed to the highest standards of service excellence, truly representative of the demographics of Nigeria.',
  'Continue to embrace technology to ensure our objectives of service excellence are realized.',
  'Uphold the firm ethos of empowering our employees and service providers.',
  'Provide staff with a challenging and creative workspace based on an entrenched culture of recognition and learning.',
  'Maintain service excellence at every contact throughout the firm.',
  'Continue enhancing our specialisation in legal disciplines critical to corporate Nigeria.',
  'Constantly enhance our ability to understand and evolve within local and regional business environments.',
]

const successKeys = [
  { icon: Target, title: 'Excellence in Fulfilment', desc: 'Completely confidential, reliable, trustworthy expertise and information delivered at every client touchpoint.' },
  { icon: TrendingUp, title: 'Visibility & Leadership', desc: 'Maintaining and enhancing the firm\'s standing as a shining beacon in the Nigerian legal fraternity.' },
  { icon: Globe, title: 'Multi-Revenue Expertise', desc: 'Leveraging a vast pool of expertise into consulting, project consulting, regulatory and market research.' },
  { icon: Users, title: 'Client Relationships', desc: 'Providing optimal solutions strengthened by longstanding relationships and intimate understanding of client businesses.' },
  { icon: CheckCircle, title: 'Ethical Standards', desc: 'Unwaveringly upholding the ethical standards of the profession whilst contributing to legal society development.' },
  { icon: Cpu, title: 'Technology-Driven', desc: 'Promoting the implementation of the latest available technology on an ongoing basis across all operations.' },
]

const timeline = [
  { year: '1989', event: 'Ezeobi & Partners founded by Chief Theodore A. Ezeobi SAN in Abuja, Nigeria.' },
  { year: '1995', event: 'Expanded practice to Lagos, establishing the second Nigerian office.' },
  { year: '2000', event: 'International reach extended with the opening of the London office at 38 Barnet Lane.' },
  { year: '2008', event: 'Introduced pioneering "Lawyers VS Cancer" social initiative uniting the legal fraternity.' },
  { year: '2014', event: 'Chief Theodore A. Ezeobi SAN passed away; the firm continues his legacy of excellence.' },
  { year: 'Today', event: 'A distinguished full-service law firm serving clients across Nigeria, Africa, and globally.' },
]

export default function About() {
  return (
    <PageTransition variant="slideRight">
      <div className="about-page">

        {/* ── Page Hero ── */}
        <div className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/about-img.png)' }} />
          <div className="page-hero-overlay" />
          <div className="page-hero-content container">
            <div className="page-hero-breadcrumb">Home / <span>About Us</span></div>
            <motion.h1 className="page-hero-title"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}>
              About Ezeobi &amp; Partners
            </motion.h1>
          </div>
        </div>

        {/* ── Story Section ── */}
        <section className="about-story section-shell">
          <div className="container">
            <div className="about-story-grid">
              <Reveal>
                <span className="section-tag section-tag-dark">Our Story</span>
                <h2 className="section-title dark">
                  Born from the Need for <span className="accent-dark">True Excellence</span>
                </h2>
                <div className="about-story-rule" />
                <p className="about-story-lead">
                  E &amp; P was born out of the need for a truly empowered yet exceedingly competent
                  law firm within the World legal society.
                </p>
                <p className="about-body">
                  The Firm is premised on fundamental synergies: a common vision to develop a superior
                  and diversified law firm offering specialised knowledge and unparalleled personalised
                  service coupled with an unwavering emphasis on delivering a total value-added product
                  within the context of a free globally incorporated World.
                </p>
                <p className="about-body">
                  For over three decades, Ezeobi &amp; Partners has served as a trusted partner for
                  individuals, corporations, and government entities across Nigeria and beyond, providing
                  exceptional legal guidance through every challenge.
                </p>
              </Reveal>

              <div className="about-story-stats">
                {[['30+', 'Years of Practice'], ['3', 'Office Locations'], ['500+', 'Cases Handled'], ['3', 'Practice Areas']].map(([n, l], i) => (
                  <Reveal key={l} delay={i * 0.08}>
                    <div className="about-stat-card glass-light">
                      <div className="about-stat-num">{n}</div>
                      <div className="about-stat-label">{l}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="about-founder section-shell">
          <div className="founder-bg-overlay" />
          <div className="container">
            <Reveal>
              <div className="founder-inner glass">
                <div className="founder-portrait">
                  <div className="founder-initials">T.A.E</div>
                  <div className="founder-portrait-ring" />
                </div>
                <div className="founder-info">
                  <div className="founder-eyebrow">Founder &amp; Principal</div>
                  <h3 className="founder-name">Chief Theodore A. Ezeobi SAN</h3>
                  <div className="founder-dates">1939 — 2014</div>
                  <p className="founder-bio">
                    Chief Ezeobi was a Senior Advocate of Nigeria whose distinguished legal career
                    spanned decades of landmark advocacy. A visionary leader, he established what is
                    today a premier Nigerian law firm — built on a bedrock of trust, intellectual
                    rigour, and unwavering commitment to justice.
                  </p>
                  <p className="founder-bio">
                    His vision was to build a law firm that would not only excel in legal practice
                    but also contribute meaningfully to the development of Nigeria's legal society
                    and the global community — a vision we proudly uphold today.
                  </p>
                  <div className="founder-accolades">
                    {['Senior Advocate of Nigeria (SAN)', 'Founder — Ezeobi & Partners', 'Numerous Supreme Court Reported Cases'].map(a => (
                      <div key={a} className="accolade">
                        <Award size={14} color="var(--teal)" style={{ flexShrink: 0 }} />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="about-mission section-shell">
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag section-tag-dark">Our Mission</span>
              <h2 className="section-title dark">
                What We <span className="accent-dark">Strive For</span>
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Our mission drives every decision we make, every case we handle,
                and every client relationship we build.
              </p>
            </Reveal>

            <div className="mission-columns">
              <Reveal delay={0.05}>
                <div className="mission-list-card glass-light">
                  <h4>We Wish To:</h4>
                  <ul className="mission-list">
                    {missionItems.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={15} color="var(--teal)" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mission-cta-card">
                  <div className="mcta-inner glass">
                    <h4 className="mcta-title">Our Core Philosophy</h4>
                    <p className="mcta-text">
                      At Ezeobi &amp; Partners, excellence is not just a goal — it is a standard we
                      uphold in every case, for every client, at every level of practice.
                    </p>
                    <blockquote className="mcta-quote">
                      "We believe the inherent potential of all people is just waiting to be
                      realised and actualised."
                    </blockquote>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: '28px', width: '100%', justifyContent: 'center' }}>
                      Consult With Us
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Keys to Success ── */}
        <section className="about-keys section-shell">
          <div className="keys-bg" />
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag">Keys to Success</span>
              <h2 className="section-title light">
                What Makes Us <span className="accent">Different</span>
              </h2>
            </Reveal>
            <div className="keys-grid">
              {successKeys.map((k, i) => {
                const Icon = k.icon
                return (
                  <Reveal key={k.title} delay={i * 0.08}>
                    <div className="key-card glass">
                      <div className="key-card-icon">
                        <Icon size={22} strokeWidth={1.5} color="var(--teal-light)" />
                      </div>
                      <h4 className="key-card-title">{k.title}</h4>
                      <p className="key-card-desc">{k.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="about-timeline section-shell">
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '60px' }}>
              <span className="section-tag section-tag-dark">Our Journey</span>
              <h2 className="section-title dark">
                A History of <span className="accent-dark">Excellence</span>
              </h2>
            </Reveal>
            <div className="timeline">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className={`timeline-item${i % 2 === 0 ? '' : ' timeline-item--right'}`}>
                    <div className="timeline-content glass-light">
                      <div className="timeline-year">{t.year}</div>
                      <p className="timeline-event">{t.event}</p>
                    </div>
                    <div className="timeline-node" />
                  </div>
                </Reveal>
              ))}
              <div className="timeline-spine" />
            </div>
          </div>
        </section>

        {/* ── Offices ── */}
        <section className="about-offices section-shell">
          <div className="offices-bg" />
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag">Our Presence</span>
              <h2 className="section-title light">Where We <span className="accent">Operate</span></h2>
            </Reveal>
            <div className="offices-list">
              {[
                { city: 'Abuja', country: 'Nigeria', hq: true, addr: '15, Sfax Street, Zone 4 Wuse, Abuja', hours: 'Mon–Fri: 9:00–17:00 · Sat: 10:00–14:00' },
                { city: 'Lagos', country: 'Nigeria', addr: '5 Simpson Street, Lagos', hours: 'Mon–Fri: 9:00–17:00' },
                { city: 'London', country: 'United Kingdom', addr: '38 Barnet Lane, Barnet EN5 2DN', hours: 'Mon–Fri: 9:00–17:00' },
              ].map((o, i) => (
                <Reveal key={o.city} delay={i * 0.12}>
                  <div className="office-item glass">
                    <div className="office-item-country">{o.country}</div>
                    <h3 className="office-item-city">
                      {o.city}
                      {o.hq && <span className="office-hq-badge">HQ</span>}
                    </h3>
                    <p className="office-item-addr">{o.addr}</p>
                    <p className="office-item-hours">{o.hours}</p>
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
