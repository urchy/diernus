import React from 'react';

export function FormFeedback({ tone = 'success', action, onAction, children, style, ...rest }) {
  const ok = tone === 'success';
  return (
    <div role="status" aria-live="polite" style={{
      marginTop: '1.4rem', padding: '1rem 1.1rem', borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--t-sm)', lineHeight: 1.5,
      background: ok ? 'rgba(44,73,199,.14)' : 'rgba(230,150,88,.12)',
      border: '1px solid ' + (ok ? 'rgba(44,73,199,.4)' : 'rgba(230,150,88,.4)'),
      color: ok ? '#9DB1E5' : 'var(--amber)', ...style
    }} {...rest}>
      {children}
      {action && <button onClick={onAction} style={{
        display: 'block', fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: 'var(--ls-chip)',
        textTransform: 'uppercase', background: 'transparent', border: '1px solid currentColor',
        color: 'inherit', padding: '.4rem .85rem', borderRadius: 'var(--radius-pill)', cursor: 'pointer', marginTop: '.6rem'
      }}>{action}</button>}
    </div>
  );
}
