'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatCounter from '@/components/StatCounter';

// ─── Arc Diagram (Reversal section) ──────────────────────────────────────────
function ReversalDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<'inside-out' | 'pause' | 'market-inward'>('inside-out');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setPhase('pause'), 1800);
    const t2 = setTimeout(() => setPhase('market-inward'), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [visible]);

  const isInward = phase === 'market-inward';

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 440, height: 'auto' }}
      aria-label="Market Inward arc diagram showing the reversal from inside-out to outside-in sequencing"
    >
      <g style={{ opacity: isInward ? 0.15 : 1, transition: 'opacity 600ms ease-out' }}>
        <text x="50" y="28" fill="var(--color-mid)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="500" letterSpacing="0.08em" textAnchor="middle">INSIDE-OUT</text>
        <text x="50" y="360" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">FEATURES</text>
        <text x="50" y="280" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">WORKFLOWS</text>
        <text x="50" y="200" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">ECOSYSTEM</text>
        <line x1="50" y1="350" x2="40" y2="295" stroke="var(--color-text)" strokeWidth="1" strokeDasharray="4,2" />
        <line x1="50" y1="350" x2="60" y2="295" stroke="var(--color-text)" strokeWidth="1" strokeDasharray="4,2" />
        <line x1="40" y1="295" x2="25" y2="215" stroke="var(--color-text)" strokeWidth="0.8" strokeDasharray="3,3" />
        <line x1="60" y1="295" x2="75" y2="215" stroke="var(--color-text)" strokeWidth="0.8" strokeDasharray="3,3" />
        <polygon points="40,295 36,305 44,305" fill="var(--color-text)" opacity="0.5" />
        <polygon points="60,295 56,305 64,305" fill="var(--color-text)" opacity="0.5" />
        <polygon points="25,215 21,225 29,225" fill="var(--color-text)" opacity="0.4" />
        <polygon points="75,215 71,225 79,225" fill="var(--color-text)" opacity="0.4" />
      </g>

      <line x1="200" y1="20" x2="200" y2="380" stroke="var(--color-rule)" strokeWidth="1" />

      <g style={{ opacity: isInward ? 1 : 0.15, transition: 'opacity 600ms ease-out' }}>
        <text x="320" y="28" fill="var(--color-red)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="500" letterSpacing="0.08em" textAnchor="middle">MARKET INWARD</text>
        <text x="320" y="68" fill="var(--color-red)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="500" textAnchor="middle">MARKET</text>
        <text x="320" y="160" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">ECOSYSTEM</text>
        <text x="320" y="260" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">WORKFLOWS</text>
        <text x="320" y="350" fill="var(--color-mid)" fontSize="7" fontFamily="var(--font-sans)" textAnchor="middle">PRODUCT</text>
        <line x1="290" y1="80" x2="310" y2="148" stroke="var(--color-text)" strokeWidth="1" />
        <line x1="350" y1="80" x2="330" y2="148" stroke="var(--color-text)" strokeWidth="1" />
        <line x1="310" y1="170" x2="315" y2="248" stroke="var(--color-text)" strokeWidth="1" />
        <line x1="330" y1="170" x2="325" y2="248" stroke="var(--color-text)" strokeWidth="1" />
        <line x1="315" y1="268" x2="318" y2="338" stroke="var(--color-text)" strokeWidth="1" />
        <line x1="325" y1="268" x2="322" y2="338" stroke="var(--color-text)" strokeWidth="1" />
        <polygon points="310,148 306,138 314,138" fill="var(--color-text)" />
        <polygon points="330,148 326,138 334,138" fill="var(--color-text)" />
        <polygon points="320,338 316,328 324,328" fill="var(--color-text)" />
        <circle cx="320" cy="56" r="4" fill="var(--color-red)" />
      </g>
    </svg>
  );
}

// ─── Loop Diagram ─────────────────────────────────────────────────────────────
function LoopDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 500 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 500, height: 'auto' }}
      aria-label="Market Inward continuous loop diagram"
    >
      <line
        x1="40" y1="80" x2="460" y2="80"
        stroke="var(--color-text)" strokeWidth="1.5"
        style={{
          strokeDasharray: 420,
          strokeDashoffset: drawn ? 0 : 420,
          transition: 'stroke-dashoffset 800ms ease-out',
        }}
      />
      <polygon
        points="460,80 450,74 450,86"
        fill="var(--color-text)"
        style={{ opacity: drawn ? 1 : 0, transition: 'opacity 200ms 800ms' }}
      />
      <path
        d="M 460 90 Q 250 170 40 90"
        fill="none"
        stroke="var(--color-text)"
        strokeWidth="1"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: drawn ? 0 : 800,
          transition: 'stroke-dashoffset 1000ms ease-out 900ms',
        }}
      />
      <polygon
        points="40,90 50,84 50,96"
        fill="var(--color-text)"
        style={{ opacity: drawn ? 1 : 0, transition: 'opacity 200ms 1900ms' }}
      />
      {[
        { x: 80, label: 'MARKET' },
        { x: 190, label: 'ECOSYSTEM' },
        { x: 300, label: 'WORKFLOWS' },
        { x: 410, label: 'PRODUCT' },
      ].map(({ x, label }, i) => (
        <g key={label} style={{ opacity: drawn ? 1 : 0, transition: `opacity 300ms ${300 + i * 150}ms` }}>
          <circle cx={x} cy={80} r={5} fill={i === 0 ? 'var(--color-red)' : 'var(--color-text)'} />
          <text
            x={x} y={64}
            textAnchor="middle"
            fill={i === 0 ? 'var(--color-red)' : 'var(--color-mid)'}
            fontSize="7"
            fontFamily="var(--font-sans)"
            fontWeight="500"
            letterSpacing="0.08em"
          >
            {label}
          </text>
        </g>
      ))}
      <text
        x="250" y="168"
        textAnchor="middle"
        fill="var(--color-mid)"
        fontSize="7"
        fontFamily="var(--font-sans)"
        letterSpacing="0.06em"
        style={{ opacity: drawn ? 1 : 0, transition: 'opacity 300ms 2000ms' }}
      >
        MARKET RESPONSE
      </text>
    </svg>
  );
}

// ─── Illustration placeholder ─────────────────────────────────────────────────
function IllustrationPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        aspectRatio: '3/4',
        maxWidth: 340,
        backgroundColor: '#EDEDE9',
        border: '1px solid var(--color-rule)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-mid)',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MarketInwardPage() {
  return (
    <main>

      {/* ── SECTION 01 — HERO ───────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 'calc(var(--space-section) + 4rem)',
          paddingBottom: 'var(--space-section)',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <AnimateOnScroll>
          <span
            style={{
              display: 'block',
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-mid)',
              marginBottom: '1.5rem',
            }}
          >
            The Methodology
          </span>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
            }}
          >
            Market Inward.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
              fontWeight: 400,
              color: 'var(--color-mid)',
              lineHeight: 1.75,
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
            }}
          >
            The design methodology that starts where every product decision should — with the market.
          </p>
          <div
            aria-hidden="true"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-rule)',
            }}
          >
            <span
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
              }}
            >
              Scroll
            </span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="7" cy="6" r="2" fill="currentColor">
                <animate attributeName="cy" values="5;12;5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── SECTION 02 — THE PROBLEM STATEMENT ─────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          textAlign: 'center',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <AnimateOnScroll>
          <p
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--color-text)',
              maxWidth: '44rem',
              margin: '0 auto 1.5rem',
            }}
          >
            Most products are designed from the{' '}
            <span style={{ color: 'var(--color-red)' }}>inside</span>{' '}
            out.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-mid)',
              lineHeight: 1.75,
              maxWidth: '32rem',
              margin: '0 auto',
            }}
          >
            Features first. Market discovered later. Usually too late.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── SECTION 03 — THE REVERSAL ───────────────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <AnimateOnScroll>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.3,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
              }}
            >
              Market Inward reverses that sequence.
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text)',
                lineHeight: 1.75,
                maxWidth: 'var(--text-col)',
              }}
            >
              Start from the market. Design inward from there. Let the product emerge from what the market actually requires.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ReversalDiagram />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SECTION 04 — THE SEQUENCE ───────────────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

          {/* Step 01 */}
          <AnimateOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '3rem',
                alignItems: 'start',
                paddingBottom: '5rem',
                borderBottom: '1px solid var(--color-rule)',
                marginBottom: '5rem',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-mid)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  01
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  Market and ecosystem first.
                </h2>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.75,
                    maxWidth: 'var(--text-col)',
                  }}
                >
                  Map the full context before anything is designed. Who are all the users. What are all the constraints. What does the market actually require.
                </p>
              </div>
              <IllustrationPlaceholder label="Metaphor 01 — The Clear Vantage Point" />
            </div>
          </AnimateOnScroll>

          {/* Step 02 */}
          <AnimateOnScroll delay={100}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '3rem',
                alignItems: 'start',
                paddingBottom: '5rem',
                borderBottom: '1px solid var(--color-rule)',
                marginBottom: '5rem',
                direction: 'rtl',
              }}
            >
              <div style={{ direction: 'ltr' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-mid)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  02
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  Workflows before features.
                </h2>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.75,
                    maxWidth: 'var(--text-col)',
                  }}
                >
                  Design how users move through the product before designing what they see. The layer most processes skip. The layer where most problems live.
                </p>
              </div>
              <div style={{ direction: 'ltr' }}>
                <IllustrationPlaceholder label="Metaphor 08 — The Single Point of Focus" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Step 03 */}
          <AnimateOnScroll delay={100}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '3rem',
                alignItems: 'start',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-mid)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  03
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  Product and system last.
                </h2>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.75,
                    maxWidth: 'var(--text-col)',
                  }}
                >
                  Features, website, and marketing built on a foundation that makes them coherent from the first decision to the final iteration. Not assembled. Designed.
                </p>
              </div>
              <IllustrationPlaceholder label="Metaphor 09 — The Structure Beneath" />
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ── SECTION 05 — THE LOOP ───────────────────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <AnimateOnScroll>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.3,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
              }}
            >
              It doesn't end at launch.
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text)',
                lineHeight: 1.75,
                maxWidth: 'var(--text-col)',
              }}
            >
              The market responds. Users behave. Those signals refine the ecosystem map, update the workflows, improve the product.
            </p>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text)',
                lineHeight: 1.75,
                maxWidth: 'var(--text-col)',
                marginTop: '1rem',
              }}
            >
              The market that informed the design at the beginning continues to inform it at every stage after.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LoopDiagram />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SECTION 06 — WHY IT MATTERS (STATS) ────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <AnimateOnScroll>
            <span
              style={{
                display: 'block',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-red)',
                marginBottom: '4rem',
              }}
            >
              Why it matters
            </span>
          </AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            }}
          >
            <AnimateOnScroll>
              <div style={{ padding: '2rem 2.5rem 2rem 0', borderRight: '1px solid var(--color-rule)' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 400,
                    color: 'var(--color-red)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  <StatCounter value="31%" label="" />
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', lineHeight: 1.6, maxWidth: '18rem' }}>
                  of projects cancelled due to requirements failures. Not technical ones.{' '}
                  <a
                    href="https://www.standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-mid)', textDecoration: 'underline', textDecorationColor: 'var(--color-rule)' }}
                  >
                    Standish Group
                  </a>
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div style={{ padding: '2rem 2.5rem', borderRight: '1px solid var(--color-rule)' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 400,
                    color: 'var(--color-red)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  <StatCounter value="53%" label="" />
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', lineHeight: 1.6, maxWidth: '18rem' }}>
                  cost double the estimate. Same cause.{' '}
                  <a
                    href="https://www.standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-mid)', textDecoration: 'underline', textDecorationColor: 'var(--color-rule)' }}
                  >
                    Standish Group
                  </a>
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div style={{ padding: '2rem 0 2rem 2.5rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 400,
                    color: 'var(--color-red)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  2 wks
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-mid)', lineHeight: 1.6, maxWidth: '18rem' }}>
                  is what a Discovery Sprint costs. Versus months of rework.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SECTION 07 — THE CLOSING CLAIM ─────────────────────────────── */}
      <section
        style={{
          padding: 'calc(var(--space-section) * 1.5) 2rem',
          borderTop: '1px solid var(--color-rule)',
          textAlign: 'center',
        }}
      >
        <AnimateOnScroll>
          <p
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: 'var(--color-text)',
              maxWidth: '44rem',
              margin: '0 auto',
            }}
          >
            That is not a design methodology. That is how strategy should work.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── SECTION 08 — DEPTH AND CONVERSION ──────────────────────────── */}
      <section
        style={{
          padding: 'var(--space-section) 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2rem',
          }}
        >
          <AnimateOnScroll>
            <div
              style={{
                border: '1px solid var(--color-rule)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                height: '100%',
              }}
            >
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-red)',
                }}
              >
                The thinking behind it
              </span>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                This methodology was built from 25 years of designing complex digital products across fintech, civic infrastructure, and institutional platforms. Read the full philosophy.
              </p>
              <Link
                href="/method/philosophy"
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: 'auto',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text)')}
              >
                The Market Inward Philosophy →
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div
              style={{
                border: '1px solid var(--color-rule)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                height: '100%',
              }}
            >
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-red)',
                }}
              >
                Let's start building.
              </span>
              <p
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                  fontWeight: 300,
                  color: 'var(--color-text)',
                  lineHeight: 1.4,
                }}
              >
                The first conversation is a diagnosis, not a pitch.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  marginTop: 'auto',
                  backgroundColor: 'var(--color-red)',
                  color: '#F5F5F4',
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'background-color 200ms ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#A93226')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-red)')}
              >
                Contact
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SECTION 09 — CONTINUE ───────────────────────────────────────── */}
      <section
        style={{
          padding: '3rem 2rem',
          borderTop: '1px solid var(--color-rule)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Link
            href="/method/how-it-works"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-mid)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-mid)')}
          >
            Next: How It Works — See the full Market Inward arc in detail. →
          </Link>
        </div>
      </section>

    </main>
  );
}
