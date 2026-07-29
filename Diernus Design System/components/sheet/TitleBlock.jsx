import React from 'react';

export function TitleBlock({ items = [], style, ...rest }) {
  return (
    <dl style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + Math.max(items.length, 1) + ',1fr)',
      borderTop: '1px solid var(--border-rule)', borderBottom: '1px solid var(--border-rule)',
      margin: 0, ...style
    }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: '.7rem 1rem', borderRight: i === items.length - 1 ? 0 : '1px solid var(--border-hairline)' }}>
          <dt style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</dt>
          <dd style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', letterSpacing: 'var(--ls-chip)', textTransform: 'uppercase', margin: '.15rem 0 0' }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
