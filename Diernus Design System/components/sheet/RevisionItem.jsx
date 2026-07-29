import React from 'react';

export function RevisionItem({ rev, date, status, children, latest = false, style, ...rest }) {
  return (
    <div style={{ background: 'var(--surface-inverse)', padding: '1.3rem 1.2rem 1.5rem', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '1.6rem',
        color: latest ? '#fff' : 'var(--hud-line)',
        background: latest ? 'var(--accent-stamp)' : 'transparent',
        display: 'inline-block', padding: latest ? '0 .4em' : 0, borderRadius: latest ? '.2em' : 0
      }}>{rev}</span>
      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-sm)', letterSpacing: 'var(--ls-chip)', color: 'var(--text-inverse-muted)', margin: '.3rem 0 .7rem' }}>
        {date} · {status}
      </span>
      <p style={{ fontSize: 'var(--t-sm)', color: 'var(--text-inverse-muted)', margin: 0 }}>{children}</p>
    </div>
  );
}
