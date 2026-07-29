import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem',
  fontFamily: 'var(--font-mono)', textTransform: 'uppercase', textDecoration: 'none',
  letterSpacing: 'var(--ls-chip)', borderRadius: 'var(--radius-pill)',
  cursor: 'pointer', whiteSpace: 'nowrap',
  transition: 'transform var(--dur-hover) var(--ease-standard), background var(--dur-hover) var(--ease-standard), color var(--dur-hover) var(--ease-standard), border-color var(--dur-hover) var(--ease-standard)'
};

const sizes = {
  sm: { fontSize: 'var(--t-mono-sm)', padding: '.42rem .85rem' },
  md: { fontSize: '.78rem', padding: '.95rem 1.7rem' }
};

const variants = {
  primary: { background: 'var(--action-primary)', color: 'var(--action-primary-text)', border: '1px solid var(--action-primary)', boxShadow: 'var(--shadow-blue)' },
  ghost:   { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-rule)' },
  bar:     { background: 'var(--action-primary)', color: '#fff', border: '1px solid var(--action-primary)' }
};

export function Button({ variant = 'primary', size = 'md', as, href, disabled, children, style, ...rest }) {
  const Tag = as || (href ? 'a' : 'button');
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hoverStyle = !disabled && hover
    ? (variant === 'ghost' ? { borderColor: 'var(--border-strong)' } : { background: 'var(--action-primary-hover)', borderColor: 'var(--action-primary-hover)' })
    : null;
  return (
    <Tag
      href={href} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        ...base, ...sizes[size], ...v, ...hoverStyle,
        transform: press ? 'translateY(0)' : (hover && !disabled ? 'translateY(var(--lift-hover))' : 'none'),
        opacity: disabled ? .45 : 1, pointerEvents: disabled ? 'none' : undefined,
        ...style
      }}
      {...rest}
    >{children}</Tag>
  );
}
