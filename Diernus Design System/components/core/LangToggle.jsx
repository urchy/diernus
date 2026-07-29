import React from 'react';

export function LangToggle({ value = 'pt', options = ['pt', 'en'], onChange, tone = 'graphite', style, ...rest }) {
  const inverse = tone === 'ink';
  return (
    <div role="group" aria-label="Idioma / Language" style={{
      display: 'flex', border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-rule)'),
      borderRadius: 'var(--radius-pill)', overflow: 'hidden', ...style
    }} {...rest}>
      {options.map(o => {
        const on = o === value;
        return (
          <button key={o} type="button" aria-pressed={on} onClick={() => onChange && onChange(o)} style={{
            fontFamily: 'var(--font-mono)', fontSize: '.68rem', letterSpacing: '.08em',
            textTransform: 'uppercase', padding: '.3rem .65rem', border: 0, cursor: 'pointer',
            background: on ? (inverse ? 'var(--ink)' : 'var(--graphite)') : 'transparent',
            color: on ? (inverse ? 'var(--blueprint-2)' : 'var(--bone)') : (inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)')
          }}>{o}</button>
        );
      })}
    </div>
  );
}
