const { SketchCard, Button } = window.DiernusDesignSystem_ebdb11;

function SketchGallery({ setView }) {
  return (
    <section style={{ padding: '1.5rem var(--pad) clamp(4rem,9vw,7rem)', background: 'var(--surface-page)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'clamp(1.2rem,2.5vw,2.2rem)', alignItems: 'start', maxWidth: 1240 }}>
        <SketchCard style={{ gridColumn: '1 / span 6' }} src="../../assets/sketch-vitrine.jpg"
          alt="Esboço à mão de uma vitrine de loja em cedro vermelho" title="VITRINE · RETALHO" index="ESBOÇO 01"
          rotate={-1.2} tape="rgba(217,142,74,.55)" />
        <SketchCard style={{ gridColumn: '8 / span 4', marginTop: 'clamp(2rem,6vw,5rem)' }} src="../../assets/sketch-cama-ab.jpg"
          alt="Esboço à mão de cama com cabeceira estofada, versões A e B" title="CAMA · VERSÕES A + B" index="ESBOÇO 02"
          rotate={1.4} tape="rgba(127,164,118,.5)" />
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.6rem 1.4rem',
        marginTop: 'clamp(2.2rem,5vw,3.5rem)', paddingTop: '1.2rem', borderTop: '1px solid var(--border-hairline)'
      }}>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>Tens uma peça na cabeça? Nós pomo-la no papel.</p>
        <a href="#" onClick={e => { e.preventDefault(); setView('contact'); }} style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono)', letterSpacing: 'var(--ls-mono)',
          color: 'var(--text-accent)', textDecoration: 'none', borderBottom: '1px solid var(--cobalt)', paddingBottom: '.15rem'
        }}>Falar com o estúdio →</a>
      </div>
    </section>
  );
}
Object.assign(window, { SketchGallery });
