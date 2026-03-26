# CLAUDE.md — A Stronger Idea Design Website
## Read this file completely before touching anything in this project.

This is a real production website for a product design consultancy. Every decision
should be made as if this site will be seen by senior product leaders at funded
startups, growth-stage companies, and institutional clients. The standard is: would
a senior designer at a world-class consultancy be proud of this? If not, rebuild it.

---

## Market Inward — Two Modes

Market Inward applies in two distinct contexts. Both use the same sequence.
Both are referenced across multiple pages. Build copy and framing accordingly.

FOUNDATION MODE
Applied before the product is built.
Ecosystem is mapped, architecture established,
execution begins on validated ground.
Entry point: Discovery Sprint.
Primary pages: Product Strategy, How It Works,
               Who We Help: Startups

DIAGNOSTIC MODE
Applied to a product already in motion.
Same sequence run as an audit — identifying
where the inside-out pattern created entropy
and restoring coherence before the next
phase of build begins.
Entry point: Product Architecture Audit within
             a Fractional or Project Engagement.
Primary pages: How It Works, Product Systems,
               Fractional Design Leadership,
               Who We Help: Product Organizations,
               Discovery Sprint (dual framing)

The Discovery Sprint page specifically serves both modes. A visitor arriving
from a "we haven't started yet" situation and a visitor arriving from a
"we're already building badly" situation should both recognize themselves
on that page. The deliverables are identical. The framing of the problem differs.

---

## The Methodology

Market Inward is the name of the design methodology behind every engagement at
A Stronger Idea Design. It replaces all previous references to "outside-in design",
"The ASID Framework", or "Outside-In Product Design" throughout the codebase.

The core argument: Design starts from the market, works inward through the
ecosystem and user, produces a validated architecture before resources are committed,
and loops back from market response continuously.

The elevator pitch: Market Inward always keeps the market in mind. It starts
with the market in terms of opportunity. It iterates based on market reaction
and behavior.

The closing claim: That is not a design methodology. That is how strategy
should work.

Never use "ASID" as a public-facing abbreviation. Always "A Stronger Idea Design"
on public surfaces. ASID only appears in internal file names and this document.

---

## Tech Stack

- Next.js 16.2.0 with App Router and Turbopack
- React 19
- TypeScript
- Tailwind CSS v4 — available but use CSS variables for all design decisions
- Custom CSS variables in app/globals.css — this is the source of truth
- DM Sans — primary font, Google Fonts, weights 300/400/500
- Space Mono — monospace font, Google Fonts, weights 400/700, numbers only
- Framer Motion — installed, use for complex animation sequences
- Vercel for hosting and deployment
- GitHub for version control

Do not install shadcn/ui or any component libraries. Tailwind v4 has
compatibility issues with shadcn. Use CSS variables and custom components only.
Use Tailwind utilities only for responsive breakpoints and layout helpers.

---

## Design System

### Color Variables

--color-bg:       #F5F5F4   /* Cool White — dominant surface */
--color-text:     #1A1A1A   /* Near Black — primary text */
--color-mid:      #6B6B6B   /* Mid Gray — secondary text, labels */
--color-rule:     #D4D4D0   /* Rule Gray — dividers, borders */
--color-red:      #C0392B   /* Signal Red — accent, CTAs, labels */
--color-dark:     #1A1A1A   /* Near Black — dark section backgrounds */
--font-sans:      'DM Sans', sans-serif
--font-mono:      'Space Mono', monospace
--space-section:  7.5rem
--max-width:      105rem
--text-col:       42.5rem

### Typography Scale

/* DM Sans — all text except numbers */
Display/Hero:   3.5rem–4.5rem   weight 300   leading 1.1
H1:             2.5rem–3rem     weight 500   leading 1.2
H2:             1.75rem–2rem    weight 400   leading 1.4
Body:           1.0625rem       weight 400   leading 1.75
Body Small:     0.875rem        weight 400   leading 1.6
Label:          0.6875rem       uppercase    tracked 0.08em   weight 500
Caption:        0.8125rem       weight 400   color Mid Gray

/* Space Mono — numbers and stats ONLY */
Stat Large:     3rem–3.5rem     weight 400   Near Black or Signal Red
Stat Small:     1.5rem          weight 400

All typography uses rem. Never px for font sizes. Component padding that scales
with text uses em. Fixed structural elements (borders, dividers) use px.

### Layout

Max content width:    1680px  (105rem)
Min content width:    1025px  (64.0625rem)
Mobile breakpoint:    below 1025px
Text column max:      680px   (42.5rem)
Section padding:      7.5rem vertical (120px equivalent)
Card border radius:   0.5rem
Transition default:   200ms ease

### Design Rules

- No gradients anywhere on the site
- No drop shadows on any element
- No decorative backgrounds or textures
- No rounded corners on cards — 0.5rem only on interactive components
- Signal Red appears on: section labels, CTA buttons, key accent elements,
  hover states on text links. No more than 10–15% of any page surface.
- Cool White is the dominant surface — all primary page backgrounds
- Near Black is for text only — never used as large background fill
  except the Services dark section and footer

---

## Navigation — Final Specification

Logo: /public/logo-color.png (default), /public/logo-white.png (dark sections)
Logo height: 36px, width auto

Nav items left to right:
Method   How We Work   Who We Help   Case Studies   Insights   About

Far right:
Contact — Signal Red background, Cool White text, links to /contact

### Method Dropdown
Market Inward                    /method/market-inward
How It Works                     /method/how-it-works
One Methodology, Many Entry Points  /method/entry-points

### How We Work Dropdown — Mega Menu, Two Columns
WHAT WE DO                       ENGAGEMENT OPTIONS
Product Strategy                 Discovery Sprint
Product UX Design                Project Engagements
Product Systems                  Fractional Design Leadership
AI Product Design

URLs:
/work/product-strategy           /work/discovery-sprint
/work/product-ux-design          /work/project-engagements
/work/product-systems            /work/fractional-design-leadership
/work/ai-product-design

### Who We Help Dropdown
Startups and Scaleups            /who/startups
Product Organizations            /who/product-organizations
Agencies and Partners            /who/agencies-partners

### Nav Behavior

Scroll: Hide on scroll down after 100px. Show on scroll up.
Transition: opacity and translateY(-100%) over 200ms.

Color inversion: When a section with data-section="dark" enters viewport,
nav switches to Near Black background, Cool White text, logo-white.png.
Detected via IntersectionObserver.

Always: Position fixed, z-index 100. Rule Gray bottom border in default state.
Mobile breakpoint: 1024px — show hamburger, hide desktop nav.

---

## URL Structure

/                                     Homepage
/method/market-inward                 Market Inward methodology page
/method/how-it-works                  How It Works
/method/entry-points                  Placeholder
/method/philosophy                    The Market Inward Philosophy
/work/product-strategy                Product Strategy
/work/product-ux-design               Product UX Design
/work/product-systems                 Product Systems
/work/ai-product-design               AI Product Design
/work/discovery-sprint                Discovery Sprint
/work/project-engagements             Project Engagements
/work/fractional-design-leadership    Fractional Design Leadership
/who/startups                         Startups and Scaleups
/who/product-organizations            Product Organizations
/who/agencies-partners                Agencies and Partners
/case-studies                         Case Studies index
/work/flowbird-park-detroit           Flowbird Park Detroit
/work/estate-guru-dashboard-case-study  EstateGuru
/work/euvic-alterdomus-case-study     Euvic / AlterDomus
/work/flowbird-urban-management-dashboard  Flowbird Hub
/work/feathers-vintage-case-study     Feathers Vintage
/insights                             Insights index
/insights/[slug]                      Individual article
/about                                About
/contact                              Contact

---

## Footer Specification

Opens with full-width display statement (Near Black background):
"That is not a design methodology.
That is how strategy should work."
3rem, weight 300, Cool White, centered.
Rule Gray bottom border below statement.

Four columns:
Column 1: Brand — logo-white.png, A Stronger Idea Design,
          Market Inward Design Methodology, Austin TX,
          hello@astrongeridea.design, LinkedIn
Column 2: Method — Market Inward, How It Works
Column 3: How We Work — all four services + three engagement options
Column 4: Company — Who We Help, Case Studies, Insights, About, Contact

Bottom bar:
Left: © 2026 A Stronger Idea Design
Right: The first conversation is a diagnosis, not a pitch.
Rule Gray top border. 0.8125rem, Mid Gray.

---

## Dark Sections

Two sections use Near Black backgrounds:
1. Services section (homepage) — four service cards
2. Footer

Nav color inverts when these sections are in the viewport.
Add data-section="dark" attribute to trigger inversion.
Logo switches from logo-color.png to logo-white.png.

---

## Signal Red Background Section

The Who We Help section uses Signal Red (#C0392B) background.
Cards within this section use off-white (#F5F5F4) background with Near Black text.
Nav does NOT invert for this section — stays in default state.

---

## Component Patterns

Section label:
0.6875rem, DM Sans, weight 500, uppercase, letter-spacing 0.08em,
Signal Red (#C0392B), margin-bottom 1rem, display block

Primary CTA button:
Signal Red background, Cool White text, padding 0.875rem 1.75rem,
weight 500, 0.9375rem. Hover: darken to #A93226. No border-radius.

Dividers:
1px solid Rule Gray (#D4D4D0). Never decorative. Only between distinct sections.

Stat display:
Space Mono, 3rem–3.5rem, weight 400. Signal Red for key stats.
Near Black for supporting stats. DM Sans label below, 0.75rem,
uppercase, tracked, Mid Gray.

Testimonials:
Static typographic block. Never carousel. Large opening Signal Red
quotation mark optional. Quote: Near Black, body size, weight 300.
Attribution: Mid Gray, 0.875rem, centered.

Accordions:
One open at a time. Opening one closes all others.
Default: Discovery and Strategy accordion open on How It Works page.

Cards (dark section):
Near Black or #222222 background, Rule Gray border, 0.5rem radius.
Service label in Signal Red. Cool White text throughout.

Final CTA block (pre-footer):
Contained Signal Red card, not full-bleed. 4rem margin left/right.
1rem border radius. 5rem vertical padding, 4rem horizontal.
Cool White text throughout. Button: Cool White background, Near Black text.

AnimateOnScroll component: /components/AnimateOnScroll.tsx
StatCounter component: /components/StatCounter.tsx
Use these on every page for scroll reveals and count-up stats.

---

## Scroll Animation Spec

Default entrance: opacity 0 to 1, translateY(20px) to 0
Duration: 400ms
Easing: ease-out
Trigger: when element is 20% into viewport
Sequential items: stagger with delay prop on AnimateOnScroll
Count-up numbers: 800ms duration, triggered by IntersectionObserver

---

## Stats and Evidence — Verified Only

31%   — of software projects cancelled — Standish Group CHAOS Report
100x  — cost to fix post-launch vs design phase — Nielsen Norman Group
6x    — cost to fix in development vs design phase — Boehm
42%   — of startups fail due to no market need — CB Insights
219%  — design-led companies outperform S&P 500 — Design Management Institute
70%   — digital transformation projects fail — BCG
5-25x — client retention vs acquisition value — Harvard Business Review / Bain

Do not use any other stats without verification. The following were
hallucinated in a previous build session and do not exist:
- 64% AI failures attributed to NNG
- 3x AI trust failure rate attributed to NNG
- 68% usability problems from workflow issues attributed to NNG
- 72% design system investment failure attributed to Figma
- 3x design system rebuilds attributed to Nathan Curtis
- 40%+ risk reduction on Startups page

---

## Case Study Assignments

Homepage (3 cards):          Flowbird Park Detroit + EstateGuru + Euvic/AlterDomus
Product Strategy page:       Flowbird Park Detroit
Product UX Design page:      Euvic / AlterDomus
Product Systems page:        EstateGuru
AI Product Design page:      Flowbird Hub (AI reporting section only)
Discovery Sprint page:       No case study — economics section instead
Project Engagements page:    EstateGuru
Fractional Leadership page:  Flowbird Park Detroit
Who We Help: Startups:       EstateGuru
Who We Help: Product Orgs:   Flowbird Hub
Who We Help: Agencies:       Euvic / AlterDomus
About page:                  No case study — testimonials only

Known bug: EstateGuru case study page has Flowbird Hub challenge text
pasted in error. Fix the Challenge section before launch.

---

## Approved Testimonials

"Their impact has gone beyond design — it has positively influenced our
entire product development lifecycle."
— Marek Juda, Digital COO, Flowbird

"Highly attentive to detail with our mission... end-user oriented."
— Jonathan Chichoni Warenne, CEO, EstateGuru

"Eric brought a rare mix of big-picture thinking and meticulous detail."
— Greg Bebenek, CTO, Euvic

"Eric has been an exceptional leader and collaborator during our time
working together."
— Darek Partyka, Chief Product Officer, Flowbird

---

## Voice Registers

Eric's voice (first person): Insights articles, About page, Contact page.
Uses "I" not "we". Direct, practitioner voice. Personal and grounded.

Studio voice (third person / we): All service pages, How We Work, Who We Help,
homepage. "A Stronger Idea Design" as subject. "We" where studio capabilities
are described. Never corporate.

---

## Writing Rules

- Use contractions. "it's" not "it is". "don't" not "do not".
- No em-dashes. Replace with a period, comma, or rewrite the sentence.
- Active voice throughout.
- Vary sentence length. Short sentences create emphasis.
- No filler phrases. State the thing directly.
- Never "ASID" on public surfaces — always "A Stronger Idea Design"
- Primary CTA: "Start a Conversation" — never "Book a call" or "Get in touch"
- CTA subtext: "The first conversation is a diagnosis, not a pitch."

---

## SEO Requirements

Every page requires:
- Meta title under 60 characters
- Meta description under 160 characters
- Correct Open Graph tags

GEO optimization target: /method/market-inward
Every Insights article needs a GEO one-liner in the first paragraph
(25-40 words, citable definition for AI search).

---

## Post-Launch Items — Do Not Build Yet

- Full diagnostic questionnaire at /method/entry-points
- Downloadable PDF at /method/philosophy
- Flowbird fractional design leadership case study
- Market Inward terminology updates to nine existing Insights articles
