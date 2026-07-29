import React from 'react';

export function MoodFigure({ src, alt, caption, dot = 'var(--action-primary)', rotate = -0.5, height = 'clamp(220px,30vw,330px)', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', margin: 0, height, flex: 'none',
        border: '1px solid var(--border-hairline)', background: 'var(--surface-card)',
        padding: '.45rem .45rem 2.2rem', boxShadow: 'var(--shadow-paper-sm)',
        transform: hover ? 'rotate(0deg) scale(1.04)' : 'rotate(' + rotate + 'deg)',
        transition: 'transform var(--dur-swap)', zIndex: hover ? 2 : undefined, ...style
      }} {...rest}>
      <img src={src} alt={alt} style={{ height: '100%', width: 'auto', display: 'block' }} />
      <figcaption style={{
        position: 'absolute', left: '.75rem', bottom: '.65rem',
        fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: 'var(--ls-chip)',
        color: 'var(--text-muted)', whiteSpace: 'nowrap'
      }}>
        <i style={{ display: 'inline-block', width: '.55rem', height: '.55rem', borderRadius: '50%', background: dot, marginRight: '.45rem', verticalAlign: 'middle' }} />
        {caption}
      </figcaption>
    </figure>
  );
}
