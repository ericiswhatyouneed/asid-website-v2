'use client'

import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import StatCounter from '@/components/StatCounter'

// ─── Market Inward Arc Diagram ────────────────────────────────────────────────
// SVG canvas 500×500, center 250,250
// Ring circumferences: MARKET r=220 → 1383, ECOSYSTEM r=160 → 1006, WORKFLOWS r=100 → 629

function MarketInwardArc() {
  return (
    <>
      <style>{`
        @keyframes drawMarket {
          from { stroke-dashoffset: 1383; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawEco {
          from { stroke-dashoffset: 1006; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawWork {
          from { stroke-dashoffset: 629; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes arcFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes arcPulse {
          from { transform: scale(0.99); }
          to   { transform: scale(1.00); }
        }
        .arc-market {
          stroke-dasharray: 1383;
          stroke-dashoffset: 1383;
          animation: drawMarket 600ms ease-out 0ms forwards;
        }
        .arc-eco {
          stroke-dasharray: 1006;
          stroke-dashoffset: 1006;
          animation: drawEco 600ms ease-out 700ms forwards;
        }
        .arc-work {
          stroke-dasharray: 629;
          stroke-dashoffset: 629;
          animation: drawWork 600ms ease-out 1400ms forwards;
        }
        .arc-product {
          opacity: 0;
          animation: arcFade 400ms ease-out 2100ms forwards;
        }
        .arc-labels {
          opacity: 0;
          animation: arcFade 400ms ease-out 2500ms forwards;
        }
        .arc-rings {
          transform-box: fill-box;
          transform-origin: center;
          animation: arcPulse 4s ease-in-out 3s infinite alternate;
        }
      `}</style>
      <svg
        viewBox="0 0 500 500"
        style={{ width: '100%', maxWidth: '500px', display: 'block' }}
        aria-label="Market Inward methodology — four concentric layers: Market, Ecosystem, Workflows, Product"
      >
        <g className="arc-rings">
          <circle className="arc-market" cx="250" cy="250" r="220"
            stroke="#1A1A1A" strokeWidth="1" fill="none" />
          <circle className="arc-eco" cx="250" cy="250" r="160"
            stroke="#1A1A1A" strokeWidth="1" fill="none" />
          <circle className="arc-work" cx="250" cy="250" r="100"
            stroke="#1A1A1A" strokeWidth="1" fill="none" />
        </g>

        {/* Product — small square at center */}
        <rect className="arc-product" x="244" y="244" width="12" height="12" fill="#1A1A1A" />

        {/* Signal Red anchor dot at MARKET label */}
        <circle cx="465" cy="140" r="4" fill="#C0392B" />

        {/* Labels + dashed connector lines */}
        <g className="arc-labels">
          {/* Connectors: ring tangent point → label */}
          <line x1="446" y1="150" x2="463" y2="141"
            stroke="#1A1A1A" strokeDasharray="2 3" strokeWidth="0.5" opacity="0.4" />
          <line x1="370" y1="144" x2="406" y2="112"
            stroke="#1A1A1A" strokeDasharray="2 3" strokeWidth="0.5" opacity="0.4" />
          <line x1="318" y1="177" x2="346" y2="147"
            stroke="#1A1A1A" strokeDasharray="2 3" strokeWidth="0.5" opacity="0.4" />
          <line x1="256" y1="244" x2="261" y2="240"
            stroke="#1A1A1A" strokeDasharray="2 3" strokeWidth="0.5" opacity="0.4" />
          {/* Labels */}
          <text x="472" y="138" fontFamily="'DM Sans', sans-serif" fontSize="10"
            textAnchor="start" letterSpacing="1" fill="#6B6B6B">MARKET</text>
          <text x="408" y="110" fontFamily="'DM Sans', sans-serif" fontSize="10"
            textAnchor="start" letterSpacing="1" fill="#6B6B6B">ECOSYSTEM</text>
          <text x="348" y="145" fontFamily="'DM Sans', sans-serif" fontSize="10"
            textAnchor="start" letterSpacing="1" fill="#6B6B6B">WORKFLOWS</text>
          <text x="262" y="238" fontFamily="'DM Sans', sans-serif" fontSize="10"
            textAnchor="start" letterSpacing="1" fill="#6B6B6B">PRODUCT</text>
        </g>
      </svg>
    </>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const methodSteps = [
  {
    number: '01',
    label: 'MARKET AND ECOSYSTEM FIRST',
    headline: 'Map the full context before anything is designed.',
    body: 'Every user type. Every constraint. Every adjacent system. What the market actually requires — before a single resource is committed to execution.',
  },
  {
    number: '02',
    label: 'WORKFLOWS BEFORE FEATURES',
    headline: 'Design how users move through the product before designing what they see.',
    body: 'The layer most processes skip. The layer where most problems live. Workflows designed in ecosystem context hold together at scale.',
  },
  {
    number: '03',
    label: 'PRODUCT AND SYSTEM LAST',
    headline: 'Features built on a foundation that makes them coherent.',
    body: 'From the first decision to the final iteration. Not assembled from assumptions. Designed from validated ground.',
  },
]

const serviceCards = [
  {
    label: 'PRODUCT STRATEGY',
    headline: 'Know what to build before you build it.',
    body: 'Ecosystem mapping, validated insight, and a strategic foundation before a single screen is drawn.',
    href: '/work/product-strategy',
    linkText: 'Product Strategy →',
  },
  {
    label: 'PRODUCT UX DESIGN',
    headline: 'Design for the workflow, not just the screen.',
    body: 'User experience designed from workflow architecture outward. Coherent at the system level.',
    href: '/work/product-ux-design',
    linkText: 'Product UX Design →',
  },
  {
    label: 'PRODUCT SYSTEMS',
    headline: 'The design system follows the product system.',
    body: 'Design architecture that scales with the product. Not a component library layered over entropy.',
    href: '/work/product-systems',
    linkText: 'Product Systems →',
  },
  {
    label: 'AI PRODUCT DESIGN',
    headline: "AI amplifies the methodology. It doesn't replace it.",
    body: 'When products incorporate AI, systems thinking becomes more important, not less.',
    href: '/work/ai-product-design',
    linkText: 'AI Product Design →',
  },
]

const caseStudies = [
  {
    industry: 'CIVIC TECHNOLOGY',
    headline: 'A municipal parking platform serving the entire population of Detroit.',
    body: 'Five distinct user types. Real-time operational requirements. City-level stakes.',
    stats: [
      { number: '200K+', label: 'Monthly transactions' },
      { number: '4.6', label: 'App Store rating' },
    ],
    href: '/work/flowbird-park-detroit',
  },
  {
    industry: 'FINANCIAL TECHNOLOGY',
    headline: 'Estate planning platform in the $124T generational wealth transfer market.',
    body: 'Where workflow errors have legal consequences and every design decision carries operational weight.',
    stats: [
      { number: '35%', label: 'Task completion improvement' },
      { number: '50%', label: 'Reduction in user errors' },
    ],
    href: '/work/estate-guru-dashboard-case-study',
  },
  {
    industry: 'INSTITUTIONAL FINANCE',
    headline: 'Fund administration infrastructure serving $150M to $20B AUM.',
    body: 'Where design decisions carry compliance risk and the consequences of getting it wrong are measurable.',
    stats: [
      { number: '150+', label: 'Funds onboarded' },
      { number: '$20B', label: 'Maximum AUM per fund' },
    ],
    href: '/work/euvic-alterdomus-case-study',
  },
]

const whoCards = [
  {
    category: 'STARTUPS AND SCALEUPS',
    body: "You have a product hypothesis and runway to build. Before you commit, make sure you're building the right thing in the right sequence.",
    linkText: 'For Startups →',
    href: '/who/startups',
  },
  {
    category: 'PRODUCT ORGANIZATIONS',
    body: "Your product is growing but coherence is degrading. More design investment isn't fixing it. The sequence needs to change.",
    linkText: 'For Product Organizations →',
    href: '/who/product-organizations',
  },
  {
    category: 'AGENCIES AND PARTNERS',
    body: "You have a client project that needs strategic product depth your team can't provide in-house.",
    linkText: 'For Agencies and Partners →',
    href: '/who/agencies-partners',
  },
]

const insightCards = [
  {
    category: 'THE MARKET INWARD METHOD',
    readTime: '8 min read',
    headline: 'Why I Design Products From the Outside In.',
    excerpt: 'The methodology behind every engagement. What Market Inward is and why it exists.',
    href: '/insights/outside-in-product-design-the-asid-method',
  },
  {
    category: 'PRODUCT ARCHITECTURE',
    readTime: '7 min read',
    headline: "Design Entropy Isn't a Design Problem. It's a Sequencing Problem.",
    excerpt: 'Why more design investment often makes products less coherent — and what to do about it.',
    href: '/insights/design-entropy-sequencing-problem',
  },
  {
    category: 'PRODUCT STRATEGY',
    readTime: '7 min read',
    headline: 'Why the Discovery Sprint Comes First.',
    excerpt: 'The two weeks that prevent months of building on the wrong foundation.',
    href: '/insights/discovery-sprint-why-it-comes-first',
  },
]

const CHAOS_HREF = 'https://www.standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf'

// ─── Homepage ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 01 — HERO
      ───────────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4.5rem',
        background: 'var(--color-bg)',
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              padding: '5rem 0',
            }}
          >
            {/* Left column */}
            <div>
              <span style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-mid)',
                marginBottom: '1.5rem',
                display: 'block',
              }}>
                For founders, product leaders, and their teams.
              </span>

              <h1 style={{
                fontSize: 'clamp(3.5rem, 6vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'var(--color-text)',
              }}>
                Build the right product.
              </h1>

              <p style={{
                fontSize: '1.125rem',
                fontWeight: 400,
                color: 'var(--color-mid)',
                lineHeight: 1.75,
                maxWidth: '32rem',
                marginTop: '1.5rem',
              }}>
                A Stronger Idea Design is a product design consultancy that maps the
                market ecosystem before anything is designed, so every decision is
                built on validated ground.
              </p>

              <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '2.5rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                <Link
                  href="/contact"
                  style={{
                    background: 'var(--color-red)',
                    color: '#F5F5F4',
                    padding: '0.875rem 1.75rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-block',
                    transition: 'background 200ms',
                    borderRadius: 0,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#A93226')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-red)')}
                >
                  Start a Conversation
                </Link>

                <Link
                  href="/method/market-inward"
                  style={{
                    color: 'var(--color-text)',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderBottom: '1px solid var(--color-rule)',
                    paddingBottom: '2px',
                    transition: 'border-bottom-color 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'var(--color-text)')}
                  onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'var(--color-rule)')}
                >
                  See Our Method →
                </Link>
              </div>
            </div>

            {/* Right column — animated arc diagram */}
            <div
              className="hero-arc"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <MarketInwardArc />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 02 — STATS BAR
      ───────────────────────────────────────────────────────────────────── */}
      <div style={{
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
        padding: '2.5rem 0',
        background: 'var(--color-bg)',
      }}>
        <div className="container">
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
            }}
          >
            <StatCounter value="200K+" label="Monthly transactions, Park Detroit" />
            <StatCounter value="4.6"   label="App Store rating, Park Detroit" />
            <StatCounter value="$124T" label="Market served, EstateGuru" />
            <StatCounter value="$20B"  label="AUM on platforms designed" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 03 — THE PROBLEM
      ───────────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <span className="section-label">THE PROBLEM</span>

          {/* Moment 1 */}
          <AnimateOnScroll delay={0}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.2,
                color: 'var(--color-text)',
              }}>
                You have invested in design.<br />
                The product still isn&apos;t working.
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-mid)',
                maxWidth: '42rem',
                margin: '1.5rem auto 0',
                lineHeight: 1.75,
              }}>
                More designers. Better processes. A growing design system. And yet
                the product feels more fragmented with every release.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Moment 2 */}
          <AnimateOnScroll delay={150}>
            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
              <p style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                color: 'var(--color-text)',
              }}>
                The cause is almost never quality.<br />
                It is{' '}
                <span style={{ color: 'var(--color-red)' }}>sequence.</span>
              </p>
            </div>
          </AnimateOnScroll>

          {/* Moment 3 — stats */}
          <AnimateOnScroll delay={300}>
            <div
              className="problem-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '5rem',
                maxWidth: '48rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {/* Stat left */}
              <div style={{ paddingRight: '3rem', textAlign: 'center' }}>
                <div className="problem-stat-number">
                  <StatCounter value="31%" label="" />
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-mid)',
                  marginTop: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  of software projects are cancelled before completion due to
                  requirements failures, not technical ones.{' '}
                  <a
                    href={CHAOS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-mid)',
                      textDecoration: 'underline',
                      fontSize: '0.8125rem',
                    }}
                  >
                    Standish Group CHAOS Report
                  </a>
                </p>
              </div>

              {/* Stat right */}
              <div style={{
                paddingLeft: '3rem',
                borderLeft: '1px solid var(--color-rule)',
                textAlign: 'center',
              }}>
                <div className="problem-stat-number">
                  <StatCounter value="53%" label="" />
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-mid)',
                  marginTop: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  cost nearly double their original estimate for the same reason.{' '}
                  <a
                    href={CHAOS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-mid)',
                      textDecoration: 'underline',
                      fontSize: '0.8125rem',
                    }}
                  >
                    Standish Group CHAOS Report
                  </a>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 04 — THE METHOD
      ───────────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <span className="section-label">THE METHOD</span>

          <div style={{ maxWidth: '44rem', margin: '0.5rem auto 0', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
              fontWeight: 500,
              color: 'var(--color-text)',
            }}>
              Design from the market inward, not the feature outward.
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-mid)',
              marginTop: '1rem',
              lineHeight: 1.75,
            }}>
              Market Inward sequences every decision from the outermost layer in.
              The market defines the opportunity. The ecosystem defines what it
              requires. The product delivers it.
            </p>
          </div>

          {/* Steps — alternating layout */}
          {methodSteps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 200}>
              <div
                className="method-step"
                style={{
                  display: 'flex',
                  flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
                  gap: '4rem',
                  alignItems: 'center',
                  marginTop: '5rem',
                }}
              >
                {/* Illustration placeholder */}
                <div style={{ flex: '0 0 auto', width: 'min(400px, 45%)' }}>
                  <div style={{
                    background: '#EBEBEA',
                    aspectRatio: '4/3',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-mid)',
                      textAlign: 'center',
                      padding: '1rem',
                    }}>
                      {step.label}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '5rem',
                    fontWeight: 400,
                    color: 'var(--color-rule)',
                    lineHeight: 1,
                  }}>
                    {step.number}
                  </div>
                  <span style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-red)',
                    marginTop: '0.5rem',
                  }}>
                    {step.label}
                  </span>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    marginTop: '0.75rem',
                    lineHeight: 1.3,
                  }}>
                    {step.headline}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-mid)',
                    lineHeight: 1.75,
                    marginTop: '0.75rem',
                    maxWidth: '28rem',
                  }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 05 — SERVICES (DARK)
          data-section="dark" triggers nav color inversion via IntersectionObserver
      ───────────────────────────────────────────────────────────────────── */}
      <section
        className="section"
        data-section="dark"
        style={{ background: 'var(--color-dark)' }}
      >
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-red)' }}>
            HOW WE HELP
          </span>

          <AnimateOnScroll delay={0}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#F5F5F4',
              lineHeight: 1.1,
              marginTop: '0.5rem',
            }}>
              Four disciplines.<br />One methodology.
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-mid)',
              marginTop: '1rem',
              maxWidth: '36rem',
              lineHeight: 1.75,
            }}>
              Every engagement applies Market Inward to a specific layer of the
              product system.
            </p>
          </AnimateOnScroll>

          <div
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {serviceCards.map(card => (
              <div
                key={card.href}
                style={{
                  background: '#222222',
                  border: '1px solid #333333',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Illustration placeholder */}
                <div style={{
                  background: '#2A2A2A',
                  aspectRatio: '16/9',
                  borderRadius: '0.25rem',
                  marginBottom: '1.5rem',
                }} />

                <span style={{
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-red)',
                  marginBottom: '0.75rem',
                  display: 'block',
                }}>
                  {card.label}
                </span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#F5F5F4',
                  lineHeight: 1.3,
                }}>
                  {card.headline}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-mid)',
                  lineHeight: 1.6,
                  marginTop: '0.5rem',
                  flex: 1,
                }}>
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  style={{
                    marginTop: '1.5rem',
                    color: '#F5F5F4',
                    fontSize: '0.9375rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#F5F5F4')}
                >
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 06 — CASE STUDIES
      ───────────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <span className="section-label">THE WORK</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            fontWeight: 500,
            marginTop: '0.5rem',
          }}>
            The methodology applied to real products at scale.
          </h2>

          <div style={{ marginTop: '3rem' }}>
            {caseStudies.map(cs => (
              <AnimateOnScroll key={cs.href} delay={0}>
                <div
                  className="case-study-card"
                  style={{
                    borderTop: '1px solid var(--color-rule)',
                    padding: '3rem 0',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '3rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Left — sticky on desktop */}
                  <div
                    className="case-study-left"
                    style={{ position: 'sticky', top: '6rem' }}
                  >
                    <span style={{
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-red)',
                      display: 'block',
                    }}>
                      {cs.industry}
                    </span>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      lineHeight: 1.3,
                      marginTop: '0.75rem',
                    }}>
                      {cs.headline}
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-mid)',
                      lineHeight: 1.6,
                      marginTop: '1rem',
                    }}>
                      {cs.body}
                    </p>
                    {/* Inline stats */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                      marginTop: '1.5rem',
                    }}>
                      {cs.stats.map(stat => (
                        <div key={stat.label}>
                          <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.75rem',
                            fontWeight: 400,
                            color: 'var(--color-text)',
                            lineHeight: 1,
                          }}>
                            {stat.number}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-mid)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginTop: '0.25rem',
                          }}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={cs.href}
                      style={{
                        display: 'inline-block',
                        marginTop: '1.5rem',
                        color: 'var(--color-red)',
                        fontSize: '0.9375rem',
                        transition: 'opacity 200ms',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      Read case study →
                    </Link>
                  </div>

                  {/* Right — image placeholder */}
                  <div style={{
                    background: '#EBEBEA',
                    aspectRatio: '16/9',
                    borderRadius: '0.5rem',
                    width: '100%',
                  }} />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 07 — WHO WE HELP (RED)
      ───────────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-red)' }}>
        <div className="container">
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#F5F5F4',
            opacity: 0.8,
            marginBottom: '1rem',
            display: 'block',
          }}>
            WHO WE HELP
          </span>

          <AnimateOnScroll delay={0}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#F5F5F4',
              textAlign: 'center',
            }}>
              We work with companies at the inflection point.
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#F5F5F4',
              opacity: 0.8,
              textAlign: 'center',
              maxWidth: '35rem',
              margin: '1rem auto 0',
              lineHeight: 1.75,
            }}>
              The trigger is always the same: something changed and the current
              approach is no longer sufficient.
            </p>
          </AnimateOnScroll>

          <div
            className="who-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            {whoCards.map(card => (
              <AnimateOnScroll key={card.href} delay={0}>
                <div style={{
                  background: '#F5F5F4',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                  <span style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text)',
                    fontWeight: 500,
                    display: 'block',
                  }}>
                    {card.category}
                  </span>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-mid)',
                    lineHeight: 1.6,
                    marginTop: '0.75rem',
                    flex: 1,
                  }}>
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    style={{
                      display: 'inline-block',
                      marginTop: '1.5rem',
                      color: 'var(--color-text)',
                      fontSize: '0.9375rem',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text)')}
                  >
                    {card.linkText}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 08 — INSIGHTS
      ───────────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <AnimateOnScroll delay={0}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}>
              <div>
                <span className="section-label" style={{ marginBottom: '0.5rem' }}>
                  INSIGHTS
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 500 }}>
                  Thinking that shapes work.
                </h2>
              </div>
              <Link
                href="/insights"
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  borderBottom: '1px solid var(--color-rule)',
                  paddingBottom: '2px',
                  transition: 'border-bottom-color 200ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'var(--color-text)')}
                onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'var(--color-rule)')}
              >
                View All →
              </Link>
            </div>
          </AnimateOnScroll>

          <div
            className="insights-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {insightCards.map((card, i) => (
              <AnimateOnScroll key={card.href} delay={i * 100}>
                <div style={{
                  borderTop: '1px solid var(--color-rule)',
                  paddingTop: '1.5rem',
                }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.6875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-red)',
                    }}>
                      {card.category}
                    </span>
                    <span style={{
                      fontSize: '0.6875rem',
                      color: 'var(--color-mid)',
                    }}>
                      {card.readTime}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    marginTop: '0.75rem',
                    lineHeight: 1.4,
                  }}>
                    {card.headline}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-mid)',
                    marginTop: '0.5rem',
                    lineHeight: 1.6,
                  }}>
                    {card.excerpt}
                  </p>
                  <Link
                    href={card.href}
                    style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      color: 'var(--color-red)',
                      fontSize: '0.9375rem',
                      transition: 'opacity 200ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Read →
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 09 — TESTIMONIAL
      ───────────────────────────────────────────────────────────────────── */}
      <section style={{
        padding: 'var(--space-section) 0',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
        background: 'var(--color-bg)',
      }}>
        <div className="container">
          <AnimateOnScroll delay={0}>
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
                FROM THE WORK
              </span>
              <blockquote style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 300,
                color: 'var(--color-text)',
                textAlign: 'center',
                lineHeight: 1.5,
                marginTop: '1.5rem',
                fontStyle: 'normal',
              }}>
                &ldquo;Their impact has gone beyond design. It has positively influenced
                our entire product development lifecycle.&rdquo;
              </blockquote>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-mid)',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}>
                  Marek Juda
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', lineHeight: 1.6 }}>
                  Digital COO, Flowbird
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          SECTION 10 — FINAL CTA (contained red card)
      ───────────────────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 0 var(--space-section)', background: 'var(--color-bg)' }}>
        <div className="container">
          <AnimateOnScroll delay={0}>
            <div style={{
              background: 'var(--color-red)',
              borderRadius: '1rem',
              padding: '5rem 4rem',
              textAlign: 'center',
              maxWidth: '72rem',
              margin: '0 auto',
            }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                fontWeight: 300,
                color: '#F5F5F4',
                lineHeight: 1.2,
              }}>
                The first conversation is a diagnosis, not a pitch.
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#F5F5F4',
                opacity: 0.8,
                marginTop: '1rem',
              }}>
                Bring your product challenge. We&apos;ll tell you what we see.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: '#F5F5F4',
                  color: 'var(--color-text)',
                  padding: '0.875rem 2rem',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '2rem',
                  borderRadius: 0,
                  transition: 'background 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#E8E8E8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F5F5F4')}
              >
                Contact
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        /* Problem stats — override stat-number size to 3.5rem */
        .problem-stat-number .stat-number { font-size: 3.5rem; }
        .problem-stat-number .stat-label  { display: none; }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 3rem 0 !important;
          }
          .hero-arc {
            max-height: 400px;
            overflow: hidden;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .problem-stats {
            grid-template-columns: 1fr !important;
          }
          .problem-stats > div + div {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--color-rule);
            padding-top: 2.5rem;
            margin-top: 2.5rem;
          }
          .method-step {
            flex-direction: column !important;
          }
          .method-step > div:first-child {
            width: 100% !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .case-study-card {
            grid-template-columns: 1fr !important;
          }
          .case-study-left {
            position: static !important;
          }
          .who-grid {
            grid-template-columns: 1fr !important;
          }
          .insights-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </>
  )
}
