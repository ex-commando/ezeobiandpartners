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

/* 12 icons spaced nicely over the viewport width and height */
const icons = [
  { id: 1,  el: <ScaleIcon />,   top: '10%', left: '5%',  size: 70, dur: 12, delay: 0,    opacity: 0.08 },
  { id: 2,  el: <GavelIcon />,   top: '18%', right: '8%', size: 60, dur: 14, delay: 2,    opacity: 0.07 },
  { id: 3,  el: <ScrollIcon />,  top: '40%', left: '10%', size: 55, dur: 11, delay: 1,    opacity: 0.07 },
  { id: 4,  el: <ColumnsIcon />, top: '35%', right: '12%',size: 80, dur: 16, delay: 3,    opacity: 0.06 },
  { id: 5,  el: <BookIcon />,    top: '65%', left: '15%', size: 50, dur: 13, delay: 4,    opacity: 0.07 },
  { id: 6,  el: <ShieldIcon />,  top: '75%', right: '20%',size: 65, dur: 15, delay: 1.5,  opacity: 0.06 },
  { id: 7,  el: <ScaleIcon />,   top: '85%', left: '30%', size: 50, dur: 12, delay: 5,    opacity: 0.05 },
  { id: 8,  el: <GavelIcon />,   top: '50%', right: '25%',size: 45, dur: 10, delay: 3.5,  opacity: 0.05 },
  { id: 9,  el: <ColumnsIcon />, top: '25%', left: '40%', size: 70, dur: 14, delay: 0.5,  opacity: 0.04 },
  { id: 10, el: <BookIcon />,    top: '90%', right: '8%', size: 55, dur: 13, delay: 2.5,  opacity: 0.06 },
]

export default function LegalIcons({ fixed = false }) {
  // Use .fixed-global if mounted in App root
  const containerClass = fixed ? 'legal-icons-layer fixed-global' : 'legal-icons-layer'

  return (
    <div className={containerClass} aria-hidden="true">
      {icons.map((ic) => (
        <FloatIcon
          key={ic.id}
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
