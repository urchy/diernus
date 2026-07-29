import React from 'react';

const textures = {
  burl: 'radial-gradient(90px 60px at 20% 30%,rgba(255,205,140,.28),transparent 60%),radial-gradient(140px 90px at 75% 70%,rgba(30,12,2,.5),transparent 65%),radial-gradient(60px 44px at 60% 25%,rgba(255,190,120,.22),transparent 60%),radial-gradient(100px 70px at 35% 80%,rgba(20,8,0,.42),transparent 60%),linear-gradient(120deg,#6b4220,#4a2c12 55%,#5c3a1c)',
  velvet: 'radial-gradient(220px 120px at 30% 0%,rgba(255,255,255,.14),transparent 60%),linear-gradient(160deg,#3d5578,#22304a 70%)',
  stripe: 'repeating-linear-gradient(90deg,#5c7699 0 7px,#33445e 7px 14px,#8fa6c4 14px 16px,#33445e 16px 23px)'
};

export function MaterialCard({ code, name, texture = 'burl', supplierRef, children, style, ...rest }) {
  return (
    <article style={{
      border: '1px solid var(--border-rule)', background: 'var(--surface-page)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column', ...style
    }} {...rest}>
      <div style={{ height: 150, position: 'relative', background: textures[texture] || texture, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)' }} />
      <div style={{ padding: '1.1rem 1.2rem 1.3rem', display: 'flex', flexDirection: 'column', gap: '.4rem', flex: 1 }}>
        {code && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--t-mono-sm)', letterSpacing: 'var(--ls-chip)', color: 'var(--accent-stamp)' }}>{code}</span>}
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--w-bold)', fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '.02em' }}>{name}</h3>
        <p style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}>{children}</p>
        {supplierRef && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', letterSpacing: '.08em', color: 'var(--text-muted)', marginTop: 'auto', paddingTop: '.6rem', borderTop: '1px dashed var(--border-rule)' }}>{supplierRef}</span>}
      </div>
    </article>
  );
}
