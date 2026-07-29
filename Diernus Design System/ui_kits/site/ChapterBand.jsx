const { Eyebrow } = window.DiernusDesignSystem_ebdb11;

function ChapterBand({ num, accent = 'var(--cobalt)', title, children, tone = 'bone' }) {
  const inverse = tone === 'blueprint';
  const alt = tone === 'bone-2';
  return (
    <section style={{
      position: 'relative', padding: 'var(--chapter-y) var(--pad) clamp(1.2rem,3vw,2rem)', overflow: 'hidden',
      background: inverse ? 'var(--surface-inverse)' : (alt ? 'var(--surface-page-alt)' : 'var(--surface-page)'),
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)'
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', right: 'calc(var(--pad) * .4)', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--w-black)', fontSize: 'clamp(8rem,20vw,17rem)',
        lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px ' + accent, opacity: .15, userSelect: 'none'
      }}>{num}</span>
      <Eyebrow tone={inverse ? 'ink' : 'accent'} style={{ marginBottom: '.7rem', color: accent }}>CAPÍTULO {num}</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--w-heavy)', fontSize: 'var(--t-h1)',
        textTransform: 'uppercase', lineHeight: 'var(--lh-display)', maxWidth: '12em', margin: 0
      }}>{title}</h2>
      <p style={{ maxWidth: 'var(--measure-prose)', marginTop: '1rem', fontSize: '1.12rem', fontStyle: 'italic', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>{children}</p>
    </section>
  );
}
Object.assign(window, { ChapterBand });
