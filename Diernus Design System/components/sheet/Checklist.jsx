import React from 'react';

export function Checklist({ items = [], tone = 'blueprint', style, ...rest }) {
  const inverse = tone === 'blueprint';
  return (
    <ul style={{
      listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '.55rem',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-sm)', letterSpacing: 'var(--ls-chip)', ...style
    }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '.55rem', color: it.done ? (inverse ? 'var(--text-inverse)' : 'var(--text-body)') : (inverse ? 'var(--ink-35)' : 'var(--graphite-35)'), transition: 'color .3s' }}>
          <i style={{
            width: '.9rem', height: '.9rem', borderRadius: 'var(--radius-xs)', display: 'grid', placeItems: 'center',
            fontStyle: 'normal', fontSize: '.6rem', lineHeight: 1, flex: 'none',
            border: '1px solid ' + (it.done ? 'var(--action-primary)' : (inverse ? 'var(--ink-35)' : 'var(--graphite-35)')),
            background: it.done ? 'var(--action-primary)' : 'transparent', color: '#fff'
          }}>{it.done ? '✓' : ''}</i>
          {it.label}
        </li>
      ))}
    </ul>
  );
}
