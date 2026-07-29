const { Eyebrow, Chip } = window.DiernusDesignSystem_ebdb11;

function Hero({ setView }) {
  return (
    <header style={{
      position: 'relative', minHeight: '78vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: 'calc(var(--pad) + 3rem) var(--pad) 0', overflow: 'hidden',
      backgroundImage: 'linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)',
      backgroundSize: 'var(--grid-size) var(--grid-size)', backgroundPosition: 'center top'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 50% 10%,transparent 30%,var(--bone) 78%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Eyebrow style={{ marginBottom: '1rem' }}>DIERNUS · ESTÚDIO DE DESENHO DE MOBILIÁRIO</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--w-black)', fontSize: 'clamp(3.6rem,10vw,8.5rem)',
          lineHeight: 'var(--lh-hero)', letterSpacing: 'var(--ls-tight)', textTransform: 'uppercase', margin: 0
        }}>Da ideia<br />à peça</h1>
        <p style={{ maxWidth: '34em', fontSize: '1.35rem', margin: '1.4rem 0 2.2rem', fontStyle: 'italic' }}>
          Esboço à mão, conceção do ambiente, folha de produção — e, no fim, a peça a montar-se sozinha.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '2.5rem' }}>
          <Chip href="#" onClick={e => { e.preventDefault(); setView('home'); }}>01 · IDEIA</Chip>
          <Chip href="#" onClick={e => { e.preventDefault(); setView('moods'); }}>02 · CONCEÇÃO</Chip>
          <Chip href="#" onClick={e => { e.preventDefault(); setView('sheet'); }}>03 · DESENHO TÉCNICO</Chip>
          <Chip href="#" tone="stamp" onClick={e => { e.preventDefault(); setView('contact'); }}>04 · A PEÇA</Chip>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '.8rem', fontFamily: 'var(--font-mono)',
          fontSize: 'var(--t-mono)', letterSpacing: '.24em', color: 'var(--text-muted)',
          padding: '1.2rem 0 1.6rem', borderTop: '1px solid var(--border-hairline)'
        }}>
          <svg width="14" height="22" viewBox="0 0 14 22" style={{ overflow: 'visible' }}>
            <path d="M2 3 L7 9 L12 3 M2 12 L7 18 L12 12" stroke="var(--cobalt)" strokeWidth="2" fill="none" />
          </svg>
          <span>SCROLL PARA COMEÇAR</span>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Hero });
