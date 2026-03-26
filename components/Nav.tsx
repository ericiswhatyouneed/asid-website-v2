'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ─── Types ───────────────────────────────────────────────────────────────────

type DropdownItem = { label: string; href: string }

type MegaColumn = {
  header: string
  items: DropdownItem[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const methodItems: DropdownItem[] = [
  { label: 'Market Inward', href: '/method/market-inward' },
  { label: 'How It Works', href: '/method/how-it-works' },
  { label: 'One Methodology, Many Entry Points', href: '/method/entry-points' },
]

const howWeWorkColumns: MegaColumn[] = [
  {
    header: 'WHAT WE DO',
    items: [
      { label: 'Product Strategy', href: '/work/product-strategy' },
      { label: 'Product UX Design', href: '/work/product-ux-design' },
      { label: 'Product Systems', href: '/work/product-systems' },
      { label: 'AI Product Design', href: '/work/ai-product-design' },
    ],
  },
  {
    header: 'ENGAGEMENT OPTIONS',
    items: [
      { label: 'Discovery Sprint', href: '/work/discovery-sprint' },
      { label: 'Project Engagements', href: '/work/project-engagements' },
      { label: 'Fractional Design Leadership', href: '/work/fractional-design-leadership' },
    ],
  },
]

const whoItems: DropdownItem[] = [
  { label: 'Startups and Scaleups', href: '/who/startups' },
  { label: 'Product Organizations', href: '/who/product-organizations' },
  { label: 'Agencies and Partners', href: '/who/agencies-partners' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function Dropdown({
  items,
  inverted,
}: {
  items: DropdownItem[]
  inverted: boolean
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 0.5rem)',
        left: 0,
        background: '#F5F5F4',
        border: '1px solid var(--color-rule)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0',
        minWidth: '16rem',
        zIndex: 200,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            display: 'block',
            padding: '0.625rem 1.25rem',
            fontSize: '0.9375rem',
            color: 'var(--color-text)',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-red)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function MegaMenu({
  columns,
  inverted,
}: {
  columns: MegaColumn[]
  inverted: boolean
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 0.5rem)',
        left: 0,
        background: '#F5F5F4',
        border: '1px solid var(--color-rule)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        display: 'flex',
        gap: '3rem',
        zIndex: 200,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      }}
    >
      {columns.map((col) => (
        <div key={col.header} style={{ minWidth: '13rem' }}>
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-mid)',
              marginBottom: '0.75rem',
            }}
          >
            {col.header}
          </p>
          {col.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                padding: '0.5rem 0',
                fontSize: '0.9375rem',
                color: 'var(--color-text)',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (key: string) =>
    setExpanded((prev) => (prev === key ? null : key))

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 150,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 200ms',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(340px, 90vw)',
          background: '#1A1A1A',
          zIndex: 200,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease',
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <Image
            src="/logo-white.png"
            alt="A Stronger Idea Design"
            width={120}
            height={36}
            style={{ height: '36px', width: 'auto' }}
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: '#F5F5F4',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Accordion Nav */}
        {[
          { key: 'method', label: 'Method', items: methodItems },
          { key: 'who', label: 'Who We Help', items: whoItems },
        ].map(({ key, label, items }) => (
          <div key={key}>
            <button
              onClick={() => toggle(key)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.875rem 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(212,212,208,0.15)',
                color: '#F5F5F4',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{
                  transform: expanded === key ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms',
                }}
              >
                <polyline points="4,6 8,10 12,6" />
              </svg>
            </button>
            {expanded === key && (
              <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: 'block',
                      padding: '0.625rem 0',
                      fontSize: '0.9375rem',
                      color: 'rgba(245,245,244,0.7)',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* How We Work accordion */}
        <div>
          <button
            onClick={() => toggle('work')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.875rem 0',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid rgba(212,212,208,0.15)',
              color: '#F5F5F4',
              fontSize: '1rem',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            How We Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{
                transform: expanded === 'work' ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 200ms',
              }}
            >
              <polyline points="4,6 8,10 12,6" />
            </svg>
          </button>
          {expanded === 'work' && (
            <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
              {howWeWorkColumns.map((col) => (
                <div key={col.header} style={{ marginBottom: '1rem' }}>
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-mid)',
                      marginBottom: '0.5rem',
                      marginTop: '0.75rem',
                    }}
                  >
                    {col.header}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0',
                        fontSize: '0.9375rem',
                        color: 'rgba(245,245,244,0.7)',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Direct links */}
        {[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Insights', href: '/insights' },
          { label: 'About', href: '/about' },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            style={{
              display: 'block',
              padding: '0.875rem 0',
              borderBottom: '1px solid rgba(212,212,208,0.15)',
              color: '#F5F5F4',
              fontSize: '1rem',
            }}
          >
            {label}
          </Link>
        ))}

        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/contact"
            onClick={onClose}
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'var(--color-red)',
              color: '#F5F5F4',
              borderRadius: '2rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────

export default function Nav() {
  const [inverted, setInverted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > 100) {
        if (current > lastScrollY.current) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      } else {
        setVisible(true)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check for dark/inverted sections via data attribute
  useEffect(() => {
    const checkInverted = () => {
      const hero = document.querySelector('[data-nav-invert]')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setInverted(rect.top <= 0 && rect.bottom > 0)
      }
    }
    window.addEventListener('scroll', checkInverted, { passive: true })
    return () => window.removeEventListener('scroll', checkInverted)
  }, [])

  const handleMouseEnter = (key: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setOpenDropdown(key)
  }

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const navBg = inverted ? '#1A1A1A' : '#F5F5F4'
  const navText = inverted ? '#F5F5F4' : 'var(--color-text)'
  const borderBottom = inverted ? 'none' : '1px solid var(--color-rule)'

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          borderBottom,
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: visible ? 1 : 0,
          transition: 'transform 200ms ease, opacity 200ms ease, background 200ms ease, border-color 200ms ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.5rem',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={inverted ? '/logo-white.png' : '/logo-color.png'}
              alt="A Stronger Idea Design"
              width={140}
              height={36}
              style={{ height: '36px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="nav-desktop"
          >
            {/* Method */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('method')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.9375rem',
                  color: navText,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 200ms',
                }}
              >
                Method
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              {openDropdown === 'method' && (
                <Dropdown items={methodItems} inverted={inverted} />
              )}
            </div>

            {/* How We Work */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('work')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.9375rem',
                  color: navText,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 200ms',
                }}
              >
                How We Work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              {openDropdown === 'work' && (
                <MegaMenu columns={howWeWorkColumns} inverted={inverted} />
              )}
            </div>

            {/* Who We Help */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('who')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.9375rem',
                  color: navText,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 200ms',
                }}
              >
                Who We Help
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              {openDropdown === 'who' && (
                <Dropdown items={whoItems} inverted={inverted} />
              )}
            </div>

            {/* Direct links */}
            {[
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Insights', href: '/insights' },
              { label: 'About', href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.9375rem',
                  color: navText,
                  transition: 'color 200ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = navText)}
              >
                {label}
              </Link>
            ))}

            {/* Contact button */}
            <Link
              href="/contact"
              style={{
                marginLeft: '0.75rem',
                padding: '0.625rem 1.5rem',
                background: 'var(--color-red)',
                color: '#F5F5F4',
                borderRadius: '2rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                transition: 'opacity 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="nav-hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: navText,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block; }
        }
      `}</style>
    </>
  )
}
