import React from 'react';

export function TrustList({ items = [], tone = 'blueprint', style, ...rest }) {
  const inverse = tone === 'blueprint';
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.7rem', margin: 0, padding: 0, ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{ position: 'relative', paddingLeft: '1.4rem', fontSize: '1.02rem', lineHeight: 1.5, color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)' }}>
          <span style={{ position: 'absolute', left: 0, top: '.62em', width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)', boxShadow: '0 0 0 3px rgba(230,150,88,.18)' }} />
          {it}
        </li>
      ))}
    </ul>
  );
}
