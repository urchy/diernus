import React from 'react';

export function NoteCard({ kicker, title, children, style, ...rest }) {
  return (
    <article style={{
      border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
      padding: '1.2rem 1.3rem 1.4rem', background: 'var(--surface-page)', position: 'relative', ...style
    }} {...rest}>
      {kicker && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', letterSpacing: 'var(--ls-label)', color: 'var(--accent-stamp)', marginBottom: '.6rem' }}>{kicker}</p>}
      {title && <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--w-bold)', fontSize: 'var(--t-card-title)', lineHeight: 'var(--lh-tight)', textTransform: 'uppercase', marginBottom: '.5rem' }}>{title}</h3>}
      <div style={{ fontSize: '.98rem', color: 'var(--text-muted)' }}>{children}</div>
    </article>
  );
}
