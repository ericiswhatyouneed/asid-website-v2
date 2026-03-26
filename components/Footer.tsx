'use client'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  method: [
    { label: 'Market Inward', href: '/method/market-inward' },
    { label: 'How It Works', href: '/method/how-it-works' },
  ],
  work: [
    { label: 'Product Strategy', href: '/work/product-strategy' },
    { label: 'Product UX Design', href: '/work/product-ux-design' },
    { label: 'Product Systems', href: '/work/product-systems' },
    { label: 'AI Product Design', href: '/work/ai-product-design' },
    { label: 'Discovery Sprint', href: '/work/discovery-sprint' },
    { label: 'Project Engagements', href: '/work/project-engagements' },
    { label: 'Fractional Design Leadership', href: '/work/fractional-design-leadership' },
  ],
  company: [
    { label: 'Who We Help', href: '/who/startups' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  color: 'var(--color-mid)',
  transition: 'color 200ms',
  padding: '0.25rem 0',
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F4')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mid)')}
    >
      {children}
    </Link>
  )
}

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '0.6875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#F5F5F4',
        marginBottom: '1rem',
      }}
    >
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-dark)' }}>
      {/* Display statement */}
      <div
        style={{
          borderBottom: '1px solid var(--color-rule)',
          padding: '5rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 3rem)',
              fontWeight: 300,
              color: '#F5F5F4',
              lineHeight: 1.3,
            }}
          >
            That is not a design methodology.<br />
            That is how strategy should work.
          </p>
        </div>
      </div>

      {/* Main columns */}
      <div className="container" style={{ padding: '5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3rem',
          }}
          className="footer-grid"
        >
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/logo-white.png"
              alt="A Stronger Idea Design"
              width={140}
              height={40}
              style={{ height: '40px', width: 'auto', marginBottom: '1.25rem' }}
            />
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#F5F5F4',
                marginBottom: '0.5rem',
              }}
            >
              A Stronger Idea Design
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', marginBottom: '0.25rem' }}>
              Market Inward Design Methodology
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', marginBottom: '0.25rem' }}>
              Austin, TX
            </p>
            <a
              href="mailto:hello@astrongeridea.design"
              style={{ fontSize: '0.875rem', color: 'var(--color-mid)', display: 'block', marginBottom: '1rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mid)')}
            >
              hello@astrongeridea.design
            </a>
            <a
              href="https://linkedin.com/company/a-stronger-idea-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--color-mid)', display: 'inline-block', transition: 'color 200ms' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mid)')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Column 2 — Method */}
          <div>
            <ColHeader>Method</ColHeader>
            {footerLinks.method.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </div>

          {/* Column 3 — How We Work */}
          <div>
            <ColHeader>How We Work</ColHeader>
            {footerLinks.work.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </div>

          {/* Column 4 — Company */}
          <div>
            <ColHeader>Company</ColHeader>
            {footerLinks.company.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container"
        style={{
          borderTop: '1px solid var(--color-rule)',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid)' }}>
          © 2026 A Stronger Idea Design
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-mid)', fontStyle: 'italic' }}>
          The first conversation is a diagnosis, not a pitch.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div {
            border-top: 1px solid var(--color-rule);
            padding-top: 2rem;
          }
          .footer-grid > div:first-child {
            border-top: none;
            padding-top: 0;
          }
        }
      `}</style>
    </footer>
  )
}
