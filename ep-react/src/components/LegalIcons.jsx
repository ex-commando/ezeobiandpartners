import './LegalIcons.css'

/* Single floating icon */
function FloatIcon({ icon, style, className = '' }) {
  return (
    <div className={`legal-float-icon ${className}`} style={style}>
      {icon}
    </div>
  )
}

/* Scales of Justice */
const ScaleIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 12 H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 12 L16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 12 L48 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 28 C10 28 8 36 16 36 C24 36 22 28 22 28 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M42 28 C42 28 40 36 48 36 C56 36 54 28 54 28 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 56 H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/* Gavel */
const GavelIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="8" width="20" height="10" rx="2" transform="rotate(45 28 8)" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 34 L42 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="8" y="48" width="28" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 52 L36 52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
)

/* Scroll / Parchment */
const ScrollIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="10" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 10 C12 6 18 6 18 10" stroke="currentColor" strokeWidth="2"/>
    <path d="M52 10 C52 6 46 6 46 10" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 22 H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 30 H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 38 H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

/* Columns / Courthouse */
const ColumnsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 52 H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 44 H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="12" y="18" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="22" y="18" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="36" y="18" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="46" y="18" width="6" height="26" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 18 H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 8 L8 18 H56 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

/* Book */
const BookIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12 C12 12 20 8 32 12 L32 54 C32 54 20 50 12 54 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M52 12 C52 12 44 8 32 12 L32 54 C32 54 44 50 52 54 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M32 12 L32 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

/* Shield */
const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 L52 16 V32 C52 44 32 56 32 56 C32 56 12 44 12 32 V16 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 32 L30 38 L42 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const icons = [
  { el: <ScaleIcon />,   top: '12%', left: '6%',  size: 58, dur: 9,  delay: 0,    opacity: 0.07 },
  { el: <GavelIcon />,   top: '22%', right: '7%', size: 48, dur: 12, delay: 1.5,  opacity: 0.06 },
  { el: <ScrollIcon />,  top: '55%', left: '4%',  size: 44, dur: 10, delay: 0.8,  opacity: 0.06 },
  { el: <ColumnsIcon />, top: '70%', right: '5%', size: 62, dur: 14, delay: 2,    opacity: 0.05 },
  { el: <BookIcon />,    top: '38%', left: '8%',  size: 40, dur: 11, delay: 3,    opacity: 0.06 },
  { el: <ShieldIcon />,  top: '80%', left: '50%', size: 46, dur: 13, delay: 1,    opacity: 0.05 },
  { el: <ScaleIcon />,   top: '8%',  right: '15%',size: 36, dur: 8,  delay: 4,    opacity: 0.05 },
  { el: <GavelIcon />,   top: '60%', right: '12%',size: 38, dur: 15, delay: 2.5,  opacity: 0.04 },
]

export default function LegalIcons() {
  return (
    <div className="legal-icons-layer" aria-hidden="true">
      {icons.map((ic, i) => (
        <FloatIcon
          key={i}
          icon={ic.el}
          style={{
            top: ic.top,
            left: ic.left,
            right: ic.right,
            width: ic.size,
            height: ic.size,
            opacity: ic.opacity,
            animationDuration: `${ic.dur}s`,
            animationDelay: `${ic.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
