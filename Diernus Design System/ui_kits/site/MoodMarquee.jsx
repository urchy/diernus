const { MoodFigure } = window.DiernusDesignSystem_ebdb11;

const MOODS = [
  ['mood-sala-1.jpg', 'SALA DE ESTAR · I', 'var(--amber)', -0.5],
  ['mood-quarto-1.jpg', 'QUARTO PRINCIPAL · I', 'var(--cobalt)', 0.6],
  ['mood-escritorio-1.jpg', 'ESCRITÓRIO · I', 'var(--cobalt)', -0.4],
  ['mood-quarto-2.jpg', 'QUARTO PRINCIPAL · II', 'var(--cobalt)', 0.5],
  ['mood-crianca.jpg', 'QUARTO DE CRIANÇA', 'var(--stamp)', -0.6],
  ['mood-sala-2.jpg', 'SALA DE ESTAR · II', 'var(--amber)', 0.4],
  ['mood-escritorio-2.jpg', 'ESCRITÓRIO · II', 'var(--cobalt)', -0.5],
  ['mood-escritorio-3.jpg', 'ESCRITÓRIO · III', 'var(--cobalt)', 0.5]
];

function MoodMarquee() {
  return (
    <section style={{ background: 'var(--surface-page-alt)', padding: '1.5rem 0 clamp(4.5rem,9vw,7rem)', overflow: 'hidden' }}>
      <style>{'@keyframes drn-mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}'}</style>
      {[0, 1].map(row => (
        <div key={row} style={{ overflow: 'hidden', padding: '1.1rem 0' }}>
          <div style={{
            display: 'flex', gap: 'clamp(1rem,2vw,1.6rem)', width: 'max-content',
            animation: 'drn-mq ' + (row ? 72 : 58) + 's linear infinite',
            animationDirection: row ? 'reverse' : 'normal'
          }}>
            {[...MOODS, ...MOODS].map(([file, cap, dot, rot], i) => (
              <MoodFigure key={row + '-' + i} src={'../../assets/' + file} alt={cap} caption={cap} dot={dot} rotate={rot} />
            ))}
          </div>
        </div>
      ))}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.6rem 1.4rem',
        margin: 'clamp(2.2rem,5vw,3.5rem) var(--pad) 0', paddingTop: '1.2rem', borderTop: '1px solid var(--border-hairline)'
      }}>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>O teu espaço podia estar neste carrossel.</p>
      </div>
    </section>
  );
}
Object.assign(window, { MoodMarquee });
