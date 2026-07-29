import React from 'react';

export function SketchCard({ src, alt, title, index, tape = 'rgba(217,142,74,.55)', rotate = -1.2, crop = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', margin: 0, background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        boxShadow: hover ? 'var(--shadow-paper-hover)' : 'var(--shadow-paper)',
        padding: '.7rem .7rem 3rem',
        transform: hover ? 'translate3d(0,-8px,0) rotate(0deg) scale(1.015)' : 'rotate(' + rotate + 'deg)',
        transition: 'box-shadow var(--dur-swap), transform var(--dur-swap)',
        zIndex: hover ? 2 : undefined, ...style
      }} {...rest}>
      <span aria-hidden="true" style={{
        position: 'absolute', top: -13, left: '50%', width: 120, height: 28,
        transform: 'translateX(-50%) rotate(-2deg)', background: tape,
        boxShadow: '0 1px 3px rgba(35,33,28,.18)'
      }} />
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: crop ? '3/2' : undefined, objectFit: crop ? 'cover' : undefined, objectPosition: '50% 100%' }} />
      <figcaption style={{
        position: 'absolute', left: '1rem', right: '1rem', bottom: '.9rem',
        display: 'flex', justifyContent: 'space-between', gap: '.6rem',
        fontFamily: 'var(--font-mono)', fontSize: '.64rem', letterSpacing: 'var(--ls-chip)', color: 'var(--text-muted)'
      }}>
        <b style={{ color: 'var(--text-body)', fontWeight: 500 }}>{title}</b>
        {index && <span>{index}</span>}
      </figcaption>
    </figure>
  );
}
