export default function InsightPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: '10rem 2rem', textAlign: 'center', color: 'var(--color-mid)' }}>
      <p>Insight: {params.slug} — coming soon</p>
    </div>
  )
}
