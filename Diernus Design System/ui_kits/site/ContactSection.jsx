const { SectionHead, HandNote, TrustList, StatusDot, Field, SubmitButton, FormFeedback } = window.DiernusDesignSystem_ebdb11;

function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(null);

  function submit(e) {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) { setErr('INDICA UM EMAIL VÁLIDO'); return; }
    setErr(null); setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  }

  return (
    <section style={{ position: 'relative', background: 'var(--surface-inverse-deep)', color: 'var(--text-inverse)', padding: 'var(--section-y) var(--pad)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '80%', pointerEvents: 'none', background: 'radial-gradient(closest-side,rgba(230,150,88,.22),transparent 70%)' }} />
      <div style={{ position: 'absolute', left: '-10%', bottom: '-30%', width: '50%', height: '70%', pointerEvents: 'none', background: 'radial-gradient(closest-side,rgba(44,73,199,.18),transparent 72%)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 'clamp(2.5rem,6vw,5rem)', alignItems: 'start', position: 'relative', zIndex: 1 }}>
        <div>
          <HandNote style={{ marginBottom: '.8rem' }}>olá, vamos falar</HandNote>
          <SectionHead tone="blueprint" kicker="CONTACTO · RESPOSTA EM 24H ÚTEIS" title="Vamos falar do teu próximo projeto."
            lede="Escreve-nos o que tens em mente — uma peça, um espaço, um caderno de encargos. Respondemos directamente para o teu email." />
          <TrustList style={{ marginTop: '2rem' }} items={[
            'Resposta em 24h úteis', 'Orçamento gratuito, sem compromisso',
            'NDA disponível, se precisares', 'Conversas em PT · EN'
          ]} />
          <StatusDot style={{ marginTop: '1.8rem' }}>Lemos tudo · respondemos por email</StatusDot>
        </div>
        <div>
          <form onSubmit={submit} style={{
            background: 'color-mix(in srgb,var(--ink) 4%,transparent)', border: '1px solid var(--border-inverse)',
            borderRadius: 'var(--radius-lg)', padding: 'clamp(1.6rem,3vw,2.4rem)',
            backdropFilter: 'var(--blur-panel)', boxShadow: 'var(--shadow-panel-inverse)'
          }}>
            {!sent && <React.Fragment>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--w-heavy)', fontSize: '1.6rem', textTransform: 'uppercase', margin: '0 0 .35rem' }}>Enviar mensagem</h3>
              <p style={{ fontSize: 'var(--t-sm)', fontStyle: 'italic', color: 'var(--text-inverse-muted)', margin: '0 0 1.6rem' }}>Três campos. Sem linha de assunto, sem número de cliente.</p>
              <Field id="cf-name" label="Nome" placeholder="Como te chamamos?" />
              <Field id="cf-email" label="Email" type="email" required placeholder="nome@empresa.pt" error={err}
                value={email} onChange={e => setEmail(e.target.value)} />
              <Field id="cf-msg" label="Mensagem" rows={5} required placeholder="Conta-nos o que precisas…" />
              <SubmitButton loading={loading}>Enviar mensagem →</SubmitButton>
              <p style={{ marginTop: '1.1rem', fontSize: '.78rem', color: 'var(--text-inverse-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>
                Ao enviar, concordas com a nossa política de privacidade. Não partilhamos os teus dados.
              </p>
            </React.Fragment>}
            {sent && <FormFeedback tone="success" action="ENVIAR OUTRA" onAction={() => { setSent(false); setEmail(''); }} style={{ marginTop: 0 }}>
              <b>Obrigado.</b> Recebemos a tua mensagem e respondemos dentro de 24h úteis.
            </FormFeedback>}
          </form>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ContactSection });
