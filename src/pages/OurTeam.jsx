import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Award, BookOpen, Users, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './OurTeam.css'

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

const values = [
  { icon: Award, title: 'Meritocracy', desc: 'We recognise and reward excellence at every level of the firm.' },
  { icon: BookOpen, title: 'Continuous Learning', desc: 'Our in-house CLE programme — held weekly — ensures every professional is at the cutting edge.' },
  { icon: Users, title: 'Diversity', desc: 'A team truly representative of Nigeria\'s demographics and the global legal community.' },
]

const teamValues = [
  'Intellectual rigour and creative legal thinking',
  'Unwavering commitment to client service',
  'Ethical practice and professional integrity',
  'Cross-disciplinary collaboration and knowledge sharing',
  'Technology adoption and process innovation',
  'Community engagement and social responsibility',
]

export default function OurTeam() {
  return (
    <PageTransition variant="slideUp">
      <div className="team-page">

        {/* Hero */}
        <div className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/team-bg.png)' }} />
          <div className="page-hero-overlay" />
          <div className="page-hero-content container">
            <div className="page-hero-breadcrumb">Home / <span>Our Team</span></div>
            <motion.h1 className="page-hero-title"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              Our Legal Team
            </motion.h1>
          </div>
        </div>

        {/* Intro */}
        <section className="team-intro section-shell">
          <div className="container">
            <Reveal className="grid-center">
              <span className="section-tag section-tag-dark">Our Professionals</span>
              <h2 className="section-title dark">
                Distinguished Minds. <span className="accent-dark">Proven Results.</span>
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Our team of highly skilled legal professionals brings together decades of combined
                experience across all key areas of Nigerian and international law.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Founder Feature */}
        <section className="team-founder section-shell">
          <div className="tf-bg-overlay" />
          <div className="container">
            <Reveal>
              <div className="tf-card glass">
                <div className="tf-portrait-wrap">
                  <div className="tf-portrait">
                    <span>T.A.E</span>
                  </div>
                  <div className="tf-portrait-glow" />
                </div>
                <div className="tf-content">
                  <div className="tf-badge">Founder &amp; Principal</div>
                  <h2 className="tf-name">Chief Theodore A. Ezeobi SAN</h2>
                  <div className="tf-title-bar">Senior Advocate of Nigeria · 1939–2014</div>
                  <p className="tf-bio">
                    Chief Theodore A. Ezeobi SAN was the visionary founder of Ezeobi &amp; Partners.
                    A distinguished Senior Advocate of Nigeria, he practised law for over four decades
                    and appeared in some of the most significant reported cases before the Supreme Court
                    of Nigeria.
                  </p>
                  <p className="tf-bio">
                    Chief Ezeobi's legacy is one of uncompromising integrity, profound legal scholarship,
                    and a deep commitment to justice. His life's work created a law firm that stands as
                    a beacon of excellence in the Nigerian legal fraternity — a legacy we honour every day.
                  </p>
                  <div className="tf-achievements">
                    <div className="tf-ach">
                      <Award size={14} color="var(--teal-light)" />
                      <span>Senior Advocate of Nigeria (SAN)</span>
                    </div>
                    <div className="tf-ach">
                      <Award size={14} color="var(--teal-light)" />
                      <span>Founder — Ezeobi &amp; Partners (Est. 1989)</span>
                    </div>
                    <div className="tf-ach">
                      <Award size={14} color="var(--teal-light)" />
                      <span>Multiple Supreme Court of Nigeria Reported Cases</span>
                    </div>
                    <div className="tf-ach">
                      <Award size={14} color="var(--teal-light)" />
                      <span>Pioneer of the LawyersVSCancer Initiative</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reported Cases */}
        <section className="team-cases section-shell">
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '52px' }}>
              <span className="section-tag section-tag-dark">Legal Excellence</span>
              <h2 className="section-title dark">
                Major Matters &amp; <span className="accent-dark">Reported Cases</span>
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Our firm has handled some of the most significant and landmark legal matters
                in Nigerian legal history.
              </p>
            </Reveal>

            <div className="cases-grid">
              <Reveal delay={0.05}>
                <div className="cases-card glass-light">
                  <div className="cases-card-header">
                    <div className="cases-card-icon">
                      <BookOpen size={22} strokeWidth={1.5} color="var(--teal)" />
                    </div>
                    <h3>Supreme Court Cases</h3>
                  </div>
                  <p className="cases-card-desc">
                    The Firm has been involved in several major reported cases before the Supreme Court
                    of Nigeria, shaping the Nigerian legal landscape across commercial, civil and
                    constitutional matters.
                  </p>
                  <div className="cases-highlight">
                    These cases have become landmark precedents cited across the Nigerian judiciary
                    and remain part of the fabric of Nigerian legal scholarship.
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="cases-card glass-light">
                  <div className="cases-card-header">
                    <div className="cases-card-icon">
                      <Users size={22} strokeWidth={1.5} color="var(--teal)" />
                    </div>
                    <h3>Major Client Matters</h3>
                  </div>
                  <p className="cases-card-desc">
                    From complex mergers and acquisitions to high-profile commercial disputes,
                    infrastructure financing and international arbitrations, our lawyers have
                    navigated some of Nigeria's most complex legal matters.
                  </p>
                  <div className="cases-highlight">
                    Our track record spans energy, banking, real estate, and commercial sectors
                    — delivering results for clients across all industries.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Skills Development */}
        <section className="team-skills section-shell">
          <div className="skills-bg" />
          <div className="container">
            <div className="skills-grid">
              <Reveal>
                <span className="section-tag">Professional Development</span>
                <h2 className="section-title light">
                  Skills <span className="accent">Development</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.97rem', lineHeight: 1.85, marginBottom: '28px' }}>
                  We have an in-house programme called <strong style={{ color: 'var(--teal-light)' }}>"Continuing Legal Education"</strong> —
                  conducted once a week — in which all members of the professional staff present a topic
                  of current legal significance.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '36px' }}>
                  This unique programme ensures every member of the firm remains at the cutting edge
                  of legal developments, delivering superior outcomes for clients through continuous
                  learning and peer knowledge-sharing.
                </p>
                <Link to="/contact" className="btn btn-glass">Career Opportunities <ArrowRight size={16} /></Link>
              </Reveal>

              <div className="team-values">
                {values.map((v, i) => {
                  const Icon = v.icon
                  return (
                    <Reveal key={v.title} delay={i * 0.1}>
                      <div className="team-value-card glass">
                        <div className="tvc-icon">
                          <Icon size={20} strokeWidth={1.5} color="var(--teal-light)" />
                        </div>
                        <div>
                          <h4 className="tvc-title">{v.title}</h4>
                          <p className="tvc-desc">{v.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team values list */}
        <section className="team-culture section-shell">
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '52px' }}>
              <span className="section-tag section-tag-dark">Our Culture</span>
              <h2 className="section-title dark">
                What We <span className="accent-dark">Stand For</span>
              </h2>
            </Reveal>
            <div className="culture-grid">
              {teamValues.map((v, i) => (
                <Reveal key={v} delay={i * 0.08}>
                  <div className="culture-card glass-light">
                    <div className="culture-num">{String(i + 1).padStart(2, '0')}</div>
                    <p className="culture-text">{v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section className="team-join section-shell">
          <div className="container">
            <Reveal>
              <div className="join-inner glass">
                <h2 className="join-title">Join Our Team</h2>
                <p className="join-sub">
                  Ezeobi &amp; Partners is always seeking talented, motivated legal professionals
                  to join our growing team. If you share our commitment to excellence, we want to hear from you.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Explore Opportunities <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
