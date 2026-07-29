const { SectionHead, SpecGrid, SpecCell, MaterialCard, NoteCard, RevisionItem, TitleBlock, Checklist, Stamp } = window.DiernusDesignSystem_ebdb11;

function ChairDrawing() {
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '.9rem', width: 'min(100%,360px)', justifySelf: 'end' }}>
      <header style={{
        display: 'flex', justifyContent: 'space-between', gap: '1rem',
        fontFamily: 'var(--font-mono)', fontSize: '.58rem', letterSpacing: 'var(--ls-mono)', color: 'var(--text-muted)'
      }}>
        <span><b style={{ color: 'var(--text-accent)', fontWeight: 600, letterSpacing: 'var(--ls-label)' }}>L-CH-01</b> · CADEIRA</span>
        <span>FOLHA DE DETALHE · ESC 1:5</span>
      </header>
      <svg viewBox="0 0 560 660" style={{ width: '100%', overflow: 'visible' }} role="img" aria-label="Desenho técnico de uma cadeira">
        <g fill="none" stroke="var(--graphite)" strokeLinecap="round" strokeLinejoin="round">
          <line x1="280" y1="24" x2="280" y2="636" strokeWidth="1" strokeDasharray="6 8" opacity=".5" />
          <rect x="180" y="36" width="200" height="64" rx="10" strokeWidth="2" />
          <g strokeWidth="1" opacity=".55"><line x1="230" y1="52" x2="230" y2="84" /><line x1="280" y1="52" x2="280" y2="84" /><line x1="330" y1="52" x2="330" y2="84" /></g>
          <rect x="170" y="130" width="18" height="120" rx="4" strokeWidth="2" />
          <rect x="372" y="130" width="18" height="120" rx="4" strokeWidth="2" />
          <rect x="174" y="116" width="10" height="14" strokeWidth="1" />
          <rect x="376" y="116" width="10" height="14" strokeWidth="1" />
          <rect x="150" y="286" width="260" height="20" rx="5" strokeWidth="2" />
          <circle cx="200" cy="336" r="6" strokeWidth="2" /><circle cx="360" cy="336" r="6" strokeWidth="2" />
          <rect x="168" y="362" width="224" height="28" rx="4" strokeWidth="2" />
          <path d="M176 418 L196 418 L190 598 L181 598 Z" strokeWidth="2" />
          <path d="M364 418 L384 418 L379 598 L370 598 Z" strokeWidth="2" />
          <g strokeWidth="1" strokeDasharray="6 8" opacity=".5"><line x1="216" y1="418" x2="212" y2="598" /><line x1="344" y1="418" x2="340" y2="598" /></g>
          <rect x="196" y="512" width="168" height="12" rx="3" strokeWidth="1" />
          <line x1="120" y1="606" x2="460" y2="606" strokeWidth="1" />
          <g strokeWidth="1" opacity=".5">
            {[150, 205, 260, 315, 370, 425].map(x => <line key={x} x1={x} y1="618" x2={x + 12} y2="606" />)}
          </g>
        </g>
        <g fill="none" stroke="var(--cobalt)" strokeWidth="1.2" opacity=".9">
          <line x1="486" y1="36" x2="486" y2="598" />
          <line x1="481" y1="41" x2="491" y2="31" /><line x1="481" y1="603" x2="491" y2="593" />
          <line x1="150" y1="634" x2="410" y2="634" />
          <line x1="145" y1="639" x2="155" y2="629" /><line x1="405" y1="639" x2="415" y2="629" />
        </g>
        <g fontFamily="var(--font-mono)" fontSize="13" letterSpacing="1.5">
          <text transform="translate(508 340) rotate(-90)" textAnchor="middle" fill="var(--cobalt)">820 MM</text>
          <text x="280" y="656" textAnchor="middle" fill="var(--cobalt)">440 MM</text>
          <text x="24" y="72" fill="var(--graphite)">01 · ENCOSTO</text>
          <text x="24" y="300" fill="var(--graphite)">02 · ASSENTO</text>
          <text x="24" y="340" fill="var(--graphite)">CAVILHA Ø8</text>
          <text x="24" y="380" fill="var(--graphite)">03 · SAIA</text>
          <text x="24" y="470" fill="var(--graphite)">04 · PERNA</text>
        </g>
        <g stroke="var(--graphite)" strokeWidth="1" opacity=".5">
          <line x1="136" y1="68" x2="176" y2="68" /><line x1="134" y1="296" x2="146" y2="296" />
          <line x1="122" y1="336" x2="190" y2="336" /><line x1="98" y1="376" x2="164" y2="376" />
          <line x1="110" y1="466" x2="176" y2="466" />
        </g>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem' }}>
        <div style={{ display: 'flex', border: '1px solid var(--border-rule)', borderRadius: 'var(--radius-pill)', overflow: 'hidden', background: 'var(--bone)' }}>
          {['DESENHO 2D', 'MODELO 3D'].map((l, i) => (
            <button key={l} aria-pressed={i === 0} style={{
              fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase',
              padding: '.38rem .75rem', border: 0, cursor: 'pointer',
              background: i === 0 ? 'var(--graphite)' : 'transparent', color: i === 0 ? 'var(--bone)' : 'var(--text-muted)'
            }}>{l}</button>
          ))}
        </div>
      </div>
    </figure>
  );
}

function TechnicalSheet() {
  const sy = { padding: 'var(--section-y) var(--pad)' };
  return (
    <React.Fragment>
      <section style={{ ...sy, background: 'var(--surface-page)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(2rem,4vw,3.5rem)', alignItems: 'center' }}>
        <div>
          <SectionHead kicker="CAPÍTULO 03" title="A folha decide"
            lede="Cotas, materiais e notas de produção num desenho que a oficina lê à primeira." />
          <TitleBlock style={{ marginTop: '2.2rem' }} items={[
            { label: 'Folha', value: 'L-CH-01' }, { label: 'Escala', value: '1:5' },
            { label: 'Revisão', value: 'R3' }, { label: 'Data', value: '28/05/2026' }
          ]} />
        </div>
        <ChairDrawing />
      </section>

      <section style={{ ...sy, background: 'var(--surface-page)' }}>
        <SectionHead kicker="FICHA TÉCNICA" title="Desenhado ao milímetro, pesado ao quilo"
          lede="Tudo o que a oficina precisa está na folha — dimensões, pesos, quantidades, tolerâncias. Nada fica por dizer." />
        <SpecGrid columns={6} style={{ marginTop: '2.6rem' }}>
          <SpecCell value={2032} unit="MM" label="Comprimento" />
          <SpecCell value={762} unit="MM" label="Profundidade" />
          <SpecCell value={762} unit="MM" label="Altura" />
          <SpecCell value={254} unit="MM Ø" label="Rolos" />
          <SpecCell value={204} unit="MM" label="Almofada" />
          <SpecCell value={90} unit="KG" label="Peso" />
        </SpecGrid>
      </section>

      <section style={{ ...sy, background: 'var(--surface-page-alt)' }}>
        <SectionHead kicker="LISTA DE MATERIAIS" title="Três materiais, zero ambiguidade"
          lede="Referências reais de fornecedor, direção de risca, brilho do verniz — especificado uma vez, cumprido sempre." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(270px,100%),1fr))', gap: '1.2rem', marginTop: '2.6rem' }}>
          <MaterialCard code="A1 · WDF-05" name="Mapa Burl" texture="burl" supplierRef="AMOSTRA DE CONTROLO DO DESIGNER">
            Folheado de raiz tingido escuro, verniz mate 15%. Aplicado só depois da montagem — juntas invisíveis na peça final.
          </MaterialCard>
          <MaterialCard code="A2 · FBF-24" name="Zak+Fox · Bayan" texture="velvet" supplierRef="REF. ZFBY-10 (BLUE-10)">
            Veludo azul da almofada de assento fixa. Costuras expostas com ponto invisível, linhas a condizer.
          </MaterialCard>
          <MaterialCard code="A3 · FBF-20" name="Clarence House · New Kenya" texture="stripe" supplierRef="REF. 56792-09 (BLUES)">
            Risca dos rolos com vivo no mesmo tecido e botão forrado com efeito capitonê.
          </MaterialCard>
        </div>
      </section>

      <section style={{ ...sy, background: 'var(--surface-page)' }}>
        <SectionHead kicker="NOTAS DE PRODUÇÃO" title="O que a oficina lê antes de cortar"
          lede="Uma boa folha responde às perguntas antes de elas chegarem ao telefone." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '1.2rem', marginTop: '2.6rem' }}>
          <NoteCard kicker="NOTA · MONTAGEM" title="Folheado após montagem">
            O folheado burl é aplicado apenas depois dos 4 módulos montados, garantindo a ausência de juntas visíveis.
          </NoteCard>
          <NoteCard kicker="NOTA · CONFORTO" title="Assento sem molas">
            Almofada fixa com aro de madeira e pressintas elásticas. Espuma de alta densidade coberta por espuma macia, dacron e penas.
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 3, fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-xs)', letterSpacing: '.06em' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}><i style={{ width: 110, height: 16, borderRadius: 2, background: 'var(--foam-down)', flex: 'none' }} />PENAS / PLUMAS</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}><i style={{ width: 150, height: 16, borderRadius: 2, background: 'var(--foam-mid)', flex: 'none' }} />CMHR 25–30 KG/M³ + DACRON</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}><i style={{ width: 190, height: 16, borderRadius: 2, background: 'var(--foam-core)', flex: 'none' }} />CMHR 40–45 KG/M³</div>
            </div>
          </NoteCard>
          <NoteCard kicker="NOTA · FIXAÇÃO" title="Rolos que não fogem">
            Os rolos Ø254 fixam-se aos braços com velcro para evitar deslocamento.
          </NoteCard>
          <NoteCard kicker="NOTA · OBRA" title="Detalhes que não se veem">
            Forro preto no fundo, pés niveladores transparentes reguláveis, estrutura reforçada em madeira.
          </NoteCard>
        </div>
      </section>

      <section style={{ ...sy, background: 'var(--surface-inverse)', position: 'relative' }}>
        <SectionHead tone="blueprint" kicker="CONTROLO DE REVISÕES" title="Três revisões, zero adivinhas"
          lede="Cada pedido do cliente fica registado na folha. A oficina constrói a última palavra — não a memória de uma reunião." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border-inverse)', border: '1px solid var(--border-inverse)', marginTop: '2.6rem' }}>
          <RevisionItem rev="R1" date="29/04/2026" status="PEDIDO CLIENTE">Primeira emissão da folha: geometria, módulos e intenção de materiais.</RevisionItem>
          <RevisionItem rev="R2" date="07/05/2026" status="PEDIDO CLIENTE">Afinação de estofos e notas de conforto — espumas, pressintas, suporte do assento.</RevisionItem>
          <RevisionItem rev="R3" date="28/05/2026" status="VALIDADA" latest>Folha validada para produção: 7 páginas, bilingue PT/EN, pronta para a oficina.</RevisionItem>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginTop: '2.6rem', flexWrap: 'wrap' }}>
          <Checklist items={[
            { label: 'MOD-01', done: true }, { label: 'MOD-02', done: true }, { label: 'MOD-03', done: true },
            { label: 'MOD-04', done: true }, { label: 'ESTOFO', done: true }, { label: 'ACABAMENTO' }
          ]} style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '.5rem 1.4rem' }} />
          <Stamp label="R3 · VALIDADO" sub="28/05/2026 · DIERNUS" />
        </div>
      </section>
    </React.Fragment>
  );
}
Object.assign(window, { TechnicalSheet, ChairDrawing });
