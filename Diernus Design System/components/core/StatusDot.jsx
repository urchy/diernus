import React from 'react';

export function StatusDot({ children, tone = 'amber', style, ...rest }) {
  const c = tone === 'amber' ? 'var(--amber)' : 'var(--action-primary)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '.6rem',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono)', letterSpacing: 'var(--ls-label)',
      color: 'var(--text-inverse-muted)', ...style
    }} {...rest}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: c, boxShadow: '0 0 0 3px ' + (tone === 'amber' ? 'rgba(230,150,88,.25)' : 'rgba(44,73,199,.25)'), flex: 'none' }} />
      {children}
    </span>
  );
}
