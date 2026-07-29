import React from 'react';

export function Eyebrow({ tone = 'accent', children, style, ...rest }) {
  const colors = { accent: 'var(--text-accent)', stamp: 'var(--accent-stamp)', muted: 'var(--text-muted)', ink: 'var(--hud-line)' };
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono)', letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase', color: colors[tone] || colors.accent, margin: 0,
      ...style
    }} {...rest}>{children}</p>
  );
}
