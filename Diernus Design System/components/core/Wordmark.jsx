import React from 'react';

export function Wordmark({ href = '#top', size = '.8rem', tone = 'graphite', accent = true, style, ...rest }) {
  return (
    <a href={href} style={{
      fontFamily: 'var(--font-mono)', fontSize: size, letterSpacing: 'var(--ls-wordmark)',
      textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
      color: tone === 'ink' ? 'var(--text-inverse)' : 'var(--text-body)',
      ...style
    }} {...rest}>
      {accent ? <b style={{ fontWeight: 500, color: tone === 'ink' ? 'var(--amber)' : 'var(--text-accent)' }}>DIERNUS</b> : 'DIERNUS'}
    </a>
  );
}
