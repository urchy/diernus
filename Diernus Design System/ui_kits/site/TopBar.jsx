const { Wordmark, LangToggle, Button } = window.DiernusDesignSystem_ebdb11;

function TopBar({ view, setView, lang, setLang, progress = 0 }) {
  const links = [
    ['home', '01 · IDEIA'],
    ['moods', '02 · CONCEÇÃO'],
    ['sheet', '03 · DESENHO TÉCNICO'],
    ['contact', '04 · CONTACTO']
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 60, display: 'flex', alignItems: 'center', gap: '1rem',
      padding: '.65rem var(--pad)', background: 'color-mix(in srgb,var(--bone) 88%,transparent)',
      backdropFilter: 'var(--blur-bar)', borderBottom: '1px solid var(--border-hairline)'
    }}>
      <Wordmark href="#" onClick={e => { e.preventDefault(); setView('home'); }} />
      <div style={{ display: 'flex', gap: '1.4rem', marginLeft: '2rem' }}>
        {links.map(([id, label]) => (
          <a key={id} href="#" onClick={e => { e.preventDefault(); setView(id); }} style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono)', letterSpacing: 'var(--ls-mono)',
            textTransform: 'uppercase', textDecoration: 'none', padding: '.2rem 0',
            color: view === id ? 'var(--text-accent)' : 'var(--text-body)',
            borderBottom: '1px solid ' + (view === id ? 'var(--cobalt)' : 'transparent')
          }}>{label}</a>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button variant="bar" size="sm" onClick={() => setView('contact')}>Falar connosco</Button>
        <LangToggle value={lang} onChange={setLang} />
      </div>
      <div style={{ position: 'absolute', left: 0, bottom: -2, height: 2, width: '100%' }}>
        <i style={{ display: 'block', height: '100%', width: progress + '%', background: 'var(--cobalt)' }} />
      </div>
    </nav>
  );
}
Object.assign(window, { TopBar });
