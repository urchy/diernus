import React from 'react';

export function Field({ label, id, required, type = 'text', rows, error, placeholder, tone = 'blueprint', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = rows ? 'textarea' : 'input';
  const inverse = tone === 'blueprint';
  const border = error ? 'var(--amber)' : (focus ? 'var(--action-primary)' : (inverse ? 'var(--border-inverse)' : 'var(--border-rule)'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem', marginBottom: '1.1rem', ...style }}>
      <label htmlFor={id} style={{
        fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
        display: 'flex', alignItems: 'center', gap: '.4rem'
      }}>
        {label}{required && <span aria-hidden="true" style={{ color: 'var(--amber)', fontSize: '1rem', lineHeight: 1 }}>*</span>}
      </label>
      <Tag id={id} type={rows ? undefined : type} rows={rows} required={required} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        aria-invalid={error ? 'true' : undefined}
        style={{
          fontFamily: 'var(--font-body)', fontSize: '1.05rem', padding: '.75rem .9rem',
          background: inverse ? (focus ? 'rgba(0,0,0,.32)' : 'rgba(0,0,0,.22)') : 'var(--surface-card)',
          border: '1px solid ' + border, borderBottom: '2px solid ' + (focus || error ? border : 'transparent'),
          borderRadius: 'var(--radius-sm)', color: inverse ? 'var(--text-inverse)' : 'var(--text-body)',
          transition: 'border-color .2s, background .2s', width: '100%', resize: 'vertical', lineHeight: 1.5, outline: 'none'
        }} {...rest} />
      {error && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-xs)', letterSpacing: 'var(--ls-chip)', color: 'var(--amber)', margin: '.15rem 0 0' }}>{error}</p>}
    </div>
  );
}
