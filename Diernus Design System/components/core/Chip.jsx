import React from 'react';

export function Chip({ href, tone = 'default', children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'span';
  const toneColor = tone === 'stamp' ? 'var(--accent-stamp)' : (tone === 'accent' ? 'var(--text-accent)' : null);
  return (
    <Tag href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-mono)', fontSize: '.7rem', letterSpacing: 'var(--ls-chip)',
        textTransform: 'uppercase', textDecoration: 'none',
        padding: '.35rem .7rem', borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (toneColor || 'var(--border-rule)'),
        color: toneColor || (href && hover ? 'var(--text-body)' : 'inherit'),
        background: 'var(--surface-page)',
        borderColor: href && hover && !toneColor ? 'var(--border-strong)' : (toneColor || 'var(--border-rule)'),
        transition: 'border-color var(--dur-control), color var(--dur-control)',
        ...style
      }} {...rest}>{children}</Tag>
  );
}
