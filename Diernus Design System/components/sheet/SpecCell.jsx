import React from 'react';

export function SpecCell({ value, unit, label, style, ...rest }) {
  return (
    <div style={{ background: 'var(--surface-page)', padding: '1.4rem 1.2rem', ...style }} {...rest}>
      <output style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 'var(--w-black)', fontSize: 'var(--t-stat)', lineHeight: 1 }}>
        {value}
        {unit && <sub style={{ fontFamily: 'var(--font-mono)', fontSize: '.32em', fontWeight: 400, verticalAlign: 'baseline', letterSpacing: '.05em', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{unit}</sub>}
      </output>
      <label style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-sm)', letterSpacing: 'var(--ls-mono)', color: 'var(--text-muted)', display: 'block', marginTop: '.5rem', textTransform: 'uppercase' }}>{label}</label>
    </div>
  );
}
