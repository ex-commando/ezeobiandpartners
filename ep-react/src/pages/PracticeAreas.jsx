import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Scale, Briefcase, Zap, ChevronDown, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './PracticeAreas.css'

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

const areas = [
  {
    icon: Scale,
    id: 'general',
    label: 'General Practice',
    tagline: 'Comprehensive Legal Coverage',
    overview: 'Our General Practice team handles the full spectrum of legal matters for individuals, families, and corporates — from civil disputes to criminal defence and property transactions.',
    services: [
      { name: 'Arbitration & Civil Litigation', desc: 'Expert representation in dispute resolution, arbitration panels, and civil court proceedings at all levels.' },
      { name: 'Criminal Law', desc: 'Robust criminal defence and prosecution support at all levels of the Nigerian judiciary.' },
      { name: 'Access to Justice', desc: 'Dedicated pro bono and access-to-justice programmes ensuring legal protection for all.' },
      { name: 'Public Law', desc: 'Constitutional and administrative law matters, judicial reviews, and human rights litigation.' },
      { name: 'Family Law', desc: 'Divorce, custody, adoption, and all family-related legal matters handled with sensitivity.' },
      { name: 'Wills & Estates', desc: 'Comprehensive estate planning, will drafting, probate and succession law services.' },
      { name: 'Medicolegal', desc: 'Medical malpractice, personal injury, and healthcare related legal proceedings.' },
      { name: 'Real Estate & Construction', desc: 'Property transactions, title perfection, construction contracts and dispute resolution.' },
    ],
  },
  {
    icon: Briefcase,
    id: 'commercial',
    label: 'Business / Commercial Law',
    tagline: 'Strategic Corporate Counsel',
    overview: 'Our Corporate & Commercial team provides strategic counsel to businesses of all sizes — from early-stage companies to multinationals — navigating the complexities of Nigerian and international commercial law.',
    services: [
      { name: 'Arbitration & International Litigation', desc: 'Cross-border dispute resolution, international commercial arbitration and enforcement of foreign judgments.' },
      { name: 'Employment & Industrial Relations', desc: 'Labour law compliance, employment contracts, industrial disputes and NLRC proceedings.' },
      { name: 'Media, New-Media & Communications', desc: 'Licensing, content rights, regulatory compliance across broadcast, digital and telecoms sectors.' },
      { name: 'Taxes', desc: 'Corporate tax planning, compliance, FIRS disputes, and federal/state tax advisory.' },
      { name: 'Intellectual Property', desc: 'Trade marks, patents, copyrights, designs and trade secrets — protection and enforcement.' },
      { name: 'Entertainment Law', desc: 'Talent agreements, production deals, licensing and rights management.' },
      { name: 'Competition Law', desc: 'Antitrust compliance, merger filings with FCCPC and market regulation.' },
      { name: 'Insurance Law', desc: 'Policy disputes, claims, regulatory compliance and reinsurance agreements.' },
      { name: 'International Franchising', desc: 'Franchise agreements, disclosure documents, regulatory compliance across jurisdictions.' },
      { name: 'Securities & Capital Markets', desc: 'SEC filings, IPOs, bond issuances and capital market regulatory compliance.' },
      { name: 'Banking & Finance', desc: 'Loan agreements, syndications, structured finance, and regulatory compliance.' },
      { name: 'Infrastructure & Project Finance', desc: 'PPP structures, infrastructure financing and concession arrangements.' },
      { name: 'Foreign Direct Investment', desc: 'Inward FDI structuring, exchange control, NIPC compliance and investment protection.' },
      { name: 'Mergers, Acquisitions & Joint Ventures', desc: 'Deal structuring, due diligence, regulatory approvals and post-merger integration.' },
      { name: 'Contract Negotiation & Documentation', desc: 'Drafting, reviewing and negotiating all classes of commercial contracts.' },
      { name: 'Maritime & Transport', desc: 'Shipping, cargo disputes, port operations, aviation and ground transport law.' },
    ],
  },
  {
    icon: Zap,
    id: 'energy',
    label: 'Energy & Natural Resources',
    tagline: 'Powering Nigeria\'s Future',
    overview: 'Our Energy & Natural Resources practice is at the forefront of Nigeria\'s dynamic energy transition — advising investors, operators, regulators, and government entities on the full spectrum of sector-specific legal matters.',
    services: [
      { name: 'Oil & Gas Law', desc: 'Upstream, midstream, and downstream oil and gas transactions, PSCs, JOAs and regulatory compliance.' },
      { name: 'Electricity Law', desc: 'NERC licensing, PPAs, tariff disputes, renewable energy projects and privatisation.' },
      { name: 'Mining Law', desc: 'Mining titles, cadastral matters, environmental compliance and resource extraction agreements.' },
      { name: 'Natural Resources Regulation', desc: 'Regulatory advisory across all natural resource sectors — from water rights to forestry.' },
    ],
  },
]

function AccordionItem({ service, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div className={`accordion-item${open ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(v => !v)}>
        <span>{service.name}</span>
        <ChevronDown size={16} className="acc-chevron" />
      </button>
      <div className="accordion-body">
        <p>{service.desc}</p>
      </div>
    </div>
  )
}

export default function PracticeAreas() {
  const [active, setActive] = useState('general')
  const current = areas.find(a => a.id === active)

  return (
    <PageTransition variant="curtain">
      <div className="practice-page">

        {/* Hero */}
        <div className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: 'url(/practice-bg.png)' }} />
          <div className="page-hero-overlay" />
          <div className="page-hero-content container">
            <div className="page-hero-breadcrumb">Home / <span>Practice Areas</span></div>
            <motion.h1 className="page-hero-title"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              Our Practice Areas
            </motion.h1>
          </div>
        </div>

        {/* Intro */}
        <section className="practice-intro section-shell">
          <div className="container">
            <Reveal className="grid-center">
              <span className="section-tag section-tag-dark">Legal Services</span>
              <h2 className="section-title dark">
                Expert Counsel Across <span className="accent-dark">Every Discipline</span>
              </h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Ezeobi &amp; Partners offers comprehensive legal services across three core practice areas —
                each led by specialists with deep sectoral knowledge and real-world experience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Tab navigation */}
        <section className="practice-detail section-shell">
          <div className="container">
            <Reveal>
              <div className="practice-tabs">
                {areas.map(a => {
                  const Icon = a.icon
                  return (
                    <button
                      key={a.id}
                      className={`practice-tab${active === a.id ? ' practice-tab--active' : ''}`}
                      onClick={() => setActive(a.id)}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                      {a.label}
                    </button>
                  )
                })}
              </div>
            </Reveal>

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="practice-detail-content"
            >
              <div className="practice-detail-header glass-light">
                {(() => { const I = current.icon; return <I size={40} strokeWidth={1.2} color="var(--teal)" /> })()}
                <div className="practice-detail-meta">
                  <div className="practice-detail-tag">{current.tagline}</div>
                  <h2 className="practice-detail-title">{current.label}</h2>
                </div>
              </div>

              <div className="practice-detail-body">
                <div className="practice-overview glass-light">
                  <p>{current.overview}</p>
                </div>
                <div className="practice-services-title">
                  <h3>Areas of Service</h3>
                  <span>{current.services.length} service{current.services.length > 1 ? 's' : ''}</span>
                </div>
                <div className="accordion">
                  {current.services.map((s, i) => (
                    <AccordionItem key={s.name} service={s} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview cards */}
        <section className="practice-overview-cards section-shell">
          <div className="practice-oc-bg" />
          <div className="container">
            <Reveal className="grid-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag">At a Glance</span>
              <h2 className="section-title light">The Full Picture</h2>
            </Reveal>
            <div className="practice-oc-grid">
              {areas.map((a, i) => {
                const Icon = a.icon
                return (
                  <Reveal key={a.id} delay={i * 0.12}>
                    <div className="practice-oc-card glass">
                      <div className="practice-oc-icon">
                        <Icon size={32} strokeWidth={1.3} color="var(--teal-light)" />
                      </div>
                      <h3 className="practice-oc-title">{a.label}</h3>
                      <p className="practice-oc-count">{a.services.length} Areas of Service</p>
                      <button
                        className="practice-oc-btn"
                        onClick={() => { setActive(a.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      >
                        View Details <ArrowRight size={14} />
                      </button>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pa-cta section-shell">
          <div className="container">
            <Reveal>
              <div className="pa-cta-inner glass-light">
                <h2 className="pa-cta-title">Not Sure Where Your Matter Falls?</h2>
                <p className="pa-cta-sub">
                  Contact us — our team will quickly identify the right practice area and specialist for your matter.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
