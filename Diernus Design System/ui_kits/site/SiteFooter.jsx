const { Wordmark } = window.DiernusDesignSystem_ebdb11;

function SiteFooter() {
  const h4 = { fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-inverse-muted)', marginBottom: '.7rem', fontWeight: 500 };
  const link = { color: 'var(--text-inverse)', textDecoration: 'none', borderBottom: '1px solid transparent', fontSize: 'var(--t-sm)' };
  return (
    <footer style={{
      background: 'var(--surface-inverse-deep)', color: 'var(--text-inverse)', fontSize: 'var(--t-sm)', lineHeight: 1.55,
      padding: 'clamp(2.4rem,5vw,4rem) var(--pad) 2rem', borderTop: '1px solid var(--border-inverse)'
    }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'clamp(2rem,4vw,3.5rem)' }}>
        <div>
          <h4 style={h4}>Diernus</h4>
          <p style={{ color: 'var(--text-inverse-muted)', fontSize: '.92rem', maxWidth: '30em', marginBottom: '.6rem' }}>
            Estúdio de desenho de mobiliário por medida. Da ideia à peça montada, em Portugal.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: 'var(--ls-chip)', color: 'var(--ink-35)' }}>Gandra, Portugal</p>
        </div>
        <div>
          <h4 style={h4}>Legal</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', margin: 0, padding: 0 }}>
            {['Privacidade', 'Termos e condições', 'Cookies', 'Aviso legal'].map(l => <li key={l}><a href="#" style={link}>{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 style={h4}>Contacto</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', margin: 0, padding: 0 }}>
            <li><a href="mailto:estudio@diernus.com" style={link}>estudio@diernus.com</a></li>
            <li><a href="#" style={link}>Formulário de contacto</a></li>
            <li><a href="#" style={link}>Portal do cliente</a></li>
          </ul>
        </div>
      </div>
      <div style={{
        marginTop: '2.2rem', paddingTop: '1.4rem', borderTop: '1px solid var(--border-inverse)',
        display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: 'var(--ls-mono)', color: 'var(--ink-35)', textTransform: 'uppercase'
      }}>
        <span>© 2026 Diernus, Lda. · Todos os direitos reservados</span>
        <span><Wordmark tone="ink" size=".66rem" accent={false} /> · Desenhado ao milímetro</span>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
