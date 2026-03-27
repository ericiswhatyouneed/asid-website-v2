import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Inward — The Design Methodology | A Stronger Idea Design',
  description:
    'Market Inward sequences every product design decision from the market inward. Ecosystem first, workflows second, features third. Here is why the sequence matters.',
  openGraph: {
    type: 'website',
    title: 'Market Inward — The Design Methodology | A Stronger Idea Design',
    description:
      'Market Inward sequences every product design decision from the market inward. Ecosystem first, workflows second, features third. Here is why the sequence matters.',
    url: 'https://www.astrongeridea.design/method/market-inward',
    siteName: 'A Stronger Idea Design',
    images: [
      {
        url: 'https://www.astrongeridea.design/og/market-inward.jpg',
        width: 1200,
        height: 630,
        alt: 'Market Inward — A Stronger Idea Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Inward — The Design Methodology | A Stronger Idea Design',
    description:
      'Market Inward sequences every product design decision from the market inward. Ecosystem first, workflows second, features third.',
  },
  alternates: {
    canonical: 'https://www.astrongeridea.design/method/market-inward',
  },
};

// ── JSON-LD structured data ────────────────────────────────────────────────
// Paste this into the <head> of app/method/market-inward/layout.tsx
// or inject via generateMetadata if you prefer a single-file approach.

export const jsonLd = {
  webpage: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Market Inward — The Design Methodology',
    description:
      'Market Inward is a design methodology developed by Eric Tomlinson at A Stronger Idea Design that sequences every product decision from the market inward — ecosystem first, workflows second, features third — so every design decision is built on validated ground rather than internal assumption.',
    url: 'https://www.astrongeridea.design/method/market-inward',
    author: {
      '@type': 'Person',
      name: 'Eric Tomlinson',
      url: 'https://www.astrongeridea.design/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'A Stronger Idea Design',
      url: 'https://www.astrongeridea.design',
    },
  },
  definedTerm: {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Market Inward',
    description:
      'A product design methodology developed by Eric Tomlinson at A Stronger Idea Design that maps the full market ecosystem before any design begins, ensuring every downstream decision is built on validated architectural ground.',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'A Stronger Idea Design Methodology Terms',
    },
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Market Inward design methodology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Market Inward is a product design methodology that maps the full market ecosystem before anything is designed — starting with the market opportunity, then ecosystem and user workflows, then features and product — so every downstream decision is built on validated ground rather than internal assumption.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Market Inward different from other product design approaches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most product design starts inside-out — features first, market discovered later. Market Inward reverses that sequence. The ecosystem is mapped before any screen is designed. Workflows are documented before features are defined. The product emerges from what the market actually requires, not from internal assumption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What causes most product failures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most product failures are sequence failures, not execution failures. Teams build features before workflows are mapped, and map workflows before the full ecosystem is understood. The Standish Group reports 31% of software projects are cancelled due to requirements failures — an ecosystem and workflow understanding problem, not a technical one.',
        },
      },
    ],
  },
};
