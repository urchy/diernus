const { Wordmark, Eyebrow } = window.DiernusDesignSystem_ebdb11;

function LegalPage() {
  const h2 = { fontFamily: 'var(--font-display)', fontWeight: 'var(--w-heavy)', fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '.005em', margin: '2.2rem 0 .7rem' };
  const a = { color: 'var(--text-accent)', textDecoration: 'none', borderBottom: '1px solid var(--border-hairline)' };
  return (
    <main style={{ maxWidth: 'var(--measure-doc)', margin: '0 auto', padding: 'clamp(2.5rem,6vw,5rem) var(--pad)' }}>
      <Eyebrow style={{ marginBottom: '.8rem' }}>RGPD · ART. 13.º/14.º</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--w-black)', fontSize: 'clamp(2.2rem,5vw,3.4rem)', lineHeight: 1.05, letterSpacing: 'var(--ls-tight)', textTransform: 'uppercase', marginBottom: '1rem' }}>
        Política de privacidade
      </h1>
      <p style={{ fontSize: 'var(--t-lede)', fontStyle: 'italic', color: 'var(--text-muted)', maxWidth: 'var(--measure-lede)', marginBottom: '2.4rem' }}>
        Esta política descreve como a Diernus recolhe, utiliza, conserva e protege os dados pessoais que nos confia, em conformidade com o RGPD.
      </p>
      <h2 style={h2}>1. Quem é o responsável</h2>
      <p style={{ marginBottom: '1rem' }}>O responsável pelo tratamento dos seus dados pessoais é:</p>
      <p style={{ marginBottom: '1rem' }}><b>Diernus, Lda.</b><br />NIPC: [NIPC]<br />Sede: [MORADA COMPLETA, PORTUGAL]<br />Email: <a href="mailto:estudio@diernus.com" style={a}>estudio@diernus.com</a></p>
      <h2 style={h2}>2. Que dados recolhemos</h2>
      <ul style={{ margin: '0 0 1rem 1.4rem' }}>
        <li style={{ marginBottom: '.4rem' }}><b>Dados de identificação e contacto</b> — nome, email, telefone, empresa.</li>
        <li style={{ marginBottom: '.4rem' }}><b>Dados de projeto</b> — descrições, ficheiros técnicos, plantas, referências visuais, orçamentos.</li>
        <li style={{ marginBottom: '.4rem' }}><b>Dados de utilização do portal</b> — endereço IP, páginas visitadas, timestamps.</li>
        <li style={{ marginBottom: '.4rem' }}><b>Cookies e dados de sessão</b> — ver <a href="#" style={a}>Política de Cookies</a>.</li>
      </ul>
      <h2 style={h2}>3. Os seus direitos</h2>
      <p style={{ marginBottom: '1rem' }}>Acesso, retificação, apagamento, limitação, portabilidade, oposição e revogação do consentimento. Pode reclamar junto da CNPD.</p>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-sm)', letterSpacing: 'var(--ls-mono)', color: 'var(--text-muted)',
        textTransform: 'uppercase', marginTop: '2.4rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-hairline)'
      }}>Última atualização · 28/05/2026 · Diernus, Lda.</p>
    </main>
  );
}
Object.assign(window, { LegalPage });
