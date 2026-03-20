import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Scale, Briefcase, Zap, Shield, Star, Globe, Users, ChevronRight, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './Home.css'

/* ── Animation helpers ── */
const fadeUp = {
  initial: { opacity: 0, y: 36 },
  animate: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }
  })
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Counter hook ── */
function useCounter(target, duration = 2000, inView) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

function StatItem({ num, suffix = '', label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(num, 1800, inView)
  return (
    <motion.div ref={ref} className="hero-stat"
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}>
      <div className="hero-stat-num">{count}{suffix}</div>
      <div className="hero-stat-label">{label}</div>
    </motion.div>
  )
}

const practiceCards = [
  {
    icon: Scale,
    num: '01',
    title: 'General Practice',
    desc: 'Comprehensive legal services across civil litigation, criminal law, family law, real estate, and public law.',
    items: ['Arbitration & Civil Litigation', 'Criminal Law', 'Family Law & Wills', 'Real Estate & Construction'],
    color: '#2a8fa8',
  },
  {
    icon: Briefcase,
    num: '02',
    title: 'Business / Commercial Law',
    desc: 'Expert counsel for corporations navigating complex commercial, international, and financial legal matters.',
    items: ['Mergers & Acquisitions', 'Intellectual Property', 'Banking & Finance', 'Foreign Direct Investment'],
    color: '#1e6e82',
    featured: true,
  },
  {
    icon: Zap,
    num: '03',
    title: 'Energy & Natural Resources',
    desc: 'Specialized legal support for the oil & gas, electricity, and mining sectors across Nigeria.',
    items: ['Oil & Gas Law', 'Electricity Law', 'Mining & Natural Resources'],
    color: '#3db5cf',
  },
]

const whyItems = [
  { icon: Star, title: 'Excellence', text: 'Completely confidential, reliable and trustworthy — delivering superior legal expertise at every matter.' },
  { icon: Shield, title: 'Ethical Standards', text: 'Unwaveringly upholding the ethical standards of the profession while advancing the legal society.' },
  { icon: Globe, title: 'Global Perspective', text: 'Assisting local clients in global pursuits and foreign clients in structuring their Nigerian interests.' },
  { icon: Users, title: 'Client Focus', text: 'Longstanding client relationships built on intimate understanding of your business and strategic objectives.' },
]

export default function Home() {
  return (
    <PageTransition variant="fadeScale">
      <div className="home-page">

        {/* ══ HERO ══ */}
        <section className="home-hero">
          <div className="home-hero-bg">
            <img src="/hero-bg.png" alt="" className="home-hero-img" />
            <div className="home-hero-overlay" />
            {/* Animated orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
          </div>

          <div className="home-hero-content container">
            <motion.div className="hero-badge glass"
              variants={fadeUp} initial="initial" animate="animate" custom={0}>
              Exclusive Legal Practice · Est. 1989
            </motion.div>

            <motion.h1 className="hero-title"
              variants={fadeUp} initial="initial" animate="animate" custom={1}>
              Excellence in Law.<br />
              <span className="hero-title-accent">Unparalleled</span> Counsel.
            </motion.h1>

            <motion.p className="hero-sub"
              variants={fadeUp} initial="initial" animate="animate" custom={2}>
              Ezeobi &amp; Partners is a distinguished Nigerian law firm born from the need for
              a truly empowered and exceedingly competent legal practice — offering specialized
              knowledge and personalised service to clients across Nigeria, Africa, and the World.
            </motion.p>

            <motion.div className="hero-ctas"
              variants={fadeUp} initial="initial" animate="animate" custom={3}>
              <Link to="/practice" className="btn btn-primary">
                Our Practice Areas <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-glass">
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div className="hero-stats-bar glass">
            <StatItem num={30} suffix="+" label="Years of Excellence" delay={0.4} />
            <div className="stat-sep" />
            <StatItem num={3} label="Office Locations" delay={0.5} />
            <div className="stat-sep" />
            <StatItem num={500} suffix="+" label="Cases Handled" delay={0.6} />
            <div className="stat-sep" />
            <StatItem num={3} label="Practice Areas" delay={0.7} />
          </div>

          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </section>

        {/* ══ ABOUT STRIP ══ */}
        <section className="home-about section-shell">
          <div className="container">
            <div className="home-about-grid">
              <Reveal className="home-about-img-wrap">
                <img src="/about-img.png" alt="Ezeobi & Partners Office" className="home-about-img" />
                <div className="home-about-badge glass">
                  <span className="badge-est">Est.</span>
                  <span className="badge-yr">1989</span>
                </div>
              </Reveal>

              <div className="home-about-text">
                <Reveal delay={0.05}>
                  <span className="section-tag section-tag-dark">About the Firm</span>
                  <h2 className="section-title dark">
                    A Legacy of Legal <span className="accent-dark">Excellence</span>
                  </h2>
                  <div className="about-rule" />
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="about-lead">
                    E &amp; P was born out of the need for a truly empowered yet exceedingly competent
                    law firm within the World legal society.
                  </p>
                  <p className="about-body">
                    The Firm is premised on fundamental synergies: a common vision to develop a superior
                    and diversified law firm offering specialised knowledge and unparalleled personalised
                    service, coupled with an unwavering emphasis on delivering a total value-added product
                    within the context of a free, globally incorporated World.
                  </p>
                  <p className="about-body">
                    Founded by <strong>Chief Theodore A. Ezeobi SAN (1939–2014)</strong>, the firm has
                    forged a reputation for rigorous advocacy, ethical practice, and genuine commitment
                    to client success.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <Link to="/about" className="btn btn-outline-teal">
                    Discover Our Story <ChevronRight size={16} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PRACTICE AREAS ══ */}
        <section className="home-practice section-shell">
          <div className="practice-dark-bg" />
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '60px' }}>
              <span className="section-tag">What We Do</span>
              <h2 className="section-title light">Our Practice <span className="accent">Areas</span></h2>
              <p className="section-sub light" style={{ margin: '0 auto' }}>
                We provide comprehensive legal services across three core disciplines,
                offering leadership and creative thinking in each focus area.
              </p>
            </Reveal>

            <div className="practice-grid">
              {practiceCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <Reveal key={card.num} delay={i * 0.12}>
                    <div className={`practice-card glass${card.featured ? ' practice-card--featured' : ''}`}>
                      {card.featured && <div className="practice-featured-tag">Core Speciality</div>}
                      <div className="practice-card-icon" style={{ color: card.color }}>
                        <Icon size={36} strokeWidth={1.5} />
                      </div>
                      <div className="practice-card-num">{card.num}</div>
                      <h3 className="practice-card-title">{card.title}</h3>
                      <p className="practice-card-desc">{card.desc}</p>
                      <ul className="practice-card-list">
                        {card.items.map(it => (
                          <li key={it}><span className="dot" />  {it}</li>
                        ))}
                      </ul>
                      <Link to="/practice" className="practice-card-link">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ WHY US ══ */}
        <section className="home-why section-shell">
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag section-tag-dark">Our Difference</span>
              <h2 className="section-title dark">
                Why Choose <span className="accent-dark">Ezeobi &amp; Partners</span>
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Our mission: remain a leading law firm committed to the highest standards
                of service excellence, truly representative of Nigeria's demographics.
              </p>
            </Reveal>

            <div className="why-grid">
              {whyItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <div className="why-card glass-light">
                      <div className="why-card-icon">
                        <Icon size={26} strokeWidth={1.5} color="var(--teal)" />
                      </div>
                      <h4 className="why-card-title">{item.title}</h4>
                      <p className="why-card-text">{item.text}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══ MISSION QUOTE ══ */}
        <section className="home-mission section-shell">
          <div className="mission-bg-overlay" />
          <div className="container">
            <Reveal>
              <div className="mission-inner glass">
                <div className="mission-quote-mark">"</div>
                <blockquote className="mission-quote">
                  We wish to remain a leading law firm committed to the highest standards of service
                  excellence, truly representative of the demographics of Nigeria — continuously
                  enhancing our ability to understand and evolve within the context of the local
                  and regional business environments.
                </blockquote>
                <div className="mission-attr">
                  <div className="mission-attr-line" />
                  <span>Our Mission Statement</span>
                  <div className="mission-attr-line" />
                </div>
                <div className="mission-pillars">
                  {['Service Excellence', 'Professional Ethics', 'Global Perspective', 'Employee Empowerment'].map(p => (
                    <div key={p} className="mission-pillar">
                      <div className="mission-pillar-dot" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ SOCIAL INVESTMENT ══ */}
        <section className="home-social section-shell">
          <div className="container">
            <div className="social-grid">
              <div className="social-text-col">
                <Reveal>
                  <span className="section-tag section-tag-dark">Social Responsibility</span>
                  <h2 className="section-title dark">
                    Beyond the <span className="accent-dark">Courtroom</span>
                  </h2>
                  <p className="about-body">
                    At Ezeobi &amp; Partners, we believe legal excellence extends beyond the courts
                    into the community. Through our ongoing social programmes, we invest in
                    the welfare of society.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="social-list">
                    {['Shelters for homeless children', 'Old age homes support', 'HIV/AIDS awareness',
                      'Arts & culture initiatives', 'Disaster relief funds', 'Prison reform support',
                      'Continuing Legal Education (CLE)'].map(it => (
                      <li key={it}><span className="social-dash" /> {it}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={0.15} className="lawyers-cancer-card glass">
                <div className="lvc-badge">Initiative</div>
                <h3 className="lvc-title">Lawyers VS Cancer</h3>
                <p className="lvc-body">
                  Our distinguished social initiative uniting members of the legal fraternity
                  in the fight against cancer — raising awareness, funding research, and supporting
                  patients and families affected by this disease.
                </p>
                <Link to="/contact" className="btn btn-outline-teal">Get Involved</Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="home-cta">
          <div className="cta-bg-overlay" />
          <Reveal>
            <div className="container">
              <div className="cta-inner glass">
                <h2 className="cta-title">Ready to Discuss Your Legal Matter?</h2>
                <p className="cta-sub">
                  Our team of distinguished legal minds is ready to provide expert guidance
                  tailored to your unique situation.
                </p>
                <div className="cta-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us Today <ArrowRight size={17} />
                  </Link>
                  <a href="tel:+2348177744009" className="btn btn-glass">
                    +234 (817) 774 4009
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </PageTransition>
  )
}
