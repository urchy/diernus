import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function SectionHead({ kicker, title, lede, tone = 'bone', style, ...rest }) {
  const inverse = tone === 'blueprint';
  return (
    <header style={style} {...rest}>
      {kicker && <Eyebrow tone={inverse ? 'ink' : 'accent'} style={{ marginBottom: '.8rem' }}>{kicker}</Eyebrow>}
      {title && <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--w-heavy)', fontSize: 'var(--t-h2)',
        lineHeight: 'var(--lh-display)', textTransform: 'uppercase', maxWidth: 'var(--measure-heading)',
        color: inverse ? 'var(--text-inverse)' : 'var(--text-body)', margin: 0
      }}>{title}</h2>}
      {lede && <p style={{
        maxWidth: 'var(--measure-lede)', marginTop: '1.2rem', fontSize: 'var(--t-lede)',
        fontStyle: 'italic', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)'
      }}>{lede}</p>}
    </header>
  );
}
