import React from 'react';

export function Stamp({ label = 'R3 · VALIDADO', sub, rotate = -8, style, ...rest }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-mono)', letterSpacing: 'var(--ls-label)',
      color: 'var(--accent-stamp)', border: '3px solid var(--accent-stamp)',
      borderRadius: 'var(--radius-stamp)', padding: '.5rem 1rem', textAlign: 'center',
      fontSize: '1.05rem', background: 'rgba(179,35,46,.06)',
      transform: 'rotate(' + rotate + 'deg)', pointerEvents: 'none', ...style
    }} {...rest}>
      {label}
      {sub && <small style={{ display: 'block', fontSize: '.6em', letterSpacing: '.3em', marginTop: '.15rem' }}>{sub}</small>}
    </span>
  );
}
